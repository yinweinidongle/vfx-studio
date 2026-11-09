import{c as e,t}from"./index-Dgrgv_6h.js";import{a as n,c as r,i,l as a,o,r as s,s as c,t as l}from"./kit-TXKnCP5u.js";import{i as u,r as d,t as f}from"./geometry-ZkWW22uO.js";import{_ as p,et as m,pn as h,r as g,s as _}from"./textures-DdZe6I7R.js";var v=`import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, mist, shade, solid } from '../../engine/materials'
import { createDebris, createSeedPoints, createStreaks } from '../../engine/geometry'
import { frameCamera } from '../../engine/textures'
import { readNumber } from '../../engine/params'
import { createRoot, visualUniforms } from '../kit'
import { scaledCount } from '../../engine/quality'
import type { EffectContext, EffectInstance, EffectModule } from '../../engine/types'
import { CircleGeometry, DoubleSide, Mesh, SphereGeometry } from 'three'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext): EffectInstance {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#ffd7a1', '#ff6b3d'),
    uCharge: { value: 1 },
    uDebris: { value: 1 },
    uScale: { value: 0 },
    uScaleB: { value: 0 },
  }
  frameCamera(ctx.camera, [0.4, 1.7, 5.6], [0, 1.05, 0], 40)
  const core = new Mesh(new SphereGeometry(0.28, 32, 24), shade('boom-core', programs.core, uniforms, glow))
  core.position.y = 1.05
  root.add(core)
  const shellA = new Mesh(new SphereGeometry(1, 40, 28), shade('boom-shell-a', programs.shell, { ...uniforms, uScale: uniforms.uScale }, { ...glow, side: DoubleSide }))
  const shellB = new Mesh(new SphereGeometry(1, 40, 28), shade('boom-shell-b', programs.shell, { ...uniforms, uScale: uniforms.uScaleB }, { ...glow, side: DoubleSide }))
  shellA.position.y = 1.05
  shellB.position.y = 1.05
  root.add(shellA, shellB)
  root.add(createStreaks(scaledCount(280, ctx.quality, 24), shade('boom-streak', programs.streak, uniforms, glow)))
  const debris = createDebris(scaledCount(46, ctx.quality, 8), shade('boom-debris', programs.debris, uniforms, { ...solid, side: DoubleSide }))
  debris.position.y = 1.05
  root.add(debris)
  root.add(createSeedPoints(scaledCount(48, ctx.quality, 8), shade('boom-smoke', programs.smoke, uniforms, mist)))
  const scorch = new Mesh(new CircleGeometry(2.2, 64), shade('boom-scorch', programs.scorch, uniforms, mist))
  scorch.rotation.x = -Math.PI / 2
  scorch.position.y = 0.02
  root.add(scorch)
  ctx.disposer.track(root)
  return {
    bloom: { ...meta.bloom },
    update(time: number) {
      uniforms.uTime.value = time
      const local = (time * uniforms.uSpeed.value) % meta.loop
      const burst = Math.max(0, local - 0.55) / 0.85
      uniforms.uScale.value = Math.min(burst, 1.8)
      uniforms.uScaleB.value = Math.min(Math.max(0, local - 0.68) / 0.95, 2.1)
    },
    apply(values) {
      uniforms.uIntensity.value = readNumber(values, 'intensity')
      uniforms.uSpeed.value = readNumber(values, 'speed')
      uniforms.uCharge.value = readNumber(values, 'charge')
      uniforms.uDebris.value = readNumber(values, 'debris')
      const color = String(values.color ?? '#ffd7a1')
      const colorB = String(values.colorB ?? '#ff6b3d')
      uniforms.uColor.value.set(
        Number.parseInt(color.slice(1, 3), 16) / 255,
        Number.parseInt(color.slice(3, 5), 16) / 255,
        Number.parseInt(color.slice(5, 7), 16) / 255,
      )
      uniforms.uColorB.value.set(
        Number.parseInt(colorB.slice(1, 3), 16) / 255,
        Number.parseInt(colorB.slice(3, 5), 16) / 255,
        Number.parseInt(colorB.slice(5, 7), 16) / 255,
      )
      this.bloom = { ...meta.bloom, strength: meta.bloom.strength * (0.6 + 0.4 * uniforms.uIntensity.value) }
    },
    dispose() {},
  }
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
`,y=`// @program core
// --- vertex ---
varying vec3 vNormalW;
void main() {
  vNormalW = mat3(modelMatrix) * normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
varying vec3 vNormalW;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
uniform float uCharge;
uniform float uIntensity;
uniform vec3 uColor;
void main() {
  float local = mod(uTime * uSpeed, uLoop);
  float charge = smoothstep(0.0, 0.55 * uCharge, local) * (1.0 - smoothstep(0.55, 0.75, local));
  float fres = pow(1.0 - abs(dot(normalize(vNormalW), vec3(0.0, 0.2, 1.0))), 2.2);
  vec3 col = mix(uColor, vec3(1.0), fres);
  gl_FragColor = vec4(col * uIntensity * (0.4 + charge), fres * charge);
}

// @program shell
// --- vertex ---
uniform float uScale;
varying vec3 vNormalW;
void main() {
  vNormalW = mat3(modelMatrix) * normal;
  vec3 pos = position * (0.35 + uScale);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
// --- fragment ---
varying vec3 vNormalW;
uniform float uScale;
uniform float uIntensity;
uniform vec3 uColor;
uniform vec3 uColorB;
void main() {
  float fres = pow(1.0 - abs(dot(normalize(vNormalW), vec3(0.0, 0.15, 1.0))), 1.8);
  float alpha = fres * (1.0 - smoothstep(0.2, 1.6, uScale));
  vec3 col = mix(uColorB, vec3(1.0), fres);
  gl_FragColor = vec4(col * uIntensity, alpha);
}

// @program streak
// --- vertex ---
// @include noise
// @include common
attribute float aSeed;
attribute float aSeed2;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
uniform float uCharge;
varying float vAlpha;
varying float vAcross;
varying vec3 vColor;

void main() {
  float local = mod(uTime * uSpeed, uLoop);
  vec3 dir = normalize(hash31(aSeed * 19.0) - 0.5);
  float gather = clamp(local / (0.55 * uCharge), 0.0, 1.0);
  float burst = clamp((local - 0.55) / 1.3, 0.0, 1.0);
  vec3 head;
  vec3 tail;
  float alpha;
  if (local < 0.55) {
    head = dir * mix(2.4, 0.15, gather);
    tail = head * 1.25;
    alpha = gather;
  } else {
    head = dir * (0.2 + burst * mix(1.5, 4.2, aSeed2)) + vec3(0.0, burst * 0.4 - burst * burst * 0.6, 0.0);
    tail = dir * (0.2 + max(burst - 0.08, 0.0) * mix(1.5, 4.2, aSeed2));
    alpha = 1.0 - smoothstep(0.45, 1.0, burst);
  }
  vec3 pos = streakBillboard(tail, head, uv, mix(0.05, 0.012, burst));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vAlpha = alpha;
  vAcross = abs(uv.x - 0.5) * 2.0;
  vColor = mix(vec3(1.0), vec3(1.0, 0.55, 0.25), burst);
}
// --- fragment ---
varying float vAlpha;
varying float vAcross;
varying vec3 vColor;
uniform float uIntensity;
uniform vec3 uColor;
void main() {
  float core = exp(-vAcross * vAcross * 8.0);
  float alpha = core * vAlpha * uIntensity;
  if (alpha < 0.02) discard;
  gl_FragColor = vec4(mix(uColor, vColor, 0.5) * (0.6 + core) * uIntensity, alpha);
}

// @program debris
// --- vertex ---
attribute vec3 aSeed;
attribute float aSeed1;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
uniform float uDebris;
varying vec3 vColor;
varying vec3 vNormalW;

void main() {
  float local = mod(uTime * uSpeed, uLoop);
  float burst = clamp((local - 0.58) / 1.6, 0.0, 1.0);
  vec3 dir = normalize(aSeed - 0.5);
  vec3 offset = dir * burst * (1.2 + aSeed1 * 2.4) * uDebris + vec3(0.0, burst * 1.1 - burst * burst * 2.2, 0.0);
  float ang = aSeed1 * 6.0 + local * 2.0;
  vec3 p = position * mix(0.06, 0.16, aSeed1);
  float c = cos(ang);
  float s = sin(ang);
  p.xz = mat2(c, -s, s, c) * p.xz;
  vec4 world = modelMatrix * vec4(p + offset, 1.0);
  vNormalW = mat3(modelMatrix) * normal;
  vColor = mix(vec3(1.0, 0.82, 0.45), vec3(0.25, 0.05, 0.02), burst);
  gl_Position = projectionMatrix * viewMatrix * world;
}
// --- fragment ---
varying vec3 vColor;
varying vec3 vNormalW;
uniform float uIntensity;
void main() {
  float fres = pow(1.0 - abs(dot(normalize(vNormalW), vec3(0.0, 0.3, 1.0))), 1.5);
  gl_FragColor = vec4(vColor * uIntensity * (0.35 + fres), 1.0);
}

// @program smoke
// --- vertex ---
attribute vec3 aSeed;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
varying float vFade;
void main() {
  float local = mod(uTime * uSpeed, uLoop);
  float k = clamp((local - 0.7) / 2.2, 0.0, 1.0);
  vec3 pos = vec3((aSeed.x - 0.5) * k * 2.4, k * (1.2 + aSeed.y), (aSeed.z - 0.5) * k * 2.4);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp((16.0 + k * 48.0) * (3.0 / max(0.5, -mv.z)), 4.0, 64.0);
  vFade = smoothstep(0.0, 0.1, k) * (1.0 - k);
}
// --- fragment ---
varying float vFade;
void main() {
  vec2 pc = gl_PointCoord * 2.0 - 1.0;
  float soft = smoothstep(1.0, 0.15, dot(pc, pc));
  gl_FragColor = vec4(vec3(0.16, 0.15, 0.14), soft * vFade * 0.38);
}

// @program scorch
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
uniform vec3 uColorB;
void main() {
  float local = mod(uTime * uSpeed, uLoop);
  float age = clamp((local - 0.6) / 2.4, 0.0, 1.0);
  float r = length(vUv * 2.0 - 1.0);
  float ring = exp(-pow((r - mix(0.15, 0.85, age)) * 12.0, 2.0));
  float disk = smoothstep(0.9, 0.2, r) * 0.45 * age;
  vec3 col = mix(vec3(0.02, 0.01, 0.01), uColorB, ring);
  gl_FragColor = vec4(col, clamp(disk + ring * (1.0 - age * 0.5), 0.0, 1.0));
}
`,b=a(y);function x(r){let a=l(r),v={...s(e.loop,`#ffd7a1`,`#ff6b3d`),uCharge:{value:1},uDebris:{value:1},uScale:{value:0},uScaleB:{value:0}};g(r.camera,[.4,1.7,5.6],[0,1.05,0],40);let y=new m(new h(.28,32,24),o(`boom-core`,b.core,v,i));y.position.y=1.05,a.add(y);let x=new m(new h(1,40,28),o(`boom-shell-a`,b.shell,{...v,uScale:v.uScale},{...i,side:2})),S=new m(new h(1,40,28),o(`boom-shell-b`,b.shell,{...v,uScale:v.uScaleB},{...i,side:2}));x.position.y=1.05,S.position.y=1.05,a.add(x,S),a.add(u(t(280,r.quality,24),o(`boom-streak`,b.streak,v,i)));let C=f(t(46,r.quality,8),o(`boom-debris`,b.debris,v,{...c,side:2}));C.position.y=1.05,a.add(C),a.add(d(t(48,r.quality,8),o(`boom-smoke`,b.smoke,v,n)));let w=new m(new p(2.2,64),o(`boom-scorch`,b.scorch,v,n));return w.rotation.x=-Math.PI/2,w.position.y=.02,a.add(w),r.disposer.track(a),{bloom:{...e.bloom},update(t){v.uTime.value=t;let n=t*v.uSpeed.value%e.loop,r=Math.max(0,n-.55)/.85;v.uScale.value=Math.min(r,1.8),v.uScaleB.value=Math.min(Math.max(0,n-.68)/.95,2.1)},apply(t){v.uIntensity.value=_(t,`intensity`),v.uSpeed.value=_(t,`speed`),v.uCharge.value=_(t,`charge`),v.uDebris.value=_(t,`debris`);let n=String(t.color??`#ffd7a1`),r=String(t.colorB??`#ff6b3d`);v.uColor.value.set(Number.parseInt(n.slice(1,3),16)/255,Number.parseInt(n.slice(3,5),16)/255,Number.parseInt(n.slice(5,7),16)/255),v.uColorB.value.set(Number.parseInt(r.slice(1,3),16)/255,Number.parseInt(r.slice(3,5),16)/255,Number.parseInt(r.slice(5,7),16)/255),this.bloom={...e.bloom,strength:e.bloom.strength*(.6+.4*v.uIntensity.value)}},dispose(){}}}var S={meta:e,createEffect:x,sources:r({implementationName:`index.ts`,implementation:v,shaderName:`effect.glsl`,shader:y,programs:b,notes:e.notes})};export{S as effectModule};