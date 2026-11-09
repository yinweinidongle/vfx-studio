/**
 * 效果模板。
 *
 * 复制整个 `_template` 目录，改名，然后在 `src/effects/registry.ts` 里登记。
 * 这个目录不会出现在图库里，避免把示例球体当成正式效果。
 *
 * 一个效果固定三份文件：
 * 1. meta.ts    只放文案、参数、预设和署名。不要 import three。
 * 2. effect.glsl 用 `// @program 名字` 分段，每段再分 vertex / fragment。
 * 3. index.ts   创建网格、把 uniform 接上参数，并导出 effectModule。
 *
 * 着色器里需要噪声时写：
 *   // @include noise
 *   // @include common
 * noise 必须在 common 前面。不要在着色器里再声明 three 已经注入的
 * position、uv、normal、projectionMatrix、cameraPosition。
 *
 * 把网格放进一个 Group，最后一定要 ctx.disposer.track(root)。
 * 自己创建的 DataTexture / WebGLRenderTarget 分别用 disposer.texture / target。
 * 不要在效果里 new WebGLRenderer，也不要自己 requestAnimationFrame。
 */
import type { EffectMeta } from '../../engine/types'
import { bloomCredit, visualParams } from '../credits'

export const meta: EffectMeta = {
  id: 'template-orb',
  name: '模板光球',
  categoryId: 'spell',
  category: '法术',
  summary: '未登记的示例：热核加一圈慢环。',
  description: '复制这个目录再改。它不在图库里。',
  tags: ['模板'],
  accent: '#7ef3ff',
  loop: 4,
  posterTime: 0.5,
  params: visualParams('#7ef3ff', '#ffffff'),
  presets: [
    { id: 'default', name: '默认', blurb: '模板预设。', values: { intensity: 1, speed: 1, color: '#7ef3ff', colorB: '#ffffff' } },
  ],
  attribution: [bloomCredit],
  bloom: { strength: 0.4, radius: 0.3, threshold: 0.8 },
  notes: '这是模板，不是图库效果。登记步骤写在目录文件顶部和 docs/EFFECT_TEMPLATE.md。',
}
