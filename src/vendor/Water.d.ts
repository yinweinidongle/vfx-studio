import {
  BufferGeometry,
  Mesh,
  ShaderMaterial,
  WebGLRenderTarget,
  type Texture,
  type Vector3,
} from 'three'

export interface WaterOptions {
  textureWidth?: number
  textureHeight?: number
  waterNormals?: Texture | null
  sunDirection?: Vector3
  sunColor?: number
  waterColor?: number
  distortionScale?: number
  alpha?: number
  fog?: boolean
}

export class Water extends Mesh {
  constructor(geometry: BufferGeometry, options?: WaterOptions)
  renderTarget: WebGLRenderTarget
  material: ShaderMaterial
  dispose(): void
}
