export const SHADER_LAB_MAX = 8000

export const shaderLabTemplate = `uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColor;
varying vec2 vUv;
varying vec3 vNormalW;

void main() {
  float bands = 0.5 + 0.5 * sin(uTime * 1.4 + vUv.y * 18.0);
  float fres = pow(1.0 - abs(dot(normalize(vNormalW), vec3(0.0, 0.0, 1.0))), 2.0);
  vec3 col = mix(uColor * 0.25, vec3(1.0), bands * fres);
  gl_FragColor = vec4(col, 1.0);
}
`

const vertexSource = `varying vec2 vUv;
varying vec3 vNormalW;
void main() {
  vUv = uv;
  vNormalW = mat3(modelMatrix) * normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

export interface ShaderCompileResult {
  ok: boolean
  log: string
  vertex: string
  fragment: string
}

export function prepareShaderLab(source: string): { ok: true; vertex: string; fragment: string } | { ok: false; log: string } {
  const fragment = source.replace(/\r\n/g, '\n').trim()
  if (!fragment) return { ok: false, log: '着色器是空的。' }
  if (fragment.length > SHADER_LAB_MAX) {
    return { ok: false, log: `着色器超过 ${SHADER_LAB_MAX} 个字符。` }
  }
  if (fragment.includes('\0')) return { ok: false, log: '着色器含有非法空字符。' }
  if (fragment.includes('#version')) return { ok: false, log: '不要写 #version，校验器会补上 WebGL2 头。' }
  if (!/void\s+main\s*\(/.test(fragment)) return { ok: false, log: '片段着色器需要 void main()。' }
  return { ok: true, vertex: vertexSource, fragment }
}

const vertexHeader = `#version 300 es
precision highp float;
#define attribute in
#define varying out
#define texture2D texture
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat3 normalMatrix;
uniform vec3 cameraPosition;
in vec3 position;
in vec3 normal;
in vec2 uv;
`

const fragmentHeader = `#version 300 es
precision highp float;
#define varying in
layout(location = 0) out vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
#define texture2D texture
uniform vec3 cameraPosition;
`

export function compileShaderPair(gl: WebGL2RenderingContext, vertex: string, fragment: string): ShaderCompileResult {
  const compile = (type: number, source: string): { shader: WebGLShader | null; log: string; ok: boolean } => {
    const shader = gl.createShader(type)
    if (!shader) return { shader: null, log: '无法创建着色器对象。', ok: false }
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    const ok = gl.getShaderParameter(shader, gl.COMPILE_STATUS) as boolean
    const log = gl.getShaderInfoLog(shader) ?? ''
    return { shader, log, ok }
  }
  const vs = compile(gl.VERTEX_SHADER, vertexHeader + vertex)
  const fs = compile(gl.FRAGMENT_SHADER, fragmentHeader + fragment)
  let linkLog = ''
  let linked = false
  if (vs.shader && fs.shader && vs.ok && fs.ok) {
    const program = gl.createProgram()
    if (program) {
      gl.attachShader(program, vs.shader)
      gl.attachShader(program, fs.shader)
      gl.linkProgram(program)
      linked = gl.getProgramParameter(program, gl.LINK_STATUS) as boolean
      linkLog = gl.getProgramInfoLog(program) ?? ''
      gl.deleteProgram(program)
    }
  }
  if (vs.shader) gl.deleteShader(vs.shader)
  if (fs.shader) gl.deleteShader(fs.shader)
  const ok = vs.ok && fs.ok && linked
  const log = [
    vs.log && `顶点着色器:\n${vs.log}`,
    fs.log && `片段着色器:\n${fs.log}`,
    linkLog && `链接:\n${linkLog}`,
    ok ? '编译并链接成功。这段着色器只在本地 GPU 上运行，没有上传。' : '编译失败。场景没有被替换。',
  ].filter(Boolean).join('\n\n')
  return { ok, log, vertex, fragment }
}
