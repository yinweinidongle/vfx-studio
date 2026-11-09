import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, shade } from '../../engine/materials'
import { frameCamera } from '../../engine/textures'
import { createRoot, publish, visualUniforms } from '../kit'
import type { EffectContext, EffectModule } from '../../engine/types'
import { DoubleSide, Mesh, SphereGeometry, TorusGeometry } from 'three'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext) {
  const root = createRoot(ctx)
  const uniforms = visualUniforms(meta.loop, '#7ef3ff', '#ffffff')
  frameCamera(ctx.camera, [0, 0.2, 3.2], [0, 0, 0], 40)
  const orb = new Mesh(new SphereGeometry(0.55, 40, 28), shade('template-orb', programs.orb, uniforms, glow))
  const ring = new Mesh(new TorusGeometry(0.9, 0.02, 12, 64), shade('template-ring', programs.ring, uniforms, { ...glow, side: DoubleSide }))
  ring.rotation.x = 0.6
  root.add(orb, ring)
  return publish(ctx, root, uniforms, meta.bloom, (time) => {
    ring.rotation.z = time * 0.4
  })
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
