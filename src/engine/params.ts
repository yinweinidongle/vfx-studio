import { Vector3 } from 'three'
import type { EffectMeta, ParamDef, ParamValue, ParamValues } from './types'

export function defaultsFor(meta: EffectMeta): ParamValues {
  const values: ParamValues = {}
  for (const param of meta.params) values[param.key] = param.default
  return values
}

export function presetValues(meta: EffectMeta, presetId: string): ParamValues | null {
  const preset = meta.presets.find((entry) => entry.id === presetId)
  if (!preset) return null
  return { ...defaultsFor(meta), ...preset.values }
}

export function sanitizeParams(meta: EffectMeta, incoming: ParamValues): { values: ParamValues; errors: string[] } {
  const values = defaultsFor(meta)
  const errors: string[] = []
  for (const param of meta.params) {
    if (!(param.key in incoming)) continue
    const next = coerce(param, incoming[param.key], errors)
    if (next !== null) values[param.key] = next
  }
  return { values, errors }
}

function coerce(param: ParamDef, value: ParamValue | undefined, errors: string[]): ParamValue | null {
  if (value === undefined) return null
  if (param.type === 'float') {
    const numeric = typeof value === 'number' ? value : Number(value)
    if (!Number.isFinite(numeric)) {
      errors.push(`${param.label} 不是数字`)
      return null
    }
    return Math.min(param.max, Math.max(param.min, numeric))
  }
  if (param.type === 'bool') {
    if (typeof value === 'boolean') return value
    if (value === 'true' || value === '1') return true
    if (value === 'false' || value === '0') return false
    errors.push(`${param.label} 不是布尔值`)
    return null
  }
  const raw = String(value).trim().replace(/^#/, '')
  if (!/^[0-9a-fA-F]{6}$/.test(raw)) {
    errors.push(`${param.label} 需要 6 位十六进制颜色`)
    return null
  }
  return `#${raw.toLowerCase()}`
}

export function readNumber(values: ParamValues, key: string): number {
  const value = values[key]
  return typeof value === 'number' ? value : Number(value)
}

export function readBoolean(values: ParamValues, key: string): boolean {
  return values[key] === true
}

export function readColor(values: ParamValues, key: string): string {
  const value = values[key]
  return typeof value === 'string' ? value : '#ffffff'
}

export function writeColor(target: Vector3, hex: string): void {
  const raw = hex.replace('#', '')
  const packed = Number.parseInt(raw, 16)
  target.set(((packed >> 16) & 255) / 255, ((packed >> 8) & 255) / 255, (packed & 255) / 255)
}

export function sameValues(a: ParamValues, b: ParamValues): boolean {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)])
  for (const key of keys) {
    if (a[key] !== b[key]) return false
  }
  return true
}
