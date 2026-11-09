/** Join a public/ file onto Vite's base, including a GitHub Pages project path. */
export function joinPublicPath(baseUrl: string, path: string): string {
  const file = path.replace(/^\/+/, '')
  if (!baseUrl || baseUrl === '/') return `/${file}`
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  return `${base}${file}`
}

export function publicAsset(path: string): string {
  return joinPublicPath(import.meta.env.BASE_URL, path)
}
