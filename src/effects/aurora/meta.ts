import type { EffectMeta } from '../../engine/types'
import { ashimaCredit, bloomCredit, visualParams } from '../credits'

export const meta: EffectMeta = {
  id: 'aurora',
  name: '极光帷幕',
  categoryId: 'nature',
  category: '自然',
  summary: '三道折曲光幕、冰面反光和一条银河。',
  description: '光幕是高分段平面，顶点按不同频率起伏。颜色沿高度和噪声分成青、绿和紫，不是竖着的粒子条。',
  tags: ['极光', '光幕', '冰面', '银河'],
  accent: '#9dffc8',
  loop: 14,
  posterTime: 2.4,
  params: visualParams('#b8ffd8', '#8d7dff', [
    { key: 'fold', label: '褶皱', type: 'float', min: 0.2, max: 1.8, step: 0.01, default: 1 },
    { key: 'veil', label: '透明度', type: 'float', min: 0.35, max: 1.4, step: 0.01, default: 1 },
  ]),
  presets: [
    {
      id: 'north',
      name: '北冕',
      blurb: '青绿主幕，褶皱适中。',
      values: { intensity: 1, speed: 0.55, color: '#b6ffd4', colorB: '#7d5cff', fold: 1, veil: 1 },
    },
    {
      id: 'quiet',
      name: '静夜',
      blurb: '几乎不走，幕更薄。',
      values: { intensity: 0.8, speed: 0.25, color: '#d9fff0', colorB: '#9ecbff', fold: 0.45, veil: 0.7 },
    },
    {
      id: 'storm',
      name: '磁暴',
      blurb: '褶皱拉大，紫色压上来。',
      values: { intensity: 1.2, speed: 1.1, color: '#7dffb0', colorB: '#c084ff', fold: 1.55, veil: 1.15 },
    },
  ],
  attribution: [bloomCredit, ashimaCredit],
  bloom: { strength: 0.18, radius: 0.22, threshold: 0.9 },
  notes: `## 极光帷幕

三片光幕各自有相位，顶点位移和片元色带都写在着色器里。

- 高度越高，横向波动越大。
- 噪声把幕折成亮带和暗隙。
- 底下有一层压暗、拉扁的倒影，当作冰面反射。
- 天空有一条横向银河，星点用哈希网格，不是噪声糊成的雾。

绿色是极光本身的颜色，界面强调色仍然是青和紫。`,
}
