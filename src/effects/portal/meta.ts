import type { EffectMeta } from '../../engine/types'
import { ashimaCredit, bloomCredit, visualParams } from '../credits'

export const meta: EffectMeta = {
  id: 'portal',
  name: '星门裂隙',
  categoryId: 'spell',
  category: '法术',
  summary: '门环符文、轨道火星，门内是扭曲过的星空渲染。',
  description: '先把星空画进一张渲染目标，门洞再按极坐标把它拧成旋涡，上面另压能量细丝。门外仍是同一片星空。',
  tags: ['传送门', '扭曲', '符文', '星空'],
  accent: '#c7b6ff',
  loop: 10,
  posterTime: 1.2,
  params: visualParams('#d7cbff', '#7af0ff', [
    { key: 'twist', label: '扭曲', type: 'float', min: 0.2, max: 2.2, step: 0.01, default: 1 },
    { key: 'throat', label: '喉深', type: 'float', min: 0.4, max: 1.6, step: 0.01, default: 1 },
  ]),
  presets: [
    {
      id: 'violet',
      name: '紫阙',
      blurb: '标准旋涡，紫环青丝。',
      values: { intensity: 1.05, speed: 0.8, color: '#d8ccff', colorB: '#7af0ff', twist: 1, throat: 1 },
    },
    {
      id: 'well',
      name: '深井',
      blurb: '拧得更紧，中心更暗。',
      values: { intensity: 0.9, speed: 0.55, color: '#9eb6ff', colorB: '#f2f6ff', twist: 1.7, throat: 1.4 },
    },
    {
      id: 'dawn',
      name: '曙门',
      blurb: '暖色门环，旋转更快。',
      values: { intensity: 1.2, speed: 1.25, color: '#ffd0a4', colorB: '#ff8d6a', twist: 0.7, throat: 0.75 },
    },
  ],
  attribution: [bloomCredit, ashimaCredit],
  bloom: { strength: 0.26, radius: 0.24, threshold: 0.9 },
  notes: `## 星门裂隙

门内不是一张贴图。每帧把星空场景画进半精度渲染目标，门洞着色器再用极坐标和噪声偏移采样它。

- 门外的穹顶和门内采样的是同一套星空着色器，所以扭曲读得出来。
- 门环是圆环几何体，沿圆周走符文，不靠粒子假装圆环。
- 一圈火星被约束在环上。
- 底座是暗色圆台加法阵，把门户放在地上。

低画质会把渲染目标降到 256。切换效果时渲染目标随 disposer 释放。`,
}
