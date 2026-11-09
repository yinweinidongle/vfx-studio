import { reactive } from 'vue'
import { catalog, findEffect } from '../effects/registry'
import { defaultsFor, presetValues, sameValues, sanitizeParams } from '../engine/params'
import { queryToState, queriesEqual, stateToQuery } from '../engine/url'
import type { QualityChoice } from '../engine/quality'
import type { ParamValues } from '../engine/types'

function initialQuery(): Record<string, string> {
  const hash = window.location.hash
  const queryIndex = hash.indexOf('?')
  const params = new URLSearchParams(queryIndex >= 0 ? hash.slice(queryIndex + 1) : '')
  const record: Record<string, string> = {}
  params.forEach((value, key) => {
    record[key] = value
  })
  return record
}

const bootQuery = initialQuery()
const bootEffect = findEffect(bootQuery.fx ?? 'aura')
const boot = queryToState(bootEffect.meta, bootQuery)

export const studio = reactive({
  effectId: boot.effectId,
  presetId: boot.presetId,
  quality: boot.quality,
  playing: boot.playing,
  cinema: false,
  showFps: true,
  fps: null as number | null,
  reduceMotion: boot.reduceMotion,
  systemReduce: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  time: boot.time,
  seekToken: 0,
  values: boot.values as ParamValues,
  mobilePane: 'stage' as 'gallery' | 'stage' | 'source',
  sideTab: 'controls' as 'controls' | 'source',
  error: null as string | null,
  loading: true,
  ready: false,
  helpOpen: false,
})

export function currentMeta() {
  return findEffect(studio.effectId).meta
}

export function reducedMotionActive(): boolean {
  return studio.reduceMotion ?? studio.systemReduce
}

export function selectEffect(id: string): void {
  const meta = findEffect(id).meta
  studio.effectId = meta.id
  studio.presetId = meta.presets[0]?.id ?? ''
  studio.values = presetValues(meta, studio.presetId) ?? defaultsFor(meta)
  studio.time = null
  studio.playing = true
  if (window.innerWidth < 900) studio.mobilePane = 'stage'
}

export function selectPreset(id: string): void {
  const meta = currentMeta()
  const values = presetValues(meta, id)
  if (!values) return
  studio.presetId = id
  studio.values = values
}

export function setParam(key: string, value: number | string | boolean): void {
  const meta = currentMeta()
  const next = { ...studio.values, [key]: value }
  const sanitized = sanitizeParams(meta, next)
  studio.values = sanitized.values
  const matched = meta.presets.find((preset) => sameValues(presetValues(meta, preset.id) ?? {}, sanitized.values))
  studio.presetId = matched?.id ?? ''
}

export function setQuality(choice: QualityChoice): void {
  studio.quality = choice
}

export function togglePlay(): void {
  studio.playing = !studio.playing
}

export function replay(): void {
  studio.time = 0
  studio.seekToken += 1
  studio.playing = true
}

export function seek(time: number): void {
  studio.time = time
  studio.seekToken += 1
  studio.playing = false
}

export function activePresetId(): string {
  const meta = currentMeta()
  const match = meta.presets.find((preset) => sameValues(presetValues(meta, preset.id) ?? {}, studio.values))
  return match?.id ?? ''
}

export function toQueryRecord(): Record<string, string> {
  return stateToQuery(currentMeta(), {
    effectId: studio.effectId,
    presetId: studio.presetId,
    quality: studio.quality,
    playing: studio.playing,
    reduceMotion: studio.reduceMotion,
    time: studio.playing ? null : studio.time,
    values: studio.values,
  })
}

export function applyQuery(query: Record<string, string | string[] | null | undefined>): void {
  const fx = typeof query.fx === 'string' ? query.fx : Array.isArray(query.fx) ? query.fx[0] : studio.effectId
  const meta = findEffect(fx ?? studio.effectId).meta
  const next = queryToState(meta, query)
  studio.effectId = meta.id
  studio.presetId = next.presetId
  studio.quality = next.quality
  studio.playing = next.playing
  studio.reduceMotion = next.reduceMotion
  studio.time = next.time
  studio.values = next.values
  if (next.time !== null) studio.seekToken += 1
}

export function queryIsCurrent(query: Record<string, string | string[] | null | undefined>): boolean {
  return queriesEqual(toQueryRecord(), query)
}

export function neighbor(direction: 1 | -1): void {
  const index = catalog.findIndex((entry) => entry.meta.id === studio.effectId)
  const next = catalog[(index + direction + catalog.length) % catalog.length]
  if (next) selectEffect(next.meta.id)
}

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
motionQuery.addEventListener('change', () => {
  studio.systemReduce = motionQuery.matches
})
