// @program planet
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
void main() {
  vec3 normalW = normalize(vNormalW);
  vec3 viewDir = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - max(dot(normalW, viewDir), 0.0), 2.6);
  vec3 ground = vec3(0.01, 0.012, 0.02);
  vec2 sph = vec2(atan(normalW.z, normalW.x), asin(clamp(normalW.y, -1.0, 1.0)));
  vec2 cell = floor(sph * vec2(90.0, 46.0));
  float city = step(0.94, hash13(vec3(cell, 2.0)));
  float blink = 0.4 + 0.6 * sin(uTime * 2.2 + hash13(vec3(cell, 4.0)) * 20.0);
  vec3 col = ground + vec3(1.0, 0.82, 0.45) * city * blink * 0.55 * (1.0 - fres);
  col += vec3(0.35, 0.58, 1.0) * fres * 1.3;
  gl_FragColor = vec4(col, 1.0);
}

// @program air
// --- vertex ---
varying vec3 vNormalW;
varying vec3 vWorld;
void main() {
  vNormalW = mat3(modelMatrix) * normal;
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
varying vec3 vNormalW;
varying vec3 vWorld;
void main() {
  float fres = pow(1.0 - max(dot(normalize(vNormalW), normalize(cameraPosition - vWorld)), 0.0), 3.2);
  gl_FragColor = vec4(vec3(0.45, 0.7, 1.0) * fres, fres * 0.55);
}

// @program meteor
// --- vertex ---
// @include noise
// @include common
attribute float aSeed;
attribute float aSeed2;
attribute float aSeed3;
uniform float uTime;
uniform float uLoop;
uniform float uSpeed;
uniform float uBurn;
uniform float uBreak;
varying float vAlpha;
varying float vAlong;
varying float vAcross;
varying vec3 vColor;

void main() {
  float family = floor(aSeed * 4.0);
  float child = step(0.72, aSeed2);
  float phase = family * 0.22;
  float local = mod(uTime * uSpeed * 0.33 + phase, 1.0);
  vec3 start = vec3(4.2 + family * 0.15, 6.4, -0.4);
  vec3 end = vec3(-4.6, 2.15 - family * 0.15, 0.6);
  float t = local;
  vec3 head = mix(start, end, t);
  float trail = 0.18 * uBurn;
  vec3 tail = mix(start, end, max(t - trail, 0.0));
  float alpha = smoothstep(0.0, 0.05, t) * (1.0 - smoothstep(0.82, 1.0, t));
  vec3 color = mix(vec3(1.0, 0.95, 0.85), vec3(1.0, 0.45, 0.15), smoothstep(0.0, 0.7, t));
  if (child > 0.5) {
    float k = clamp((t - uBreak) / 0.35, 0.0, 1.0);
    vec3 origin = mix(start, end, uBreak);
    vec3 dir = normalize(end - start);
    vec3 side = normalize(hash31(aSeed * 8.0) - 0.5);
    head = origin + dir * k * 1.4 + side * k * 0.7;
    tail = origin + dir * max(k - 0.2, 0.0) * 1.4 + side * max(k - 0.2, 0.0) * 0.7;
    alpha = (1.0 - k) * step(uBreak, t);
    color = vec3(1.0, 0.7, 0.35);
  } else if (t > uBreak) {
    alpha *= 0.35;
    trail *= 0.45;
    tail = mix(start, end, max(t - trail, 0.0));
  }
  vec3 pos = streakBillboard(tail, head, uv, child > 0.5 ? 0.015 : 0.028 * uBurn);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vAlpha = alpha;
  vAlong = uv.y;
  vAcross = abs(uv.x - 0.5) * 2.0;
  vColor = color;
}
// --- fragment ---
varying float vAlpha;
varying float vAlong;
varying float vAcross;
varying vec3 vColor;
uniform float uIntensity;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  float core = exp(-vAcross * vAcross * 12.0);
  float glow = exp(-vAcross * vAcross * 1.6);
  vec3 col = mix(uColorB, vec3(1.0), core);
  col = mix(col, vColor, 0.65);
  col = mix(col, uColor, 0.2);
  float alpha = (core + glow * 0.3) * vAlpha * uIntensity * smoothstep(0.0, 0.25, vAlong);
  if (alpha < 0.015) discard;
  gl_FragColor = vec4(col * (0.55 + core * 2.4) * uIntensity, alpha);
}
