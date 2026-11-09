# 折光社

十二条分层的实时视效。Vue 3、TypeScript、Vite 和 Three.js，共用一个 WebGL2 画布。界面是中文。每条效果有自己的几何、着色器和时间结构，不是同一套粒子换颜色。

图库、参数和源码在同一页。源码面板读的是效果目录里的 `index.ts` 和 `effect.glsl`，以及拼接后真正交给 GPU 的程序。

## 本地运行

需要 Node.js 22。

```bash
npm install
npm run dev
```

开发服务器是 [http://127.0.0.1:47321](http://127.0.0.1:47321)。

```bash
npm run typecheck
npm test
npm run build
npm run preview
```

预览默认在 [http://127.0.0.1:47322](http://127.0.0.1:47322)。

嵌套路径和 GitHub Pages 项目站一样，用 `VITE_BASE`：

```bash
VITE_BASE=/vfx-studio/ npm run build
VITE_BASE=/vfx-studio/ npm run preview
```

地址会变成 `http://127.0.0.1:47322/vfx-studio/`。路由是 hash，所以不需要服务器重写。图库缩略图来自 `public/thumbs/<效果 id>.jpg`，运行时拼在 base 后面，例如 `/vfx-studio/thumbs/aura.jpg`。

端到端测试会自己用 `/vfx-studio/` 作为 base 构建并预览，并确认十二张缩略图都真正解码成功：

```bash
npx playwright install chromium
npm run test:e2e
```

## 效果

| id | 名称 | 在看什么 |
| --- | --- | --- |
| aura | 灵纹星环 | 法阵、三层符文环、涡柱 |
| sword | 月华剑气 | 锥形刃、热刃口、冲击环、火星 |
| fireworks | 夜空烟花 | 升空、爆开、重力下坠、地面余光 |
| portal | 星门裂隙 | 扭曲的门内星空、符文环、基座 |
| waterfall | 层瀑云雾 | 水幕、泡沫、薄雾、three.js Water |
| lightning | 裂空雷 | r152 LightningStrike、雨、着地点 |
| explosion | 技能爆发 | 冲击壳、条带、碎片 |
| projectile | 追影飞弹 | 五条弹道、拖尾、命中环 |
| beam | 离子束 | 细束、六角环、护盾、电弧 |
| blackhole | 吸积黑洞 | 视界、光子环、吸积盘、偏折星空 |
| aurora | 极光帷幕 | 帷幕、冰面反光 |
| meteor | 流星坠 | 再入拖尾、碎裂、城市灯火 |

画质分自动、低、高。低画质关掉泛光并压低粒子数量。设备像素比有上限。帧率按钮显示的是最近采样，不是固定的 60fps。

## 增加效果

看 [docs/EFFECT_TEMPLATE.md](docs/EFFECT_TEMPLATE.md)。从 `src/effects/_template` 复制，再登记到 `src/effects/registry.ts`。

## 第三方代码

署名在每条效果的调控面板里，区分直接纳入、改编和原创。完整清单是 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)，许可证原文在 `third_party/licenses/`。

纳入的上游：

- three.js r187，MIT。后期链和 SimplexNoise。
- Ashima / Gustavson `noise3D.glsl`，MIT。
- three.js r152 `LightningStrike.js`，MIT。只改了 SimplexNoise 的导入路径。
- three.js r187 `Water.js`，MIT。补了 dispose，并去掉材质里的色调映射，避免和 OutputPass 重复。
- highlight.js，BSD-3-Clause。
- Instrument Sans 与 Syne，SIL OFL。

没有使用 Shadertoy。Water.js 上游注释里的 Slayvin、Stemkoski、29a.ch 只是 three.js 的参考文献，那些站点的代码没有复制进来。

## 发布到 GitHub Pages

仓库是 [yinweinidongle/vfx-studio](https://github.com/yinweinidongle/vfx-studio)。项目站地址是 [https://yinweinidongle.github.io/vfx-studio/](https://yinweinidongle.github.io/vfx-studio/)。

工作流在 `.github/workflows/pages.yml`。`VITE_BASE` 固定为 `/vfx-studio/`，不要改成 `/`。构建后会检查 `dist/thumbs` 里有 12 张 JPEG，并且打包结果带有 `/vfx-studio/`。然后把 `dist` 作为 Pages artifact 部署。

Pages 的 Build and deployment 必须选 GitHub Actions。只推代码不会自动打开 Pages。默认分支应是包含站点的 `main`。

不要换成别的托管。工作流只部署 GitHub Pages。
