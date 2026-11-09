import type { EffectMeta } from '../../engine/types'
import { ashimaCredit, bloomCredit, visualParams } from '../credits'

export const meta: EffectMeta = {
  id: 'sword',
  name: '月华剑气',
  categoryId: 'weapon',
  category: '兵刃',
  summary: '收束的弯刃、热刃口、冲击环和沿切线飞出的火星。',
  description: '剑气是一条按贝塞尔展开的锥形飘带。刃口保持白热，外缘吃辅色，斩击落到末端时地面弹出冲击环。',
  tags: ['斩击', '飘带', '冲击环', '火星'],
  accent: '#e8fbff',
  loop: 3.4,
  posterTime: 0.36,
  params: visualParams('#d9fbff', '#79e7ff', [
    { key: 'width', label: '刃宽', type: 'float', min: 0.35, max: 1.8, step: 0.01, default: 1 },
    { key: 'sparks', label: '火星', type: 'float', min: 0.2, max: 2, step: 0.01, default: 1 },
  ]),
  presets: [
    {
      id: 'crescent',
      name: '月弧',
      blurb: '标准宽度，青白刃。',
      values: { intensity: 1.05, speed: 1, color: '#e7fdff', colorB: '#7ee9ff', width: 1, sparks: 1 },
    },
    {
      id: 'break',
      name: '断岳',
      blurb: '更快、更宽，冲击更亮。',
      values: { intensity: 1.4, speed: 1.45, color: '#ffffff', colorB: '#ffd29a', width: 1.45, sparks: 1.4 },
    },
    {
      id: 'thread',
      name: '细霜',
      blurb: '窄刃，火星收着走。',
      values: { intensity: 0.9, speed: 0.72, color: '#c9f6ff', colorB: '#9eb6ff', width: 0.48, sparks: 0.45 },
    },
  ],
  attribution: [bloomCredit, ashimaCredit],
  bloom: { strength: 0.32, radius: 0.28, threshold: 0.86 },
  notes: `## 月华剑气

三条错开的贝塞尔飘带，不是一张拉伸的贴图。

- 飘带由一串相机朝向的四边形拼成，宽度用正弦收成两端尖、中间宽。
- 显露窗口沿曲线移动，所以能看见斩击被“抽出来”。
- 刃心是白色，外缘是辅色，前端还有一截更热的刃口。
- 每条斩击在末端触发一枚扩散冲击环。
- 火星从当前刃尖位置迸出，方向沿着曲线切线附近散开。

曲线控制点写在实现里，着色器只负责展开和上色。`,
}
