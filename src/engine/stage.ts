import {
  ACESFilmicToneMapping,
  Color,
  HalfFloatType,
  Mesh,
  PerspectiveCamera,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  SRGBColorSpace,
  Vector2,
  WebGLRenderer,
  WebGLRenderTarget,
} from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { findEffect } from '../effects/registry'
import type { EffectInstance, EffectModule, ParamValues } from './types'
import type { QualityChoice, ResolvedQuality } from './quality'
import { resolveQuality } from './quality'
import { Disposer } from './dispose'
import { createSpriteTexture } from './textures'
import { compileShaderPair, prepareShaderLab } from './shaderLab'

export interface StageSnapshot {
  effectId: string | null
  ready: boolean
  loading: boolean
  errors: string[]
  fps: number | null
  quality: ResolvedQuality | null
}

export interface StageHost {
  canvas: HTMLCanvasElement
  getEffectId: () => string
  getValues: () => ParamValues
  getQuality: () => QualityChoice
  getPlaying: () => boolean
  getReducedMotion: () => boolean
  getSeek: () => number | null
  onSnapshot: (snapshot: StageSnapshot) => void
}

const vignetteShader = {
  name: 'VignetteGrain',
  uniforms: {
    tDiffuse: { value: null },
    uGrain: { value: 0.012 },
    uTime: { value: 0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uGrain;
    uniform float uTime;
    varying vec2 vUv;
    void main() {
      vec3 color = texture2D(tDiffuse, vUv).rgb;
      float dist = distance(vUv, vec2(0.5));
      color *= mix(0.78, 1.0, smoothstep(0.95, 0.28, dist));
      float grain = fract(sin(dot(vUv * vec2(192.0, 91.0) + uTime, vec2(12.9898, 78.233))) * 43758.5453);
      color += (grain - 0.5) * uGrain;
      gl_FragColor = vec4(color, 1.0);
    }
  `,
}

export class StudioStage {
  private readonly host: StageHost
  private renderer: WebGLRenderer | null = null
  private composer: EffectComposer | null = null
  private bloom: UnrealBloomPass | null = null
  private vignette: ShaderPass | null = null
  private scene = new Scene()
  private camera = new PerspectiveCamera(42, 1, 0.08, 220)
  private sprite = createSpriteTexture()
  private disposer = new Disposer()
  private effect: EffectInstance | null = null
  private module: EffectModule | null = null
  private quality: ResolvedQuality | null = null
  private raf = 0
  private running = false
  private playing = true
  private time = 0
  private last = 0
  private fpsSamples: number[] = []
  private errors: string[] = []
  private ready = false
  private loading = false
  private token = 0
  private sandbox = false
  private visible = true
  private contextLost = false
  private observer: IntersectionObserver | null = null
  private onContextLost: (event: Event) => void
  private onContextRestored: () => void
  private onVisibility: () => void

  constructor(host: StageHost) {
    this.host = host
    this.onContextLost = (event) => {
      event.preventDefault()
      this.contextLost = true
      this.errors = ['WebGL 上下文已丢失。浏览器可能会在片刻后恢复。']
      this.emit()
    }
    this.onContextRestored = () => {
      this.contextLost = false
      this.errors = []
      void this.reload()
    }
    this.onVisibility = () => {
      if (document.visibilityState === 'hidden') this.stopLoop()
      else this.startLoop()
    }
  }

  mount(): void {
    const canvas = this.host.canvas
    let gl: WebGL2RenderingContext | null = null
    try {
      gl = canvas.getContext('webgl2', {
        alpha: false,
        antialias: false,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: true,
        stencil: false,
      })
    } catch {
      gl = null
    }
    if (!gl) {
      this.errors = ['这个环境没有可用的 WebGL2。实时效果无法启动。']
      this.emit()
      return
    }
    const renderer = new WebGLRenderer({
      canvas,
      context: gl,
      alpha: false,
      antialias: false,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: true,
    })
    renderer.outputColorSpace = SRGBColorSpace
    renderer.toneMapping = ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05
    renderer.setClearColor(new Color('#05060c'), 1)
    renderer.debug.checkShaderErrors = true
    renderer.debug.onShaderError = (context, _program, vertexShader, fragmentShader) => {
      const vertexLog = context.getShaderInfoLog(vertexShader) ?? ''
      const fragmentLog = context.getShaderInfoLog(fragmentShader) ?? ''
      const message = [vertexLog, fragmentLog].filter(Boolean).join('\n') || '着色器编译失败。'
      this.errors = [message]
      this.emit()
    }
    const composer = new EffectComposer(renderer, new WebGLRenderTarget(1, 1, { type: HalfFloatType }))
    composer.addPass(new RenderPass(this.scene, this.camera))
    const bloom = new UnrealBloomPass(new Vector2(1, 1), 0.5, 0.4, 0.82)
    composer.addPass(bloom)
    const vignette = new ShaderPass(vignetteShader)
    composer.addPass(vignette)
    composer.addPass(new OutputPass())
    this.renderer = renderer
    this.composer = composer
    this.bloom = bloom
    this.vignette = vignette
    canvas.addEventListener('webglcontextlost', this.onContextLost)
    canvas.addEventListener('webglcontextrestored', this.onContextRestored)
    document.addEventListener('visibilitychange', this.onVisibility)
    this.observer = new IntersectionObserver((entries) => {
      this.visible = entries.some((entry) => entry.isIntersecting)
      if (this.visible && this.playing) this.startLoop()
      else if (!this.visible) this.stopLoop()
    })
    this.observer.observe(canvas)
    this.resize()
    void this.reload()
    this.installDebug()
  }

  resize(): void {
    const renderer = this.renderer
    const composer = this.composer
    if (!renderer || !composer) return
    const canvas = this.host.canvas
    const width = Math.max(1, canvas.clientWidth)
    const height = Math.max(1, canvas.clientHeight)
    const dpr = Math.min(window.devicePixelRatio || 1, this.quality?.dprCap ?? 1)
    renderer.setPixelRatio(dpr)
    renderer.setSize(width, height, false)
    composer.setPixelRatio(dpr)
    composer.setSize(width, height)
    this.camera.aspect = width / Math.max(1, height)
    this.camera.updateProjectionMatrix()
    if (!this.playing) this.renderFrame(0)
  }

  async reload(): Promise<void> {
    if (!this.renderer || this.contextLost) return
    const token = ++this.token
    const definition = findEffect(this.host.getEffectId())
    this.loading = true
    this.ready = false
    this.errors = []
    this.sandbox = false
    this.emit()
    this.disposeEffect()
    let loaded: EffectModule
    try {
      loaded = await definition.load()
    } catch (error) {
      if (token !== this.token) return
      this.loading = false
      this.errors = [error instanceof Error ? error.message : '效果模块加载失败。']
      this.emit()
      return
    }
    if (token !== this.token || !this.renderer) return
    this.quality = this.currentQuality()
    this.resize()
    try {
      const effect = loaded.createEffect({
        scene: this.scene,
        camera: this.camera,
        renderer: this.renderer,
        quality: this.quality,
        reducedMotion: this.host.getReducedMotion(),
        sprite: this.sprite,
        disposer: this.disposer,
      })
      effect.apply(this.host.getValues())
      this.effect = effect
      this.module = loaded
      const seek = this.host.getSeek()
      this.time = seek ?? loaded.meta.posterTime
      this.applyBloom()
    } catch (error) {
      this.disposeEffect()
      this.errors = [error instanceof Error ? error.message : '效果初始化失败。']
    }
    this.loading = false
    this.ready = this.effect !== null
    this.fpsSamples = []
    this.emit()
    this.renderFrame(0)
    this.playing = this.host.getPlaying()
    if (this.playing) this.startLoop()
  }

  applyParams(): void {
    this.effect?.apply(this.host.getValues())
    this.applyBloom()
    if (!this.playing) this.renderFrame(0)
  }

  setPlaying(playing: boolean): void {
    this.playing = playing
    if (playing) this.startLoop()
    else this.stopLoop()
  }

  seek(time: number): void {
    this.time = Math.max(0, time)
    this.renderFrame(0)
  }

  replay(): void {
    this.time = 0
    this.playing = true
    this.startLoop()
    this.renderFrame(0)
  }

  compileUserShader(source: string): { ok: boolean; log: string } {
    const renderer = this.renderer
    if (!renderer) return { ok: false, log: '渲染器还没有就绪。' }
    const prepared = prepareShaderLab(source)
    if (!prepared.ok) return prepared
    const gl = renderer.getContext() as WebGL2RenderingContext
    const compiled = compileShaderPair(gl, prepared.vertex, prepared.fragment)
    return { ok: compiled.ok, log: compiled.log }
  }

  showUserShader(source: string): { ok: boolean; log: string } {
    const compiled = this.compileUserShader(source)
    if (!compiled.ok || !this.renderer) return compiled
    const prepared = prepareShaderLab(source)
    if (!prepared.ok) return prepared
    this.disposeEffect()
    this.sandbox = true
    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new Vector2(this.host.canvas.clientWidth, this.host.canvas.clientHeight) },
      uColor: { value: new Color('#8ef6ff') },
    }
    const material = new ShaderMaterial({
      uniforms,
      vertexShader: prepared.vertex,
      fragmentShader: prepared.fragment,
      toneMapped: false,
    })
    const mesh = new Mesh(new SphereGeometry(1.15, 96, 64), material)
    this.scene.add(mesh)
    this.disposer.track(mesh)
    this.camera.position.set(0, 0, 3.4)
    this.camera.lookAt(0, 0, 0)
    this.camera.fov = 40
    this.camera.updateProjectionMatrix()
    this.effect = {
      bloom: { strength: 0.35, radius: 0.35, threshold: 0.72 },
      update: (time) => {
        uniforms.uTime.value = time
        mesh.rotation.y = time * 0.25
      },
      apply: () => undefined,
      dispose: () => undefined,
    }
    this.applyBloom()
    this.ready = true
    this.errors = []
    this.renderFrame(0)
    this.startLoop()
    return compiled
  }

  async leaveShaderLab(): Promise<void> {
    if (!this.sandbox) return
    await this.reload()
  }

  sample(): { max: number; avg: number } {
    const source = this.renderer?.domElement
    if (!source) return { max: 0, avg: 0 }
    const probe = document.createElement('canvas')
    probe.width = 32
    probe.height = 18
    const context = probe.getContext('2d', { willReadFrequently: true })
    if (!context) return { max: 0, avg: 0 }
    context.drawImage(source, 0, 0, 32, 18)
    const data = context.getImageData(0, 0, 32, 18).data
    let max = 0
    let sum = 0
    const count = data.length / 4
    for (let index = 0; index < data.length; index += 4) {
      const luminance = (data[index] ?? 0) + (data[index + 1] ?? 0) + (data[index + 2] ?? 0)
      max = Math.max(max, luminance)
      sum += luminance
    }
    return { max, avg: sum / count }
  }

  snapshot(): StageSnapshot {
    return {
      effectId: this.sandbox ? 'shader-lab' : this.module?.meta.id ?? null,
      ready: this.ready,
      loading: this.loading,
      errors: [...this.errors],
      fps: this.fpsSamples.length >= 12 ? average(this.fpsSamples) : null,
      quality: this.quality,
    }
  }

  dispose(): void {
    this.stopLoop()
    this.disposeEffect()
    this.observer?.disconnect()
    document.removeEventListener('visibilitychange', this.onVisibility)
    this.host.canvas.removeEventListener('webglcontextlost', this.onContextLost)
    this.host.canvas.removeEventListener('webglcontextrestored', this.onContextRestored)
    this.composer?.dispose()
    this.bloom?.dispose()
    this.vignette?.dispose()
    this.sprite.dispose()
    this.renderer?.dispose()
    this.renderer = null
  }

  private currentQuality(): ResolvedQuality {
    const coarse = window.matchMedia('(pointer: coarse)').matches
    const cores = navigator.hardwareConcurrency || 0
    return resolveQuality(this.host.getQuality(), this.host.canvas.clientWidth, cores, coarse)
  }

  private disposeEffect(): void {
    this.effect?.dispose()
    this.effect = null
    this.disposer.dispose()
    this.disposer = new Disposer()
    this.scene.clear()
    this.scene.background = new Color('#05060c')
  }

  private applyBloom(): void {
    const bloom = this.bloom
    const effect = this.effect
    if (!bloom || !effect) return
    const enabled = this.quality?.bloom ?? true
    bloom.enabled = enabled
    bloom.strength = enabled ? effect.bloom.strength : 0
    bloom.radius = effect.bloom.radius
    bloom.threshold = effect.bloom.threshold
    const grain = this.vignette?.uniforms.uGrain
    if (grain) grain.value = this.quality?.resolved === 'low' ? 0 : 0.01
  }

  private startLoop(): void {
    if (this.running || !this.renderer || !this.visible || document.visibilityState === 'hidden') return
    this.running = true
    this.last = performance.now()
    const tick = (now: number) => {
      if (!this.running) return
      const dt = Math.min(0.05, (now - this.last) / 1000)
      this.last = now
      if (this.playing && this.visible && document.visibilityState !== 'hidden') {
        const scale = this.host.getReducedMotion() ? 0.28 : 1
        this.time += dt * scale
        this.renderFrame(dt)
        this.noteFps(dt)
      }
      this.raf = requestAnimationFrame(tick)
    }
    this.raf = requestAnimationFrame(tick)
  }

  private stopLoop(): void {
    this.running = false
    cancelAnimationFrame(this.raf)
  }

  private renderFrame(dt: number): void {
    if (!this.composer || !this.effect || this.contextLost) return
    const vignetteTime = this.vignette?.uniforms.uTime
    if (vignetteTime) vignetteTime.value = this.time
    try {
      this.effect.update(this.time, dt, this.host.getReducedMotion())
      this.composer.render(dt)
    } catch (error) {
      this.errors = [error instanceof Error ? error.message : '渲染中断。']
      this.emit()
      this.stopLoop()
    }
  }

  private noteFps(dt: number): void {
    if (dt <= 0) return
    this.fpsSamples.push(1 / dt)
    if (this.fpsSamples.length > 36) this.fpsSamples.shift()
    if (this.fpsSamples.length === 12 || this.fpsSamples.length === 36) this.emit()
  }

  private emit(): void {
    this.host.onSnapshot(this.snapshot())
  }

  private installDebug(): void {
    window.__XUANLAN__ = {
      get effectId() {
        return window.__XUANLAN_STAGE__?.snapshot().effectId ?? null
      },
      get ready() {
        return window.__XUANLAN_STAGE__?.snapshot().ready ?? false
      },
      get errors() {
        return window.__XUANLAN_STAGE__?.snapshot().errors ?? []
      },
      get fps() {
        return window.__XUANLAN_STAGE__?.snapshot().fps ?? null
      },
      sample: () => this.sample(),
    }
    window.__XUANLAN_STAGE__ = this
  }
}

function average(values: number[]): number {
  return values.reduce((sum, value) => sum + value, 0) / values.length
}

declare global {
  interface Window {
    __XUANLAN__?: {
      effectId: string | null
      ready: boolean
      errors: string[]
      fps: number | null
      sample: () => { max: number; avg: number }
    }
    __XUANLAN_STAGE__?: StudioStage
  }
}
