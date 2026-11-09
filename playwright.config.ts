import { defineConfig } from '@playwright/test'

const base = 'http://127.0.0.1:47322/vfx-studio/'

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 60_000,
  expect: { timeout: 15_000 },
  fullyParallel: false,
  workers: 1,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'playwright-report' }]],
  use: {
    baseURL: base,
    viewport: { width: 1440, height: 900 },
    launchOptions: {
      args: ['--use-angle=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist'],
    },
  },
  webServer: {
    command: 'VITE_BASE=/vfx-studio/ npm run build && VITE_BASE=/vfx-studio/ npx vite preview --host 127.0.0.1 --port 47322 --strictPort',
    url: base,
    timeout: 180_000,
    reuseExistingServer: false,
  },
})
