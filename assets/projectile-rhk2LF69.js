import{d as e,t}from"./index-Dgrgv_6h.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,t as l}from"./kit-TXKnCP5u.js";import{i as u}from"./geometry-ZkWW22uO.js";import{_ as d,dt as f,et as p,r as m,s as h}from"./textures-DdZe6I7R.js";var g=`import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, mist, shade } from '../../engine/materials'
import { createStreaks } from '../../engine/geometry'
import { frameCamera } from '../../engine/textures'
import { readNumber } from '../../engine/params'
import { createRoot, publish, visualUniforms } from '../kit'
import { scaledCount } from '../../engine/quality'
import type { EffectContext, EffectModule } from '../../engine/types'
import { CircleGeometry, DoubleSide, Mesh, PlaneGeometry } from 'three'

const programs = assemblePrograms(shaderSource)

const ends = [
  [-1.2, 1.15, -3.8],
  [-0.4, 1.35, -3.7],
  [0.5, 1.05, -3.9],
  [1.2, 1.4, -3.6],
  [1.7, 0.95, -3.85],
]

export function createEffect(ctx: EffectContext) {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#8eb6ff', '#f0c27a'),
    uWeave: { value: 0.7 },
    uTrail: { value: 0.85 },
  }
  frameCamera(ctx.camera, [0.2, 1.7, 7.2], [0, 1.25, 0], 40)
  const depths = [-1.2, -3.4, -6.5]
  depths.forEach((z, index) => {
    const fog = new Mesh(new PlaneGeometry(14, 6), shade('projectile-fog', programs.fog, uniforms, mist))
    fog.position.set(0, 2.2, z)
    fog.scale.setScalar(1 + index * 0.35)
    root.add(fog)
  })
  root.add(createStreaks(scaledCount(420, ctx.quality, 30), shade('projectile-bolt', programs.bolt, uniforms, glow)))
  ends.forEach((end, index) => {
    const ring = new Mesh(
      new CircleGeometry(0.85, 48),
      shade('projectile-impact', programs.impact, { ...uniforms, uLane: { value: index } }, { ...glow, side: DoubleSide }),
    )
    ring.position.set(end[0], end[1], end[2])
    root.add(ring)
  })
  const effect = publish(ctx, root, uniforms, meta.bloom)
  const applyBase = effect.apply.bind(effect)
  effect.apply = (values) => {
    applyBase(values)
    uniforms.uWeave.value = readNumber(values, 'weave')
    uniforms.uTrail.value = readNumber(values, 'trail')
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
`,_=`// @program fog
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
void main() {
  float n = fbm(vec3(vUv.x * 2.0, vUv.y * 1.2 + uTime * uSpeed * 0.05, vUv.y));
  float band = smoothstep(0.2, 0.8, n) * smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.4, vUv.y);
  vec3 col = vec3(0.05, 0.07, 0.1) * band;
  gl_FragColor = vec4(col, band * 0.35);
}

// @program bolt
// --- vertex ---
// @include noise
// @include common
attribute float aSeed;
attribute float aSeed2;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
uniform float uWeave;
uniform float uTrail;
varying float vAlpha;
varying float vAlong;
varying float vAcross;
varying vec3 vColor;
varying float vRole;

vec3 pathAt(float lane, float t) {
  vec3 start = vec3((lane - 2.0) * 0.55, 1.15 + lane * 0.05, 5.2);
  vec3 end = vec3(sin(lane * 1.7) * 1.5, 1.05 + cos(lane) * 0.35, -3.8);
  vec3 pos = mix(start, end, t);
  pos.x += sin(t * 16.0 + lane * 2.0) * uWeave * 0.28 * (1.0 - t);
  pos.y += cos(t * 11.0 + lane) * uWeave * 0.08 * (1.0 - t);
  return pos;
}

