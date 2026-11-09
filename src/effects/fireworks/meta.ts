import type { EffectMeta } from '../../engine/types'
import { ashimaCredit, bloomCredit, visualParams } from '../credits'

export const meta: EffectMeta = {
  id: 'fireworks',
  name: '夜空烟花',
  categoryId: 'festival',
  category: '庆典',
  summary: '升空、爆开、下坠和余烬是同一发炮弹的四个阶段。',
  description: '每发炮弹先拉出上升轨迹，再按种子方向爆成拖尾，然后分裂出白热碎光，最后只剩受重力牵引的余烬。',
  tags: ['升空', '爆裂', '重力', '余烬'],
  accent: '#ffb15a',
  loop: 5.4,
  posterTime: 1.85,
  params: visualParams('#ffb15a', '#ff6d8a', [
    { key: 'gravity', label: '重力', type: 'float', min: 0.4, max: 2.2, step: 0.01, default: 1 },
    { key: 'shells', label: '炮弹数', type: 'float', min: 2, max: 4, step: 1, default: 4 },
  ]),
  presets: [
    {
      id: 'festival',
      name: '庙会',
      blurb: '四发交错，金红拖尾。',
      values: { intensity: 1.1, speed: 1, color: '#ffc56a', colorB: '#ff5d7a', gravity: 1, shells: 4 },
    },
    {
      id: 'cold',
      name: '冷焰',
      blurb: '更慢，爆开后留得更久。',
      values: { intensity: 1.2, speed: 0.62, color: '#9ae7ff', colorB: '#d8e4ff', gravity: 0.55, shells: 3 },
    },
    {
      id: 'signal',
      name: '信号弹',
      blurb: '两发高重力，白热头。',
      values: { intensity: 1.35, speed: 1.25, color: '#fff1d2', colorB: '#ff9a4a', gravity: 1.6, shells: 2 },
    },
  ],
  attribution: [bloomCredit, ashimaCredit],
  bloom: { strength: 0.42, radius: 0.32, threshold: 0.78 },
  notes: `## 夜空烟花

原创的分段弹道，不是静态烟花贴图。

- 少量种子扮演火箭：在爆点之前从地面拉到顶点。
- 主体在顶点按种子方向散开，位移是 \`速度 × 时间 + 重力 × 时间²\`。
- 靠近尾部的种子晚半秒再炸一次，当作二次碎裂。
- 余烬是另一套圆形粒子，只在爆开后出现，下落更慢。
- 地面有对应的光池，位置和炮弹原点一致。
- 天空是渐变穹顶加星，不是一张背景图。

拖尾用相机朝向的四边形，热芯在头部，尾部变细。Bloom 阈值让白热头部开花，彩色尾迹还留得住。`,
}
