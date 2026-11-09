import{B as e,dn as t,kn as n,o as r,s as i,u as a}from"./textures-DdZe6I7R.js";var o=`//
// Description : Array and textureless GLSL 2D/3D/4D simplex 
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20201014 (stegu)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
// 

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  { 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
  }
`,s=`// Original helpers for 折光社. Simplex noise itself is the MIT Ashima / Gustavson
// implementation included separately as snoise3D.glsl. These wrappers are ours.

float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}

vec3 hash31(float p) {
  vec3 v = fract(vec3(p) * vec3(0.1031, 0.1030, 0.0973));
  v += dot(v, v.yzx + 33.33);
  return fract((v.xxy + v.yzz) * v.zyx);
}

vec3 hash33(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return fract(sin(p) * 43758.5453123);
}

float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 4; i++) {
    value += amplitude * snoise(p);
    p = p * 2.03 + vec3(0.17, 1.7, 0.31);
    amplitude *= 0.5;
  }
  return value;
}

float stars(vec3 dir, float scale) {
  vec3 p = normalize(dir) * scale;
  vec3 id = floor(p);
  vec3 f = fract(p) - 0.5;
  float h = hash13(id);
  float d = length(f);
  float core = smoothstep(0.045, 0.0, d);
  return step(0.972, h) * core;
}

vec3 streakBillboard(vec3 tail, vec3 head, vec2 uv, float width) {
  vec3 axis = head - tail;
  float len2 = dot(axis, axis);
  vec3 dir = len2 > 1e-8 ? axis * inversesqrt(len2) : vec3(0.0, 1.0, 0.0);
  vec3 toCam = normalize(cameraPosition - mix(tail, head, 0.75));
  vec3 side = cross(dir, toCam);
  float sideLen = length(side);
  side = sideLen > 1e-4 ? side / sideLen : normalize(cross(dir, vec3(0.0, 1.0, 0.0)));
  return mix(tail, head, clamp(uv.y, 0.0, 1.0)) + side * (uv.x - 0.5) * width;
}
`,c={noise:o,common:s},l=/^[ \t]*\/\/ @include ([a-z0-9-]+)[ \t]*$/gm;function u(e){return e.replace(l,(e,t)=>{let n=c[t];if(!n)throw Error(`未知着色器片段: ${t}`);return n})}function d(e){let t=e.split(/\/\/ @program ([a-z0-9-]+)\n/);if(t.length<3)throw Error(`着色器文件缺少 // @program 标记`);let n={};for(let e=1;e<t.length;e+=2){let r=t[e],i=t[e+1]??``,a=i.indexOf(`// --- vertex ---`),o=i.indexOf(`// --- fragment ---`);if(a<0||o<0||o<a)throw Error(`着色器程序 ${r} 缺少 vertex / fragment 标记`);n[r]={vertex:i.slice(a+17,o).trim(),fragment:i.slice(o+19).trim()}}return n}function f(e){let t=d(e),n={};for(let[e,r]of Object.entries(t))n[e]={vertex:u(r.vertex),fragment:u(r.fragment)};return n}function p(){return[{filename:`snoise3D.glsl`,contents:o},{filename:`common.glsl`,contents:s}]}var m={glsl:`glsl`,typescript:`typescript`,javascript:`javascript`,markdown:`markdown`};function h(e){let t=[{filename:e.implementationName,language:`typescript`,role:`implementation`,contents:e.implementation},{filename:e.shaderName,language:`glsl`,role:`shader`,contents:e.shader}];for(let[n,r]of Object.entries(e.programs))t.push({filename:`${n}.vertex.compiled.glsl`,language:`glsl`,role:`compiled`,contents:r.vertex}),t.push({filename:`${n}.fragment.compiled.glsl`,language:`glsl`,role:`compiled`,contents:r.fragment});for(let e of p())t.push({filename:e.filename,language:m.glsl,role:`shared`,contents:e.contents});return t.push({filename:`NOTES.md`,language:`markdown`,role:`notes`,contents:e.notes}),e.upstream&&t.push(...e.upstream),t}function g(e,n,r,i={}){return new t({name:e,uniforms:r,vertexShader:n.vertex,fragmentShader:n.fragment,blending:i.blending??2,side:i.side??0,depthWrite:i.depthWrite??!1,depthTest:i.depthTest??!0,transparent:i.transparent??!0,toneMapped:!1})}var _={blending:1,depthWrite:!0,transparent:!1},v={blending:2,depthWrite:!1,transparent:!0},y={blending:1,depthWrite:!1,transparent:!0};function b(e,t=`#7ef3ff`,r=`#8d7dff`){let i=new n,o=new n;return a(i,t),a(o,r),{uTime:{value:0},uLoop:{value:e},uIntensity:{value:1},uSpeed:{value:1},uColor:{value:i},uColorB:{value:o}}}function x(e,t){e.uIntensity.value=i(t,`intensity`),e.uSpeed.value=i(t,`speed`),a(e.uColor.value,r(t,`color`)),a(e.uColorB.value,r(t,`colorB`))}function S(t){let n=new e;return t.scene.add(n),n}function C(e,t,n,r,i){e.disposer.track(t);let a={bloom:{...r},update(e,t,r){n.uTime.value=e,i?.(e,r)},apply(e){x(n,e),a.bloom={...r,strength:r.strength*(.62+.38*n.uIntensity.value)}},dispose(){}};return a}export{y as a,h as c,v as i,f as l,C as n,g as o,b as r,_ as s,S as t};