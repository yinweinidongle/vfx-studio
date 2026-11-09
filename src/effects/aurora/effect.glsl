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
void main() {
  vec3 dir = normalize(vDir);
  vec3 col = mix(vec3(0.01, 0.016, 0.03), vec3(0.0, 0.0, 0.01), smoothstep(-0.1, 0.7, dir.y));
  float milky = exp(-pow((dir.y - 0.15) * 5.0, 2.0));
  float arm = fbm(vec3(dir.xz * 2.0, dir.y + uTime * 0.01));
  col += vec3(0.18, 0.16, 0.28) * milky * smoothstep(-0.2, 0.6, arm);
  col += stars(dir, 150.0) * vec3(0.9, 0.95, 1.0);
  gl_FragColor = vec4(col, 1.0);
}

// @program curtain
// --- vertex ---
// @include noise
// @include common
varying vec2 vUv;
varying float vFold;
uniform float uTime;
uniform float uSpeed;
uniform float uFold;
uniform float uPhase;

void main() {
  vUv = uv;
  vec3 pos = position;
  float wave = sin(pos.x * 0.28 + uTime * uSpeed * 0.35 + uPhase) * 1.3;
  wave += sin(pos.x * 0.11 - uTime * uSpeed * 0.18) * 2.4;
  wave += snoise(vec3(pos.x * 0.15, uTime * 0.05, uPhase)) * 0.6;
  pos.z += wave * uv.y * uFold;
  pos.x += sin(uv.y * 3.0 + uTime * uSpeed + uPhase) * 0.25 * uFold;
  vFold = wave;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
// --- fragment ---
// @include noise
// @include common
varying vec2 vUv;
varying float vFold;
uniform float uTime;
uniform float uSpeed;
uniform float uVeil;
uniform float uIntensity;
uniform float uPhase;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  float bands = fbm(vec3(vUv.x * 1.6 + uTime * uSpeed * 0.04, vUv.y * 2.2, vFold * 0.05));
  float veil = smoothstep(0.42, 0.05, abs(fract(vUv.x * 2.4 + 0.12 * sin(vUv.y * 3.0 + uPhase)) - 0.5));
  vec3 green = uColor;
  vec3 violet = uColorB;
  vec3 col = mix(green * 0.35, mix(green, violet, bands), veil);
  col = mix(col, vec3(0.8, 1.0, 0.86), smoothstep(0.78, 1.0, vUv.y) * veil * 0.4);
  float alpha = veil * smoothstep(0.05, 0.7, bands);
  alpha *= smoothstep(0.0, 0.08, vUv.y) * smoothstep(1.0, 0.2, vUv.y);
  alpha *= uVeil * 0.72;
  gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.8));
}

// @program ice
// --- vertex ---
varying vec3 vWorld;
void main() {
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
varying vec3 vWorld;
void main() {
  float fade = smoothstep(18.0, 2.0, length(vWorld.xz));
  gl_FragColor = vec4(vec3(0.02, 0.03, 0.034), 0.92 * fade);
}
