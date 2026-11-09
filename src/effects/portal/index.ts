import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, shade, solid } from '../../engine/materials'
import { createSeedPoints } from '../../engine/geometry'
import { frameCamera } from '../../engine/textures'
import { readNumber } from '../../engine/params'
import { createRoot, publish, visualUniforms } from '../kit'
import { scaledCount } from '../../engine/quality'
import type { EffectContext, EffectModule } from '../../engine/types'
import {
  BackSide,
  CircleGeometry,
  CylinderGeometry,
  DoubleSide,
  Mesh,
  Scene,
  SphereGeometry,
  TorusGeometry,
  WebGLRenderTarget,
} from 'three'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext) {
  const root = createRoot(ctx)
  const size = ctx.quality.resolved === 'low' ? 256 : ctx.quality.resolved === 'high' ? 640 : 384
  const target = ctx.disposer.target(new WebGLRenderTarget(size, size))
  const uniforms = {
    ...visualUniforms(meta.loop, '#d7cbff', '#7af0ff'),
    uTwist: { value: 1 },
    uThroat: { value: 1 },
    uSky: { value: target.texture },
  }
  frameCamera(ctx.camera, [0.15, 1.55, 4.8], [0, 1.25, 0], 40)
  const skyMaterial = shade('portal-sky', programs.sky, uniforms, { ...solid, side: BackSide, depthWrite: false })
  const sky = new Mesh(new SphereGeometry(40, 32, 20), skyMaterial)
  sky.frustumCulled = false
  root.add(sky)
  const skyScene = new Scene()
  const skyCopy = new Mesh(new SphereGeometry(40, 32, 20), skyMaterial)
  skyCopy.frustumCulled = false
  skyScene.add(skyCopy)
  ctx.disposer.track(skyCopy)

  const dais = new Mesh(new CircleGeometry(2.1, 64), shade('portal-dais', programs.dais, uniforms, glow))
  dais.rotation.x = -Math.PI / 2
  dais.position.y = 0.01
  const plinth = new Mesh(new CylinderGeometry(0.7, 0.9, 0.18, 32), shade('portal-plinth', programs.dais, uniforms, solid))
  plinth.position.y = 0.09
  root.add(dais, plinth)

  const disc = new Mesh(new CircleGeometry(1.18, 80), shade('portal-disc', programs.disc, uniforms, { ...solid, side: DoubleSide }))
  disc.position.y = 1.35
  root.add(disc)
  const ring = new Mesh(new TorusGeometry(1.28, 0.045, 16, 96), shade('portal-ring', programs.ring, uniforms, { ...glow, side: DoubleSide }))
  ring.position.y = 1.35
  const ringB = new Mesh(new TorusGeometry(1.48, 0.012, 12, 80), shade('portal-ring', programs.ring, uniforms, glow))
  ringB.position.y = 1.35
  root.add(ring, ringB)
  root.add(createSeedPoints(scaledCount(80, ctx.quality, 12), shade('portal-spark', programs.spark, uniforms, glow)))

  const effect = publish(ctx, root, uniforms, meta.bloom, (time, reduced) => {
    sky.position.copy(ctx.camera.position)
    skyCopy.position.copy(ctx.camera.position)
    const spin = reduced ? 0.15 : 0.45
    ring.rotation.z = time * spin
    ringB.rotation.z = -time * spin * 0.6
    const renderer = ctx.renderer
    const previous = renderer.getRenderTarget()
    renderer.setRenderTarget(target)
    renderer.clear()
    renderer.render(skyScene, ctx.camera)
    renderer.setRenderTarget(previous)
  })
  const applyBase = effect.apply.bind(effect)
  effect.apply = (values) => {
    applyBase(values)
    uniforms.uTwist.value = readNumber(values, 'twist')
    uniforms.uThroat.value = readNumber(values, 'throat')
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
