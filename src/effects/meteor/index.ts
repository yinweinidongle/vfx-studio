import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, shade, solid } from '../../engine/materials'
import { createStreaks } from '../../engine/geometry'
import { frameCamera } from '../../engine/textures'
import { readNumber } from '../../engine/params'
import { createRoot, publish, visualUniforms } from '../kit'
import { scaledCount } from '../../engine/quality'
import type { EffectContext, EffectModule } from '../../engine/types'
import { BackSide, Mesh, SphereGeometry } from 'three'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext) {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#fff1d4', '#ff8a3d'),
    uBurn: { value: 1 },
    uBreak: { value: 0.62 },
  }
  frameCamera(ctx.camera, [0.2, 3.2, 9.2], [0, 3.5, 0], 46)
  const planet = new Mesh(new SphereGeometry(6.2, 64, 40), shade('planet', programs.planet, uniforms, solid))
  planet.position.set(0, -4.6, -1)
  const air = new Mesh(new SphereGeometry(6.55, 48, 32), shade('air', programs.air, uniforms, { ...glow, side: BackSide }))
  air.position.copy(planet.position)
  root.add(planet, air)
  root.add(createStreaks(scaledCount(420, ctx.quality, 40), shade('meteor', programs.meteor, uniforms, glow)))
  const effect = publish(ctx, root, uniforms, meta.bloom)
  const applyBase = effect.apply.bind(effect)
  effect.apply = (values) => {
    applyBase(values)
    uniforms.uBurn.value = readNumber(values, 'burn')
    uniforms.uBreak.value = readNumber(values, 'breakup')
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
