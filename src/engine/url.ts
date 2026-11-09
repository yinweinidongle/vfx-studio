import type { EffectMeta, ParamValues } from './types'
import type { QualityChoice } from './quality'
import { defaultsFor, presetValues, sanitizeParams } from './params'

export interface StudioRouteState {
  effectId: string
  presetId: string
  quality: QualityChoice
  playing: boolean
  reduceMotion: boolean | null
  time: number | null
  values: ParamValues
}

const qualities = new Set<QualityChoice>(['auto', 'low', 'high'])

export function stateToQuery(meta: EffectMeta, state: StudioRouteState): Record<string, string> {
  const query: Record<string, string> = { fx: meta.id }
  if (state.presetId) query.preset = state.presetId
  if (state.quality !== 'auto') query.q = state.quality
  if (!state.playing) query.play = '0'
  if (state.reduceMotion === true) query.motion = 'reduce'
  if (state.time !== null) query.t = state.time.toFixed(2)
  const base = state.presetId ? presetValues(meta, state.presetId) ?? defaultsFor(meta) : defaultsFor(meta)
  for (const param of meta.params) {
    const value = state.values[param.key]
    if (value === base[param.key]) continue
    if (typeof value === 'boolean') query[param.key] = value ? '1' : '0'
    else if (typeof value === 'number') query[param.key] = String(Math.round(value * 1000) / 1000)
    else query[param.key] = value.replace('#', '')
  }
  return query
}

export function queryToState(
  meta: EffectMeta,
  query: Record<string, string | string[] | null | undefined>,
): StudioRouteState {
  const read = (key: string): string | undefined => {
    const value = query[key]
    if (Array.isArray(value)) return value.find((item): item is string => typeof item === 'string')
    return typeof value === 'string' ? value : undefined
  }
  const presetId = read('preset') ?? meta.presets[0]?.id ?? ''
  const base = presetValues(meta, presetId) ?? defaultsFor(meta)
  const incoming: ParamValues = { ...base }
  for (const param of meta.params) {
    const raw = read(param.key)
    if (raw !== undefined) incoming[param.key] = raw
  }
  const { values } = sanitizeParams(meta, incoming)
  const qualityRaw = read('q')
  const quality: QualityChoice = qualityRaw && qualities.has(qualityRaw as QualityChoice)
    ? qualityRaw as QualityChoice
    : 'auto'
  const timeRaw = read('t')
  const time = timeRaw !== undefined && Number.isFinite(Number(timeRaw)) ? Number(timeRaw) : null
  const motion = read('motion')
  return {
    effectId: meta.id,
    presetId: meta.presets.some((preset) => preset.id === presetId) ? presetId : '',
    quality,
    playing: read('play') !== '0',
    reduceMotion: motion === 'reduce' ? true : motion === 'full' ? false : null,
    time,
    values,
  }
}

export function queriesEqual(
  a: Record<string, string>,
  b: Record<string, string | string[] | null | undefined>,
): boolean {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)])
  for (const key of keys) {
    const right = b[key]
    const flat = Array.isArray(right) ? right.find((item) => typeof item === 'string') : right
    if ((a[key] ?? '') !== (flat ?? '')) return false
  }
  return true
}
