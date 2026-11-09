import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import strikeSource from '../../vendor/LightningStrike.js?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, shade } from '../../engine/materials'
import { createStreaks } from '../../engine/geometry'
import { frameCamera } from '../../engine/textures'
import { readNumber } from '../../engine/params'
import { createRoot, publish, visualUniforms } from '../kit'
import { scaledCount } from '../../engine/quality'
import { LightningStrike } from '../../vendor/LightningStrike.js'
import type { EffectContext, EffectModule } from '../../engine/types'
import { CylinderGeometry, DoubleSide, Mesh, SphereGeometry, TorusGeometry, Vector3 } from 'three'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext) {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#67f6ff', '#d8fbff'),
    uWidth: { value: 1 },
    uFlicker: { value: 1 },
    uCore: { value: 0 },
  }
  frameCamera(ctx.camera, [0.2, 1.55, 5.4], [0.4, 1.2, 0], 40)
  const shell = new Mesh(new CylinderGeometry(0.07, 0.07, 4.4, 32, 40, true), shade('beam-shell', programs.beam, { ...uniforms, uCore: { value: 0 } }, { ...glow, side: DoubleSide }))
  shell.rotation.z = Math.PI / 2
  shell.position.set(0.1, 1.2, 0)
  const core = new Mesh(new CylinderGeometry(0.02, 0.02, 4.4, 16, 24, true), shade('beam-core', programs.beam, { ...uniforms, uCore: { value: 1 } }, { ...glow, side: DoubleSide }))
  core.rotation.z = Math.PI / 2
  core.position.copy(shell.position)
  root.add(shell, core)
  const rings = [0.28, 0.42, 0.58].map((radius, index) => {
    const ring = new Mesh(new TorusGeometry(radius, 0.012, 8, 6), shade('beam-hex', programs.hex, uniforms, glow))
    ring.position.set(-2.05, 1.2, 0)
    ring.rotation.y = Math.PI / 2
    ring.userData.spin = 0.6 + index * 0.35
    root.add(ring)
    return ring
  })
  const shield = new Mesh(new SphereGeometry(0.55, 36, 28), shade('beam-shield', programs.shield, uniforms, { ...glow, side: DoubleSide }))
  shield.position.set(2.35, 1.2, 0)
  root.add(shield)
  root.add(createStreaks(scaledCount(70, ctx.quality, 10), shade('beam-splash', programs.splash, uniforms, glow)))
  const arcs = [0.35, -0.35].map((offset, index) => {
    const strike = new LightningStrike({
      sourceOffset: new Vector3(-0.4, 1.2, 0),
      destOffset: new Vector3(1.1, 1.2 + offset, offset * 0.2),
      radius0: 0.02,
      radius1: 0.008,
      minRadius: 0.004,
      maxIterations: 5,
      ramification: 3,
      maxSubrayRecursion: 2,
      recursionProbability: 0.4,
      roughness: 0.7,
      straightness: 0.8,
      generateUVs: true,
      noiseSeed: 0.2 + index * 0.3,
      isEternal: true,
    })
    const mesh = new Mesh(strike, shade('beam-arc', programs.hex, uniforms, glow))
    mesh.frustumCulled = false
    root.add(mesh)
    return strike
  })
  const effect = publish(ctx, root, uniforms, meta.bloom, (time, reduced) => {
    const motion = reduced ? 0.2 : 1
    rings.forEach((ring) => {
      ring.rotation.z = time * Number(ring.userData.spin) * motion
    })
    arcs.forEach((arc) => arc.update(time))
  })
  const applyBase = effect.apply.bind(effect)
  effect.apply = (values) => {
    applyBase(values)
    uniforms.uWidth.value = readNumber(values, 'width')
    uniforms.uFlicker.value = readNumber(values, 'flicker')
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
    upstream: [{ filename: 'LightningStrike.js', language: 'javascript', role: 'upstream', contents: strikeSource }],
  }),
}
