import{n as e,t}from"./LightningStrike-DJxKzaAz.js";import{l as n,t as r}from"./index-Dgrgv_6h.js";import{c as i,i as a,l as o,o as s,r as c,s as l,t as u}from"./kit-TXKnCP5u.js";import{i as d,r as f}from"./geometry-ZkWW22uO.js";import{_ as p,et as m,ft as h,kn as g,o as _,pn as v,r as y,s as b,u as x}from"./textures-DdZe6I7R.js";var S=`import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import strikeSource from '../../vendor/LightningStrike.js?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, shade, solid } from '../../engine/materials'
import { createSeedPoints, createStreaks } from '../../engine/geometry'
import { frameCamera } from '../../engine/textures'
import { readColor, readNumber, writeColor } from '../../engine/params'
import { createRoot, visualUniforms } from '../kit'
import { scaledCount } from '../../engine/quality'
import { LightningStrike } from '../../vendor/LightningStrike.js'
import type { EffectContext, EffectInstance, EffectModule } from '../../engine/types'
import { AdditiveBlending, BackSide, CircleGeometry, DoubleSide, Mesh, PointLight, SphereGeometry, Vector3 } from 'three'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext): EffectInstance {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#e7f0ff', '#8f7dff'),
    uFlash: { value: 0 },
    uRough: { value: 0.82 },
    uImpact: { value: new Vector3(0.4, 0.05, 0.2) },
  }
  frameCamera(ctx.camera, [0.4, 3.4, 9.5], [0, 3.2, 0], 42)
  const sky = new Mesh(new SphereGeometry(60, 32, 20), shade('storm-sky', programs.sky, uniforms, { ...solid, side: BackSide, depthWrite: false }))
  sky.frustumCulled = false
  root.add(sky)
  const iterations = ctx.quality.resolved === 'low' ? 5 : 6
  const bolts = [0, 1, 2].map((index) => {
    const strike = new LightningStrike({
      sourceOffset: new Vector3(-1.4 + index * 1.5, 7.2, -0.6),
      destOffset: new Vector3(-0.8 + index * 1.2, 0, 0.3 - index * 0.2),
      radius0: 0.09,
      radius1: 0.025,
      radius0Factor: 0.62,
      radius1Factor: 0.28,
      minRadius: 0.012,
      maxIterations: iterations,
      ramification: 4,
      maxSubrayRecursion: 3,
      recursionProbability: 0.58,
      roughness: 0.82,
      straightness: 0.64,
      timeScale: 0.85,
      generateUVs: true,
      noiseSeed: 0.17 + index * 0.21,
      isEternal: true,
    })
    const mesh = new Mesh(strike, shade('bolt', programs.bolt, uniforms, { ...glow, side: DoubleSide, blending: AdditiveBlending }))
    mesh.frustumCulled = false
    mesh.visible = index < 2
    root.add(mesh)
    return { strike, mesh }
  })
  const shock = new Mesh(new CircleGeometry(1.4, 48), shade('bolt-shock', programs.shock, uniforms, glow))
  shock.rotation.x = -Math.PI / 2
  shock.position.y = 0.03
  root.add(shock)
  root.add(createStreaks(scaledCount(160, ctx.quality, 20), shade('rain', programs.rain, uniforms, glow)))
  root.add(createSeedPoints(scaledCount(70, ctx.quality, 8), shade('bolt-spark', programs.spark, uniforms, glow)))
  const flash = new PointLight(0xdfe8ff, 0, 18)
  flash.position.set(0, 1, 1)
  root.add(flash)
  let stamp = -1
  ctx.disposer.track(root)
  return {
    bloom: { ...meta.bloom },
    update(time: number, _dt: number, reduced: boolean) {
      uniforms.uTime.value = time
      sky.position.copy(ctx.camera.position)
      const flashAmt = reduced ? 0.35 : Math.pow(Math.max(0, Math.sin(time * 1.7)), 22)
      uniforms.uFlash.value = flashAmt
      flash.intensity = 4 + flashAmt * 28
      const mark = Math.floor(time * (reduced ? 0.4 : 0.9))
      if (mark !== stamp) {
        stamp = mark
        const hit = bolts[mark % bolts.length]
        if (hit) {
          hit.strike.rayParameters.destOffset?.set((Math.sin(mark * 2.1) * 2.2), 0, Math.cos(mark) * 1.1)
          uniforms.uImpact.value.copy(hit.strike.rayParameters.destOffset ?? uniforms.uImpact.value)
          shock.position.x = uniforms.uImpact.value.x
          shock.position.z = uniforms.uImpact.value.z
          flash.position.copy(uniforms.uImpact.value).setY(1)
        }
      }
      for (const bolt of bolts) {
        const rough = bolt.strike.rayParameters.roughness
        if (typeof rough === 'number') bolt.strike.rayParameters.roughness = uniforms.uRough.value
        bolt.strike.update(time)
      }
    },
    apply(values) {
      uniforms.uIntensity.value = readNumber(values, 'intensity')
      uniforms.uSpeed.value = readNumber(values, 'speed')
      uniforms.uRough.value = readNumber(values, 'rough')
      const count = Math.round(readNumber(values, 'bolts'))
      bolts.forEach((bolt, index) => {
        bolt.mesh.visible = index < count
      })
      writeColor(uniforms.uColor.value, readColor(values, 'color'))
      writeColor(uniforms.uColorB.value, readColor(values, 'colorB'))
      this.bloom = { ...meta.bloom, strength: meta.bloom.strength * (0.65 + 0.35 * uniforms.uIntensity.value) }
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
    upstream: [{ filename: 'LightningStrike.js', language: 'javascript', role: 'upstream', contents: strikeSource }],
  }),
}
`,C=`// @program sky
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
uniform float uFlash;
uniform vec3 uColorB;
void main() {
  vec3 dir = normalize(vDir);
  float cloud = fbm(vec3(dir.xz * 3.0, uTime * 0.05));
  vec3 col = mix(vec3(0.01, 0.012, 0.02), vec3(0.05, 0.06, 0.09), smoothstep(-0.2, 0.4, dir.y));
  col += vec3(0.03, 0.035, 0.05) * smoothstep(0.1, 0.7, cloud) * smoothstep(0.0, 0.4, dir.y);
  col += uColorB * uFlash * 0.55;
  col += stars(dir, 80.0) * (1.0 - uFlash);
  gl_FragColor = vec4(col, 1.0);
}

// @program bolt
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
uniform vec3 uColorB;
void main() {
  float across = min(vUv.y, 1.0 - vUv.y);
  float core = exp(-across * 10.0);
  vec3 col = mix(uColorB, vec3(1.0), core);
  gl_FragColor = vec4(col * uIntensity * (0.55 + core * 2.4), clamp(0.25 + core, 0.0, 1.0));
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
uniform float uFlash;
uniform float uIntensity;
uniform vec3 uColor;
void main() {
  float r = length(vUv * 2.0 - 1.0);
  float ring = exp(-pow((r - 0.55) * 16.0, 2.0));
  float alpha = ring * uFlash;
  if (r > 1.0) discard;
  gl_FragColor = vec4(uColor * uIntensity, alpha);
}

// @program rain
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
  float y = fract(aSeed + uTime * uSpeed * 0.35);
  vec3 head = vec3((aSeed2 - 0.5) * 14.0, mix(7.0, -0.2, y), (aSeed - 0.5) * 8.0);
  vec3 tail = head + vec3(0.35, 0.7, 0.0);
  vec3 pos = streakBillboard(tail, head, uv, 0.012);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vAlpha = smoothstep(0.0, 0.05, y) * (1.0 - smoothstep(0.85, 1.0, y)) * 0.45;
  vAcross = abs(uv.x - 0.5) * 2.0;
}
// --- fragment ---
varying float vAlpha;
varying float vAcross;
void main() {
  float core = exp(-vAcross * vAcross * 8.0);
  float alpha = core * vAlpha;
  if (alpha < 0.02) discard;
  gl_FragColor = vec4(vec3(0.75, 0.82, 0.9), alpha);
}

// @program spark
// --- vertex ---
attribute vec3 aSeed;
uniform float uTime;
uniform float uFlash;
uniform vec3 uImpact;
varying float vFade;

void main() {
  float life = fract(aSeed.x + uTime * 1.5);
  vec3 dir = normalize(aSeed - 0.5);
  vec3 pos = uImpact + dir * life * 0.8 + vec3(0.0, life * 0.4 - life * life, 0.0);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(12.0 * (1.0 - life) * uFlash * (3.0 / max(0.4, -mv.z)), 1.0, 22.0);
  vFade = (1.0 - life) * uFlash;
}
// --- fragment ---
varying float vFade;
uniform vec3 uColor;
void main() {
  vec2 pc = gl_PointCoord * 2.0 - 1.0;
  float glow = exp(-dot(pc, pc) * 3.0);
  if (glow < 0.04) discard;
  gl_FragColor = vec4(uColor, glow * vFade);
}
`,w=o(C);function T(e){let i=u(e),o={...c(n.loop,`#e7f0ff`,`#8f7dff`),uFlash:{value:0},uRough:{value:.82},uImpact:{value:new g(.4,.05,.2)}};y(e.camera,[.4,3.4,9.5],[0,3.2,0],42);let S=new m(new v(60,32,20),s(`storm-sky`,w.sky,o,{...l,side:1,depthWrite:!1}));S.frustumCulled=!1,i.add(S);let C=e.quality.resolved===`low`?5:6,T=[0,1,2].map(e=>{let n=new t({sourceOffset:new g(-1.4+e*1.5,7.2,-.6),destOffset:new g(-.8+e*1.2,0,.3-e*.2),radius0:.09,radius1:.025,radius0Factor:.62,radius1Factor:.28,minRadius:.012,maxIterations:C,ramification:4,maxSubrayRecursion:3,recursionProbability:.58,roughness:.82,straightness:.64,timeScale:.85,generateUVs:!0,noiseSeed:.17+e*.21,isEternal:!0}),r=new m(n,s(`bolt`,w.bolt,o,{...a,side:2,blending:2}));return r.frustumCulled=!1,r.visible=e<2,i.add(r),{strike:n,mesh:r}}),E=new m(new p(1.4,48),s(`bolt-shock`,w.shock,o,a));E.rotation.x=-Math.PI/2,E.position.y=.03,i.add(E),i.add(d(r(160,e.quality,20),s(`rain`,w.rain,o,a))),i.add(f(r(70,e.quality,8),s(`bolt-spark`,w.spark,o,a)));let D=new h(14674175,0,18);D.position.set(0,1,1),i.add(D);let O=-1;return e.disposer.track(i),{bloom:{...n.bloom},update(t,n,r){o.uTime.value=t,S.position.copy(e.camera.position);let i=r?.35:Math.max(0,Math.sin(t*1.7))**22;o.uFlash.value=i,D.intensity=4+i*28;let a=Math.floor(t*(r?.4:.9));if(a!==O){O=a;let e=T[a%T.length];e&&(e.strike.rayParameters.destOffset?.set(Math.sin(a*2.1)*2.2,0,Math.cos(a)*1.1),o.uImpact.value.copy(e.strike.rayParameters.destOffset??o.uImpact.value),E.position.x=o.uImpact.value.x,E.position.z=o.uImpact.value.z,D.position.copy(o.uImpact.value).setY(1))}for(let e of T)typeof e.strike.rayParameters.roughness==`number`&&(e.strike.rayParameters.roughness=o.uRough.value),e.strike.update(t)},apply(e){o.uIntensity.value=b(e,`intensity`),o.uSpeed.value=b(e,`speed`),o.uRough.value=b(e,`rough`);let t=Math.round(b(e,`bolts`));T.forEach((e,n)=>{e.mesh.visible=n<t}),x(o.uColor.value,_(e,`color`)),x(o.uColorB.value,_(e,`colorB`)),this.bloom={...n.bloom,strength:n.bloom.strength*(.65+.35*o.uIntensity.value)}},dispose(){}}}var E={meta:n,createEffect:T,sources:i({implementationName:`index.ts`,implementation:S,shaderName:`effect.glsl`,shader:C,programs:w,notes:n.notes,upstream:[{filename:`LightningStrike.js`,language:`javascript`,role:`upstream`,contents:e}]})};export{E as effectModule};