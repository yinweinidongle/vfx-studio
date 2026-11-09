import{r as e,t}from"./index-Dgrgv_6h.js";import{c as n,i as r,l as i,n as a,o,r as s,s as c,t as l}from"./kit-TXKnCP5u.js";import{i as u}from"./geometry-ZkWW22uO.js";import{et as d,pn as f,r as p,s as m}from"./textures-DdZe6I7R.js";var h=`import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, shade, solid } from '../../engine/materials'
import { createStreaks } from '../../engine/geometry'
import { frameCamera } from '../../engine/textures'
import { readNumber } from '../../engine/params'
import { createRoot, publish, visualUniforms } from '../kit'
import { scaledCount } from '../../engine/quality'
import type { EffectContext, EffectModule } from '../../engine/types'
import { BackSide, Mesh, SphereGeometry } from 'three'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext) {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#fff1d4', '#ff8a3d'),
    uBurn: { value: 1 },
    uBreak: { value: 0.62 },
  }
  frameCamera(ctx.camera, [0.2, 3.2, 9.2], [0, 3.5, 0], 46)
  const planet = new Mesh(new SphereGeometry(6.2, 64, 40), shade('planet', programs.planet, uniforms, solid))
  planet.position.set(0, -4.6, -1)
  const air = new Mesh(new SphereGeometry(6.55, 48, 32), shade('air', programs.air, uniforms, { ...glow, side: BackSide }))
  air.position.copy(planet.position)
  root.add(planet, air)
  root.add(createStreaks(scaledCount(420, ctx.quality, 40), shade('meteor', programs.meteor, uniforms, glow)))
  const effect = publish(ctx, root, uniforms, meta.bloom)
  const applyBase = effect.apply.bind(effect)
  effect.apply = (values) => {
    applyBase(values)
    uniforms.uBurn.value = readNumber(values, 'burn')
    uniforms.uBreak.value = readNumber(values, 'breakup')
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
`,g=`// @program planet
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
void main() {
  vec3 normalW = normalize(vNormalW);
  vec3 viewDir = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - max(dot(normalW, viewDir), 0.0), 2.6);
  vec3 ground = vec3(0.01, 0.012, 0.02);
  vec2 sph = vec2(atan(normalW.z, normalW.x), asin(clamp(normalW.y, -1.0, 1.0)));
  vec2 cell = floor(sph * vec2(90.0, 46.0));
  float city = step(0.94, hash13(vec3(cell, 2.0)));
  float blink = 0.4 + 0.6 * sin(uTime * 2.2 + hash13(vec3(cell, 4.0)) * 20.0);
  vec3 col = ground + vec3(1.0, 0.82, 0.45) * city * blink * 0.55 * (1.0 - fres);
  col += vec3(0.35, 0.58, 1.0) * fres * 1.3;
  gl_FragColor = vec4(col, 1.0);
}

// @program air
// --- vertex ---
varying vec3 vNormalW;
varying vec3 vWorld;
void main() {
  vNormalW = mat3(modelMatrix) * normal;
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
varying vec3 vNormalW;
varying vec3 vWorld;
void main() {
  float fres = pow(1.0 - max(dot(normalize(vNormalW), normalize(cameraPosition - vWorld)), 0.0), 3.2);
  gl_FragColor = vec4(vec3(0.45, 0.7, 1.0) * fres, fres * 0.55);
}

// @program meteor
// --- vertex ---
// @include noise
// @include common
attribute float aSeed;
attribute float aSeed2;
attribute float aSeed3;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
uniform float uBurn;
uniform float uBreak;
varying float vAlpha;
varying float vAlong;
varying float vAcross;
varying vec3 vColor;

void main() {
  float family = floor(aSeed * 4.0);
  float child = step(0.72, aSeed2);
  float phase = family * 0.22;
  float local = mod(uTime * uSpeed * 0.33 + phase, 1.0);
  vec3 start = vec3(4.2 + family * 0.15, 6.4, -0.4);
  vec3 end = vec3(-4.6, 2.15 - family * 0.15, 0.6);
  float t = local;
  vec3 head = mix(start, end, t);
  float trail = 0.18 * uBurn;
  vec3 tail = mix(start, end, max(t - trail, 0.0));
  float alpha = smoothstep(0.0, 0.05, t) * (1.0 - smoothstep(0.82, 1.0, t));
  vec3 color = mix(vec3(1.0, 0.95, 0.85), vec3(1.0, 0.45, 0.15), smoothstep(0.0, 0.7, t));
  if (child > 0.5) {
    float k = clamp((t - uBreak) / 0.35, 0.0, 1.0);
    vec3 origin = mix(start, end, uBreak);
    vec3 dir = normalize(end - start);
    vec3 side = normalize(hash31(aSeed * 8.0) - 0.5);
    head = origin + dir * k * 1.4 + side * k * 0.7;
    tail = origin + dir * max(k - 0.2, 0.0) * 1.4 + side * max(k - 0.2, 0.0) * 0.7;
    alpha = (1.0 - k) * step(uBreak, t);
    color = vec3(1.0, 0.7, 0.35);
  } else if (t > uBreak) {
    alpha *= 0.35;
    trail *= 0.45;
    tail = mix(start, end, max(t - trail, 0.0));
  }
  vec3 pos = streakBillboard(tail, head, uv, child > 0.5 ? 0.015 : 0.028 * uBurn);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vAlpha = alpha;
  vAlong = uv.y;
  vAcross = abs(uv.x - 0.5) * 2.0;
  vColor = color;
}
// --- fragment ---
varying float vAlpha;
varying float vAlong;
varying float vAcross;
varying vec3 vColor;
uniform float uIntensity;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  float core = exp(-vAcross * vAcross * 12.0);
  float glow = exp(-vAcross * vAcross * 1.6);
  vec3 col = mix(uColorB, vec3(1.0), core);
  col = mix(col, vColor, 0.65);
  col = mix(col, uColor, 0.2);
  float alpha = (core + glow * 0.3) * vAlpha * uIntensity * smoothstep(0.0, 0.25, vAlong);
  if (alpha < 0.015) discard;
  gl_FragColor = vec4(col * (0.55 + core * 2.4) * uIntensity, alpha);
}
`,_=i(g);function v(n){let i=l(n),h={...s(e.loop,`#fff1d4`,`#ff8a3d`),uBurn:{value:1},uBreak:{value:.62}};p(n.camera,[.2,3.2,9.2],[0,3.5,0],46);let g=new d(new f(6.2,64,40),o(`planet`,_.planet,h,c));g.position.set(0,-4.6,-1);let v=new d(new f(6.55,48,32),o(`air`,_.air,h,{...r,side:1}));v.position.copy(g.position),i.add(g,v),i.add(u(t(420,n.quality,40),o(`meteor`,_.meteor,h,r)));let y=a(n,i,h,e.bloom),b=y.apply.bind(y);return y.apply=e=>{b(e),h.uBurn.value=m(e,`burn`),h.uBreak.value=m(e,`breakup`)},y}var y={meta:e,createEffect:v,sources:n({implementationName:`index.ts`,implementation:h,shaderName:`effect.glsl`,shader:g,programs:_,notes:e.notes})};export{y as effectModule};