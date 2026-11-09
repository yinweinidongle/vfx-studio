import { existsSync, readFileSync } from 'node:fs'
import { Mesh, MeshBasicMaterial, SphereGeometry } from 'three'
import { describe, expect, it } from 'vitest'
import { catalog } from '../../src/effects/registry'
import { meta as aura } from '../../src/effects/aura/meta'
import auraShader from '../../src/effects/aura/effect.glsl?raw'
import { Disposer } from '../../src/engine/dispose'
import { resolveQuality, scaledCount } from '../../src/engine/quality'
import { sanitizeParams } from '../../src/engine/params'
import { prepareShaderLab } from '../../src/engine/shaderLab'
import { assemblePrograms } from '../../src/shaders/assemble'
import { joinPublicPath } from '../../src/engine/assets'
import { queryToState, stateToQuery } from '../../src/engine/url'

describe('effect registry', () => {
  it('lists twelve distinct effects and leaves the template unregistered', () => {
    const ids = catalog.map((entry) => entry.meta.id)
    expect(ids).toHaveLength(12)
    expect(new Set(ids).size).toBe(12)
    expect(ids).not.toContain('template-orb')
    for (const entry of catalog) {
      expect(entry.meta.presets.length).toBeGreaterThan(0)
      expect(entry.meta.params.some((param) => param.key === 'intensity')).toBe(true)
    }
  })
})

describe('gallery thumbnails', () => {
  it('keeps a real JPEG for every effect and prefixes the Pages project base', () => {
    expect(joinPublicPath('/vfx-studio/', 'thumbs/aura.jpg')).toBe('/vfx-studio/thumbs/aura.jpg')
    expect(joinPublicPath('/vfx-studio', 'thumbs/sword.jpg')).toBe('/vfx-studio/thumbs/sword.jpg')
    expect(joinPublicPath('/', 'thumbs/portal.jpg')).toBe('/thumbs/portal.jpg')
    for (const entry of catalog) {
      const file = new URL(`../../public/thumbs/${entry.meta.id}.jpg`, import.meta.url)
      expect(existsSync(file), entry.meta.id).toBe(true)
      const bytes = readFileSync(file)
      expect(bytes.subarray(0, 3).toString('hex')).toBe('ffd8ff')
      expect(bytes.length).toBeGreaterThan(8000)
    }
  })
})

describe('parameters and share urls', () => {
  it('clamps numbers and normalizes colors', () => {
    const { values } = sanitizeParams(aura, {
      intensity: 99,
      speed: 0,
      color: '79F3FF',
      colorB: '#gggggg',
      density: 3,
      height: 9,
    })
    expect(values.intensity).toBe(2.2)
    expect(values.speed).toBe(0.2)
    expect(values.color).toBe('#79f3ff')
    expect(values.colorB).toBe(aura.params.find((param) => param.key === 'colorB')?.default)
    expect(values.density).toBe(8)
  })

  it('round-trips the paused effect, preset, and non-default color without a hash', () => {
    const query = stateToQuery(aura, {
      effectId: aura.id,
      presetId: 'violet',
      quality: 'high',
      playing: false,
      reduceMotion: true,
      time: 1.2,
      values: {
        intensity: 1.15,
        speed: 1.35,
        color: '#b9a6ff',
        colorB: '#6de8ff',
        density: 18,
        height: 1.7,
      },
    })
    expect(query.fx).toBe('aura')
    expect(query.play).toBe('0')
    expect(query.t).toBe('1.20')
    expect(JSON.stringify(query)).not.toContain('#')
    const restored = queryToState(aura, query)
    expect(restored.presetId).toBe('violet')
    expect(restored.quality).toBe('high')
    expect(restored.playing).toBe(false)
    expect(restored.reduceMotion).toBe(true)
    expect(restored.time).toBe(1.2)
    expect(restored.values.color).toBe('#b9a6ff')
  })
})

describe('shaders', () => {
  it('inlines simplex noise and removes include markers', () => {
    const programs = assemblePrograms(auraShader)
    expect(programs.ground?.fragment).toContain('snoise')
    expect(programs.ground?.fragment).not.toContain('@include')
    expect(programs.ring?.vertex).toContain('void main')
  })

  it('rejects unsafe local shader input and never evaluates javascript', () => {
    expect(prepareShaderLab('').ok).toBe(false)
    expect(prepareShaderLab('#version 300 es\nvoid main(){}').ok).toBe(false)
    expect(prepareShaderLab('x'.repeat(8001)).ok).toBe(false)
    const accepted = prepareShaderLab('void main(){ gl_FragColor = vec4(1.0); }')
    expect(accepted.ok).toBe(true)
    const source = readFileSync(new URL('../../src/engine/shaderLab.ts', import.meta.url), 'utf8')
    expect(source).not.toMatch(/\beval\s*\(/)
    expect(source).not.toMatch(/\bnew\s+Function\s*\(/)
  })
})

describe('quality and disposal', () => {
  it('caps device pixel ratio and scales particle counts', () => {
    const high = resolveQuality('high', 1400, 8, false)
    const low = resolveQuality('low', 1400, 8, false)
    const autoMobile = resolveQuality('auto', 390, 8, true)
    expect(high.dprCap).toBeLessThanOrEqual(1.75)
    expect(high.bloom).toBe(true)
    expect(low.dprCap).toBe(1)
    expect(low.bloom).toBe(false)
    expect(autoMobile.resolved).toBe('low')
    expect(scaledCount(100, low, 8)).toBeLessThan(scaledCount(100, high, 8))
  })

  it('disposes tracked geometry and materials', () => {
    const disposer = new Disposer()
    let geometryDisposed = false
    let materialDisposed = false
    const geometry = new SphereGeometry(1, 4, 4)
    const material = new MeshBasicMaterial()
    geometry.addEventListener('dispose', () => {
      geometryDisposed = true
    })
    material.addEventListener('dispose', () => {
      materialDisposed = true
    })
    disposer.track(new Mesh(geometry, material))
    disposer.dispose()
    expect(geometryDisposed).toBe(true)
    expect(materialDisposed).toBe(true)
  })
})
