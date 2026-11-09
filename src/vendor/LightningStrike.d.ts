import { BufferGeometry, type Vector3 } from 'three'

export interface LightningParams {
  sourceOffset?: Vector3
  destOffset?: Vector3
  timeScale?: number
  roughness?: number
  straightness?: number
  up0?: Vector3
  up1?: Vector3
  radius0?: number
  radius1?: number
  radius0Factor?: number
  radius1Factor?: number
  minRadius?: number
  isEternal?: boolean
  birthTime?: number
  deathTime?: number
  propagationTimeFactor?: number
  vanishingTimeFactor?: number
  subrayPeriod?: number
  subrayDutyCycle?: number
  maxIterations?: number
  isStatic?: boolean
  ramification?: number
  maxSubrayRecursion?: number
  recursionProbability?: number
  generateUVs?: boolean
  noiseSeed?: number
}

export class LightningStrike extends BufferGeometry {
  constructor(params?: LightningParams)
  rayParameters: LightningParams & { sourceOffset: Vector3; destOffset: Vector3 }
  update(time: number): void
}