void main() {
  float lane = mod(floor(aSeed * 5.0), 5.0);
  float role = aSeed2;
  float t = fract(uTime * uSpeed * 0.42 + lane * 0.16);
  vec3 head = pathAt(lane, t);
  float back = max(t - 0.22 * uTrail, 0.0);
  vec3 tail = pathAt(lane, back);
  float width = 0.05;
  float alpha = 1.0;
  vec3 color = vec3(0.75, 0.88, 1.0);
  if (role > 0.82) {
    alpha = (1.0 - smoothstep(0.0, 0.12, t));
    width = 0.16;
    color = vec3(1.0, 0.95, 0.8);
    tail = head - normalize(head - pathAt(lane, 0.0) + vec3(0.0, 0.01, 0.0)) * 0.01;
  } else if (role > 0.62 && t > 0.9) {
    float k = (t - 0.9) / 0.1;
    vec3 dir = normalize(hash31(aSeed * 9.0 + lane) - 0.5);
    head = pathAt(lane, 1.0) + dir * k * 0.8;
    tail = pathAt(lane, 1.0) + dir * max(k - 0.25, 0.0) * 0.8;
    alpha = 1.0 - k;
    width = 0.03;
    color = vec3(1.0, 0.82, 0.45);
  } else {
    alpha = smoothstep(0.02, 0.08, t) * (1.0 - smoothstep(0.9, 0.98, t));
    width = mix(0.045, 0.012, t);
  }
  vec3 pos = streakBillboard(tail, head, uv, width);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vAlpha = alpha;
  vAlong = uv.y;
  vAcross = abs(uv.x - 0.5) * 2.0;
  vColor = color;
  vRole = role;
}

// --- fragment ---
varying float vAlpha;
varying float vAlong;
varying float vAcross;
varying vec3 vColor;
varying float vRole;
uniform float uIntensity;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  float core = exp(-vAcross * vAcross * 11.0);
  float glow = exp(-vAcross * vAcross * 1.8);
  vec3 col = mix(uColor, vec3(1.0), core);
  col = mix(col, uColorB, step(0.62, vRole) * (1.0 - core));
  col *= vColor;
  float alpha = (core + glow * 0.35) * vAlpha * uIntensity * smoothstep(0.0, 0.2, vAlong);
  if (alpha < 0.015) discard;
  gl_FragColor = vec4(col * (0.5 + core * 2.2) * uIntensity, alpha);
}

// @program impact
// --- vertex ---
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
varying vec2 vUv;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
uniform float uLane;
uniform float uIntensity;
uniform vec3 uColorB;

void main() {
  float t = fract(uTime * uSpeed * 0.42 + uLane * 0.16);
  float age = clamp((t - 0.9) / 0.22, 0.0, 1.0);
  float r = length(vUv * 2.0 - 1.0);
  float radius = mix(0.08, 0.95, age);
  float ring = exp(-pow((r - radius) * 22.0, 2.0));
  float alpha = ring * (1.0 - age) * step(0.9, t);
  if (r > 1.0) discard;
  gl_FragColor = vec4(mix(uColorB, vec3(1.0), ring) * uIntensity, alpha);
}
`,v=a(_),y=[[-1.2,1.15,-3.8],[-.4,1.35,-3.7],[.5,1.05,-3.9],[1.2,1.4,-3.6],[1.7,.95,-3.85]];function b(r){let a=l(r),g={...c(e.loop,`#8eb6ff`,`#f0c27a`),uWeave:{value:.7},uTrail:{value:.85}};m(r.camera,[.2,1.7,7.2],[0,1.25,0],40),[-1.2,-3.4,-6.5].forEach((e,t)=>{let r=new p(new f(14,6),s(`projectile-fog`,v.fog,g,n));r.position.set(0,2.2,e),r.scale.setScalar(1+t*.35),a.add(r)}),a.add(u(t(420,r.quality,30),s(`projectile-bolt`,v.bolt,g,i))),y.forEach((e,t)=>{let n=new p(new d(.85,48),s(`projectile-impact`,v.impact,{...g,uLane:{value:t}},{...i,side:2}));n.position.set(e[0],e[1],e[2]),a.add(n)});let _=o(r,a,g,e.bloom),b=_.apply.bind(_);return _.apply=e=>{b(e),g.uWeave.value=h(e,`weave`),g.uTrail.value=h(e,`trail`)},_}var x={meta:e,createEffect:b,sources:r({implementationName:`index.ts`,implementation:g,shaderName:`effect.glsl`,shader:_,programs:v,notes:e.notes})};export{x as effectModule};