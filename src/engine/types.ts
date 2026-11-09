import type { PerspectiveCamera, Scene, Texture, WebGLRenderer } from 'three'
import type { Disposer } from './dispose'
import type { ResolvedQuality } from './quality'

export type ParamValue = number | string | boolean

export interface FloatParam {
  key: string
  label: string
  type: 'float'
  min: number
  max: number
  step: number
  default: number
  unit?: string
}

export interface ColorParam {
  key: string
  label: string
  type: 'color'
  default: string
}

export interface BoolParam {
  key: string
  label: string
  type: 'bool'
  default: boolean
}

export type ParamDef = FloatParam | ColorParam | BoolParam
export type ParamValues = Record<string, ParamValue>

export interface Preset {
  id: string
  name: string
  blurb: string
  values: ParamValues
}

export type AttributionKind = 'incorporated' | 'adapted' | 'original'

export interface Attribution {
  kind: AttributionKind
  title: string
  url: string
  license: string
  note: string
}

export interface BloomSettings {
  strength: number
  radius: number
  threshold: number
}

export interface EffectMeta {
  id: string
  name: string
  categoryId: string
  category: string
  summary: string
  description: string
  tags: string[]
  accent: string
  loop: number
  posterTime: number
  params: ParamDef[]
  presets: Preset[]
  attribution: Attribution[]
  bloom: BloomSettings
  notes: string
}

export type SourceLanguage = 'typescript' | 'glsl' | 'markdown' | 'javascript'
export type SourceRole = 'implementation' | 'shader' | 'compiled' | 'shared' | 'notes' | 'upstream'

export interface SourceFile {
  filename: string
  language: SourceLanguage
  role: SourceRole
  contents: string
}

export interface EffectInstance {
  bloom: BloomSettings
  update(time: number, dt: number, reducedMotion: boolean): void
  apply(values: ParamValues): void
  dispose(): void
}

export interface EffectContext {
  scene: Scene
  camera: PerspectiveCamera
  renderer: WebGLRenderer
  quality: ResolvedQuality
  reducedMotion: boolean
  sprite: Texture
  disposer: Disposer
}

export interface EffectModule {
  meta: EffectMeta
  createEffect(ctx: EffectContext): EffectInstance
  sources: SourceFile[]
}

export interface Category {
  id: string
  name: string
}
