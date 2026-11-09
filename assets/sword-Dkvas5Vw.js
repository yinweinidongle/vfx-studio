import{f as e,t}from"./index-Dgrgv_6h.js";import{c as n,i as r,l as i,o as a,r as o,t as s}from"./kit-TXKnCP5u.js";import{i as c,n as l}from"./geometry-ZkWW22uO.js";import{_ as u,et as d,kn as f,o as p,r as m,s as h,u as g}from"./textures-DdZe6I7R.js";var _=`import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, shade } from '../../engine/materials'
import { createRibbon, createStreaks } from '../../engine/geometry'
import { frameCamera } from '../../engine/textures'
import { readColor, readNumber, writeColor } from '../../engine/params'
import { createRoot, visualUniforms } from '../kit'
import { scaledCount } from '../../engine/quality'
import type { EffectContext, EffectInstance, EffectModule } from '../../engine/types'
import { CircleGeometry, DoubleSide, Mesh, NormalBlending, Vector3 } from 'three'

const programs = assemblePrograms(shaderSource)

const paths = [
  { phase: 0, p0: [-2.3, 0.45, 0.2], p1: [0.1, 1.85, 0.35], p2: [2.35, 0.7, -0.15] },
  { phase: 1.15, p0: [2.1, 0.35, -0.2], p1: [-0.2, 1.55, 0.1], p2: [-2.2, 0.95, 0.25] },
  { phase: 2.25, p0: [-1.4, 1.55, 0.4], p1: [0.4, 0.7, -0.2], p2: [1.8, 1.35, 0.1] },
]

function bezier(a: number[], b: number[], c: number[], t: number): Vector3 {
  const u = 1 - t
  return new Vector3(
    u * u * a[0] + 2 * u * t * b[0] + t * t * c[0],
    u * u * a[1] + 2 * u * t * b[1] + t * t * c[1],
    u * u * a[2] + 2 * u * t * b[2] + t * t * c[2],
  )
}

export function createEffect(ctx: EffectContext): EffectInstance {
  const root = createRoot(ctx)
  const shared = visualUniforms(meta.loop, '#d9fbff', '#79e7ff')
  const width = { value: 0.34 }
  const sparks = { value: 1 }
  frameCamera(ctx.camera, [0.05, 1.7, 6.4], [0, 1.12, 0], 40)

  const ground = new Mesh(
    new CircleGeometry(3.4, 64),
    shade('sword-ground', programs.ground, shared, { blending: NormalBlending, depthWrite: true, transparent: true }),
  )
  ground.rotation.x = -Math.PI / 2
  root.add(ground)

  const ribbons = paths.map((path) => {
    const uniforms = {
      ...shared,
      uWidth: width,
      uPhase: { value: path.phase },
      uP0: { value: new Vector3(...path.p0) },
      uP1: { value: new Vector3(...path.p1) },
      uP2: { value: new Vector3(...path.p2) },
    }
    const mesh = createRibbon(Math.round(80 * ctx.quality.segments), shade('sword-ribbon', programs.ribbon, uniforms, { ...glow, side: DoubleSide }))
    root.add(mesh)
    const shock = new Mesh(new CircleGeometry(1.35, 64), shade('sword-shock', programs.shock, { ...shared, uPhase: { value: path.phase } }, glow))
    shock.rotation.x = -Math.PI / 2
    shock.position.copy(bezier(path.p0, path.p1, path.p2, 0.82))
    shock.position.y = 0.04
    root.add(shock)
    return path
  })

  const emit = new Vector3()
  const tangent = new Vector3(1, 0, 0)
  const sparkUniforms = { ...shared, uSparks: sparks, uEmit: { value: emit }, uTangent: { value: tangent } }
  root.add(createStreaks(scaledCount(160, ctx.quality, 16), shade('sword-spark', programs.spark, sparkUniforms, glow)))

  ctx.disposer.track(root)
  return {
    bloom: { ...meta.bloom },
    update(time: number) {
      shared.uTime.value = time
      const local = (time * shared.uSpeed.value) % meta.loop
      const active = ribbons.reduce((best, path) => {
        const age = (local + path.phase) % meta.loop
        return age < best.age ? { age, path } : best
      }, { age: 99, path: ribbons[0] })
      const head = Math.min(local / 0.62, 1)
      emit.copy(bezier(active.path.p0, active.path.p1, active.path.p2, head))
      const ahead = bezier(active.path.p0, active.path.p1, active.path.p2, Math.min(head + 0.04, 1))
      tangent.copy(ahead).sub(emit)
      if (tangent.lengthSq() < 1e-5) tangent.set(1, 0.2, 0)
    },
    apply(values) {
      shared.uIntensity.value = readNumber(values, 'intensity')
      shared.uSpeed.value = readNumber(values, 'speed')
      writeColor(shared.uColor.value, readColor(values, 'color'))
      writeColor(shared.uColorB.value, readColor(values, 'colorB'))
      width.value = 0.34 * readNumber(values, 'width')
      sparks.value = readNumber(values, 'sparks')
      this.bloom = { ...meta.bloom, strength: meta.bloom.strength * (0.6 + 0.4 * shared.uIntensity.value) }
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
`,v=`// @program ribbon
// --- vertex ---
attribute float aT;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
uniform float uWidth;
uniform float uPhase;
uniform vec3 uP0;
uniform vec3 uP1;
uniform vec3 uP2;
varying vec2 vUv;
varying float vFade;
varying float vLead;

vec3 bz(vec3 a, vec3 b, vec3 c, float t) {
  float u = 1.0 - t;
  return u * u * a + 2.0 * u * t * b + t * t * c;
}
vec3 bzd(vec3 a, vec3 b, vec3 c, float t) {
  return 2.0 * (1.0 - t) * (b - a) + 2.0 * t * (c - b);
}
vec3 sideOf(vec3 pos, vec3 tangent) {
  vec3 toCam = normalize(cameraPosition - pos);
  vec3 side = cross(normalize(tangent), toCam);
  float len = length(side);
  return len > 1e-4 ? side / len : vec3(1.0, 0.0, 0.0);
}

void main() {
  float dt = 1.0 / 80.0;
  float t0 = aT;
  float t1 = min(aT + dt, 1.0);
  float local = mod(uTime * uSpeed + uPhase, uLoop);
  float headT = clamp(local / 0.62, 0.0, 1.0);
  float tailT = clamp((local - 0.42) / 0.62, 0.0, 1.0);
  float alive = (1.0 - smoothstep(0.95, 1.35, local));
  float w0 = smoothstep(tailT - 0.01, tailT + 0.05, t0) * (1.0 - smoothstep(headT, headT + 0.025, t0));
  float w1 = smoothstep(tailT - 0.01, tailT + 0.05, t1) * (1.0 - smoothstep(headT, headT + 0.025, t1));
  vec3 p0 = bz(uP0, uP1, uP2, t0);
  vec3 p1 = bz(uP0, uP1, uP2, t1);
  float env0 = sin(t0 * 3.14159) * w0;
  float env1 = sin(t1 * 3.14159) * w1;
  vec3 a = p0 + sideOf(p0, bzd(uP0, uP1, uP2, t0)) * (uv.x - 0.5) * uWidth * env0;
  vec3 b = p1 + sideOf(p1, bzd(uP0, uP1, uP2, t1)) * (uv.x - 0.5) * uWidth * env1;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(mix(a, b, uv.y), 1.0);
  vUv = uv;
  vFade = mix(w0, w1, uv.y) * alive;
  vLead = exp(-abs(t0 - headT) * 18.0) * alive;
}

// --- fragment ---
varying vec2 vUv;
varying float vFade;
varying float vLead;
uniform float uIntensity;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  float across = abs(vUv.x - 0.5) * 2.0;
  float core = exp(-across * across * 8.0);
  float edge = smoothstep(0.15, 0.95, across) * (1.0 - smoothstep(0.95, 1.15, across));
  vec3 col = mix(uColorB, vec3(1.0), core);
  col += uColor * edge * 0.35;
  col += vec3(1.0) * vLead * core * 1.5;
  float alpha = (core * 0.9 + 0.08) * vFade * uIntensity;
  if (alpha < 0.02) discard;
  gl_FragColor = vec4(col * uIntensity, alpha);
}

// @program shock
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
uniform float uPhase;
uniform float uIntensity;
uniform vec3 uColor;

void main() {
  vec2 p = vUv * 2.0 - 1.0;
  float r = length(p);
  float local = mod(uTime * uSpeed + uPhase, uLoop);
  float age = clamp((local - 0.42) / 0.55, 0.0, 1.0);
  float radius = mix(0.15, 0.92, age);
  float ring = exp(-pow((r - radius) * 28.0, 2.0));
  float alpha = ring * (1.0 - age) * step(0.42, local) * step(local, 1.15);
  if (r > 1.0) discard;
  gl_FragColor = vec4(mix(uColor, vec3(1.0), ring) * uIntensity, alpha);
}

// @program spark
// --- vertex ---
// @include noise
// @include common
attribute float aSeed;
attribute float aSeed2;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
uniform float uSparks;
uniform vec3 uEmit;
uniform vec3 uTangent;
varying float vAlpha;
varying float vAlong;
varying float vAcross;
varying vec3 vColor;

void main() {
  float local = mod(uTime * uSpeed, uLoop);
  float age = clamp((local - 0.18) / 0.7, 0.0, 1.0);
  vec3 dir = normalize(uTangent + (hash31(aSeed * 30.0) - 0.5) * 1.4);
  vec3 head = uEmit + dir * age * (0.4 + aSeed2) * uSparks;
  vec3 tail = uEmit + dir * max(age - 0.12, 0.0) * (0.4 + aSeed2) * uSparks;
  float width = mix(0.035, 0.006, age) * uSparks;
  vec3 pos = streakBillboard(tail, head, uv, width);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vAlpha = (1.0 - age) * step(0.18, local) * step(local, 1.2);
  vAlong = uv.y;
  vAcross = abs(uv.x - 0.5) * 2.0;
  vColor = mix(vec3(1.0), vec3(0.7, 0.95, 1.0), aSeed2);
}

// --- fragment ---
varying float vAlpha;
varying float vAlong;
varying float vAcross;
varying vec3 vColor;
uniform float uIntensity;

void main() {
  float core = exp(-vAcross * vAcross * 9.0);
  float alpha = core * vAlpha * uIntensity * smoothstep(0.0, 0.3, vAlong);
  if (alpha < 0.02) discard;
  gl_FragColor = vec4(vColor * (0.6 + core * 2.0) * uIntensity, alpha);
}

// @program ground
// --- vertex ---
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
varying vec2 vUv;
uniform vec3 uColorB;
void main() {
  vec2 p = vUv * 2.0 - 1.0;
  float r = length(p);
  float ring = exp(-pow((r - 0.78) * 18.0, 2.0));
  float ticks = smoothstep(0.16, 0.0, abs(fract(atan(p.y, p.x) * 10.0) - 0.5));
  vec3 col = vec3(0.012, 0.015, 0.02) + uColorB * ring * (0.8 + ticks * 0.15);
  if (r > 1.0) discard;
  gl_FragColor = vec4(col, 0.92);
}
`,y=i(v),b=[{phase:0,p0:[-2.3,.45,.2],p1:[.1,1.85,.35],p2:[2.35,.7,-.15]},{phase:1.15,p0:[2.1,.35,-.2],p1:[-.2,1.55,.1],p2:[-2.2,.95,.25]},{phase:2.25,p0:[-1.4,1.55,.4],p1:[.4,.7,-.2],p2:[1.8,1.35,.1]}];function x(e,t,n,r){let i=1-r;return new f(i*i*e[0]+2*i*r*t[0]+r*r*n[0],i*i*e[1]+2*i*r*t[1]+r*r*n[1],i*i*e[2]+2*i*r*t[2]+r*r*n[2])}function S(n){let i=s(n),_=o(e.loop,`#d9fbff`,`#79e7ff`),v={value:.34},S={value:1};m(n.camera,[.05,1.7,6.4],[0,1.12,0],40);let C=new d(new u(3.4,64),a(`sword-ground`,y.ground,_,{blending:1,depthWrite:!0,transparent:!0}));C.rotation.x=-Math.PI/2,i.add(C);let w=b.map(e=>{let t={..._,uWidth:v,uPhase:{value:e.phase},uP0:{value:new f(...e.p0)},uP1:{value:new f(...e.p1)},uP2:{value:new f(...e.p2)}},o=l(Math.round(80*n.quality.segments),a(`sword-ribbon`,y.ribbon,t,{...r,side:2}));i.add(o);let s=new d(new u(1.35,64),a(`sword-shock`,y.shock,{..._,uPhase:{value:e.phase}},r));return s.rotation.x=-Math.PI/2,s.position.copy(x(e.p0,e.p1,e.p2,.82)),s.position.y=.04,i.add(s),e}),T=new f,E=new f(1,0,0),D={..._,uSparks:S,uEmit:{value:T},uTangent:{value:E}};return i.add(c(t(160,n.quality,16),a(`sword-spark`,y.spark,D,r))),n.disposer.track(i),{bloom:{...e.bloom},update(t){_.uTime.value=t;let n=t*_.uSpeed.value%e.loop,r=w.reduce((t,r)=>{let i=(n+r.phase)%e.loop;return i<t.age?{age:i,path:r}:t},{age:99,path:w[0]}),i=Math.min(n/.62,1);T.copy(x(r.path.p0,r.path.p1,r.path.p2,i));let a=x(r.path.p0,r.path.p1,r.path.p2,Math.min(i+.04,1));E.copy(a).sub(T),E.lengthSq()<1e-5&&E.set(1,.2,0)},apply(t){_.uIntensity.value=h(t,`intensity`),_.uSpeed.value=h(t,`speed`),g(_.uColor.value,p(t,`color`)),g(_.uColorB.value,p(t,`colorB`)),v.value=.34*h(t,`width`),S.value=h(t,`sparks`),this.bloom={...e.bloom,strength:e.bloom.strength*(.6+.4*_.uIntensity.value)}},dispose(){}}}var C={meta:e,createEffect:S,sources:n({implementationName:`index.ts`,implementation:_,shaderName:`effect.glsl`,shader:v,programs:y,notes:e.notes})};export{C as effectModule};