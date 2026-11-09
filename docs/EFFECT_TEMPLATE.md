# 增加一条效果

图库只显示 `src/effects/registry.ts` 里登记过的效果。`src/effects/_template` 是一份能编译的例子，不会出现在图库里。

## 目录

复制 `_template`，改成一个新的短 id，例如 `src/effects/comet/`。每个效果固定三份文件：

| 文件 | 职责 |
| --- | --- |
| `meta.ts` | 中文名称、分类、参数、预设、循环时长、海报时间、署名。不要 import three。 |
| `effect.glsl` | 一个或多个 `// @program 名字`。每个程序再分 `// --- vertex ---` 和 `// --- fragment ---`。 |
| `index.ts` | 创建网格，把参数写进 uniform，导出 `effectModule`。 |

然后在 `registry.ts` 的 `catalog` 里加一行。`load` 必须是动态 `import()`，这样没打开的效果不会进入首屏包。

## 着色器约定

需要噪声时按这个顺序写，因为 `common.glsl` 里的 `fbm` 会调用 `snoise`：

```glsl
// @include noise
// @include common
```

three r187 会给 `ShaderMaterial` 注入 `#version 300 es`、矩阵、`cameraPosition`、`position`、`normal` 和 `uv`。不要再声明它们。片段里继续写 `gl_FragColor` 和 `texture2D`，three 会改写成 WebGL2。自定义 attribute（例如 `aSeed`、`aT`）必须自己声明。

拖尾用 `src/engine/geometry.ts` 的 `createStreaks`。它是面向相机的实例化四边形，不是 `Points` 堆出来的方块。`streakBillboard` 在 `common.glsl`。

## 生命周期

舞台只有一个 `WebGLRenderer`。效果不要自己创建渲染器，也不要自己 `requestAnimationFrame`。

```ts
const root = createRoot(ctx)
ctx.disposer.track(root)
```

`track` 要放在子网格都加进 `root` 之后。自己创建的贴图用 `ctx.disposer.texture()`，渲染目标用 `ctx.disposer.target()`。额外清理用 `ctx.disposer.add()`。

`publish()` 会把强度、速度和两个颜色接到 `uTime`、`uIntensity`、`uSpeed`、`uColor`、`uColorB`。效果自己的参数在包一层 `apply` 里读取。

## 源码面板

`index.ts` 用 `?raw` 读自己的源码和 `effect.glsl`。源码面板显示的就是这两份文件，加上拼接后的程序、共享的噪声片段和说明。不要再写一份“示意用”的着色器。

如果用了 `src/vendor` 里的上游文件，把对应的 `?raw` 放进 `buildSources` 的 `upstream`，并在 `meta.attribution` 里标明是「直接纳入」还是「改编」，附上真实的上游 URL。

## 署名

- `incorporated`：文件按原样或几乎按原样使用。
- `adapted`：算法保留，但有记录在案的本地改动。
- `original`：本项目编写。可以写受到哪份文档启发，但不要把参考文献说成复制来的代码。

新的第三方文件先核对许可证，再放进 `third_party/licenses/`，并更新 `THIRD_PARTY_NOTICES.md`。
