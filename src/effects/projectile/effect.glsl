// @program fog
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
void main() {
  float n = fbm(vec3(vUv.x * 2.0, vUv.y * 1.2 + uTime * uSpeed * 0.05, vUv.y));
  float band = smoothstep(0.2, 0.8, n) * smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.4, vUv.y);
  vec3 col = vec3(0.05, 0.07, 0.1) * band;
  gl_FragColor = vec4(col, band * 0.35);
}

// @program bolt
// --- vertex ---
// @include noise
// @include common
attribute float aSeed;
attribute float aSeed2;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
uniform float uWeave;
uniform float uTrail;
varying float vAlpha;
varying float vAlong;
varying float vAcross;
varying vec3 vColor;
varying float vRole;

vec3 pathAt(float lane, float t) {
  vec3 start = vec3((lane - 2.0) * 0.55, 1.15 + lane * 0.05, 5.2);
  vec3 end = vec3(sin(lane * 1.7) * 1.5, 1.05 + cos(lane) * 0.35, -3.8);
  vec3 pos = mix(start, end, t);
  pos.x += sin(t * 16.0 + lane * 2.0) * uWeave * 0.28 * (1.0 - t);
  pos.y += cos(t * 11.0 + lane) * uWeave * 0.08 * (1.0 - t);
  return pos;
}

void main() {
  float lane = mod(floor(aSeed * 5.0), 5.0);
  float role = aSeed2;
  float t = fract(uTime * uSpeed * 0.42 + lane * 0.16);
  vec3 head = pathAt(lane, t);
  float back = max(t - 0.22 * uTrail, 0.0);
  vec3 tail = pathAt(lane, back);
  float width = 0.05;
  float alpha = 1.0;
  vec3 color = vec3(0.75, 0.88, 1.0);
  if (role > 0.82) {
    alpha = (1.0 - smoothstep(0.0, 0.12, t));
    width = 0.16;
    color = vec3(1.0, 0.95, 0.8);
    tail = head - normalize(head - pathAt(lane, 0.0) + vec3(0.0, 0.01, 0.0)) * 0.01;
  } else if (role > 0.62 && t > 0.9) {
    float k = (t - 0.9) / 0.1;
    vec3 dir = normalize(hash31(aSeed * 9.0 + lane) - 0.5);
    head = pathAt(lane, 1.0) + dir * k * 0.8;
    tail = pathAt(lane, 1.0) + dir * max(k - 0.25, 0.0) * 0.8;
    alpha = 1.0 - k;
    width = 0.03;
    color = vec3(1.0, 0.82, 0.45);
  } else {
    alpha = smoothstep(0.02, 0.08, t) * (1.0 - smoothstep(0.9, 0.98, t));
    width = mix(0.045, 0.012, t);
  }
  vec3 pos = streakBillboard(tail, head, uv, width);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vAlpha = alpha;
  vAlong = uv.y;
  vAcross = abs(uv.x - 0.5) * 2.0;
  vColor = color;
  vRole = role;
}

// --- fragment ---
varying float vAlpha;
varying float vAlong;
varying float vAcross;
varying vec3 vColor;
varying float vRole;
uniform float uIntensity;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  float core = exp(-vAcross * vAcross * 11.0);
  float glow = exp(-vAcross * vAcross * 1.8);
  vec3 col = mix(uColor, vec3(1.0), core);
  col = mix(col, uColorB, step(0.62, vRole) * (1.0 - core));
  col *= vColor;
  float alpha = (core + glow * 0.35) * vAlpha * uIntensity * smoothstep(0.0, 0.2, vAlong);
  if (alpha < 0.015) discard;
  gl_FragColor = vec4(col * (0.5 + core * 2.2) * uIntensity, alpha);
}

// @program impact
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
uniform float uLane;
uniform float uIntensity;
uniform vec3 uColorB;

void main() {
  float t = fract(uTime * uSpeed * 0.42 + uLane * 0.16);
  float age = clamp((t - 0.9) / 0.22, 0.0, 1.0);
  float r = length(vUv * 2.0 - 1.0);
  float radius = mix(0.08, 0.95, age);
  float ring = exp(-pow((r - radius) * 22.0, 2.0));
  float alpha = ring * (1.0 - age) * step(0.9, t);
  if (r > 1.0) discard;
  gl_FragColor = vec4(mix(uColorB, vec3(1.0), ring) * uIntensity, alpha);
}
