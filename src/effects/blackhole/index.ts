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
import { BackSide, DoubleSide, Mesh, RingGeometry, SphereGeometry, TorusGeometry } from 'three'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext) {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#fff1dd', '#ff7a3a'),
    uSpin: { value: 1 },
    uLens: { value: 1 },
  }
  frameCamera(ctx.camera, [0.15, 1.35, 8.2], [0, 0.15, 0], 36)
  const sky = new Mesh(new SphereGeometry(50, 48, 32), shade('bh-sky', programs.sky, uniforms, { ...solid, side: BackSide, depthWrite: false }))
  sky.frustumCulled = false
  sky.renderOrder = -10
  const horizon = new Mesh(new SphereGeometry(1.02, 48, 32), shade('bh-horizon', programs.horizon, uniforms, solid))
  const photon = new Mesh(new TorusGeometry(1.22, 0.008, 8, 96), shade('bh-photon', programs.photon, uniforms, glow))
  photon.rotation.x = Math.PI / 2
  const disk = new Mesh(new RingGeometry(1.15, 5.5, 128, 1), shade('bh-disk', programs.disk, uniforms, { ...glow, side: DoubleSide }))
  disk.rotation.x = -Math.PI / 2
  root.add(sky, disk, photon, horizon)
  root.add(createStreaks(scaledCount(220, ctx.quality, 20), shade('bh-infall', programs.infall, uniforms, glow)))
  const effect = publish(ctx, root, uniforms, meta.bloom, () => {
    sky.position.copy(ctx.camera.position)
  })
  const applyBase = effect.apply.bind(effect)
  effect.apply = (values) => {
    applyBase(values)
    uniforms.uSpin.value = readNumber(values, 'spin')
    uniforms.uLens.value = readNumber(values, 'lens')
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
