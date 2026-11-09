import {
  BufferGeometry,
  Material,
  Object3D,
  Texture,
  WebGLRenderTarget,
  type Mesh,
} from 'three'

interface Listener {
  target: EventTarget
  type: string
  fn: EventListener
}

export class Disposer {
  private geometries = new Set<BufferGeometry>()
  private materials = new Set<Material>()
  private textures = new Set<Texture>()
  private targets = new Set<WebGLRenderTarget>()
  private roots = new Set<Object3D>()
  private listeners: Listener[] = []
  private extra: Array<() => void> = []

  track<T extends Object3D>(object: T): T {
    this.roots.add(object)
    object.traverse((child) => {
      const mesh = child as Mesh
      if (mesh.geometry) this.geometries.add(mesh.geometry)
      const material = mesh.material
      if (Array.isArray(material)) {
        for (const entry of material) this.materials.add(entry)
      } else if (material) {
        this.materials.add(material)
      }
    })
    return object
  }

  texture<T extends Texture>(texture: T): T {
    this.textures.add(texture)
    return texture
  }

  target<T extends WebGLRenderTarget>(target: T): T {
    this.targets.add(target)
    return target
  }

  listen(target: EventTarget, type: string, fn: EventListener): void {
    target.addEventListener(type, fn)
    this.listeners.push({ target, type, fn })
  }

  add(fn: () => void): void {
    this.extra.push(fn)
  }

  dispose(): void {
    for (const fn of this.extra) fn()
    for (const object of this.roots) object.removeFromParent()
    for (const geometry of this.geometries) geometry.dispose()
    for (const material of this.materials) material.dispose()
    for (const texture of this.textures) texture.dispose()
    for (const target of this.targets) target.dispose()
    for (const listener of this.listeners) {
      listener.target.removeEventListener(listener.type, listener.fn)
    }
    this.extra = []
    this.roots.clear()
    this.geometries.clear()
    this.materials.clear()
    this.textures.clear()
    this.targets.clear()
    this.listeners = []
  }
}
