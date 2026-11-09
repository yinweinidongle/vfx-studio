import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { shade, glow } from '../../engine/materials'
import { createSeedPoints } from '../../engine/geometry'
import { frameCamera } from '../../engine/textures'
import { readNumber } from '../../engine/params'
import { createRoot, publish, visualUniforms } from '../kit'
import type { EffectContext, EffectModule } from '../../engine/types'
import {
  CircleGeometry,
  CylinderGeometry,
  DoubleSide,
  Mesh,
  TorusGeometry,
} from 'three'
import { scaledCount } from '../../engine/quality'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext) {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#79f3ff', '#9a86ff'),
    uDensity: { value: 22 },
    uHeight: { value: 1.25 },
  }
  frameCamera(ctx.camera, [0.2, 3.15, 5.4], [0, 1.05, 0], 38)

  const ground = new Mesh(new CircleGeometry(3.3, 96), shade('aura-ground', programs.ground, uniforms, glow))
  ground.rotation.x = -Math.PI / 2
  root.add(ground)

  const ringMaterial = shade('aura-ring', programs.ring, uniforms, { ...glow, side: DoubleSide })
  const specs = [
    { radius: 1.55, tube: 0.035, tilt: 0.15, speed: 0.45 },
    { radius: 1.15, tube: 0.02, tilt: 1.05, speed: -0.7 },
    { radius: 0.72, tube: 0.028, tilt: 1.7, speed: 0.9 },
  ]
  const rings = specs.map((spec) => {
    const mesh = new Mesh(new TorusGeometry(spec.radius, spec.tube, 16, 120), ringMaterial)
    mesh.rotation.x = spec.tilt
    root.add(mesh)
    return { mesh, speed: spec.speed }
  })

  const columnMaterial = shade('aura-column', programs.column, uniforms, { ...glow, side: DoubleSide })
  const wide = new Mesh(new CylinderGeometry(0.34, 0.55, 3.1, 32, 1, true), columnMaterial)
  wide.position.y = 1.55
  const core = new Mesh(new CylinderGeometry(0.08, 0.12, 3.3, 16, 1, true), columnMaterial)
  core.position.y = 1.65
  root.add(wide, core)

  root.add(createSeedPoints(scaledCount(520, ctx.quality), shade('aura-vortex', programs.vortex, uniforms, glow)))
  root.add(createSeedPoints(scaledCount(90, ctx.quality, 12), shade('aura-mote', programs.mote, uniforms, glow)))

  const seals = Array.from({ length: 6 }, (_, index) => {
    const mesh = new Mesh(new CircleGeometry(0.16, 24), shade('aura-seal', programs.ground, uniforms, glow))
    const angle = (index / 6) * Math.PI * 2
    mesh.position.set(Math.cos(angle) * 2.15, 0.9, Math.sin(angle) * 2.15)
    root.add(mesh)
    return mesh
  })

  const effect = publish(ctx, root, uniforms, meta.bloom, (time, reduced) => {
    const motion = reduced ? 0.25 : 1
    rings.forEach((ring, index) => {
      ring.mesh.rotation.z = time * ring.speed * motion
      ring.mesh.rotation.y = Math.sin(time * 0.3 + index) * 0.08 * motion
    })
    seals.forEach((seal, index) => {
      const angle = (index / 6) * Math.PI * 2 + time * 0.22 * motion
      seal.position.set(Math.cos(angle) * 2.15, 0.85 + Math.sin(time * 1.4 + index) * 0.08, Math.sin(angle) * 2.15)
      seal.lookAt(ctx.camera.position)
    })
  })
  const applyBase = effect.apply.bind(effect)
  effect.apply = (values) => {
    applyBase(values)
    uniforms.uDensity.value = readNumber(values, 'density')
    uniforms.uHeight.value = readNumber(values, 'height')
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
