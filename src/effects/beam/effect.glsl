// @program beam
// --- vertex ---
// @include noise
// @include common
varying vec2 vUv;
varying vec3 vNormalW;
varying vec3 vWorld;
uniform float uTime;
uniform float uSpeed;
uniform float uWidth;
uniform float uFlicker;
uniform float uCore;

void main() {
  vUv = uv;
  vec3 pos = position;
  float n = snoise(vec3(uv.x * 8.0, uv.y * 3.0 - uTime * uSpeed * 4.0, uTime * 0.2));
  pos.xz *= uWidth * (uCore > 0.5 ? 1.0 : 1.0 + n * 0.18 * uFlicker);
  vec4 world = modelMatrix * vec4(pos, 1.0);
  vWorld = world.xyz;
  vNormalW = mat3(modelMatrix) * normal;
  gl_Position = projectionMatrix * viewMatrix * world;
}
// --- fragment ---
// @include noise
// @include common
varying vec2 vUv;
varying vec3 vNormalW;
varying vec3 vWorld;
uniform float uTime;
uniform float uSpeed;
uniform float uFlicker;
uniform float uIntensity;
uniform float uCore;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  float n = fbm(vec3(vUv.x * 12.0, vUv.y * 4.0 - uTime * uSpeed * 3.0, 2.0));
  float filament = smoothstep(0.25, 0.9, n);
  vec3 viewDir = normalize(cameraPosition - vWorld);
  float facing = pow(abs(dot(normalize(vNormalW), viewDir)), uCore > 0.5 ? 2.4 : 1.15);
  vec3 col = uCore > 0.5 ? mix(uColor, vec3(1.0), facing) : mix(uColorB, uColor, filament);
  float alpha = facing * (uCore > 0.5 ? 0.95 : 0.22 + filament * 0.7 * uFlicker);
  if (alpha < 0.02) discard;
  gl_FragColor = vec4(col * uIntensity * (uCore > 0.5 ? 1.35 : 0.85), alpha);
}

// @program hex
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
void main() {
  float across = abs(vUv.y - 0.5) * 2.0;
  float core = exp(-across * across * 12.0);
  float dash = step(0.4, fract(vUv.x * 6.0));
  gl_FragColor = vec4(mix(uColor, vec3(1.0), core) * uIntensity, core * (0.4 + dash));
}

// @program shield
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
uniform float uSpeed;
uniform float uIntensity;
uniform vec3 uColor;
void main() {
  vec3 viewDir = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - abs(dot(normalize(vNormalW), viewDir)), 2.0);
  float ripple = 0.5 + 0.5 * sin(vWorld.y * 18.0 - uTime * uSpeed * 6.0);
  vec3 col = uColor * fres * (0.6 + ripple * 0.8);
  gl_FragColor = vec4(col * uIntensity, fres * 0.85);
}

// @program splash
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
  float life = fract(uTime * uSpeed * 0.8 + aSeed);
  vec3 dir = normalize(hash31(aSeed * 12.0) - vec3(0.2, 0.5, 0.5));
  vec3 origin = vec3(2.35, 1.2, 0.0);
  vec3 head = origin + dir * life * (0.4 + aSeed2 * 0.6);
  vec3 tail = origin + dir * max(life - 0.15, 0.0) * (0.4 + aSeed2 * 0.6);
  vec3 pos = streakBillboard(tail, head, uv, 0.02);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vAlpha = (1.0 - life);
  vAcross = abs(uv.x - 0.5) * 2.0;
}
// --- fragment ---
varying float vAlpha;
varying float vAcross;
uniform float uIntensity;
uniform vec3 uColor;
void main() {
  float core = exp(-vAcross * vAcross * 8.0);
  float alpha = core * vAlpha * uIntensity;
  if (alpha < 0.02) discard;
  gl_FragColor = vec4(mix(uColor, vec3(1.0), core) * uIntensity, alpha);
}
