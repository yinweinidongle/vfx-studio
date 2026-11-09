import noiseSource from './snoise3D.glsl?raw'
import commonSource from './common.glsl?raw'

const chunks: Record<string, string> = {
  noise: noiseSource,
  common: commonSource,
}

export interface ShaderProgram {
  vertex: string
  fragment: string
}

const includePattern = /^[ \t]*\/\/ @include ([a-z0-9-]+)[ \t]*$/gm

export function assembleShader(source: string): string {
  return source.replace(includePattern, (_line, name: string) => {
    const chunk = chunks[name]
    if (!chunk) throw new Error(`未知着色器片段: ${name}`)
    return chunk
  })
}

export function splitPrograms(source: string): Record<string, ShaderProgram> {
  const parts = source.split(/\/\/ @program ([a-z0-9-]+)\n/)
  if (parts.length < 3) {
    throw new Error('着色器文件缺少 // @program 标记')
  }
  const programs: Record<string, ShaderProgram> = {}
  for (let index = 1; index < parts.length; index += 2) {
    const name = parts[index]
    const body = parts[index + 1] ?? ''
    const marker = '// --- fragment ---'
    const vertexMarker = '// --- vertex ---'
    const vertexAt = body.indexOf(vertexMarker)
    const fragmentAt = body.indexOf(marker)
    if (vertexAt < 0 || fragmentAt < 0 || fragmentAt < vertexAt) {
      throw new Error(`着色器程序 ${name} 缺少 vertex / fragment 标记`)
    }
    programs[name] = {
      vertex: body.slice(vertexAt + vertexMarker.length, fragmentAt).trim(),
      fragment: body.slice(fragmentAt + marker.length).trim(),
    }
  }
  return programs
}

export function assemblePrograms(source: string): Record<string, ShaderProgram> {
  const raw = splitPrograms(source)
  const assembled: Record<string, ShaderProgram> = {}
  for (const [name, program] of Object.entries(raw)) {
    assembled[name] = {
      vertex: assembleShader(program.vertex),
      fragment: assembleShader(program.fragment),
    }
  }
  return assembled
}

export function sharedShaderFiles(): { filename: string; contents: string }[] {
  return [
    { filename: 'snoise3D.glsl', contents: noiseSource },
    { filename: 'common.glsl', contents: commonSource },
  ]
}
