import{a as e}from"./index-Dgrgv_6h.js";import{a as t,c as n,l as r,n as i,o as a,r as o,s,t as c}from"./kit-TXKnCP5u.js";import{_ as l,dt as u,et as d,pn as f,r as p,s as m}from"./textures-DdZe6I7R.js";var h=`import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { mist, shade, solid } from '../../engine/materials'
import { frameCamera } from '../../engine/textures'
import { readNumber } from '../../engine/params'
import { createRoot, publish, visualUniforms } from '../kit'
import type { EffectContext, EffectModule } from '../../engine/types'
import { BackSide, CircleGeometry, DoubleSide, Mesh, PlaneGeometry, SphereGeometry } from 'three'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext) {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#b8ffd8', '#8d7dff'),
    uFold: { value: 1 },
    uVeil: { value: 1 },
    uPhase: { value: 0 },
  }
  frameCamera(ctx.camera, [0, 1.6, 11], [0, 3.4, 0], 48)
  const sky = new Mesh(new SphereGeometry(46, 32, 20), shade('aurora-sky', programs.sky, uniforms, { ...solid, side: BackSide, depthWrite: false }))
  sky.frustumCulled = false
  root.add(sky)
  const ice = new Mesh(new CircleGeometry(16, 48), shade('aurora-ice', programs.ice, uniforms, solid))
  ice.rotation.x = -Math.PI / 2
  root.add(ice)
  const segments = Math.round(80 * ctx.quality.segments)
  const curtains = [0, 2.2, 4.4].map((phase, index) => {
    const material = shade('curtain', programs.curtain, { ...uniforms, uPhase: { value: phase } }, { ...mist, side: DoubleSide })
    const mesh = new Mesh(new PlaneGeometry(14, 7, segments, 24), material)
    mesh.position.set(0, 4.2, -1 - index * 1.4)
    root.add(mesh)
    const reflection = new Mesh(new PlaneGeometry(14, 7, Math.max(8, Math.round(segments * 0.4)), 8), material)
    reflection.position.set(0, -0.2, -1 - index * 1.4)
    reflection.scale.y = -0.35
    reflection.renderOrder = 2
    root.add(reflection)
    return mesh
  })
  const effect = publish(ctx, root, uniforms, meta.bloom, () => {
    sky.position.copy(ctx.camera.position)
    void curtains
  })
  const applyBase = effect.apply.bind(effect)
  effect.apply = (values) => {
    applyBase(values)
    uniforms.uFold.value = readNumber(values, 'fold')
    uniforms.uVeil.value = readNumber(values, 'veil')
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
`,g=`// @program sky
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
  vec3 col = mix(vec3(0.01, 0.016, 0.03), vec3(0.0, 0.0, 0.01), smoothstep(-0.1, 0.7, dir.y));
  float milky = exp(-pow((dir.y - 0.15) * 5.0, 2.0));
  float arm = fbm(vec3(dir.xz * 2.0, dir.y + uTime * 0.01));
  col += vec3(0.18, 0.16, 0.28) * milky * smoothstep(-0.2, 0.6, arm);
  col += stars(dir, 150.0) * vec3(0.9, 0.95, 1.0);
  gl_FragColor = vec4(col, 1.0);
}

// @program curtain
// --- vertex ---
// @include noise
// @include common
varying vec2 vUv;
varying float vFold;
uniform float uTime;
uniform float uSpeed;
uniform float uFold;
uniform float uPhase;

void main() {
  vUv = uv;
  vec3 pos = position;
  float wave = sin(pos.x * 0.28 + uTime * uSpeed * 0.35 + uPhase) * 1.3;
  wave += sin(pos.x * 0.11 - uTime * uSpeed * 0.18) * 2.4;
  wave += snoise(vec3(pos.x * 0.15, uTime * 0.05, uPhase)) * 0.6;
  pos.z += wave * uv.y * uFold;
  pos.x += sin(uv.y * 3.0 + uTime * uSpeed + uPhase) * 0.25 * uFold;
  vFold = wave;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
// --- fragment ---
// @include noise
// @include common
varying vec2 vUv;
varying float vFold;
uniform float uTime;
uniform float uSpeed;
uniform float uVeil;
uniform float uIntensity;
uniform float uPhase;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  float bands = fbm(vec3(vUv.x * 1.6 + uTime * uSpeed * 0.04, vUv.y * 2.2, vFold * 0.05));
  float veil = smoothstep(0.42, 0.05, abs(fract(vUv.x * 2.4 + 0.12 * sin(vUv.y * 3.0 + uPhase)) - 0.5));
  vec3 green = uColor;
  vec3 violet = uColorB;
  vec3 col = mix(green * 0.35, mix(green, violet, bands), veil);
  col = mix(col, vec3(0.8, 1.0, 0.86), smoothstep(0.78, 1.0, vUv.y) * veil * 0.4);
  float alpha = veil * smoothstep(0.05, 0.7, bands);
  alpha *= smoothstep(0.0, 0.08, vUv.y) * smoothstep(1.0, 0.2, vUv.y);
  alpha *= uVeil * 0.72;
  gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.8));
}

// @program ice
// --- vertex ---
varying vec3 vWorld;
void main() {
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
varying vec3 vWorld;
void main() {
  float fade = smoothstep(18.0, 2.0, length(vWorld.xz));
  gl_FragColor = vec4(vec3(0.02, 0.03, 0.034), 0.92 * fade);
}
`,_=r(g);function v(n){let r=c(n),h={...o(e.loop,`#b8ffd8`,`#8d7dff`),uFold:{value:1},uVeil:{value:1},uPhase:{value:0}};p(n.camera,[0,1.6,11],[0,3.4,0],48);let g=new d(new f(46,32,20),a(`aurora-sky`,_.sky,h,{...s,side:1,depthWrite:!1}));g.frustumCulled=!1,r.add(g);let v=new d(new l(16,48),a(`aurora-ice`,_.ice,h,s));v.rotation.x=-Math.PI/2,r.add(v);let y=Math.round(80*n.quality.segments);[0,2.2,4.4].map((e,n)=>{let i=a(`curtain`,_.curtain,{...h,uPhase:{value:e}},{...t,side:2}),o=new d(new u(14,7,y,24),i);o.position.set(0,4.2,-1-n*1.4),r.add(o);let s=new d(new u(14,7,Math.max(8,Math.round(y*.4)),8),i);return s.position.set(0,-.2,-1-n*1.4),s.scale.y=-.35,s.renderOrder=2,r.add(s),o});let b=i(n,r,h,e.bloom,()=>{g.position.copy(n.camera.position)}),x=b.apply.bind(b);return b.apply=e=>{x(e),h.uFold.value=m(e,`fold`),h.uVeil.value=m(e,`veil`)},b}var y={meta:e,createEffect:v,sources:n({implementationName:`index.ts`,implementation:h,shaderName:`effect.glsl`,shader:g,programs:_,notes:e.notes})};export{y as effectModule};