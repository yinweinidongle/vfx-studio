import {
  BoxGeometry,
  BufferGeometry,
  Float32BufferAttribute,
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  Mesh,
  Points,
  type ShaderMaterial,
} from 'three'

export function hash01(index: number, salt: number): number {
  const value = Math.sin(index * 127.1 + salt * 311.7) * 43758.5453
  return value - Math.floor(value)
}

function quadGeometry(count: number): InstancedBufferGeometry {
  const geometry = new InstancedBufferGeometry()
  geometry.setAttribute(
    'position',
    new Float32BufferAttribute([-0.5, 0, 0, 0.5, 0, 0, 0.5, 1, 0, -0.5, 1, 0], 3),
  )
  geometry.setAttribute('uv', new Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 1], 2))
  geometry.setIndex([0, 1, 2, 0, 2, 3])
  geometry.instanceCount = count
  return geometry
}

export function createStreaks(count: number, material: ShaderMaterial): Mesh {
  const geometry = quadGeometry(count)
  const a = new Float32Array(count)
  const b = new Float32Array(count)
  const c = new Float32Array(count)
  for (let index = 0; index < count; index += 1) {
    a[index] = hash01(index, 1)
    b[index] = hash01(index, 2)
    c[index] = hash01(index, 3)
  }
  geometry.setAttribute('aSeed', new InstancedBufferAttribute(a, 1))
  geometry.setAttribute('aSeed2', new InstancedBufferAttribute(b, 1))
  geometry.setAttribute('aSeed3', new InstancedBufferAttribute(c, 1))
  const mesh = new Mesh(geometry, material)
  mesh.frustumCulled = false
  return mesh
}

export function createRibbon(segments: number, material: ShaderMaterial): Mesh {
  const geometry = quadGeometry(segments)
  const along = new Float32Array(segments)
  for (let index = 0; index < segments; index += 1) along[index] = index / segments
  geometry.setAttribute('aT', new InstancedBufferAttribute(along, 1))
  const mesh = new Mesh(geometry, material)
  mesh.frustumCulled = false
  return mesh
}

export function createSeedPoints(count: number, material: ShaderMaterial): Points {
  const geometry = new BufferGeometry()
  const seeds = new Float32Array(count * 3)
  for (let index = 0; index < count; index += 1) {
    seeds[index * 3] = hash01(index, 4)
    seeds[index * 3 + 1] = hash01(index, 5)
    seeds[index * 3 + 2] = hash01(index, 6)
  }
  geometry.setAttribute('position', new Float32BufferAttribute(new Float32Array(count * 3), 3))
  geometry.setAttribute('aSeed', new Float32BufferAttribute(seeds, 3))
  const points = new Points(geometry, material)
  points.frustumCulled = false
  return points
}

export function createDebris(count: number, material: ShaderMaterial): Mesh {
  const source = new BoxGeometry(1, 1, 1)
  const geometry = new InstancedBufferGeometry()
  const index = source.getIndex()
  if (index) geometry.setIndex(index.clone())
  for (const name of ['position', 'normal', 'uv'] as const) {
    geometry.setAttribute(name, source.getAttribute(name).clone())
  }
  source.dispose()
  const seeds = new Float32Array(count * 3)
  const extra = new Float32Array(count)
  for (let index = 0; index < count; index += 1) {
    seeds[index * 3] = hash01(index, 7)
    seeds[index * 3 + 1] = hash01(index, 8)
    seeds[index * 3 + 2] = hash01(index, 9)
    extra[index] = hash01(index, 10)
  }
  geometry.setAttribute('aSeed', new InstancedBufferAttribute(seeds, 3))
  geometry.setAttribute('aSeed1', new InstancedBufferAttribute(extra, 1))
  geometry.instanceCount = count
  const mesh = new Mesh(geometry, material)
  mesh.frustumCulled = false
  return mesh
}
