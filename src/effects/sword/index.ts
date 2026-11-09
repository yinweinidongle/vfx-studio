import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, shade } from '../../engine/materials'
import { createRibbon, createStreaks } from '../../engine/geometry'
import { frameCamera } from '../../engine/textures'
import { readColor, readNumber, writeColor } from '../../engine/params'
import { createRoot, visualUniforms } from '../kit'
import { scaledCount } from '../../engine/quality'
import type { EffectContext, EffectInstance, EffectModule } from '../../engine/types'
import { CircleGeometry, DoubleSide, Mesh, NormalBlending, Vector3 } from 'three'

const programs = assemblePrograms(shaderSource)

const paths = [
  { phase: 0, p0: [-2.3, 0.45, 0.2], p1: [0.1, 1.85, 0.35], p2: [2.35, 0.7, -0.15] },
  { phase: 1.15, p0: [2.1, 0.35, -0.2], p1: [-0.2, 1.55, 0.1], p2: [-2.2, 0.95, 0.25] },
  { phase: 2.25, p0: [-1.4, 1.55, 0.4], p1: [0.4, 0.7, -0.2], p2: [1.8, 1.35, 0.1] },
]

function bezier(a: number[], b: number[], c: number[], t: number): Vector3 {
  const u = 1 - t
  return new Vector3(
    u * u * a[0] + 2 * u * t * b[0] + t * t * c[0],
    u * u * a[1] + 2 * u * t * b[1] + t * t * c[1],
    u * u * a[2] + 2 * u * t * b[2] + t * t * c[2],
  )
}

export function createEffect(ctx: EffectContext): EffectInstance {
  const root = createRoot(ctx)
  const shared = visualUniforms(meta.loop, '#d9fbff', '#79e7ff')
  const width = { value: 0.34 }
  const sparks = { value: 1 }
  frameCamera(ctx.camera, [0.05, 1.7, 6.4], [0, 1.12, 0], 40)

  const ground = new Mesh(
    new CircleGeometry(3.4, 64),
    shade('sword-ground', programs.ground, shared, { blending: NormalBlending, depthWrite: true, transparent: true }),
  )
  ground.rotation.x = -Math.PI / 2
  root.add(ground)

  const ribbons = paths.map((path) => {
    const uniforms = {
      ...shared,
      uWidth: width,
      uPhase: { value: path.phase },
      uP0: { value: new Vector3(...path.p0) },
      uP1: { value: new Vector3(...path.p1) },
      uP2: { value: new Vector3(...path.p2) },
    }
    const mesh = createRibbon(Math.round(80 * ctx.quality.segments), shade('sword-ribbon', programs.ribbon, uniforms, { ...glow, side: DoubleSide }))
    root.add(mesh)
    const shock = new Mesh(new CircleGeometry(1.35, 64), shade('sword-shock', programs.shock, { ...shared, uPhase: { value: path.phase } }, glow))
    shock.rotation.x = -Math.PI / 2
    shock.position.copy(bezier(path.p0, path.p1, path.p2, 0.82))
    shock.position.y = 0.04
    root.add(shock)
    return path
  })

  const emit = new Vector3()
  const tangent = new Vector3(1, 0, 0)
  const sparkUniforms = { ...shared, uSparks: sparks, uEmit: { value: emit }, uTangent: { value: tangent } }
  root.add(createStreaks(scaledCount(160, ctx.quality, 16), shade('sword-spark', programs.spark, sparkUniforms, glow)))

  ctx.disposer.track(root)
  return {
    bloom: { ...meta.bloom },
    update(time: number) {
      shared.uTime.value = time
      const local = (time * shared.uSpeed.value) % meta.loop
      const active = ribbons.reduce((best, path) => {
        const age = (local + path.phase) % meta.loop
        return age < best.age ? { age, path } : best
      }, { age: 99, path: ribbons[0] })
      const head = Math.min(local / 0.62, 1)
      emit.copy(bezier(active.path.p0, active.path.p1, active.path.p2, head))
      const ahead = bezier(active.path.p0, active.path.p1, active.path.p2, Math.min(head + 0.04, 1))
      tangent.copy(ahead).sub(emit)
      if (tangent.lengthSq() < 1e-5) tangent.set(1, 0.2, 0)
    },
    apply(values) {
      shared.uIntensity.value = readNumber(values, 'intensity')
      shared.uSpeed.value = readNumber(values, 'speed')
      writeColor(shared.uColor.value, readColor(values, 'color'))
      writeColor(shared.uColorB.value, readColor(values, 'colorB'))
      width.value = 0.34 * readNumber(values, 'width')
      sparks.value = readNumber(values, 'sparks')
      this.bloom = { ...meta.bloom, strength: meta.bloom.strength * (0.6 + 0.4 * shared.uIntensity.value) }
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
  }),
}
