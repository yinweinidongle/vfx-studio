import{m as e,t}from"./index-Dgrgv_6h.js";import{c as n,i as r,l as i,n as a,o,r as s,t as c}from"./kit-TXKnCP5u.js";import{r as l}from"./geometry-ZkWW22uO.js";import{_ as u,et as d,gn as f,r as p,s as m,w as h}from"./textures-DdZe6I7R.js";var g=`import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { shade, glow } from '../../engine/materials'
import { createSeedPoints } from '../../engine/geometry'
import { frameCamera } from '../../engine/textures'
import { readNumber } from '../../engine/params'
import { createRoot, publish, visualUniforms } from '../kit'
import type { EffectContext, EffectModule } from '../../engine/types'
import {
  CircleGeometry,
  CylinderGeometry,
  DoubleSide,
  Mesh,
  TorusGeometry,
} from 'three'
import { scaledCount } from '../../engine/quality'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext) {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#79f3ff', '#9a86ff'),
    uDensity: { value: 22 },
    uHeight: { value: 1.25 },
  }
  frameCamera(ctx.camera, [0.2, 3.15, 5.4], [0, 1.05, 0], 38)

  const ground = new Mesh(new CircleGeometry(3.3, 96), shade('aura-ground', programs.ground, uniforms, glow))
  ground.rotation.x = -Math.PI / 2
  root.add(ground)

  const ringMaterial = shade('aura-ring', programs.ring, uniforms, { ...glow, side: DoubleSide })
  const specs = [
    { radius: 1.55, tube: 0.035, tilt: 0.15, speed: 0.45 },
    { radius: 1.15, tube: 0.02, tilt: 1.05, speed: -0.7 },
    { radius: 0.72, tube: 0.028, tilt: 1.7, speed: 0.9 },
  ]
  const rings = specs.map((spec) => {
    const mesh = new Mesh(new TorusGeometry(spec.radius, spec.tube, 16, 120), ringMaterial)
    mesh.rotation.x = spec.tilt
    root.add(mesh)
    return { mesh, speed: spec.speed }
  })

  const columnMaterial = shade('aura-column', programs.column, uniforms, { ...glow, side: DoubleSide })
  const wide = new Mesh(new CylinderGeometry(0.34, 0.55, 3.1, 32, 1, true), columnMaterial)
  wide.position.y = 1.55
  const core = new Mesh(new CylinderGeometry(0.08, 0.12, 3.3, 16, 1, true), columnMaterial)
  core.position.y = 1.65
  root.add(wide, core)

  root.add(createSeedPoints(scaledCount(520, ctx.quality), shade('aura-vortex', programs.vortex, uniforms, glow)))
  root.add(createSeedPoints(scaledCount(90, ctx.quality, 12), shade('aura-mote', programs.mote, uniforms, glow)))

  const seals = Array.from({ length: 6 }, (_, index) => {
    const mesh = new Mesh(new CircleGeometry(0.16, 24), shade('aura-seal', programs.ground, uniforms, glow))
    const angle = (index / 6) * Math.PI * 2
    mesh.position.set(Math.cos(angle) * 2.15, 0.9, Math.sin(angle) * 2.15)
    root.add(mesh)
    return mesh
  })

  const effect = publish(ctx, root, uniforms, meta.bloom, (time, reduced) => {
    const motion = reduced ? 0.25 : 1
    rings.forEach((ring, index) => {
      ring.mesh.rotation.z = time * ring.speed * motion
      ring.mesh.rotation.y = Math.sin(time * 0.3 + index) * 0.08 * motion
    })
    seals.forEach((seal, index) => {
      const angle = (index / 6) * Math.PI * 2 + time * 0.22 * motion
      seal.position.set(Math.cos(angle) * 2.15, 0.85 + Math.sin(time * 1.4 + index) * 0.08, Math.sin(angle) * 2.15)
      seal.lookAt(ctx.camera.position)
    })
  })
  const applyBase = effect.apply.bind(effect)
  effect.apply = (values) => {
    applyBase(values)
    uniforms.uDensity.value = readNumber(values, 'density')
    uniforms.uHeight.value = readNumber(values, 'height')
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
`,_=`// @program ground
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
uniform float uDensity;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  vec2 p = vUv * 2.0 - 1.0;
  float r = length(p);
  float ang = atan(p.y, p.x);
  float spin = ang + uTime * uSpeed * 0.35;
  float ticks = smoothstep(0.18, 0.02, abs(fract(spin * uDensity / 6.28318) - 0.5));
  float ringA = exp(-pow((r - 0.72) * 26.0, 2.0));
  float ringB = exp(-pow((r - 0.48) * 34.0, 2.0));
  float ringC = exp(-pow((r - 0.28) * 40.0, 2.0));
  float glyphId = floor(spin * 12.0 / 6.28318);
  float glyph = step(0.62, hash11(glyphId + 4.0));
  float glyphArc = smoothstep(0.42, 0.08, abs(fract(spin * 12.0 / 6.28318) - 0.5));
  float runes = glyph * glyphArc * exp(-pow((r - 0.6) * 18.0, 2.0));
  float pulse = exp(-pow((r - fract(uTime * uSpeed * 0.18)) * 16.0, 2.0));
  vec3 col = uColor * (ringA * (0.35 + ticks) + ringC * 0.8);
  col += uColorB * ringB * 0.7;
  col += mix(uColor, vec3(1.0), 0.65) * runes * 1.6;
  col += vec3(1.0) * pulse * 0.45;
  float disk = smoothstep(1.02, 0.2, r) * 0.18;
  float alpha = clamp(disk + ringA + ringB + ringC + runes + pulse, 0.0, 1.0);
  if (r > 1.02) discard;
  gl_FragColor = vec4(col * uIntensity, alpha);
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
uniform float uDensity;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  float across = abs(vUv.y - 0.5) * 2.0;
  float core = exp(-across * across * 7.0);
  float spin = vUv.x * uDensity + uTime * uSpeed * 0.15;
  float dash = step(0.45, fract(spin));
  float mark = step(0.72, hash11(floor(spin))) * smoothstep(0.5, 0.05, abs(fract(spin) - 0.5));
  vec3 col = mix(uColorB, vec3(1.0), core);
  col *= 0.18 + dash * 0.55 + mark * 1.1;
  col *= uIntensity;
  gl_FragColor = vec4(col * (0.22 + core * 1.15), clamp(core * 0.85 + mark, 0.0, 1.0));
}

// @program column
// --- vertex ---
varying vec2 vUv;
varying vec3 vNormalW;
void main() {
  vUv = uv;
  vNormalW = mat3(modelMatrix) * normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

// --- fragment ---
// @include noise
// @include common
varying vec2 vUv;
varying vec3 vNormalW;
uniform float uTime;
uniform float uSpeed;
uniform float uIntensity;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  float n = fbm(vec3(vUv.x * 6.0, vUv.y * 3.0 - uTime * uSpeed * 1.4, 0.4));
  float filament = smoothstep(0.15, 0.85, n);
  float fres = pow(1.0 - abs(dot(normalize(vNormalW), vec3(0.0, 0.2, 1.0))), 1.6);
  vec3 col = mix(uColorB, uColor, filament);
  col += vec3(1.0) * pow(filament, 3.0) * 0.8;
  float fade = smoothstep(0.0, 0.12, vUv.y) * smoothstep(1.0, 0.55, vUv.y);
  gl_FragColor = vec4(col * uIntensity * (0.45 + fres), filament * fade);
}

// @program vortex
// --- vertex ---
// @include noise
// @include common
attribute vec3 aSeed;
uniform float uTime;
uniform float uSpeed;
uniform float uHeight;
varying float vFade;
varying vec3 vColor;

void main() {
  float h = fract(aSeed.x + uTime * uSpeed * 0.16);
  float ang = aSeed.y * 6.28318 + h * 9.0 + uTime * uSpeed;
  float rad = mix(1.15, 0.08, h);
  vec3 pos = vec3(cos(ang) * rad, h * 3.1 * uHeight, sin(ang) * rad);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(10.0 * (1.4 - h) * (3.2 / max(0.4, -mv.z)), 1.0, 28.0);
  vFade = smoothstep(0.0, 0.08, h) * (1.0 - smoothstep(0.82, 1.0, h));
  vColor = mix(vec3(1.0), vec3(0.7, 0.9, 1.0), h);
}

// --- fragment ---
varying float vFade;
varying vec3 vColor;
uniform float uIntensity;
uniform vec3 uColor;

void main() {
  vec2 pc = gl_PointCoord * 2.0 - 1.0;
  float d = dot(pc, pc);
  float glow = exp(-d * 2.4);
  if (glow < 0.02) discard;
  gl_FragColor = vec4(mix(uColor, vColor, 0.45) * uIntensity * (0.4 + glow), glow * vFade);
}

// @program mote
// --- vertex ---
attribute vec3 aSeed;
uniform float uTime;
uniform float uSpeed;
varying float vFade;

void main() {
  float ang = aSeed.x * 6.28318 + uTime * uSpeed * 0.35;
  float rad = 1.5 + aSeed.y * 1.3;
  float y = 0.25 + aSeed.z * 1.6 + sin(uTime * 0.8 + aSeed.x * 8.0) * 0.12;
  vec3 pos = vec3(cos(ang) * rad, y, sin(ang) * rad);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(18.0 * (2.4 / max(0.4, -mv.z)), 2.0, 36.0);
  vFade = 0.35 + 0.65 * (0.5 + 0.5 * sin(uTime * 3.0 + aSeed.y * 30.0));
}

// --- fragment ---
varying float vFade;
uniform float uIntensity;
uniform vec3 uColorB;

void main() {
  vec2 pc = gl_PointCoord * 2.0 - 1.0;
  float d = dot(pc, pc);
  float core = exp(-d * 8.0);
  float glow = exp(-d * 2.0);
  if (glow < 0.03) discard;
  gl_FragColor = vec4(mix(uColorB, vec3(1.0), core) * uIntensity, glow * vFade);
}
`,v=i(_);function y(n){let i=c(n),g={...s(e.loop,`#79f3ff`,`#9a86ff`),uDensity:{value:22},uHeight:{value:1.25}};p(n.camera,[.2,3.15,5.4],[0,1.05,0],38);let _=new d(new u(3.3,96),o(`aura-ground`,v.ground,g,r));_.rotation.x=-Math.PI/2,i.add(_);let y=o(`aura-ring`,v.ring,g,{...r,side:2}),b=[{radius:1.55,tube:.035,tilt:.15,speed:.45},{radius:1.15,tube:.02,tilt:1.05,speed:-.7},{radius:.72,tube:.028,tilt:1.7,speed:.9}].map(e=>{let t=new d(new f(e.radius,e.tube,16,120),y);return t.rotation.x=e.tilt,i.add(t),{mesh:t,speed:e.speed}}),x=o(`aura-column`,v.column,g,{...r,side:2}),S=new d(new h(.34,.55,3.1,32,1,!0),x);S.position.y=1.55;let C=new d(new h(.08,.12,3.3,16,1,!0),x);C.position.y=1.65,i.add(S,C),i.add(l(t(520,n.quality),o(`aura-vortex`,v.vortex,g,r))),i.add(l(t(90,n.quality,12),o(`aura-mote`,v.mote,g,r)));let w=Array.from({length:6},(e,t)=>{let n=new d(new u(.16,24),o(`aura-seal`,v.ground,g,r)),a=t/6*Math.PI*2;return n.position.set(Math.cos(a)*2.15,.9,Math.sin(a)*2.15),i.add(n),n}),T=a(n,i,g,e.bloom,(e,t)=>{let r=t?.25:1;b.forEach((t,n)=>{t.mesh.rotation.z=e*t.speed*r,t.mesh.rotation.y=Math.sin(e*.3+n)*.08*r}),w.forEach((t,i)=>{let a=i/6*Math.PI*2+e*.22*r;t.position.set(Math.cos(a)*2.15,.85+Math.sin(e*1.4+i)*.08,Math.sin(a)*2.15),t.lookAt(n.camera.position)})}),E=T.apply.bind(T);return T.apply=e=>{E(e),g.uDensity.value=m(e,`density`),g.uHeight.value=m(e,`height`)},T}var b={meta:e,createEffect:y,sources:n({implementationName:`index.ts`,implementation:g,shaderName:`effect.glsl`,shader:_,programs:v,notes:e.notes})};export{b as effectModule};