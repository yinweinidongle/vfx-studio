# 第三方声明

折光社的画面、参数和场景编排是本项目原创。下面这些文件是直接纳入或按许可证改编的上游代码。Shadertoy 没有被当作开放许可证来源，这里也没有引用它。

## 直接纳入

### three.js r187

- 许可证：MIT
- 版权：Copyright © 2010-2026 three.js authors
- 仓库：https://github.com/mrdoob/three.js
- 许可证全文：https://github.com/mrdoob/three.js/blob/r187/LICENSE
- 本地副本：`third_party/licenses/three-js-MIT.txt`
- 运行时使用：`three` 包，以及 `EffectComposer`、`RenderPass`、`UnrealBloomPass`、`OutputPass`、`ShaderPass`、`SimplexNoise`
- 具体文件：
  - https://github.com/mrdoob/three.js/blob/r187/examples/jsm/postprocessing/UnrealBloomPass.js
  - https://github.com/mrdoob/three.js/blob/r187/examples/jsm/postprocessing/EffectComposer.js
  - https://github.com/mrdoob/three.js/blob/r187/examples/jsm/postprocessing/OutputPass.js
  - https://github.com/mrdoob/three.js/blob/r187/examples/jsm/math/SimplexNoise.js

色调映射只在 `OutputPass` 做一次。效果材质把 `toneMapped` 设为 false，避免和后期链重复编码。

### Ashima Arts / Stefan Gustavson webgl-noise

- 许可证：MIT
- 版权：Copyright (C) 2011 Ashima Arts. Copyright (C) 2011-2012 Stefan Gustavson.
- 作者：Ian McEwan、Ashima Arts、Stefan Gustavson
- 文件：https://github.com/ashima/webgl-noise/blob/master/src/noise3D.glsl
- 许可证：https://github.com/ashima/webgl-noise/blob/master/LICENSE
- 本地副本：`src/shaders/snoise3D.glsl`，文件头保留上游版权。许可证副本：`third_party/licenses/ashima-webgl-noise-MIT.txt`
- `fbm`、`hash*`、`stars` 和 `streakBillboard` 在 `src/shaders/common.glsl`，是本项目自己写的，不是上游代码。

### highlight.js

- 许可证：BSD-3-Clause
- 版权：Copyright (c) 2006 Ivan Sagalaev
- 仓库：https://github.com/highlightjs/highlight.js
- 本地许可证：`third_party/licenses/highlight.js-BSD-3-Clause.txt`
- 用途：源码面板的语法高亮。高亮对象是本仓库里的实现文件，不是一段通用示例。

### 字体

- Instrument Sans，SIL Open Font License。https://github.com/googlefonts/instrumentsans
- Syne，SIL Open Font License。https://github.com/googlefonts/syne
- 本地许可证：`third_party/licenses/instrument-sans-OFL.txt`、`third_party/licenses/syne-OFL.txt`
- 中文界面使用系统里已有的中文字体，不另嵌一套中文网页字体。

## 改编后纳入

### three.js r152 LightningStrike

上游在 r160 之后的发行版里已经删除这个几何体。本仓库从 r152 的发布文件纳入，算法没有改。

- 许可证：MIT
- 版权：Copyright © 2010-2023 three.js authors
- 上游：https://github.com/mrdoob/three.js/blob/r152/examples/jsm/geometries/LightningStrike.js
- 本地：`src/vendor/LightningStrike.js`
- 唯一改动：`SimplexNoise` 的导入路径改为 `three/addons/math/SimplexNoise.js`，以便和 three r187 一起编译。
- 使用它的效果：裂空雷、离子束。界面署名标为「改编」。

### three.js r187 Water

- 许可证：MIT
- 上游：https://github.com/mrdoob/three.js/blob/r187/examples/jsm/objects/Water.js
- 本地：`src/vendor/Water.js`
- 改动：补了 `dispose()`，释放反射渲染目标和材质；去掉了材质里的 `<tonemapping_fragment>` 和 `<colorspace_fragment>`，把编码留给共用的 `OutputPass`。
- 法线贴图是本地程序生成的 `DataTexture`，不是 three.js 示例里的 `waternormals.jpg`。
- 上游文件里提到的 Slayvin、Stemkoski 和 29a.ch 只是 three.js 自己的参考文献。那些网站的代码没有被复制进本仓库。
- 使用它的效果：层瀑云雾。界面署名标为「改编」。

## 原创

十二条效果的场景、着色器编排、拖尾几何、参数、预设和中文界面是本项目写的。模板在 `src/effects/_template`，不会出现在图库里。
