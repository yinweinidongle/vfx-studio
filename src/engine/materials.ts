import {
  AdditiveBlending,
  FrontSide,
  NormalBlending,
  ShaderMaterial,
  type Blending,
  type IUniform,
  type Side,
} from 'three'
import type { ShaderProgram } from '../shaders/assemble'
import type { Disposer } from './dispose'

export interface ShadeOptions {
  blending?: Blending
  side?: Side
  depthWrite?: boolean
  depthTest?: boolean
  transparent?: boolean
}

export function shade(
  name: string,
  program: ShaderProgram,
  uniforms: Record<string, IUniform>,
  options: ShadeOptions = {},
): ShaderMaterial {
  return new ShaderMaterial({
    name,
    uniforms,
    vertexShader: program.vertex,
    fragmentShader: program.fragment,
    blending: options.blending ?? AdditiveBlending,
    side: options.side ?? FrontSide,
    depthWrite: options.depthWrite ?? false,
    depthTest: options.depthTest ?? true,
    transparent: options.transparent ?? true,
    toneMapped: false,
  })
}

export function trackMaterial(disposer: Disposer, material: ShaderMaterial): ShaderMaterial {
  disposer.add(() => material.dispose())
  return material
}

export const solid = {
  blending: NormalBlending,
  depthWrite: true,
  transparent: false,
} satisfies ShadeOptions

export const glow = {
  blending: AdditiveBlending,
  depthWrite: false,
  transparent: true,
} satisfies ShadeOptions

export const mist = {
  blending: NormalBlending,
  depthWrite: false,
  transparent: true,
} satisfies ShadeOptions
