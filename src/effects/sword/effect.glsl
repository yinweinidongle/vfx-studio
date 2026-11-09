// @program ribbon
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
