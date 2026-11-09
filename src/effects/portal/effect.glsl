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
  vec3 col = mix(vec3(0.02, 0.015, 0.04), vec3(0.005, 0.008, 0.02), dir.y * 0.5 + 0.5);
  float band = exp(-pow((dir.y + 0.05) * 4.0, 2.0));
  col += vec3(0.25, 0.18, 0.45) * band * (0.35 + 0.65 * fbm(dir * 3.0 + uTime * 0.02));
  col += stars(dir, 140.0);
  col += stars(dir, 60.0) * 0.6;
  gl_FragColor = vec4(col, 1.0);
}

// @program disc
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
uniform sampler2D uSky;
uniform float uTime;
uniform float uSpeed;
uniform float uTwist;
uniform float uThroat;
uniform float uIntensity;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  vec2 p = vUv - 0.5;
  float r = length(p) * 2.0;
  if (r > 1.02) discard;
  float ang = atan(p.y, p.x);
  float twisted = ang + (0.85 - r) * 5.0 * uTwist + uTime * uSpeed * 0.65;
  float radius = pow(clamp(r, 0.0, 1.0), 0.45 + 0.35 * uThroat);
  vec2 sampleUv = vec2(0.5) + vec2(cos(twisted), sin(twisted)) * radius * 0.48;
  sampleUv += 0.025 * vec2(
    snoise(vec3(p * 8.0, uTime * 0.25)),
    snoise(vec3(p * 8.0, 4.0 + uTime * 0.25))
  );
  vec3 bg = texture2D(uSky, sampleUv).rgb;
  float filament = fbm(vec3(twisted * 0.35, r * 3.0 - uTime * uSpeed * 0.4, 1.7));
  float thread = smoothstep(0.35, 0.9, filament);
  vec3 col = bg * 1.6 + uColorB * thread * (1.0 - r) * 0.9;
  col += uColor * exp(-pow((r - 0.72) * 10.0, 2.0));
  col *= smoothstep(0.0, 0.12, r);
  float center = smoothstep(0.18, 0.0, r);
  col = mix(col, col * 0.25, center * uThroat);
  gl_FragColor = vec4(col * uIntensity * 0.62, 1.0);
}

// @program ring
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
uniform float uIntensity;
uniform vec3 uColor;
uniform vec3 uColorB;
void main() {
  float across = abs(vUv.y - 0.5) * 2.0;
  float core = exp(-across * across * 9.0);
  float spin = vUv.x * 28.0 + uTime * uSpeed;
  float dash = step(0.55, fract(spin));
  float rune = step(0.78, hash11(floor(spin * 0.5))) * smoothstep(0.45, 0.05, abs(fract(spin) - 0.5));
  vec3 col = mix(uColor, vec3(1.0), core);
  col += uColorB * rune;
  gl_FragColor = vec4(col * uIntensity * (0.3 + dash * 0.7 + rune), clamp(core + rune * 0.5, 0.0, 1.0));
}

// @program spark
// --- vertex ---
attribute vec3 aSeed;
uniform float uTime;
uniform float uSpeed;
varying float vFade;
void main() {
  float ang = aSeed.x * 6.28318 + uTime * uSpeed;
  float rad = 1.32 + sin(uTime * 2.0 + aSeed.y * 8.0) * 0.03;
  vec3 pos = vec3(cos(ang) * rad, 1.35 + sin(ang) * rad, (aSeed.z - 0.5) * 0.08);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(14.0 * (2.6 / max(0.4, -mv.z)), 2.0, 24.0);
  vFade = 0.45 + 0.55 * fract(aSeed.y + uTime * 0.7);
}
// --- fragment ---
varying float vFade;
uniform float uIntensity;
uniform vec3 uColor;
void main() {
  float glow = exp(-dot(gl_PointCoord * 2.0 - 1.0, gl_PointCoord * 2.0 - 1.0) * 3.5);
  if (glow < 0.04) discard;
  gl_FragColor = vec4(mix(uColor, vec3(1.0), glow) * uIntensity, glow * vFade);
}

// @program dais
// --- vertex ---
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
varying vec2 vUv;
uniform float uTime;
uniform vec3 uColorB;
void main() {
  vec2 p = vUv * 2.0 - 1.0;
  float r = length(p);
  float ring = exp(-pow((r - 0.72) * 18.0, 2.0));
  float ticks = smoothstep(0.2, 0.0, abs(fract(atan(p.y, p.x) * 8.0 + uTime * 0.2) - 0.5));
  vec3 col = vec3(0.015, 0.016, 0.02) + uColorB * ring * (0.3 + ticks);
  if (r > 1.0) discard;
  gl_FragColor = vec4(col, 0.95);
}
