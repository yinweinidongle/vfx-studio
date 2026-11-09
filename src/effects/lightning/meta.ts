import type { EffectMeta } from '../../engine/types'
import { ashimaCredit, bloomCredit, lightningCredit, simplexCredit, visualParams } from '../credits'

export const meta: EffectMeta = {
  id: 'lightning',
  name: '裂空雷',
  categoryId: 'nature',
  category: '自然',
  summary: '上游 LightningStrike 的分支电弧，加上落地闪光和斜雨。',
  description: '电弧的分叉和传播来自 three.js r152 的 LightningStrike。场景自己补了雷云、落地冲击和同一方向的雨丝。',
  tags: ['闪电', '分支', '落点', '雷雨'],
  accent: '#d9e6ff',
  loop: 6,
  posterTime: 0.35,
  params: visualParams('#e7f0ff', '#8f7dff', [
    { key: 'rough', label: '曲折', type: 'float', min: 0.2, max: 1, step: 0.01, default: 0.82 },
    { key: 'bolts', label: '主弧', type: 'float', min: 1, max: 3, step: 1, default: 2 },
  ]),
  presets: [
    {
      id: 'storm',
      name: '夜雷',
      blurb: '两条主弧，紫边。',
      values: { intensity: 1.15, speed: 1, color: '#f4f7ff', colorB: '#9a86ff', rough: 0.86, bolts: 2 },
    },
    {
      id: 'clean',
      name: '直击',
      blurb: '更直，单弧，白热。',
      values: { intensity: 1.3, speed: 0.7, color: '#ffffff', colorB: '#c5d8ff', rough: 0.35, bolts: 1 },
    },
    {
      id: 'web',
      name: '蛛网',
      blurb: '三条更皱的弧。',
      values: { intensity: 1, speed: 1.3, color: '#d5e4ff', colorB: '#6ec8ff', rough: 0.96, bolts: 3 },
    },
  ],
  attribution: [lightningCredit, simplexCredit, bloomCredit, ashimaCredit],
  bloom: { strength: 0.38, radius: 0.28, threshold: 0.82 },
  notes: `## 裂空雷

分支网格不是手写的随机折线。\`LightningStrike.update(time)\` 负责传播、分叉和半径。

本地只做这些层：

- 电弧材质按 UV 把棱柱中心画成白热，边缘落到辅色。
- 天空穹顶跟着落点闪一下。
- 落点有冲击环和一小组火星。
- 雨是同一风向的短拖尾，用来交代风暴，不是主效果。

上游文件在源码页的 \`LightningStrike.js\`。改动只有 SimplexNoise 的导入路径。`,
}
