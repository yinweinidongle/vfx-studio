import type { EffectMeta, EffectModule } from '../engine/types'
import { meta as aura } from './aura/meta'
import { meta as fireworks } from './fireworks/meta'
import { meta as sword } from './sword/meta'
import { meta as projectile } from './projectile/meta'
import { meta as waterfall } from './waterfall/meta'
import { meta as lightning } from './lightning/meta'
import { meta as explosion } from './explosion/meta'
import { meta as portal } from './portal/meta'
import { meta as blackhole } from './blackhole/meta'
import { meta as aurora } from './aurora/meta'
import { meta as beam } from './beam/meta'
import { meta as meteor } from './meteor/meta'

export interface EffectDefinition {
  meta: EffectMeta
  load: () => Promise<EffectModule>
}

export const categories = [
  { id: 'all', name: '全部' },
  { id: 'spell', name: '法术' },
  { id: 'weapon', name: '兵刃' },
  { id: 'nature', name: '自然' },
  { id: 'cosmos', name: '天体' },
  { id: 'festival', name: '庆典' },
]

export const catalog: EffectDefinition[] = [
  { meta: aura, load: () => import('./aura').then((mod) => mod.effectModule) },
  { meta: sword, load: () => import('./sword').then((mod) => mod.effectModule) },
  { meta: fireworks, load: () => import('./fireworks').then((mod) => mod.effectModule) },
  { meta: portal, load: () => import('./portal').then((mod) => mod.effectModule) },
  { meta: waterfall, load: () => import('./waterfall').then((mod) => mod.effectModule) },
  { meta: lightning, load: () => import('./lightning').then((mod) => mod.effectModule) },
  { meta: explosion, load: () => import('./explosion').then((mod) => mod.effectModule) },
  { meta: projectile, load: () => import('./projectile').then((mod) => mod.effectModule) },
  { meta: beam, load: () => import('./beam').then((mod) => mod.effectModule) },
  { meta: blackhole, load: () => import('./blackhole').then((mod) => mod.effectModule) },
  { meta: aurora, load: () => import('./aurora').then((mod) => mod.effectModule) },
  { meta: meteor, load: () => import('./meteor').then((mod) => mod.effectModule) },
]

export function findEffect(id: string): EffectDefinition {
  const found = catalog.find((entry) => entry.meta.id === id)
  const fallback = catalog[0]
  if (found) return found
  if (!fallback) throw new Error('效果注册表是空的')
  return fallback
}
