// @program ground
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
uniform float uDensity;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  vec2 p = vUv * 2.0 - 1.0;
  float r = length(p);
  float ang = atan(p.y, p.x);
  float spin = ang + uTime * uSpeed * 0.35;
  float ticks = smoothstep(0.18, 0.02, abs(fract(spin * uDensity / 6.28318) - 0.5));
  float ringA = exp(-pow((r - 0.72) * 26.0, 2.0));
  float ringB = exp(-pow((r - 0.48) * 34.0, 2.0));
  float ringC = exp(-pow((r - 0.28) * 40.0, 2.0));
  float glyphId = floor(spin * 12.0 / 6.28318);
  float glyph = step(0.62, hash11(glyphId + 4.0));
  float glyphArc = smoothstep(0.42, 0.08, abs(fract(spin * 12.0 / 6.28318) - 0.5));
  float runes = glyph * glyphArc * exp(-pow((r - 0.6) * 18.0, 2.0));
  float pulse = exp(-pow((r - fract(uTime * uSpeed * 0.18)) * 16.0, 2.0));
  vec3 col = uColor * (ringA * (0.35 + ticks) + ringC * 0.8);
  col += uColorB * ringB * 0.7;
  col += mix(uColor, vec3(1.0), 0.65) * runes * 1.6;
  col += vec3(1.0) * pulse * 0.45;
  float disk = smoothstep(1.02, 0.2, r) * 0.18;
  float alpha = clamp(disk + ringA + ringB + ringC + runes + pulse, 0.0, 1.0);
  if (r > 1.02) discard;
  gl_FragColor = vec4(col * uIntensity, alpha);
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
uniform float uDensity;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  float across = abs(vUv.y - 0.5) * 2.0;
  float core = exp(-across * across * 7.0);
  float spin = vUv.x * uDensity + uTime * uSpeed * 0.15;
  float dash = step(0.45, fract(spin));
  float mark = step(0.72, hash11(floor(spin))) * smoothstep(0.5, 0.05, abs(fract(spin) - 0.5));
  vec3 col = mix(uColorB, vec3(1.0), core);
  col *= 0.18 + dash * 0.55 + mark * 1.1;
  col *= uIntensity;
  gl_FragColor = vec4(col * (0.22 + core * 1.15), clamp(core * 0.85 + mark, 0.0, 1.0));
}

// @program column
// --- vertex ---
varying vec2 vUv;
varying vec3 vNormalW;
void main() {
  vUv = uv;
  vNormalW = mat3(modelMatrix) * normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

// --- fragment ---
// @include noise
// @include common
varying vec2 vUv;
varying vec3 vNormalW;
uniform float uTime;
uniform float uSpeed;
uniform float uIntensity;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  float n = fbm(vec3(vUv.x * 6.0, vUv.y * 3.0 - uTime * uSpeed * 1.4, 0.4));
  float filament = smoothstep(0.15, 0.85, n);
  float fres = pow(1.0 - abs(dot(normalize(vNormalW), vec3(0.0, 0.2, 1.0))), 1.6);
  vec3 col = mix(uColorB, uColor, filament);
  col += vec3(1.0) * pow(filament, 3.0) * 0.8;
  float fade = smoothstep(0.0, 0.12, vUv.y) * smoothstep(1.0, 0.55, vUv.y);
  gl_FragColor = vec4(col * uIntensity * (0.45 + fres), filament * fade);
}

// @program vortex
// --- vertex ---
// @include noise
// @include common
attribute vec3 aSeed;
uniform float uTime;
uniform float uSpeed;
uniform float uHeight;
varying float vFade;
varying vec3 vColor;

void main() {
  float h = fract(aSeed.x + uTime * uSpeed * 0.16);
  float ang = aSeed.y * 6.28318 + h * 9.0 + uTime * uSpeed;
  float rad = mix(1.15, 0.08, h);
  vec3 pos = vec3(cos(ang) * rad, h * 3.1 * uHeight, sin(ang) * rad);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(10.0 * (1.4 - h) * (3.2 / max(0.4, -mv.z)), 1.0, 28.0);
  vFade = smoothstep(0.0, 0.08, h) * (1.0 - smoothstep(0.82, 1.0, h));
  vColor = mix(vec3(1.0), vec3(0.7, 0.9, 1.0), h);
}

// --- fragment ---
varying float vFade;
varying vec3 vColor;
uniform float uIntensity;
uniform vec3 uColor;

void main() {
  vec2 pc = gl_PointCoord * 2.0 - 1.0;
  float d = dot(pc, pc);
  float glow = exp(-d * 2.4);
  if (glow < 0.02) discard;
  gl_FragColor = vec4(mix(uColor, vColor, 0.45) * uIntensity * (0.4 + glow), glow * vFade);
}

// @program mote
// --- vertex ---
attribute vec3 aSeed;
uniform float uTime;
uniform float uSpeed;
varying float vFade;

void main() {
  float ang = aSeed.x * 6.28318 + uTime * uSpeed * 0.35;
  float rad = 1.5 + aSeed.y * 1.3;
  float y = 0.25 + aSeed.z * 1.6 + sin(uTime * 0.8 + aSeed.x * 8.0) * 0.12;
  vec3 pos = vec3(cos(ang) * rad, y, sin(ang) * rad);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(18.0 * (2.4 / max(0.4, -mv.z)), 2.0, 36.0);
  vFade = 0.35 + 0.65 * (0.5 + 0.5 * sin(uTime * 3.0 + aSeed.y * 30.0));
}

// --- fragment ---
varying float vFade;
uniform float uIntensity;
uniform vec3 uColorB;

void main() {
  vec2 pc = gl_PointCoord * 2.0 - 1.0;
  float d = dot(pc, pc);
  float core = exp(-d * 8.0);
  float glow = exp(-d * 2.0);
  if (glow < 0.03) discard;
  gl_FragColor = vec4(mix(uColorB, vec3(1.0), core) * uIntensity, glow * vFade);
}
