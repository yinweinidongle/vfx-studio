import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import waterSource from '../../vendor/Water.js?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, mist, shade, solid } from '../../engine/materials'
import { createSeedPoints, createStreaks } from '../../engine/geometry'
import { createWaterNormals, frameCamera } from '../../engine/textures'
import { readNumber } from '../../engine/params'
import { createRoot, publish, visualUniforms } from '../kit'
import { scaledCount } from '../../engine/quality'
import { Water } from '../../vendor/Water.js'
import type { EffectContext, EffectModule } from '../../engine/types'
import { CircleGeometry, DirectionalLight, DoubleSide, Mesh, NormalBlending, PlaneGeometry, Vector3 } from 'three'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext) {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#d9fff8', '#7ee0ff'),
    uFlow: { value: 1 },
    uMist: { value: 1 },
    uSheet: { value: 0 },
  }
  frameCamera(ctx.camera, [0.35, 2.35, 7.1], [0, 2.55, 0], 42)
  const rock = new Mesh(new PlaneGeometry(8, 7, 1, 1), shade('fall-rock', programs.rock, uniforms, solid))
  rock.position.set(0, 3.2, -1.4)
  root.add(rock)
  const sheets = [
    { x: -1.45, z: 0.05, w: 1.35, h: 5.2, id: 0.2 },
    { x: 0.05, z: 0.42, w: 1.05, h: 4.8, id: 1.7 },
    { x: 1.4, z: 0.12, w: 1.15, h: 4.5, id: 3.1 },
  ]
  for (const sheet of sheets) {
    const material = shade('fall-sheet', programs.sheet, { ...uniforms, uSheet: { value: sheet.id } }, {
      blending: NormalBlending,
      side: DoubleSide,
      depthWrite: false,
      transparent: true,
    })
    const mesh = new Mesh(new PlaneGeometry(sheet.w, sheet.h, 1, 48), material)
    mesh.position.set(sheet.x, sheet.h * 0.5 + 0.15, sheet.z)
    root.add(mesh)
  }
  root.add(createSeedPoints(scaledCount(180, ctx.quality, 20), shade('fall-foam', programs.foam, uniforms, glow)))
  root.add(createSeedPoints(scaledCount(70, ctx.quality, 10), shade('fall-mist', programs.mist, uniforms, mist)))
  root.add(createStreaks(scaledCount(90, ctx.quality, 12), shade('fall-spray', programs.spray, uniforms, glow)))
  const caustic = new Mesh(new CircleGeometry(3.2, 48), shade('fall-caustic', programs.caustic, uniforms, glow))
  caustic.rotation.x = -Math.PI / 2
  caustic.position.y = 0.08
  root.add(caustic)

  const normals = ctx.disposer.texture(createWaterNormals())
  const water = new Water(new PlaneGeometry(14, 14), {
    textureWidth: ctx.quality.water,
    textureHeight: ctx.quality.water,
    waterNormals: normals,
    sunDirection: new Vector3(0.25, 0.85, 0.15),
    sunColor: 0xd8f6ff,
    waterColor: 0x0b3c46,
    distortionScale: 2.4,
    alpha: 0.92,
  })
  water.rotation.x = -Math.PI / 2
  water.position.y = 0
  root.add(water)
  ctx.disposer.add(() => water.dispose())
  const sun = new DirectionalLight(0xe7f7ff, 1.2)
  sun.position.set(2, 6, 3)
  root.add(sun)

  const effect = publish(ctx, root, uniforms, meta.bloom, (time) => {
    const material = water.material
    const timeUniform = material.uniforms.time
    if (timeUniform) timeUniform.value = time
  })
  const applyBase = effect.apply.bind(effect)
  effect.apply = (values) => {
    applyBase(values)
    uniforms.uFlow.value = readNumber(values, 'flow') * readNumber(values, 'speed')
    uniforms.uMist.value = readNumber(values, 'mist')
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
    upstream: [{ filename: 'Water.js', language: 'javascript', role: 'upstream', contents: waterSource }],
  }),
}
