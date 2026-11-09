import{s as e,t}from"./index-Dgrgv_6h.js";import{c as n,i as r,l as i,n as a,o,r as s,s as c,t as l}from"./kit-TXKnCP5u.js";import{r as u}from"./geometry-ZkWW22uO.js";import{Mn as d,_ as f,et as p,gn as m,pn as h,r as g,s as _,un as v,w as y}from"./textures-DdZe6I7R.js";var b=`import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, shade, solid } from '../../engine/materials'
import { createSeedPoints } from '../../engine/geometry'
import { frameCamera } from '../../engine/textures'
import { readNumber } from '../../engine/params'
import { createRoot, publish, visualUniforms } from '../kit'
import { scaledCount } from '../../engine/quality'
import type { EffectContext, EffectModule } from '../../engine/types'
import {
  BackSide,
  CircleGeometry,
  CylinderGeometry,
  DoubleSide,
  Mesh,
  Scene,
  SphereGeometry,
  TorusGeometry,
  WebGLRenderTarget,
} from 'three'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext) {
  const root = createRoot(ctx)
  const size = ctx.quality.resolved === 'low' ? 256 : ctx.quality.resolved === 'high' ? 640 : 384
  const target = ctx.disposer.target(new WebGLRenderTarget(size, size))
  const uniforms = {
    ...visualUniforms(meta.loop, '#d7cbff', '#7af0ff'),
    uTwist: { value: 1 },
    uThroat: { value: 1 },
    uSky: { value: target.texture },
  }
  frameCamera(ctx.camera, [0.15, 1.55, 4.8], [0, 1.25, 0], 40)
  const skyMaterial = shade('portal-sky', programs.sky, uniforms, { ...solid, side: BackSide, depthWrite: false })
  const sky = new Mesh(new SphereGeometry(40, 32, 20), skyMaterial)
  sky.frustumCulled = false
  root.add(sky)
  const skyScene = new Scene()
  const skyCopy = new Mesh(new SphereGeometry(40, 32, 20), skyMaterial)
  skyCopy.frustumCulled = false
  skyScene.add(skyCopy)
  ctx.disposer.track(skyCopy)

  const dais = new Mesh(new CircleGeometry(2.1, 64), shade('portal-dais', programs.dais, uniforms, glow))
  dais.rotation.x = -Math.PI / 2
  dais.position.y = 0.01
  const plinth = new Mesh(new CylinderGeometry(0.7, 0.9, 0.18, 32), shade('portal-plinth', programs.dais, uniforms, solid))
  plinth.position.y = 0.09
  root.add(dais, plinth)

  const disc = new Mesh(new CircleGeometry(1.18, 80), shade('portal-disc', programs.disc, uniforms, { ...solid, side: DoubleSide }))
  disc.position.y = 1.35
  root.add(disc)
  const ring = new Mesh(new TorusGeometry(1.28, 0.045, 16, 96), shade('portal-ring', programs.ring, uniforms, { ...glow, side: DoubleSide }))
  ring.position.y = 1.35
  const ringB = new Mesh(new TorusGeometry(1.48, 0.012, 12, 80), shade('portal-ring', programs.ring, uniforms, glow))
  ringB.position.y = 1.35
  root.add(ring, ringB)
  root.add(createSeedPoints(scaledCount(80, ctx.quality, 12), shade('portal-spark', programs.spark, uniforms, glow)))

  const effect = publish(ctx, root, uniforms, meta.bloom, (time, reduced) => {
    sky.position.copy(ctx.camera.position)
    skyCopy.position.copy(ctx.camera.position)
    const spin = reduced ? 0.15 : 0.45
    ring.rotation.z = time * spin
    ringB.rotation.z = -time * spin * 0.6
    const renderer = ctx.renderer
    const previous = renderer.getRenderTarget()
    renderer.setRenderTarget(target)
    renderer.clear()
    renderer.render(skyScene, ctx.camera)
    renderer.setRenderTarget(previous)
  })
  const applyBase = effect.apply.bind(effect)
  effect.apply = (values) => {
    applyBase(values)
    uniforms.uTwist.value = readNumber(values, 'twist')
    uniforms.uThroat.value = readNumber(values, 'throat')
  }
  return effect
}

export const effectModule: EffectModule = {
  meta,
  createEffect,
  sources: buildSources({
    implementationName: 'index.ts',
    implementation: indexSource,
    shaderName: 'effect.glsl',
    shader: shaderSource,
    programs,
    notes: meta.notes,
  }),
}
`,x=`// @program sky
// --- vertex ---
varying vec3 vDir;
void main() {
  vDir = (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
// @include noise
// @include common
varying vec3 vDir;
uniform float uTime;
void main() {
  vec3 dir = normalize(vDir);
  vec3 col = mix(vec3(0.02, 0.015, 0.04), vec3(0.005, 0.008, 0.02), dir.y * 0.5 + 0.5);
  float band = exp(-pow((dir.y + 0.05) * 4.0, 2.0));
  col += vec3(0.25, 0.18, 0.45) * band * (0.35 + 0.65 * fbm(dir * 3.0 + uTime * 0.02));
  col += stars(dir, 140.0);
  col += stars(dir, 60.0) * 0.6;
  gl_FragColor = vec4(col, 1.0);
}

// @program disc
// --- vertex ---
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
// @include noise
// @include common
varying vec2 vUv;
uniform sampler2D uSky;
uniform float uTime;
uniform float uSpeed;
uniform float uTwist;
uniform float uThroat;
uniform float uIntensity;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  vec2 p = vUv - 0.5;
  float r = length(p) * 2.0;
  if (r > 1.02) discard;
  float ang = atan(p.y, p.x);
  float twisted = ang + (0.85 - r) * 5.0 * uTwist + uTime * uSpeed * 0.65;
  float radius = pow(clamp(r, 0.0, 1.0), 0.45 + 0.35 * uThroat);
  vec2 sampleUv = vec2(0.5) + vec2(cos(twisted), sin(twisted)) * radius * 0.48;
  sampleUv += 0.025 * vec2(
    snoise(vec3(p * 8.0, uTime * 0.25)),
    snoise(vec3(p * 8.0, 4.0 + uTime * 0.25))
  );
  vec3 bg = texture2D(uSky, sampleUv).rgb;
  float filament = fbm(vec3(twisted * 0.35, r * 3.0 - uTime * uSpeed * 0.4, 1.7));
  float thread = smoothstep(0.35, 0.9, filament);
  vec3 col = bg * 1.6 + uColorB * thread * (1.0 - r) * 0.9;
  col += uColor * exp(-pow((r - 0.72) * 10.0, 2.0));
  col *= smoothstep(0.0, 0.12, r);
  float center = smoothstep(0.18, 0.0, r);
  col = mix(col, col * 0.25, center * uThroat);
  gl_FragColor = vec4(col * uIntensity * 0.62, 1.0);
}

// @program ring
// --- vertex ---
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
// @include noise
// @include common
varying vec2 vUv;
uniform float uTime;
uniform float uSpeed;
uniform float uIntensity;
uniform vec3 uColor;
uniform vec3 uColorB;
void main() {
  float across = abs(vUv.y - 0.5) * 2.0;
  float core = exp(-across * across * 9.0);
  float spin = vUv.x * 28.0 + uTime * uSpeed;
  float dash = step(0.55, fract(spin));
  float rune = step(0.78, hash11(floor(spin * 0.5))) * smoothstep(0.45, 0.05, abs(fract(spin) - 0.5));
  vec3 col = mix(uColor, vec3(1.0), core);
  col += uColorB * rune;
  gl_FragColor = vec4(col * uIntensity * (0.3 + dash * 0.7 + rune), clamp(core + rune * 0.5, 0.0, 1.0));
}

// @program spark
// --- vertex ---
attribute vec3 aSeed;
uniform float uTime;
uniform float uSpeed;
varying float vFade;
void main() {
  float ang = aSeed.x * 6.28318 + uTime * uSpeed;
  float rad = 1.32 + sin(uTime * 2.0 + aSeed.y * 8.0) * 0.03;
  vec3 pos = vec3(cos(ang) * rad, 1.35 + sin(ang) * rad, (aSeed.z - 0.5) * 0.08);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(14.0 * (2.6 / max(0.4, -mv.z)), 2.0, 24.0);
  vFade = 0.45 + 0.55 * fract(aSeed.y + uTime * 0.7);
}
// --- fragment ---
varying float vFade;
uniform float uIntensity;
uniform vec3 uColor;
void main() {
  float glow = exp(-dot(gl_PointCoord * 2.0 - 1.0, gl_PointCoord * 2.0 - 1.0) * 3.5);
  if (glow < 0.04) discard;
  gl_FragColor = vec4(mix(uColor, vec3(1.0), glow) * uIntensity, glow * vFade);
}

// @program dais
// --- vertex ---
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
varying vec2 vUv;
uniform float uTime;
uniform vec3 uColorB;
void main() {
  vec2 p = vUv * 2.0 - 1.0;
  float r = length(p);
  float ring = exp(-pow((r - 0.72) * 18.0, 2.0));
  float ticks = smoothstep(0.2, 0.0, abs(fract(atan(p.y, p.x) * 8.0 + uTime * 0.2) - 0.5));
  vec3 col = vec3(0.015, 0.016, 0.02) + uColorB * ring * (0.3 + ticks);
  if (r > 1.0) discard;
  gl_FragColor = vec4(col, 0.95);
}
`,S=i(x);function C(n){let i=l(n),b=n.quality.resolved===`low`?256:n.quality.resolved===`high`?640:384,x=n.disposer.target(new d(b,b)),C={...s(e.loop,`#d7cbff`,`#7af0ff`),uTwist:{value:1},uThroat:{value:1},uSky:{value:x.texture}};g(n.camera,[.15,1.55,4.8],[0,1.25,0],40);let w=o(`portal-sky`,S.sky,C,{...c,side:1,depthWrite:!1}),T=new p(new h(40,32,20),w);T.frustumCulled=!1,i.add(T);let E=new v,D=new p(new h(40,32,20),w);D.frustumCulled=!1,E.add(D),n.disposer.track(D);let O=new p(new f(2.1,64),o(`portal-dais`,S.dais,C,r));O.rotation.x=-Math.PI/2,O.position.y=.01;let k=new p(new y(.7,.9,.18,32),o(`portal-plinth`,S.dais,C,c));k.position.y=.09,i.add(O,k);let A=new p(new f(1.18,80),o(`portal-disc`,S.disc,C,{...c,side:2}));A.position.y=1.35,i.add(A);let j=new p(new m(1.28,.045,16,96),o(`portal-ring`,S.ring,C,{...r,side:2}));j.position.y=1.35;let M=new p(new m(1.48,.012,12,80),o(`portal-ring`,S.ring,C,r));M.position.y=1.35,i.add(j,M),i.add(u(t(80,n.quality,12),o(`portal-spark`,S.spark,C,r)));let N=a(n,i,C,e.bloom,(e,t)=>{T.position.copy(n.camera.position),D.position.copy(n.camera.position);let r=t?.15:.45;j.rotation.z=e*r,M.rotation.z=-e*r*.6;let i=n.renderer,a=i.getRenderTarget();i.setRenderTarget(x),i.clear(),i.render(E,n.camera),i.setRenderTarget(a)}),P=N.apply.bind(N);return N.apply=e=>{P(e),C.uTwist.value=_(e,`twist`),C.uThroat.value=_(e,`throat`)},N}var w={meta:e,createEffect:C,sources:n({implementationName:`index.ts`,implementation:b,shaderName:`effect.glsl`,shader:x,programs:S,notes:e.notes})};export{w as effectModule};