import { sharedShaderFiles, type ShaderProgram } from '../shaders/assemble'
import type { SourceFile } from './types'

const roleLanguage = {
  glsl: 'glsl',
  typescript: 'typescript',
  javascript: 'javascript',
  markdown: 'markdown',
} as const

export function buildSources(input: {
  implementationName: string
  implementation: string
  shaderName: string
  shader: string
  programs: Record<string, ShaderProgram>
  notes: string
  upstream?: SourceFile[]
}): SourceFile[] {
  const files: SourceFile[] = [
    {
      filename: input.implementationName,
      language: 'typescript',
      role: 'implementation',
      contents: input.implementation,
    },
    {
      filename: input.shaderName,
      language: 'glsl',
      role: 'shader',
      contents: input.shader,
    },
  ]
  for (const [name, program] of Object.entries(input.programs)) {
    files.push({
      filename: `${name}.vertex.compiled.glsl`,
      language: 'glsl',
      role: 'compiled',
      contents: program.vertex,
    })
    files.push({
      filename: `${name}.fragment.compiled.glsl`,
      language: 'glsl',
      role: 'compiled',
      contents: program.fragment,
    })
  }
  for (const shared of sharedShaderFiles()) {
    files.push({
      filename: shared.filename,
      language: roleLanguage.glsl,
      role: 'shared',
      contents: shared.contents,
    })
  }
  files.push({
    filename: 'NOTES.md',
    language: 'markdown',
    role: 'notes',
    contents: input.notes,
  })
  if (input.upstream) files.push(...input.upstream)
  return files
}
