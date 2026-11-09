// @program sky
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
