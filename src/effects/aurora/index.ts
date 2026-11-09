import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { mist, shade, solid } from '../../engine/materials'
import { frameCamera } from '../../engine/textures'
import { readNumber } from '../../engine/params'
import { createRoot, publish, visualUniforms } from '../kit'
import type { EffectContext, EffectModule } from '../../engine/types'
import { BackSide, CircleGeometry, DoubleSide, Mesh, PlaneGeometry, SphereGeometry } from 'three'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext) {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#b8ffd8', '#8d7dff'),
    uFold: { value: 1 },
    uVeil: { value: 1 },
    uPhase: { value: 0 },
  }
  frameCamera(ctx.camera, [0, 1.6, 11], [0, 3.4, 0], 48)
  const sky = new Mesh(new SphereGeometry(46, 32, 20), shade('aurora-sky', programs.sky, uniforms, { ...solid, side: BackSide, depthWrite: false }))
  sky.frustumCulled = false
  root.add(sky)
  const ice = new Mesh(new CircleGeometry(16, 48), shade('aurora-ice', programs.ice, uniforms, solid))
  ice.rotation.x = -Math.PI / 2
  root.add(ice)
  const segments = Math.round(80 * ctx.quality.segments)
  const curtains = [0, 2.2, 4.4].map((phase, index) => {
    const material = shade('curtain', programs.curtain, { ...uniforms, uPhase: { value: phase } }, { ...mist, side: DoubleSide })
    const mesh = new Mesh(new PlaneGeometry(14, 7, segments, 24), material)
    mesh.position.set(0, 4.2, -1 - index * 1.4)
    root.add(mesh)
    const reflection = new Mesh(new PlaneGeometry(14, 7, Math.max(8, Math.round(segments * 0.4)), 8), material)
    reflection.position.set(0, -0.2, -1 - index * 1.4)
    reflection.scale.y = -0.35
    reflection.renderOrder = 2
    root.add(reflection)
    return mesh
  })
  const effect = publish(ctx, root, uniforms, meta.bloom, () => {
    sky.position.copy(ctx.camera.position)
    void curtains
  })
  const applyBase = effect.apply.bind(effect)
  effect.apply = (values) => {
    applyBase(values)
    uniforms.uFold.value = readNumber(values, 'fold')
    uniforms.uVeil.value = readNumber(values, 'veil')
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
