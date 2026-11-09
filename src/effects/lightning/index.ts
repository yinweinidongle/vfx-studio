import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import strikeSource from '../../vendor/LightningStrike.js?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, shade, solid } from '../../engine/materials'
import { createSeedPoints, createStreaks } from '../../engine/geometry'
import { frameCamera } from '../../engine/textures'
import { readColor, readNumber, writeColor } from '../../engine/params'
import { createRoot, visualUniforms } from '../kit'
import { scaledCount } from '../../engine/quality'
import { LightningStrike } from '../../vendor/LightningStrike.js'
import type { EffectContext, EffectInstance, EffectModule } from '../../engine/types'
import { AdditiveBlending, BackSide, CircleGeometry, DoubleSide, Mesh, PointLight, SphereGeometry, Vector3 } from 'three'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext): EffectInstance {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#e7f0ff', '#8f7dff'),
    uFlash: { value: 0 },
    uRough: { value: 0.82 },
    uImpact: { value: new Vector3(0.4, 0.05, 0.2) },
  }
  frameCamera(ctx.camera, [0.4, 3.4, 9.5], [0, 3.2, 0], 42)
  const sky = new Mesh(new SphereGeometry(60, 32, 20), shade('storm-sky', programs.sky, uniforms, { ...solid, side: BackSide, depthWrite: false }))
  sky.frustumCulled = false
  root.add(sky)
  const iterations = ctx.quality.resolved === 'low' ? 5 : 6
  const bolts = [0, 1, 2].map((index) => {
    const strike = new LightningStrike({
      sourceOffset: new Vector3(-1.4 + index * 1.5, 7.2, -0.6),
      destOffset: new Vector3(-0.8 + index * 1.2, 0, 0.3 - index * 0.2),
      radius0: 0.09,
      radius1: 0.025,
      radius0Factor: 0.62,
      radius1Factor: 0.28,
      minRadius: 0.012,
      maxIterations: iterations,
      ramification: 4,
      maxSubrayRecursion: 3,
      recursionProbability: 0.58,
      roughness: 0.82,
      straightness: 0.64,
      timeScale: 0.85,
      generateUVs: true,
      noiseSeed: 0.17 + index * 0.21,
      isEternal: true,
    })
    const mesh = new Mesh(strike, shade('bolt', programs.bolt, uniforms, { ...glow, side: DoubleSide, blending: AdditiveBlending }))
    mesh.frustumCulled = false
    mesh.visible = index < 2
    root.add(mesh)
    return { strike, mesh }
  })
  const shock = new Mesh(new CircleGeometry(1.4, 48), shade('bolt-shock', programs.shock, uniforms, glow))
  shock.rotation.x = -Math.PI / 2
  shock.position.y = 0.03
  root.add(shock)
  root.add(createStreaks(scaledCount(160, ctx.quality, 20), shade('rain', programs.rain, uniforms, glow)))
  root.add(createSeedPoints(scaledCount(70, ctx.quality, 8), shade('bolt-spark', programs.spark, uniforms, glow)))
  const flash = new PointLight(0xdfe8ff, 0, 18)
  flash.position.set(0, 1, 1)
  root.add(flash)
  let stamp = -1
  ctx.disposer.track(root)
  return {
    bloom: { ...meta.bloom },
    update(time: number, _dt: number, reduced: boolean) {
      uniforms.uTime.value = time
      sky.position.copy(ctx.camera.position)
      const flashAmt = reduced ? 0.35 : Math.pow(Math.max(0, Math.sin(time * 1.7)), 22)
      uniforms.uFlash.value = flashAmt
      flash.intensity = 4 + flashAmt * 28
      const mark = Math.floor(time * (reduced ? 0.4 : 0.9))
      if (mark !== stamp) {
        stamp = mark
        const hit = bolts[mark % bolts.length]
        if (hit) {
          hit.strike.rayParameters.destOffset?.set((Math.sin(mark * 2.1) * 2.2), 0, Math.cos(mark) * 1.1)
          uniforms.uImpact.value.copy(hit.strike.rayParameters.destOffset ?? uniforms.uImpact.value)
          shock.position.x = uniforms.uImpact.value.x
          shock.position.z = uniforms.uImpact.value.z
          flash.position.copy(uniforms.uImpact.value).setY(1)
        }
      }
      for (const bolt of bolts) {
        const rough = bolt.strike.rayParameters.roughness
        if (typeof rough === 'number') bolt.strike.rayParameters.roughness = uniforms.uRough.value
        bolt.strike.update(time)
      }
    },
    apply(values) {
      uniforms.uIntensity.value = readNumber(values, 'intensity')
      uniforms.uSpeed.value = readNumber(values, 'speed')
      uniforms.uRough.value = readNumber(values, 'rough')
      const count = Math.round(readNumber(values, 'bolts'))
      bolts.forEach((bolt, index) => {
        bolt.mesh.visible = index < count
      })
      writeColor(uniforms.uColor.value, readColor(values, 'color'))
      writeColor(uniforms.uColorB.value, readColor(values, 'colorB'))
      this.bloom = { ...meta.bloom, strength: meta.bloom.strength * (0.65 + 0.35 * uniforms.uIntensity.value) }
    },
    dispose() {},
  }
}

export const effectModule: EffectModule = {
  meta,
  createEffect,
  sources: buildSources({
    implementationName: 'index.ts',
    implementation: indexSource,
    shaderName: 'effect.glsl',
    shader: shaderSource,
    programs,
    notes: meta.notes,
    upstream: [{ filename: 'LightningStrike.js', language: 'javascript', role: 'upstream', contents: strikeSource }],
  }),
}
