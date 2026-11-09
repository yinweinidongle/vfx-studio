// @program rock
// --- vertex ---
varying vec2 vUv;
varying vec3 vWorld;
void main() {
  vUv = uv;
  vec3 pos = position;
  vWorld = (modelMatrix * vec4(pos, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
// --- fragment ---
// @include noise
// @include common
varying vec2 vUv;
varying vec3 vWorld;
uniform float uTime;
void main() {
  float n = fbm(vec3(vWorld.xz * 0.35, vWorld.y * 0.2));
  float strata = smoothstep(0.2, 0.8, fract(vWorld.y * 0.35 + n));
  vec3 col = mix(vec3(0.02, 0.025, 0.03), vec3(0.07, 0.08, 0.09), n * 0.5 + 0.5);
  col += vec3(0.03, 0.05, 0.055) * strata;
  gl_FragColor = vec4(col, 1.0);
}

// @program sheet
// --- vertex ---
// @include noise
// @include common
varying vec2 vUv;
uniform float uTime;
uniform float uFlow;
uniform float uSheet;

void main() {
  vUv = uv;
  vec3 pos = position;
  float n = snoise(vec3(pos.x * 0.85, pos.y * 0.45 - uTime * uFlow, uSheet));
  pos.z += n * 0.16;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
// --- fragment ---
// @include noise
// @include common
varying vec2 vUv;
uniform float uTime;
uniform float uFlow;
uniform float uIntensity;
uniform float uSheet;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  float x = vUv.x * 2.0 - 1.0;
  float body = smoothstep(1.0, 0.55, abs(x));
  float n = fbm(vec3(vUv.x * 3.0 + uSheet, vUv.y * 1.4 - uTime * uFlow, uSheet * 0.7));
  float thread = smoothstep(0.2, 0.85, fbm(vec3(vUv.x * 9.0, vUv.y * 0.35 - uTime * uFlow * 1.6, uSheet)));
  float bead = smoothstep(0.82, 1.0, fract(vUv.y * 2.2 - uTime * uFlow * 1.2));
  float lip = smoothstep(0.14, 0.0, vUv.y);
  vec3 water = mix(uColorB * 0.35, vec3(0.82, 0.94, 1.0), 0.35 + thread * 0.65);
  water = mix(water, vec3(1.0), bead * thread * 0.55 + lip * 0.75);
  float alpha = body * (0.28 + thread * 0.45 + lip * 0.35) * (0.65 + 0.35 * n) * uIntensity;
  gl_FragColor = vec4(water, clamp(alpha, 0.0, 0.88));
}

// @program foam
// --- vertex ---
attribute vec3 aSeed;
uniform float uTime;
uniform float uFlow;
varying float vFade;

void main() {
  float x = (aSeed.x - 0.5) * 3.4;
  float z = (aSeed.y - 0.5) * 1.4;
  float bob = sin(uTime * 2.2 * uFlow + aSeed.z * 12.0) * 0.05;
  vec3 pos = vec3(x, 0.18 + bob + aSeed.z * 0.2, z + 0.4);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp((10.0 + aSeed.z * 18.0) * (2.8 / max(0.4, -mv.z)), 2.0, 32.0);
  vFade = 0.45 + 0.55 * (0.5 + 0.5 * sin(uTime * 3.0 + aSeed.x * 20.0));
}
// --- fragment ---
varying float vFade;
uniform float uIntensity;
void main() {
  vec2 pc = gl_PointCoord * 2.0 - 1.0;
  float glow = exp(-dot(pc, pc) * 3.2);
  if (glow < 0.05) discard;
  gl_FragColor = vec4(vec3(0.92, 0.98, 1.0) * uIntensity, glow * vFade * 0.85);
}

// @program mist
// --- vertex ---
attribute vec3 aSeed;
uniform float uTime;
uniform float uMist;
varying float vFade;

void main() {
  float rise = fract(aSeed.z + uTime * 0.08);
  vec3 pos = vec3((aSeed.x - 0.5) * 4.2, 0.2 + rise * 2.8 * uMist, (aSeed.y - 0.5) * 2.2 + 0.3);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(40.0 * uMist * (3.0 / max(0.5, -mv.z)), 8.0, 72.0);
  vFade = smoothstep(0.0, 0.15, rise) * (1.0 - smoothstep(0.65, 1.0, rise));
}
// --- fragment ---
varying float vFade;
uniform float uIntensity;
uniform float uMist;
void main() {
  vec2 pc = gl_PointCoord * 2.0 - 1.0;
  float d = dot(pc, pc);
  float soft = smoothstep(1.0, 0.1, d);
  gl_FragColor = vec4(vec3(0.82, 0.9, 0.92), soft * vFade * 0.18 * uMist * uIntensity);
}

// @program spray
// --- vertex ---
// @include noise
// @include common
attribute float aSeed;
attribute float aSeed2;
uniform float uTime;
uniform float uFlow;
varying float vAlpha;
varying float vAcross;

void main() {
  float life = fract(uTime * 0.8 * uFlow + aSeed);
  vec3 dir = normalize(vec3(aSeed - 0.5, 0.65 + aSeed2, aSeed2 - 0.2));
  vec3 head = vec3((aSeed - 0.5) * 2.4, 0.15, 0.5) + dir * life * 0.9 + vec3(0.0, -life * life * 0.8, 0.0);
  vec3 tail = head - dir * 0.18;
  vec3 pos = streakBillboard(tail, head, uv, 0.02);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vAlpha = (1.0 - life) * step(life, 0.85);
  vAcross = abs(uv.x - 0.5) * 2.0;
}
// --- fragment ---
varying float vAlpha;
varying float vAcross;
uniform float uIntensity;
void main() {
  float core = exp(-vAcross * vAcross * 8.0);
  float alpha = core * vAlpha * uIntensity;
  if (alpha < 0.02) discard;
  gl_FragColor = vec4(vec3(0.95, 0.99, 1.0) * uIntensity, alpha);
}

// @program caustic
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
uniform float uFlow;
uniform vec3 uColor;
void main() {
  vec2 p = vUv * 6.0;
  float a = fbm(vec3(p + uTime * uFlow * 0.15, 1.0));
  float b = fbm(vec3(p * 1.4 - uTime * uFlow * 0.1, 3.0));
  float line = pow(abs(a - b), 0.45);
  float caustic = smoothstep(0.55, 0.95, 1.0 - line);
  gl_FragColor = vec4(uColor * caustic * 0.45, caustic * 0.35);
}
