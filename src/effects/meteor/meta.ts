import type { EffectMeta } from '../../engine/types'
import { ashimaCredit, bloomCredit, visualParams } from '../credits'

export const meta: EffectMeta = {
  id: 'meteor',
  name: '流星坠',
  categoryId: 'cosmos',
  category: '天体',
  summary: '夜侧行星、大气辉光，以及会中途碎开的燃烧流星。',
  description: '行星只露出一条大气边缘和稀疏灯火。流星先是一条白热头，过了碎裂点才分裂成更短的子轨迹。',
  tags: ['流星', '大气', '碎裂', '行星'],
  accent: '#ffb15a',
  loop: 5.5,
  posterTime: 1.35,
  params: visualParams('#fff1d4', '#ff8a3d', [
    { key: 'burn', label: '燃烧', type: 'float', min: 0.4, max: 1.8, step: 0.01, default: 1 },
    { key: 'breakup', label: '碎裂', type: 'float', min: 0.35, max: 0.8, step: 0.01, default: 0.62 },
  ]),
  presets: [
    {
      id: 'entry',
      name: '再入',
      blurb: '标准角度，中段碎裂。',
      values: { intensity: 1.1, speed: 1, color: '#fff3d8', colorB: '#ff8a3d', burn: 1, breakup: 0.62 },
    },
    {
      id: 'slow',
      name: '慢火',
      blurb: '烧得更久，碎裂更晚。',
      values: { intensity: 0.95, speed: 0.62, color: '#ffe0b0', colorB: '#ff5a2a', burn: 1.4, breakup: 0.74 },
    },
    {
      id: 'shower',
      name: '流星雨',
      blurb: '更快，更早碎开。',
      values: { intensity: 1.25, speed: 1.45, color: '#ffffff', colorB: '#ffd08a', burn: 0.8, breakup: 0.42 },
    },
  ],
  attribution: [bloomCredit, ashimaCredit],
  bloom: { strength: 0.55, radius: 0.34, threshold: 0.72 },
  notes: `## 流星坠

行星和流星是两套几何。

- 行星是大球，夜侧几乎全黑，只在边缘留一层大气，暗面有极稀的灯火。
- 再外面一圈更淡的大气壳。
- 每颗流星是相机朝向的拖尾。头是白的，尾落到辅色。
- 走过碎裂参数之后，父轨迹变短，另一组种子从同一点岔出去。

颜色是再入的暖色，和法术青紫、瀑布冷青分开。`,
}
