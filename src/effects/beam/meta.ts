import type { EffectMeta } from '../../engine/types'
import { ashimaCredit, bloomCredit, lightningCredit, simplexCredit, visualParams } from '../credits'

export const meta: EffectMeta = {
  id: 'beam',
  name: '离子束',
  categoryId: 'weapon',
  category: '兵刃',
  summary: '六角枪口、热芯、外壳电弧和被打中的护盾。',
  description: '光束是两层圆柱：里面一道细白芯，外面一层滚动的离子壳。枪口有三枚六角环，末端护盾跟着冲击起涟漪。',
  tags: ['光束', '护盾', '电弧', '枪口'],
  accent: '#67f6ff',
  loop: 4,
  posterTime: 0.8,
  params: visualParams('#67f6ff', '#d8fbff', [
    { key: 'width', label: '束宽', type: 'float', min: 0.4, max: 1.6, step: 0.01, default: 1 },
    { key: 'flicker', label: '扰动', type: 'float', min: 0.2, max: 2, step: 0.01, default: 1 },
  ]),
  presets: [
    {
      id: 'ion',
      name: '离子',
      blurb: '标准青束。',
      values: { intensity: 1.1, speed: 1, color: '#67f6ff', colorB: '#e7fdff', width: 1, flicker: 1 },
    },
    {
      id: 'lance',
      name: '长枪',
      blurb: '更细、更快、更白。',
      values: { intensity: 1.3, speed: 1.5, color: '#e9fbff', colorB: '#9ad7ff', width: 0.55, flicker: 0.45 },
    },
    {
      id: 'unstable',
      name: '不稳',
      blurb: '束体发胖，扰动很重。',
      values: { intensity: 1, speed: 0.8, color: '#8f7dff', colorB: '#67f6ff', width: 1.4, flicker: 1.7 },
    },
  ],
  attribution: [lightningCredit, simplexCredit, bloomCredit, ashimaCredit],
  bloom: { strength: 0.3, radius: 0.24, threshold: 0.86 },
  notes: `## 离子束

束体是圆柱几何，不是一条拉长的广告牌。

- 内芯细、高亮、少噪声。
- 外壳更粗，噪声沿长度快速滚动，半径在顶点里轻微胀缩。
- 枪口三枚扁环错相旋转。
- 两侧短电弧使用 LightningStrike，只当作束体上的二次放电。
- 末端是菲涅尔护盾，冲击粒子从命中点溅开。`,
}
