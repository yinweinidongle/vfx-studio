// Original helpers for 折光社. Simplex noise itself is the MIT Ashima / Gustavson
// implementation included separately as snoise3D.glsl. These wrappers are ours.

float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}

vec3 hash31(float p) {
  vec3 v = fract(vec3(p) * vec3(0.1031, 0.1030, 0.0973));
  v += dot(v, v.yzx + 33.33);
  return fract((v.xxy + v.yzz) * v.zyx);
}

vec3 hash33(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return fract(sin(p) * 43758.5453123);
}

float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 4; i++) {
    value += amplitude * snoise(p);
    p = p * 2.03 + vec3(0.17, 1.7, 0.31);
    amplitude *= 0.5;
  }
  return value;
}

float stars(vec3 dir, float scale) {
  vec3 p = normalize(dir) * scale;
  vec3 id = floor(p);
  vec3 f = fract(p) - 0.5;
  float h = hash13(id);
  float d = length(f);
  float core = smoothstep(0.045, 0.0, d);
  return step(0.972, h) * core;
}

vec3 streakBillboard(vec3 tail, vec3 head, vec2 uv, float width) {
  vec3 axis = head - tail;
  float len2 = dot(axis, axis);
  vec3 dir = len2 > 1e-8 ? axis * inversesqrt(len2) : vec3(0.0, 1.0, 0.0);
  vec3 toCam = normalize(cameraPosition - mix(tail, head, 0.75));
  vec3 side = cross(dir, toCam);
  float sideLen = length(side);
  side = sideLen > 1e-4 ? side / sideLen : normalize(cross(dir, vec3(0.0, 1.0, 0.0)));
  return mix(tail, head, clamp(uv.y, 0.0, 1.0)) + side * (uv.x - 0.5) * width;
}
