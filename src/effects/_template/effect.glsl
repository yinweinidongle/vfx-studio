// @program orb
// --- vertex ---
varying vec3 vNormalW;
void main() {
  vNormalW = mat3(modelMatrix) * normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
varying vec3 vNormalW;
uniform float uTime;
uniform float uSpeed;
uniform float uIntensity;
uniform vec3 uColor;
uniform vec3 uColorB;
void main() {
  float fres = pow(1.0 - abs(dot(normalize(vNormalW), vec3(0.0, 0.2, 1.0))), 2.0);
  float pulse = 0.65 + 0.35 * sin(uTime * uSpeed * 2.0);
  vec3 col = mix(uColor * 0.25, uColorB, fres) * pulse;
  gl_FragColor = vec4(col * uIntensity, fres);
}

// @program ring
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
  float core = exp(-across * across * 10.0);
  gl_FragColor = vec4(uColor * uIntensity, core);
}
