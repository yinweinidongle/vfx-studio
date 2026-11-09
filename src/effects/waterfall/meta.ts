import type { EffectMeta } from '../../engine/types'
import { ashimaCredit, bloomCredit, visualParams, waterCredit } from '../credits'

export const meta: EffectMeta = {
  id: 'waterfall',
  name: '层瀑云雾',
  categoryId: 'nature',
  category: '自然',
  summary: '四层水幕、落点泡沫、上升薄雾，水池用 three.js 的反射水面。',
  description: '水幕是被噪声撕开的薄片，不是粒子雨。落点有泡沫和短喷溅，雾是正常混合的软团，水池单独反射场景。',
  tags: ['水幕', '泡沫', '薄雾', '反射'],
  accent: '#b7fff2',
  loop: 8,
  posterTime: 1.4,
  params: visualParams('#d9fff8', '#7ee0ff', [
    { key: 'flow', label: '流速', type: 'float', min: 0.35, max: 2, step: 0.01, default: 1 },
    { key: 'mist', label: '雾量', type: 'float', min: 0.2, max: 1.8, step: 0.01, default: 1 },
  ]),
  presets: [
    {
      id: 'moon',
      name: '月瀑',
      blurb: '冷白水幕，雾比较满。',
      values: { intensity: 1, speed: 0.85, color: '#e7fffb', colorB: '#8fdfff', flow: 0.8, mist: 1.15 },
    },
    {
      id: 'torrent',
      name: '急流',
      blurb: '水幕更快，喷溅更亮。',
      values: { intensity: 1.25, speed: 1.4, color: '#ffffff', colorB: '#9af0ff', flow: 1.6, mist: 0.7 },
    },
    {
      id: 'glen',
      name: '深涧',
      blurb: '压暗，只留薄雾和暗青。',
      values: { intensity: 0.75, speed: 0.6, color: '#9fe7dd', colorB: '#4f8f98', flow: 0.55, mist: 1.4 },
    },
  ],
  attribution: [waterCredit, bloomCredit, ashimaCredit],
  bloom: { strength: 0.32, radius: 0.28, threshold: 0.86 },
  notes: `## 层瀑云雾

水池是 three.js Water 的改编，水幕、泡沫、喷溅和焦散是原创。

- 四片不同宽度和深度的平面，顶点随噪声起伏，片元用滚动噪声挖出水流间隙。
- 泡沫粒子集中在落点一带，上下浮动。
- 薄雾用正常混合、很低的透明度，避免变成另一团加法光点。
- 落点另有短促喷溅拖尾。
- 水面之上铺了一层很淡的焦散。
- 岩壁是不透明的噪声明暗，用来把水幕衬出来。

Water 的反射目标在切换效果时通过新增的 dispose() 释放。`,
}
