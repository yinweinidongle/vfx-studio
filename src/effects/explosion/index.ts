import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, mist, shade, solid } from '../../engine/materials'
import { createDebris, createSeedPoints, createStreaks } from '../../engine/geometry'
import { frameCamera } from '../../engine/textures'
import { readNumber } from '../../engine/params'
import { createRoot, visualUniforms } from '../kit'
import { scaledCount } from '../../engine/quality'
import type { EffectContext, EffectInstance, EffectModule } from '../../engine/types'
import { CircleGeometry, DoubleSide, Mesh, SphereGeometry } from 'three'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext): EffectInstance {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#ffd7a1', '#ff6b3d'),
    uCharge: { value: 1 },
    uDebris: { value: 1 },
    uScale: { value: 0 },
    uScaleB: { value: 0 },
  }
  frameCamera(ctx.camera, [0.4, 1.7, 5.6], [0, 1.05, 0], 40)
  const core = new Mesh(new SphereGeometry(0.28, 32, 24), shade('boom-core', programs.core, uniforms, glow))
  core.position.y = 1.05
  root.add(core)
  const shellA = new Mesh(new SphereGeometry(1, 40, 28), shade('boom-shell-a', programs.shell, { ...uniforms, uScale: uniforms.uScale }, { ...glow, side: DoubleSide }))
  const shellB = new Mesh(new SphereGeometry(1, 40, 28), shade('boom-shell-b', programs.shell, { ...uniforms, uScale: uniforms.uScaleB }, { ...glow, side: DoubleSide }))
  shellA.position.y = 1.05
  shellB.position.y = 1.05
  root.add(shellA, shellB)
  root.add(createStreaks(scaledCount(280, ctx.quality, 24), shade('boom-streak', programs.streak, uniforms, glow)))
  const debris = createDebris(scaledCount(46, ctx.quality, 8), shade('boom-debris', programs.debris, uniforms, { ...solid, side: DoubleSide }))
  debris.position.y = 1.05
  root.add(debris)
  root.add(createSeedPoints(scaledCount(48, ctx.quality, 8), shade('boom-smoke', programs.smoke, uniforms, mist)))
  const scorch = new Mesh(new CircleGeometry(2.2, 64), shade('boom-scorch', programs.scorch, uniforms, mist))
  scorch.rotation.x = -Math.PI / 2
  scorch.position.y = 0.02
  root.add(scorch)
  ctx.disposer.track(root)
  return {
    bloom: { ...meta.bloom },
    update(time: number) {
      uniforms.uTime.value = time
      const local = (time * uniforms.uSpeed.value) % meta.loop
      const burst = Math.max(0, local - 0.55) / 0.85
      uniforms.uScale.value = Math.min(burst, 1.8)
      uniforms.uScaleB.value = Math.min(Math.max(0, local - 0.68) / 0.95, 2.1)
    },
    apply(values) {
      uniforms.uIntensity.value = readNumber(values, 'intensity')
      uniforms.uSpeed.value = readNumber(values, 'speed')
      uniforms.uCharge.value = readNumber(values, 'charge')
      uniforms.uDebris.value = readNumber(values, 'debris')
      const color = String(values.color ?? '#ffd7a1')
      const colorB = String(values.colorB ?? '#ff6b3d')
      uniforms.uColor.value.set(
        Number.parseInt(color.slice(1, 3), 16) / 255,
        Number.parseInt(color.slice(3, 5), 16) / 255,
        Number.parseInt(color.slice(5, 7), 16) / 255,
      )
      uniforms.uColorB.value.set(
        Number.parseInt(colorB.slice(1, 3), 16) / 255,
        Number.parseInt(colorB.slice(3, 5), 16) / 255,
        Number.parseInt(colorB.slice(5, 7), 16) / 255,
      )
      this.bloom = { ...meta.bloom, strength: meta.bloom.strength * (0.6 + 0.4 * uniforms.uIntensity.value) }
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
