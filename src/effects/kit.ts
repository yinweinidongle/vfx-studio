import { Group, Vector3, type IUniform } from 'three'
import type { BloomSettings, EffectContext, EffectInstance, ParamValues } from '../engine/types'
import { readColor, readNumber, writeColor } from '../engine/params'

export interface VisualUniforms {
  uTime: IUniform<number>
  uLoop: IUniform<number>
  uIntensity: IUniform<number>
  uSpeed: IUniform<number>
  uColor: IUniform<Vector3>
  uColorB: IUniform<Vector3>
  [key: string]: IUniform
}

export function visualUniforms(loop: number, color = '#7ef3ff', colorB = '#8d7dff'): VisualUniforms {
  const primary = new Vector3()
  const secondary = new Vector3()
  writeColor(primary, color)
  writeColor(secondary, colorB)
  return {
    uTime: { value: 0 },
    uLoop: { value: loop },
    uIntensity: { value: 1 },
    uSpeed: { value: 1 },
    uColor: { value: primary },
    uColorB: { value: secondary },
  }
}

export function applyVisual(uniforms: VisualUniforms, values: ParamValues): void {
  uniforms.uIntensity.value = readNumber(values, 'intensity')
  uniforms.uSpeed.value = readNumber(values, 'speed')
  writeColor(uniforms.uColor.value, readColor(values, 'color'))
  writeColor(uniforms.uColorB.value, readColor(values, 'colorB'))
}

export function createRoot(ctx: EffectContext): Group {
  const root = new Group()
  ctx.scene.add(root)
  return root
}

export function publish(
  ctx: EffectContext,
  root: Group,
  uniforms: VisualUniforms,
  bloom: BloomSettings,
  extra?: (time: number, reduced: boolean) => void,
): EffectInstance {
  ctx.disposer.track(root)
  const instance: EffectInstance = {
    bloom: { ...bloom },
    update(time, _dt, reduced) {
      uniforms.uTime.value = time
      extra?.(time, reduced)
    },
    apply(values) {
      applyVisual(uniforms, values)
      instance.bloom = {
        ...bloom,
        strength: bloom.strength * (0.62 + 0.38 * uniforms.uIntensity.value),
      }
    },
    dispose() {},
  }
  return instance
}
