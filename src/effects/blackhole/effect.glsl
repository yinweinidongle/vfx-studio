// @program sky
// --- vertex ---
varying vec3 vWorld;
void main() {
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
// @include noise
// @include common
varying vec3 vWorld;
uniform float uTime;
uniform float uLens;
void main() {
  vec3 origin = cameraPosition;
  vec3 dir = normalize(vWorld - origin);
  float closestT = clamp(-dot(origin, dir), 0.0, 80.0);
  vec3 closest = origin + dir * closestT;
  float impact = length(closest);
  float deflect = uLens * 1.35 / max(impact * impact, 0.35);
  vec3 axis = normalize(cross(dir, vec3(0.0, 1.0, 0.0)) + vec3(1e-4, 0.0, 0.0));
  vec3 bent = normalize(dir + axis * deflect);
  vec3 col = vec3(0.0);
  float einstein = exp(-pow((impact - 1.45) * 9.0, 2.0));
  col += stars(bent, 160.0) * vec3(0.9, 0.92, 1.0) * (1.0 + einstein * 2.2 * uLens);
  col += stars(bent, 70.0) * 0.55;
  col *= smoothstep(0.7, 1.6, impact);
  gl_FragColor = vec4(col, 1.0);
}

// @program horizon
// --- vertex ---
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}

// @program photon
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
  float core = exp(-across * across * 14.0);
  gl_FragColor = vec4(mix(uColor, vec3(1.0), core) * uIntensity * 0.85, core);
}

// @program disk
// --- vertex ---
varying vec3 vWorld;
void main() {
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
// @include noise
// @include common
varying vec3 vWorld;
uniform float uTime;
uniform float uSpin;
uniform float uIntensity;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  float r = length(vWorld.xz);
  float ang = atan(vWorld.z, vWorld.x);
  if (r < 1.18 || r > 5.4) discard;
  float rot = ang + uTime * 0.22 * uSpin + 1.6 / r;
  float turb = fbm(vec3(cos(rot) * r * 1.4, sin(rot) * r * 1.4, r * 0.4 - uTime * 0.15));
  float heat = smoothstep(5.2, 1.25, r);
  vec3 hot = vec3(1.0, 0.96, 0.9);
  vec3 mid = uColorB;
  vec3 cool = uColorB * 0.25;
  vec3 col = mix(cool, mid, smoothstep(4.2, 2.2, r));
  col = mix(col, hot, smoothstep(2.1, 1.25, r));
  col = mix(col, uColor, 0.15);
  float lane = 0.55 + 0.45 * sin(ang * 3.0 - 7.0 / r + uTime * 0.4 * uSpin);
  col *= mix(0.45, 1.0, smoothstep(0.15, 0.85, turb));
  col *= lane;
  float doppler = 0.45 + 0.9 * smoothstep(-1.0, 1.0, sin(ang));
  col *= doppler;
  float alpha = smoothstep(5.4, 4.6, r) * smoothstep(1.18, 1.45, r);
  alpha *= 0.35 + 0.65 * smoothstep(-0.2, 0.6, turb);
  gl_FragColor = vec4(col * uIntensity, alpha);
}

// @program infall
// --- vertex ---
// @include noise
// @include common
attribute float aSeed;
attribute float aSeed2;
uniform float uTime;
uniform float uSpin;
varying float vAlpha;
varying float vAcross;
varying vec3 vColor;

void main() {
  float arm = floor(aSeed * 5.0);
  float u = fract(uTime * 0.12 * uSpin + aSeed2);
  float rad = mix(5.2, 1.25, u);
  float ang = arm * 1.256 + u * 8.0 + aSeed * 3.0;
  vec3 head = vec3(cos(ang) * rad, (aSeed2 - 0.5) * 0.08 * (1.0 - u), sin(ang) * rad);
  float pu = max(u - 0.04, 0.0);
  float prad = mix(5.2, 1.25, pu);
  float pang = arm * 1.256 + pu * 8.0 + aSeed * 3.0;
  vec3 tail = vec3(cos(pang) * prad, head.y, sin(pang) * prad);
  vec3 pos = streakBillboard(tail, head, uv, mix(0.05, 0.01, u));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vAlpha = smoothstep(0.0, 0.08, u) * (1.0 - smoothstep(0.82, 1.0, u));
  vAcross = abs(uv.x - 0.5) * 2.0;
  vColor = mix(vec3(1.0, 0.85, 0.6), vec3(1.0, 0.4, 0.15), u);
}
// --- fragment ---
varying float vAlpha;
varying float vAcross;
varying vec3 vColor;
uniform float uIntensity;
void main() {
  float core = exp(-vAcross * vAcross * 8.0);
  float alpha = core * vAlpha * uIntensity;
  if (alpha < 0.02) discard;
  gl_FragColor = vec4(vColor * (0.5 + core) * uIntensity, alpha);
}
