import type { EffectMeta } from '../../engine/types'
import { ashimaCredit, bloomCredit, visualParams } from '../credits'

export const meta: EffectMeta = {
  id: 'aura',
  name: '灵纹星环',
  categoryId: 'spell',
  category: '法术',
  summary: '三层符文环、中心涡柱和漂浮印记。',
  description: '地面法阵、倾斜符文环、上升涡旋和中心光柱叠在一起。脉冲沿法阵向外走，而不是一片均匀的光点。',
  tags: ['符文', '环', '涡旋', '法阵'],
  accent: '#79f3ff',
  loop: 8,
  posterTime: 2.2,
  params: visualParams('#79f3ff', '#9a86ff', [
    { key: 'density', label: '符文密度', type: 'float', min: 8, max: 42, step: 1, default: 22 },
    { key: 'height', label: '涡柱高度', type: 'float', min: 0.6, max: 2.4, step: 0.01, default: 1.25 },
  ]),
  presets: [
    {
      id: 'frost',
      name: '霜环',
      blurb: '慢转、密符文、短涡柱。',
      values: { intensity: 1, speed: 0.72, color: '#9af6ff', colorB: '#d7f7ff', density: 32, height: 0.9 },
    },
    {
      id: 'violet',
      name: '紫府',
      blurb: '更快的外环和更高的涡柱。',
      values: { intensity: 1.15, speed: 1.35, color: '#b9a6ff', colorB: '#6de8ff', density: 18, height: 1.7 },
    },
    {
      id: 'seal',
      name: '金印',
      blurb: '低涡柱，符文压得很密。',
      values: { intensity: 1.25, speed: 0.48, color: '#ffd27a', colorB: '#ff8b6a', density: 40, height: 0.7 },
    },
  ],
  attribution: [bloomCredit, ashimaCredit],
  bloom: { strength: 0.28, radius: 0.26, threshold: 0.88 },
  notes: `## 灵纹星环

这是原创场景，不是把粒子系统换了颜色。

- 地面是极坐标法阵：同心环、角度刻度和由哈希决定的符文缺口。
- 三枚圆环几何体各自倾斜、对向旋转，管壁着色器沿圆周画符文。
- 中心有粗细两根能量柱，噪声沿高度滚动。
- 涡旋粒子按种子走螺旋，不是随机布朗运动。另有一圈慢速印记。
- 脉冲环写在地面着色器里，按循环时间向外扩。

噪声使用 Ashima 的 simplex。辉光来自共享的 UnrealBloomPass，阈值压得较高，只让符文热芯开花。`,
}
