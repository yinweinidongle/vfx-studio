import type { EffectMeta } from '../../engine/types'
import { ashimaCredit, bloomCredit, visualParams } from '../credits'

export const meta: EffectMeta = {
  id: 'projectile',
  name: '追影飞弹',
  categoryId: 'weapon',
  category: '兵刃',
  summary: '五发带蛇形修正的能量弹，尾迹、枪口和命中环分开画。',
  description: '弹头走解析弹道，尾迹取稍早的位置拉成细带。命中前枪口闪光，命中时各自弹出冲击环。',
  tags: ['飞弹', '尾迹', '命中', '枪口'],
  accent: '#8eb6ff',
  loop: 2.8,
  posterTime: 1.05,
  params: visualParams('#8eb6ff', '#f0c27a', [
    { key: 'weave', label: '蛇形', type: 'float', min: 0, max: 1.8, step: 0.01, default: 0.7 },
    { key: 'trail', label: '尾长', type: 'float', min: 0.2, max: 1.6, step: 0.01, default: 0.85 },
  ]),
  presets: [
    {
      id: 'volley',
      name: '齐射',
      blurb: '五发钴蓝色，尾迹清楚。',
      values: { intensity: 1.1, speed: 1, color: '#9ec2ff', colorB: '#f2c98a', weave: 0.65, trail: 0.9 },
    },
    {
      id: 'straight',
      name: '直射',
      blurb: '几乎不蛇形，尾迹更短。',
      values: { intensity: 1, speed: 1.3, color: '#d7e6ff', colorB: '#ffffff', weave: 0.08, trail: 0.4 },
    },
    {
      id: 'hunt',
      name: '追猎',
      blurb: '慢，蛇形大，命中更暖。',
      values: { intensity: 1.2, speed: 0.7, color: '#6ef0c5', colorB: '#ffe08a', weave: 1.4, trail: 1.25 },
    },
  ],
  attribution: [bloomCredit, ashimaCredit],
  bloom: { strength: 0.5, radius: 0.34, threshold: 0.74 },
  notes: `## 追影飞弹

五条解析弹道，编号固定，所以每次循环都走同一组弧线。

- 头部是短而亮的拖尾，尾部采样稍早的弹道点。
- 蛇形是沿弹道的正弦，越接近命中越小。
- 枪口闪光只在每发弹道开始的一小段出现。
- 命中环用圆片着色器，按各自相位展开。
- 背景是三层不同深度的雾片，给弹道一个峡谷纵深，不是随机尘埃。`,
}
