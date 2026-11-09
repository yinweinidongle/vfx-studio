export type QualityChoice = 'auto' | 'low' | 'high'

export interface ResolvedQuality {
  choice: QualityChoice
  resolved: 'low' | 'medium' | 'high'
  dprCap: number
  particles: number
  bloom: boolean
  segments: number
  water: number
}

export function resolveQuality(
  choice: QualityChoice,
  viewportWidth: number,
  cores: number,
  coarsePointer: boolean,
): ResolvedQuality {
  const mobile = coarsePointer || viewportWidth < 800
  if (choice === 'low' || (choice === 'auto' && (mobile || cores > 0 && cores <= 4))) {
    return {
      choice,
      resolved: 'low',
      dprCap: 1,
      particles: 0.42,
      bloom: choice !== 'low',
      segments: 0.62,
      water: 160,
    }
  }
  if (choice === 'high') {
    return {
      choice,
      resolved: 'high',
      dprCap: 1.75,
      particles: 1,
      bloom: true,
      segments: 1,
      water: 384,
    }
  }
  return {
    choice,
    resolved: 'medium',
    dprCap: 1.35,
    particles: 0.72,
    bloom: true,
    segments: 0.85,
    water: 256,
  }
}

export function scaledCount(base: number, quality: ResolvedQuality, floor = 8): number {
  return Math.max(floor, Math.round(base * quality.particles))
}
