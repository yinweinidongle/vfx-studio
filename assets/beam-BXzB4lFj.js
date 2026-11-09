import{n as e,t}from"./LightningStrike-DJxKzaAz.js";import{i as n,t as r}from"./index-Dgrgv_6h.js";import{c as i,i as a,l as o,n as s,o as c,r as l,t as u}from"./kit-TXKnCP5u.js";import{i as d}from"./geometry-ZkWW22uO.js";import{et as f,gn as p,kn as m,pn as h,r as g,s as _,w as v}from"./textures-DdZe6I7R.js";var y=`import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import strikeSource from '../../vendor/LightningStrike.js?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, shade } from '../../engine/materials'
import { createStreaks } from '../../engine/geometry'
import { frameCamera } from '../../engine/textures'
import { readNumber } from '../../engine/params'
import { createRoot, publish, visualUniforms } from '../kit'
import { scaledCount } from '../../engine/quality'
import { LightningStrike } from '../../vendor/LightningStrike.js'
import type { EffectContext, EffectModule } from '../../engine/types'
import { CylinderGeometry, DoubleSide, Mesh, SphereGeometry, TorusGeometry, Vector3 } from 'three'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext) {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#67f6ff', '#d8fbff'),
    uWidth: { value: 1 },
    uFlicker: { value: 1 },
    uCore: { value: 0 },
  }
  frameCamera(ctx.camera, [0.2, 1.55, 5.4], [0.4, 1.2, 0], 40)
  const shell = new Mesh(new CylinderGeometry(0.07, 0.07, 4.4, 32, 40, true), shade('beam-shell', programs.beam, { ...uniforms, uCore: { value: 0 } }, { ...glow, side: DoubleSide }))
  shell.rotation.z = Math.PI / 2
  shell.position.set(0.1, 1.2, 0)
  const core = new Mesh(new CylinderGeometry(0.02, 0.02, 4.4, 16, 24, true), shade('beam-core', programs.beam, { ...uniforms, uCore: { value: 1 } }, { ...glow, side: DoubleSide }))
  core.rotation.z = Math.PI / 2
  core.position.copy(shell.position)
  root.add(shell, core)
  const rings = [0.28, 0.42, 0.58].map((radius, index) => {
    const ring = new Mesh(new TorusGeometry(radius, 0.012, 8, 6), shade('beam-hex', programs.hex, uniforms, glow))
    ring.position.set(-2.05, 1.2, 0)
    ring.rotation.y = Math.PI / 2
    ring.userData.spin = 0.6 + index * 0.35
    root.add(ring)
    return ring
  })
  const shield = new Mesh(new SphereGeometry(0.55, 36, 28), shade('beam-shield', programs.shield, uniforms, { ...glow, side: DoubleSide }))
  shield.position.set(2.35, 1.2, 0)
  root.add(shield)
  root.add(createStreaks(scaledCount(70, ctx.quality, 10), shade('beam-splash', programs.splash, uniforms, glow)))
  const arcs = [0.35, -0.35].map((offset, index) => {
    const strike = new LightningStrike({
      sourceOffset: new Vector3(-0.4, 1.2, 0),
      destOffset: new Vector3(1.1, 1.2 + offset, offset * 0.2),
      radius0: 0.02,
      radius1: 0.008,
      minRadius: 0.004,
      maxIterations: 5,
      ramification: 3,
      maxSubrayRecursion: 2,
      recursionProbability: 0.4,
      roughness: 0.7,
      straightness: 0.8,
      generateUVs: true,
      noiseSeed: 0.2 + index * 0.3,
      isEternal: true,
    })
    const mesh = new Mesh(strike, shade('beam-arc', programs.hex, uniforms, glow))
    mesh.frustumCulled = false
    root.add(mesh)
    return strike
  })
  const effect = publish(ctx, root, uniforms, meta.bloom, (time, reduced) => {
    const motion = reduced ? 0.2 : 1
    rings.forEach((ring) => {
      ring.rotation.z = time * Number(ring.userData.spin) * motion
    })
    arcs.forEach((arc) => arc.update(time))
  })
  const applyBase = effect.apply.bind(effect)
  effect.apply = (values) => {
    applyBase(values)
    uniforms.uWidth.value = readNumber(values, 'width')
    uniforms.uFlicker.value = readNumber(values, 'flicker')
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
    upstream: [{ filename: 'LightningStrike.js', language: 'javascript', role: 'upstream', contents: strikeSource }],
  }),
}
`,b=`// @program beam
// --- vertex ---
// @include noise
// @include common
varying vec2 vUv;
varying vec3 vNormalW;
varying vec3 vWorld;
uniform float uTime;
uniform float uSpeed;
uniform float uWidth;
uniform float uFlicker;
uniform float uCore;

void main() {
  vUv = uv;
  vec3 pos = position;
  float n = snoise(vec3(uv.x * 8.0, uv.y * 3.0 - uTime * uSpeed * 4.0, uTime * 0.2));
  pos.xz *= uWidth * (uCore > 0.5 ? 1.0 : 1.0 + n * 0.18 * uFlicker);
  vec4 world = modelMatrix * vec4(pos, 1.0);
  vWorld = world.xyz;
  vNormalW = mat3(modelMatrix) * normal;
  gl_Position = projectionMatrix * viewMatrix * world;
}
// --- fragment ---
// @include noise
// @include common
varying vec2 vUv;
varying vec3 vNormalW;
varying vec3 vWorld;
uniform float uTime;
uniform float uSpeed;
uniform float uFlicker;
uniform float uIntensity;
uniform float uCore;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  float n = fbm(vec3(vUv.x * 12.0, vUv.y * 4.0 - uTime * uSpeed * 3.0, 2.0));
  float filament = smoothstep(0.25, 0.9, n);
  vec3 viewDir = normalize(cameraPosition - vWorld);
  float facing = pow(abs(dot(normalize(vNormalW), viewDir)), uCore > 0.5 ? 2.4 : 1.15);
  vec3 col = uCore > 0.5 ? mix(uColor, vec3(1.0), facing) : mix(uColorB, uColor, filament);
  float alpha = facing * (uCore > 0.5 ? 0.95 : 0.22 + filament * 0.7 * uFlicker);
  if (alpha < 0.02) discard;
  gl_FragColor = vec4(col * uIntensity * (uCore > 0.5 ? 1.35 : 0.85), alpha);
}

// @program hex
// --- vertex ---
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
varying vec2 vUv;
uniform float uIntensity;
uniform vec3 uColor;
void main() {
  float across = abs(vUv.y - 0.5) * 2.0;
  float core = exp(-across * across * 12.0);
  float dash = step(0.4, fract(vUv.x * 6.0));
  gl_FragColor = vec4(mix(uColor, vec3(1.0), core) * uIntensity, core * (0.4 + dash));
}

// @program shield
// --- vertex ---
varying vec3 vNormalW;
varying vec3 vWorld;
void main() {
  vNormalW = mat3(modelMatrix) * normal;
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
// @include noise
// @include common
varying vec3 vNormalW;
varying vec3 vWorld;
uniform float uTime;
uniform float uSpeed;
uniform float uIntensity;
uniform vec3 uColor;
void main() {
  vec3 viewDir = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - abs(dot(normalize(vNormalW), viewDir)), 2.0);
  float ripple = 0.5 + 0.5 * sin(vWorld.y * 18.0 - uTime * uSpeed * 6.0);
  vec3 col = uColor * fres * (0.6 + ripple * 0.8);
  gl_FragColor = vec4(col * uIntensity, fres * 0.85);
}

// @program splash
// --- vertex ---
// @include noise
// @include common
attribute float aSeed;
attribute float aSeed2;
uniform float uTime;
uniform float uSpeed;
varying float vAlpha;
varying float vAcross;

void main() {
  float life = fract(uTime * uSpeed * 0.8 + aSeed);
  vec3 dir = normalize(hash31(aSeed * 12.0) - vec3(0.2, 0.5, 0.5));
  vec3 origin = vec3(2.35, 1.2, 0.0);
  vec3 head = origin + dir * life * (0.4 + aSeed2 * 0.6);
  vec3 tail = origin + dir * max(life - 0.15, 0.0) * (0.4 + aSeed2 * 0.6);
  vec3 pos = streakBillboard(tail, head, uv, 0.02);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vAlpha = (1.0 - life);
  vAcross = abs(uv.x - 0.5) * 2.0;
}
// --- fragment ---
varying float vAlpha;
varying float vAcross;
uniform float uIntensity;
uniform vec3 uColor;
void main() {
  float core = exp(-vAcross * vAcross * 8.0);
  float alpha = core * vAlpha * uIntensity;
  if (alpha < 0.02) discard;
  gl_FragColor = vec4(mix(uColor, vec3(1.0), core) * uIntensity, alpha);
}
`,x=o(b);function S(e){let i=u(e),o={...l(n.loop,`#67f6ff`,`#d8fbff`),uWidth:{value:1},uFlicker:{value:1},uCore:{value:0}};g(e.camera,[.2,1.55,5.4],[.4,1.2,0],40);let y=new f(new v(.07,.07,4.4,32,40,!0),c(`beam-shell`,x.beam,{...o,uCore:{value:0}},{...a,side:2}));y.rotation.z=Math.PI/2,y.position.set(.1,1.2,0);let b=new f(new v(.02,.02,4.4,16,24,!0),c(`beam-core`,x.beam,{...o,uCore:{value:1}},{...a,side:2}));b.rotation.z=Math.PI/2,b.position.copy(y.position),i.add(y,b);let S=[.28,.42,.58].map((e,t)=>{let n=new f(new p(e,.012,8,6),c(`beam-hex`,x.hex,o,a));return n.position.set(-2.05,1.2,0),n.rotation.y=Math.PI/2,n.userData.spin=.6+t*.35,i.add(n),n}),C=new f(new h(.55,36,28),c(`beam-shield`,x.shield,o,{...a,side:2}));C.position.set(2.35,1.2,0),i.add(C),i.add(d(r(70,e.quality,10),c(`beam-splash`,x.splash,o,a)));let w=[.35,-.35].map((e,n)=>{let r=new t({sourceOffset:new m(-.4,1.2,0),destOffset:new m(1.1,1.2+e,e*.2),radius0:.02,radius1:.008,minRadius:.004,maxIterations:5,ramification:3,maxSubrayRecursion:2,recursionProbability:.4,roughness:.7,straightness:.8,generateUVs:!0,noiseSeed:.2+n*.3,isEternal:!0}),s=new f(r,c(`beam-arc`,x.hex,o,a));return s.frustumCulled=!1,i.add(s),r}),T=s(e,i,o,n.bloom,(e,t)=>{let n=t?.2:1;S.forEach(t=>{t.rotation.z=e*Number(t.userData.spin)*n}),w.forEach(t=>t.update(e))}),E=T.apply.bind(T);return T.apply=e=>{E(e),o.uWidth.value=_(e,`width`),o.uFlicker.value=_(e,`flicker`)},T}var C={meta:n,createEffect:S,sources:i({implementationName:`index.ts`,implementation:y,shaderName:`effect.glsl`,shader:b,programs:x,notes:n.notes,upstream:[{filename:`LightningStrike.js`,language:`javascript`,role:`upstream`,contents:e}]})};export{C as effectModule};