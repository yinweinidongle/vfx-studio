import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, mist, shade } from '../../engine/materials'
import { createStreaks } from '../../engine/geometry'
import { frameCamera } from '../../engine/textures'
import { readNumber } from '../../engine/params'
import { createRoot, publish, visualUniforms } from '../kit'
import { scaledCount } from '../../engine/quality'
import type { EffectContext, EffectModule } from '../../engine/types'
import { CircleGeometry, DoubleSide, Mesh, PlaneGeometry } from 'three'

const programs = assemblePrograms(shaderSource)

const ends = [
  [-1.2, 1.15, -3.8],
  [-0.4, 1.35, -3.7],
  [0.5, 1.05, -3.9],
  [1.2, 1.4, -3.6],
  [1.7, 0.95, -3.85],
]

export function createEffect(ctx: EffectContext) {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#8eb6ff', '#f0c27a'),
    uWeave: { value: 0.7 },
    uTrail: { value: 0.85 },
  }
  frameCamera(ctx.camera, [0.2, 1.7, 7.2], [0, 1.25, 0], 40)
  const depths = [-1.2, -3.4, -6.5]
  depths.forEach((z, index) => {
    const fog = new Mesh(new PlaneGeometry(14, 6), shade('projectile-fog', programs.fog, uniforms, mist))
    fog.position.set(0, 2.2, z)
    fog.scale.setScalar(1 + index * 0.35)
    root.add(fog)
  })
  root.add(createStreaks(scaledCount(420, ctx.quality, 30), shade('projectile-bolt', programs.bolt, uniforms, glow)))
  ends.forEach((end, index) => {
    const ring = new Mesh(
      new CircleGeometry(0.85, 48),
      shade('projectile-impact', programs.impact, { ...uniforms, uLane: { value: index } }, { ...glow, side: DoubleSide }),
    )
    ring.position.set(end[0], end[1], end[2])
    root.add(ring)
  })
  const effect = publish(ctx, root, uniforms, meta.bloom)
  const applyBase = effect.apply.bind(effect)
  effect.apply = (values) => {
    applyBase(values)
    uniforms.uWeave.value = readNumber(values, 'weave')
    uniforms.uTrail.value = readNumber(values, 'trail')
  }
  return effect
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
