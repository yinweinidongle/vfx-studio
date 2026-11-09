import { Color, Vector3 } from 'three'
import { RepeatWrapping, DataTexture, LinearFilter, NoColorSpace } from 'three'

export function frameCamera(
  camera: { position: Vector3; lookAt: (x: number, y: number, z: number) => void; fov: number; near: number; far: number; updateProjectionMatrix: () => void },
  position: [number, number, number],
  target: [number, number, number],
  fov = 42,
): void {
  camera.position.set(position[0], position[1], position[2])
  camera.lookAt(target[0], target[1], target[2])
  camera.fov = fov
  camera.near = 0.08
  camera.far = 220
  camera.updateProjectionMatrix()
}

export function createSpriteTexture(): DataTexture {
  const size = 128
  const data = new Uint8Array(size * size * 4)
  const center = (size - 1) / 2
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const dx = (x - center) / center
      const dy = (y - center) / center
      const d = Math.sqrt(dx * dx + dy * dy)
      const alpha = Math.max(0, 1 - d)
      const soft = alpha * alpha * (3 - 2 * alpha)
      const hot = Math.max(0, 1 - d * 2.4)
      const value = Math.min(255, Math.round((soft * 0.85 + hot * hot) * 255))
      const index = (y * size + x) * 4
      data[index] = 255
      data[index + 1] = 255
      data[index + 2] = 255
      data[index + 3] = value
    }
  }
  const texture = new DataTexture(data, size, size)
  texture.needsUpdate = true
  texture.colorSpace = NoColorSpace
  texture.magFilter = LinearFilter
  texture.minFilter = LinearFilter
  return texture
}

export function createWaterNormals(): DataTexture {
  const size = 256
  const height = new Float32Array(size * size)
  const sample = (x: number, y: number) => {
    const u = x / size
    const v = y / size
    return (
      Math.sin(u * 24 + v * 6) * 0.35
      + Math.cos(v * 18 - u * 4) * 0.25
      + Math.sin((u + v) * 40) * 0.12
    )
  }
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) height[y * size + x] = sample(x, y)
  }
  const data = new Uint8Array(size * size * 4)
  const at = (x: number, y: number) => height[((y + size) % size) * size + ((x + size) % size)] ?? 0
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const dx = at(x + 1, y) - at(x - 1, y)
      const dy = at(x, y + 1) - at(x, y - 1)
      let nx = -dx
      let ny = -dy
      let nz = 0.45
      const length = Math.hypot(nx, ny, nz) || 1
      nx /= length
      ny /= length
      nz /= length
      const index = (y * size + x) * 4
      data[index] = Math.round((nx * 0.5 + 0.5) * 255)
      data[index + 1] = Math.round((ny * 0.5 + 0.5) * 255)
      data[index + 2] = Math.round((nz * 0.5 + 0.5) * 255)
      data[index + 3] = 255
    }
  }
  const texture = new DataTexture(data, size, size)
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.magFilter = LinearFilter
  texture.minFilter = LinearFilter
  texture.colorSpace = NoColorSpace
  texture.needsUpdate = true
  return texture
}

export function setClear(renderer: { setClearColor: (color: Color, alpha?: number) => void }, hex = '#05060c'): void {
  renderer.setClearColor(new Color(hex), 1)
}
