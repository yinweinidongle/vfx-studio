import type { Attribution, ParamDef } from '../engine/types'

export const bloomCredit: Attribution = {
  kind: 'incorporated',
  title: 'three.js EffectComposer / UnrealBloomPass / OutputPass',
  url: 'https://github.com/mrdoob/three.js/blob/r187/examples/jsm/postprocessing/UnrealBloomPass.js',
  license: 'MIT',
  note: '所有效果共用 three.js r187 的后期链：RenderPass、UnrealBloomPass、自写暗角，以及 OutputPass 的 ACES 色调映射。',
}

export const ashimaCredit: Attribution = {
  kind: 'incorporated',
  title: 'Ashima Arts / Stefan Gustavson webgl-noise',
  url: 'https://github.com/ashima/webgl-noise/blob/master/src/noise3D.glsl',
  license: 'MIT',
  note: 'snoise() 来自 Ashima Arts 的 noise3D.glsl，版权保留在该文件头。fbm、星空和拖尾广告牌是本项目自己的封装。',
}

export const lightningCredit: Attribution = {
  kind: 'adapted',
  title: 'three.js r152 LightningStrike',
  url: 'https://github.com/mrdoob/three.js/blob/r152/examples/jsm/geometries/LightningStrike.js',
  license: 'MIT',
  note: '分叉、传播和网格刷新使用上游 LightningStrike。本地只把 SimplexNoise 的导入改到 three r187 的 three/addons/math/SimplexNoise.js。',
}

export const simplexCredit: Attribution = {
  kind: 'incorporated',
  title: 'three.js SimplexNoise',
  url: 'https://github.com/mrdoob/three.js/blob/r187/examples/jsm/math/SimplexNoise.js',
  license: 'MIT',
  note: 'LightningStrike 使用的噪声类来自 three.js，文件说明基于 Stefan Gustavson 2005 年文章 Simplex noise demystified。',
}

export const waterCredit: Attribution = {
  kind: 'adapted',
  title: 'three.js Water',
  url: 'https://github.com/mrdoob/three.js/blob/r187/examples/jsm/objects/Water.js',
  license: 'MIT',
  note: '水池反射用的是 three.js Water。本地补了 dispose，并去掉材质里的 tonemap / colorspace，避免和 OutputPass 重复编码。上游注释引用了 Slayvin、Stemkoski 和 29a.ch，那些只是 three.js 的参考文献，这里没有从那些网站再复制代码。',
}

export function visualParams(color: string, colorB: string, extra: ParamDef[] = []): ParamDef[] {
  return [
    { key: 'intensity', label: '强度', type: 'float', min: 0.35, max: 2.2, step: 0.01, default: 1 },
    { key: 'speed', label: '速度', type: 'float', min: 0.2, max: 2.4, step: 0.01, default: 1 },
    { key: 'color', label: '主色', type: 'color', default: color },
    { key: 'colorB', label: '辅色', type: 'color', default: colorB },
    ...extra,
  ]
}
