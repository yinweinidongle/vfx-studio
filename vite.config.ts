import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

function normalizeBase(input: string | undefined): string {
  if (!input || input === '/') return '/'
  let base = input.trim()
  if (!base.startsWith('/')) base = `/${base}`
  if (!base.endsWith('/')) base = `${base}/`
  return base.replace(/\/{2,}/g, '/')
}

export default defineConfig({
  base: normalizeBase(process.env.VITE_BASE),
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 47321,
    strictPort: true,
  },
  preview: {
    host: '127.0.0.1',
    port: 47322,
    strictPort: true,
  },
})
