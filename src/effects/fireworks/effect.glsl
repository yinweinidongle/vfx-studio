// @program sky
// --- vertex ---
varying vec3 vDir;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vDir = world.xyz - cameraPosition;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
// @include noise
// @include common
varying vec3 vDir;
void main() {
  vec3 dir = normalize(vDir);
  vec3 zenith = vec3(0.008, 0.012, 0.03);
  vec3 mid = vec3(0.02, 0.025, 0.055);
  vec3 horizon = vec3(0.07, 0.035, 0.04);
  vec3 col = mix(horizon, mid, smoothstep(-0.05, 0.22, dir.y));
  col = mix(col, zenith, smoothstep(0.15, 0.75, dir.y));
  col += stars(dir, 120.0) * vec3(0.9, 0.93, 1.0);
  gl_FragColor = vec4(col, 1.0);
}

// @program floor
// --- vertex ---
varying vec2 vUv;
varying vec3 vWorld;
void main() {
  vUv = uv;
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
varying vec3 vWorld;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
uniform float uIntensity;
uniform float uShells;
uniform vec3 uColor;
uniform vec3 uColorB;

float pool(vec2 p, vec2 origin, float phase) {
  float local = mod(uTime * uSpeed + uLoop * (1.0 - phase), uLoop);
  float burst = smoothstep(0.72, 1.05, local) * (1.0 - smoothstep(2.6, 4.4, local));
  float d = length(p - origin);
  return exp(-d * d * 0.55) * burst;
}

void main() {
  float shells = clamp(floor(uShells + 0.5), 2.0, 4.0);
  float glow = 0.0;
  glow += pool(vWorld.xz, vec2(-2.4, 0.2), 0.0);
  glow += pool(vWorld.xz, vec2(-0.8, -0.35), 0.25);
  if (shells > 2.5) glow += pool(vWorld.xz, vec2(0.9, 0.25), 0.5);
  if (shells > 3.5) glow += pool(vWorld.xz, vec2(2.3, -0.15), 0.75);
  vec3 base = vec3(0.015, 0.016, 0.02);
  vec3 col = base + mix(uColor, uColorB, 0.4) * glow * 0.55 * uIntensity;
  gl_FragColor = vec4(col, 1.0);
}

// @program burst
// --- vertex ---
// @include noise
// @include common
attribute float aSeed;
attribute float aSeed2;
attribute float aSeed3;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
uniform float uGravity;
uniform float uShells;
uniform vec3 uColor;
uniform vec3 uColorB;
varying vec3 vColor;
varying float vAlpha;
varying float vAlong;
varying float vAcross;

vec3 shellOrigin(float shell) {
  if (shell < 0.5) return vec3(-2.4, 0.2, 0.2);
  if (shell < 1.5) return vec3(-0.8, 0.2, -0.35);
  if (shell < 2.5) return vec3(0.9, 0.2, 0.25);
  return vec3(2.3, 0.2, -0.15);
}

void main() {
  float shells = clamp(floor(uShells + 0.5), 2.0, 4.0);
  float shell = mod(floor(aSeed * 4.0), shells);
  float inner = fract(aSeed * 17.0);
  float phase = shell * 0.25;
  float local = mod(uTime * uSpeed + uLoop * (1.0 - phase), uLoop);
  vec3 origin = shellOrigin(shell);
  float rise = 4.4 + aSeed2 * 1.8;
  vec3 burstPos = origin + vec3(0.0, rise, 0.0);
  vec3 head = burstPos;
  vec3 tail = burstPos;
  vec3 color = mix(uColor, uColorB, aSeed3);
  float alpha = 0.0;
  float width = 0.03;
  float launchEnd = 0.72;

  if (inner > 0.9) {
    float k = clamp(local / launchEnd, 0.0, 1.0);
    head = origin + vec3(0.0, rise * k * k, 0.0);
    tail = head - vec3(0.0, mix(0.7, 1.5, k), 0.0);
    alpha = smoothstep(0.0, 0.05, local) * (1.0 - smoothstep(launchEnd - 0.06, launchEnd + 0.05, local));
    color = vec3(1.0, 0.92, 0.72);
    width = 0.05;
  } else if (inner > 0.78 && local > launchEnd + 0.35) {
    float k = clamp((local - launchEnd - 0.35) / 1.35, 0.0, 1.0);
    vec3 dir = normalize(hash31(inner + shell * 9.0) - 0.45);
    dir.y = abs(dir.y);
    float reach = mix(1.4, 3.4, aSeed2);
    head = burstPos + dir * reach * k + vec3(0.0, -uGravity * 2.6 * k * k, 0.0);
    float pk = max(k - 0.14, 0.0);
    tail = burstPos + dir * reach * pk + vec3(0.0, -uGravity * 2.6 * pk * pk, 0.0);
    alpha = (1.0 - smoothstep(0.4, 1.0, k)) * smoothstep(0.0, 0.08, k);
    color = vec3(1.0, 0.97, 0.9);
    width = mix(0.028, 0.008, k);
  } else if (local > launchEnd) {
    float k = clamp((local - launchEnd) / 2.15, 0.0, 1.0);
    vec3 dir = normalize(hash31(aSeed * 40.0 + shell) - 0.5);
    dir.y = mix(abs(dir.y), 0.12, 0.2);
    float speed = mix(2.8, 6.4, aSeed2);
    float palm = 0.55 + 0.45 * sin(aSeed3 * 40.0 + shell);
    speed *= mix(0.72, 1.0, palm);
    head = burstPos + dir * speed * k + vec3(0.0, -uGravity * 5.4 * k * k, 0.0);
    float pk = max(k - 0.13, 0.0);
    tail = burstPos + dir * speed * pk + vec3(0.0, -uGravity * 5.4 * pk * pk, 0.0);
    vec3 travel = head - tail;
    if (dot(travel, travel) < 0.16) tail = head - normalize(dir + vec3(0.0, 0.15, 0.0)) * 0.62;
    alpha = (1.0 - smoothstep(0.55, 1.0, k)) * smoothstep(0.0, 0.04, k);
    width = mix(0.05, 0.012, k);
    vec3 palette = shell < 0.5 ? vec3(1.0, 0.62, 0.18)
      : shell < 1.5 ? vec3(1.0, 0.32, 0.55)
      : shell < 2.5 ? vec3(0.35, 0.82, 1.0)
      : vec3(0.78, 0.62, 1.0);
    color = mix(vec3(1.0), palette, smoothstep(0.02, 0.28, k));
  }

  vec3 pos = streakBillboard(tail, head, uv, width);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vColor = color;
  vAlpha = alpha;
  vAlong = uv.y;
  vAcross = abs(uv.x - 0.5) * 2.0;
}

// --- fragment ---
varying vec3 vColor;
varying float vAlpha;
varying float vAlong;
varying float vAcross;
uniform float uIntensity;

void main() {
  float core = exp(-vAcross * vAcross * 10.0);
  float glow = exp(-vAcross * vAcross * 1.7);
  float head = smoothstep(0.05, 1.0, vAlong);
  vec3 col = vColor * (glow * 0.35 + core * head * 2.6);
  float alpha = (glow * 0.5 + core) * vAlpha * uIntensity;
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(col * uIntensity, alpha);
}

// @program ember
// --- vertex ---
// @include noise
// @include common
attribute vec3 aSeed;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
uniform float uGravity;
uniform float uShells;
varying float vFade;
varying vec3 vColor;

void main() {
  float shells = clamp(floor(uShells + 0.5), 2.0, 4.0);
  float shell = mod(floor(aSeed.x * 4.0), shells);
  float phase = shell * 0.25;
  float local = mod(uTime * uSpeed + uLoop - phase * uLoop, uLoop);
  float k = clamp((local - 1.15) / 3.2, 0.0, 1.0);
  vec3 origin = vec3(shell < 0.5 ? -2.4 : shell < 1.5 ? -0.8 : shell < 2.5 ? 0.9 : 2.3, 4.8, shell < 1.5 ? -0.1 : 0.15);
  vec3 dir = normalize(hash31(aSeed.y * 20.0 + shell) - 0.5);
  vec3 pos = origin + dir * (0.4 + k * 1.6) + vec3(0.0, -uGravity * 1.3 * k * k, 0.0);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(7.0 * (1.0 - k) * (4.0 / max(0.3, -mv.z)), 1.0, 16.0);
  vFade = smoothstep(0.0, 0.08, k) * (1.0 - k);
  vColor = mix(vec3(1.0, 0.72, 0.4), vec3(0.4, 0.15, 0.08), k);
}

// --- fragment ---
varying float vFade;
varying vec3 vColor;
uniform float uIntensity;

void main() {
  vec2 pc = gl_PointCoord * 2.0 - 1.0;
  float glow = exp(-dot(pc, pc) * 2.6);
  if (glow < 0.04) discard;
  gl_FragColor = vec4(vColor * uIntensity, glow * vFade);
}
