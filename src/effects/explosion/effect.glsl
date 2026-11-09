// @program core
// --- vertex ---
varying vec3 vNormalW;
void main() {
  vNormalW = mat3(modelMatrix) * normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
varying vec3 vNormalW;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
uniform float uCharge;
uniform float uIntensity;
uniform vec3 uColor;
void main() {
  float local = mod(uTime * uSpeed, uLoop);
  float charge = smoothstep(0.0, 0.55 * uCharge, local) * (1.0 - smoothstep(0.55, 0.75, local));
  float fres = pow(1.0 - abs(dot(normalize(vNormalW), vec3(0.0, 0.2, 1.0))), 2.2);
  vec3 col = mix(uColor, vec3(1.0), fres);
  gl_FragColor = vec4(col * uIntensity * (0.4 + charge), fres * charge);
}

// @program shell
// --- vertex ---
uniform float uScale;
varying vec3 vNormalW;
void main() {
  vNormalW = mat3(modelMatrix) * normal;
  vec3 pos = position * (0.35 + uScale);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
// --- fragment ---
varying vec3 vNormalW;
uniform float uScale;
uniform float uIntensity;
uniform vec3 uColor;
uniform vec3 uColorB;
void main() {
  float fres = pow(1.0 - abs(dot(normalize(vNormalW), vec3(0.0, 0.15, 1.0))), 1.8);
  float alpha = fres * (1.0 - smoothstep(0.2, 1.6, uScale));
  vec3 col = mix(uColorB, vec3(1.0), fres);
  gl_FragColor = vec4(col * uIntensity, alpha);
}

// @program streak
// --- vertex ---
// @include noise
// @include common
attribute float aSeed;
attribute float aSeed2;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
uniform float uCharge;
varying float vAlpha;
varying float vAcross;
varying vec3 vColor;

void main() {
  float local = mod(uTime * uSpeed, uLoop);
  vec3 dir = normalize(hash31(aSeed * 19.0) - 0.5);
  float gather = clamp(local / (0.55 * uCharge), 0.0, 1.0);
  float burst = clamp((local - 0.55) / 1.3, 0.0, 1.0);
  vec3 head;
  vec3 tail;
  float alpha;
  if (local < 0.55) {
    head = dir * mix(2.4, 0.15, gather);
    tail = head * 1.25;
    alpha = gather;
  } else {
    head = dir * (0.2 + burst * mix(1.5, 4.2, aSeed2)) + vec3(0.0, burst * 0.4 - burst * burst * 0.6, 0.0);
    tail = dir * (0.2 + max(burst - 0.08, 0.0) * mix(1.5, 4.2, aSeed2));
    alpha = 1.0 - smoothstep(0.45, 1.0, burst);
  }
  vec3 pos = streakBillboard(tail, head, uv, mix(0.05, 0.012, burst));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vAlpha = alpha;
  vAcross = abs(uv.x - 0.5) * 2.0;
  vColor = mix(vec3(1.0), vec3(1.0, 0.55, 0.25), burst);
}
// --- fragment ---
varying float vAlpha;
varying float vAcross;
varying vec3 vColor;
uniform float uIntensity;
uniform vec3 uColor;
void main() {
  float core = exp(-vAcross * vAcross * 8.0);
  float alpha = core * vAlpha * uIntensity;
  if (alpha < 0.02) discard;
  gl_FragColor = vec4(mix(uColor, vColor, 0.5) * (0.6 + core) * uIntensity, alpha);
}

// @program debris
// --- vertex ---
attribute vec3 aSeed;
attribute float aSeed1;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
uniform float uDebris;
varying vec3 vColor;
varying vec3 vNormalW;

void main() {
  float local = mod(uTime * uSpeed, uLoop);
  float burst = clamp((local - 0.58) / 1.6, 0.0, 1.0);
  vec3 dir = normalize(aSeed - 0.5);
  vec3 offset = dir * burst * (1.2 + aSeed1 * 2.4) * uDebris + vec3(0.0, burst * 1.1 - burst * burst * 2.2, 0.0);
  float ang = aSeed1 * 6.0 + local * 2.0;
  vec3 p = position * mix(0.06, 0.16, aSeed1);
  float c = cos(ang);
  float s = sin(ang);
  p.xz = mat2(c, -s, s, c) * p.xz;
  vec4 world = modelMatrix * vec4(p + offset, 1.0);
  vNormalW = mat3(modelMatrix) * normal;
  vColor = mix(vec3(1.0, 0.82, 0.45), vec3(0.25, 0.05, 0.02), burst);
  gl_Position = projectionMatrix * viewMatrix * world;
}
// --- fragment ---
varying vec3 vColor;
varying vec3 vNormalW;
uniform float uIntensity;
void main() {
  float fres = pow(1.0 - abs(dot(normalize(vNormalW), vec3(0.0, 0.3, 1.0))), 1.5);
  gl_FragColor = vec4(vColor * uIntensity * (0.35 + fres), 1.0);
}

// @program smoke
// --- vertex ---
attribute vec3 aSeed;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
varying float vFade;
void main() {
  float local = mod(uTime * uSpeed, uLoop);
  float k = clamp((local - 0.7) / 2.2, 0.0, 1.0);
  vec3 pos = vec3((aSeed.x - 0.5) * k * 2.4, k * (1.2 + aSeed.y), (aSeed.z - 0.5) * k * 2.4);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp((16.0 + k * 48.0) * (3.0 / max(0.5, -mv.z)), 4.0, 64.0);
  vFade = smoothstep(0.0, 0.1, k) * (1.0 - k);
}
// --- fragment ---
varying float vFade;
void main() {
  vec2 pc = gl_PointCoord * 2.0 - 1.0;
  float soft = smoothstep(1.0, 0.15, dot(pc, pc));
  gl_FragColor = vec4(vec3(0.16, 0.15, 0.14), soft * vFade * 0.38);
}

// @program scorch
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
uniform vec3 uColorB;
void main() {
  float local = mod(uTime * uSpeed, uLoop);
  float age = clamp((local - 0.6) / 2.4, 0.0, 1.0);
  float r = length(vUv * 2.0 - 1.0);
  float ring = exp(-pow((r - mix(0.15, 0.85, age)) * 12.0, 2.0));
  float disk = smoothstep(0.9, 0.2, r) * 0.45 * age;
  vec3 col = mix(vec3(0.02, 0.01, 0.01), uColorB, ring);
  gl_FragColor = vec4(col, clamp(disk + ring * (1.0 - age * 0.5), 0.0, 1.0));
}
