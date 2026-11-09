import type { EffectMeta } from '../../engine/types'
import { ashimaCredit, bloomCredit, visualParams } from '../credits'

export const meta: EffectMeta = {
  id: 'blackhole',
  name: '吸积黑洞',
  categoryId: 'cosmos',
  category: '天体',
  summary: '暗视界、光子环、多普勒吸积盘，背景星光被偏折。',
  description: '盘面按半径从白热落到暗赤，一侧更亮。背景球用近似偏折把星点扯向光子环，中间是纯黑的视界。',
  tags: ['黑洞', '吸积盘', '透镜', '恒星'],
  accent: '#ffd2a8',
  loop: 12,
  posterTime: 2,
  params: visualParams('#fff1dd', '#ff7a3a', [
    { key: 'spin', label: '转速', type: 'float', min: 0.2, max: 2, step: 0.01, default: 1 },
    { key: 'lens', label: '偏折', type: 'float', min: 0.2, max: 1.8, step: 0.01, default: 1 },
  ]),
  presets: [
    {
      id: 'sagittarius',
      name: '银心',
      blurb: '暖盘，中等偏折。',
      values: { intensity: 1.05, speed: 0.7, color: '#fff4e4', colorB: '#ff7a32', spin: 0.85, lens: 1 },
    },
    {
      id: 'quiet',
      name: '静默',
      blurb: '转得慢，盘更薄更暗。',
      values: { intensity: 0.75, speed: 0.4, color: '#ffd8c2', colorB: '#8a3a22', spin: 0.35, lens: 0.7 },
    },
    {
      id: 'photon',
      name: '光子环',
      blurb: '偏折拉满，内缘更白。',
      values: { intensity: 1.3, speed: 1.1, color: '#ffffff', colorB: '#ffb089', spin: 1.4, lens: 1.55 },
    },
  ],
  attribution: [bloomCredit, ashimaCredit],
  bloom: { strength: 0.22, radius: 0.22, threshold: 0.92 },
  notes: `## 吸积黑洞

偏折是着色器里的近似，不是引用某篇论文的实现代码。

- 背景在大球内侧计算视线，按到原点的最近距离把方向轻轻拧弯，再采样星点。
- 光子环是很细的圆环，只在内缘发白。
- 吸积盘用半径决定温度，用角度做多普勒明暗，再用螺旋压出尘带。
- 视界是不发光的黑球，挡住盘心。
- 吸积流是几条收束的螺旋拖尾，终点落在视界外。

Bloom 阈值高，免得整张盘糊成一块光。`,
}
