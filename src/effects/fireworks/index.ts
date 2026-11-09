import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, shade, solid } from '../../engine/materials'
import { createSeedPoints, createStreaks } from '../../engine/geometry'
import { frameCamera } from '../../engine/textures'
import { readNumber } from '../../engine/params'
import { createRoot, publish, visualUniforms } from '../kit'
import { scaledCount } from '../../engine/quality'
import type { EffectContext, EffectModule } from '../../engine/types'
import { BackSide, CircleGeometry, Mesh, SphereGeometry } from 'three'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext) {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#ffb15a', '#ff6d8a'),
    uGravity: { value: 1 },
    uShells: { value: 4 },
  }
  frameCamera(ctx.camera, [0.2, 3.1, 11.5], [0, 4.6, 0], 48)
  const sky = new Mesh(new SphereGeometry(70, 40, 24), shade('fw-sky', programs.sky, uniforms, { ...solid, side: BackSide, depthWrite: false }))
  sky.frustumCulled = false
  sky.renderOrder = -20
  const floor = new Mesh(new CircleGeometry(16, 64), shade('fw-floor', programs.floor, uniforms, solid))
  floor.rotation.x = -Math.PI / 2
  floor.position.y = 0
  root.add(sky, floor)
  root.add(createStreaks(scaledCount(1500, ctx.quality, 80), shade('fw-burst', programs.burst, uniforms, glow)))
  root.add(createSeedPoints(scaledCount(220, ctx.quality, 16), shade('fw-ember', programs.ember, uniforms, glow)))

  const effect = publish(ctx, root, uniforms, meta.bloom, (time) => {
    sky.position.copy(ctx.camera.position)
    void time
  })
  const applyBase = effect.apply.bind(effect)
  effect.apply = (values) => {
    applyBase(values)
    uniforms.uGravity.value = readNumber(values, 'gravity')
    uniforms.uShells.value = readNumber(values, 'shells')
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
