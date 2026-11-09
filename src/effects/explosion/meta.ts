import type { EffectMeta } from '../../engine/types'
import { ashimaCredit, bloomCredit, visualParams } from '../credits'

export const meta: EffectMeta = {
  id: 'explosion',
  name: '技能爆发',
  categoryId: 'spell',
  category: '法术',
  summary: '聚能、双层冲击壳、放射拖尾、碎块和烟。',
  description: '一个循环里先把光点吸向核心，再炸开两层菲涅尔壳。碎块走抛物线，烟用正常混合，地面留下灼环。',
  tags: ['聚能', '冲击', '碎块', '烟'],
  accent: '#ffb15e',
  loop: 3.6,
  posterTime: 0.95,
  params: visualParams('#ffd7a1', '#ff6b3d', [
    { key: 'charge', label: '聚能', type: 'float', min: 0.4, max: 1.6, step: 0.01, default: 1 },
    { key: 'debris', label: '碎块', type: 'float', min: 0.3, max: 1.8, step: 0.01, default: 1 },
  ]),
  presets: [
    {
      id: 'cast',
      name: '咏唱',
      blurb: '聚能更久，金核。',
      values: { intensity: 1.1, speed: 0.8, color: '#ffe0a8', colorB: '#ff7a3c', charge: 1.25, debris: 0.8 },
    },
    {
      id: 'nova',
      name: '新星',
      blurb: '快，壳更亮，碎块多。',
      values: { intensity: 1.4, speed: 1.35, color: '#fff6ea', colorB: '#ff4d6a', charge: 0.7, debris: 1.5 },
    },
    {
      id: 'ember',
      name: '余烬',
      blurb: '低亮度，烟和碎块留得更清楚。',
      values: { intensity: 0.75, speed: 0.7, color: '#ffb07a', colorB: '#6a2a22', charge: 0.9, debris: 1.2 },
    },
  ],
  attribution: [bloomCredit, ashimaCredit],
  bloom: { strength: 0.34, radius: 0.3, threshold: 0.84 },
  notes: `## 技能爆发

时间轴写在着色器里，约 3.6 秒循环。

- 0 到 0.55 秒：粒子向核心收拢。
- 0.55 秒：两层菲涅尔球壳依次胀开。
- 同期放射状拖尾冲出去。
- 碎块是方块实例，带旋转和重力，不是光点。
- 烟是正常混合的大软粒子，颜色偏灰，避免和火花糊成一团。
- 地面灼环在爆心停留后变暗。`,
}
