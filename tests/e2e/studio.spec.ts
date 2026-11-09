import { expect, test } from '@playwright/test'

test.beforeEach(async ({ context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'])
})

async function ready(page: import('@playwright/test').Page, id?: string): Promise<void> {
  await page.waitForFunction(
    (effect) => {
      const api = window.__XUANLAN__
      return Boolean(api?.ready && api.errors.length === 0 && (!effect || api.effectId === effect))
    },
    id,
  )
}

test('nested pages base compiles a shader and keeps one live canvas', async ({ page }) => {
  await page.goto('./#/?fx=aura&q=high&play=0')
  await ready(page, 'aura')
  await expect(page.locator('canvas')).toHaveCount(1)
  const script = await page.locator('script[type="module"]').first().getAttribute('src')
  expect(script ?? '').toContain('/vfx-studio/')
  await page.waitForFunction(() =>
    [...document.querySelectorAll('.gallery img')].every((node) => {
      const image = node as HTMLImageElement
      return image.complete && image.naturalWidth > 32 && image.src.includes('/vfx-studio/thumbs/')
    }),
  )
  const thumbs = await page.locator('.gallery img').evaluateAll((nodes) =>
    nodes.map((node) => ({
      src: (node as HTMLImageElement).src,
      width: (node as HTMLImageElement).naturalWidth,
    })),
  )
  expect(thumbs).toHaveLength(12)
  expect(new Set(thumbs.map((thumb) => thumb.src)).size).toBe(12)
  const sample = await page.evaluate(() => window.__XUANLAN__?.sample())
  expect(sample?.max ?? 0).toBeGreaterThan(30)
})

test('switches effects, presets, sliders, pause and replay', async ({ page }) => {
  await page.goto('./#/?fx=aura&q=high')
  await ready(page, 'aura')
  for (const id of ['sword', 'fireworks', 'waterfall', 'blackhole', 'aura']) {
    await page.locator(`.gallery [data-effect="${id}"]`).click()
    await ready(page, id)
    await expect(page.locator('.stage-error')).toHaveCount(0)
  }
  await page.getByRole('button', { name: '紫府' }).click()
  await expect(page).toHaveURL(/preset=violet/)
  const intensity = page.getByRole('slider', { name: /强度/ })
  await intensity.fill('1.8')
  await expect(page).toHaveURL(/intensity=1\.8/)
  await page.getByRole('button', { name: '暂停' }).click()
  await expect(page).toHaveURL(/play=0/)
  await page.getByRole('button', { name: '重放' }).click()
  await expect(page).not.toHaveURL(/play=0/)
  const sample = await page.evaluate(() => window.__XUANLAN__?.sample())
  expect(sample?.max ?? 0).toBeGreaterThan(20)
})

test('searches, filters categories, and shows exact source', async ({ page }) => {
  await page.goto('./#/?fx=sword&q=high&play=0')
  await ready(page, 'sword')
  const cards = page.locator('.gallery [data-effect]')
  await page.locator('#effect-search').fill('黑洞')
  await expect(page.locator('.gallery [data-effect="blackhole"]')).toBeVisible()
  await expect(page.locator('.gallery [data-effect="sword"]')).toHaveCount(0)
  await page.getByRole('tab', { name: '兵刃' }).click()
  await expect(page.getByText('没有对得上的效果')).toBeVisible()
  await page.locator('#effect-search').fill('')
  await page.getByRole('tab', { name: '全部' }).click()
  await expect(cards).toHaveCount(12)
  await page.getByRole('button', { name: '源码' }).click()
  await expect(page.locator('pre.code')).toContainText('createEffect')
  await page.getByRole('tab', { name: /着色器/ }).click()
  await expect(page.locator('pre.code')).toContainText('gl_FragColor')
  await page.getByRole('button', { name: '复制' }).click()
  await expect(page.getByText('已复制')).toBeVisible()
  const clipboard = await page.evaluate(() => navigator.clipboard.readText())
  expect(clipboard).toContain('void main')
  const downloadPromise = page.waitForEvent('download')
  await page.getByRole('button', { name: '下载' }).click()
  const download = await downloadPromise
  expect(download.suggestedFilename()).toContain('effect.glsl')
})

test('compiles a local shader and rejects a version header', async ({ page }) => {
  await page.goto('./#/?fx=portal&q=high&play=0')
  await ready(page, 'portal')
  await page.getByRole('button', { name: '源码' }).click()
  await page.getByRole('button', { name: '编译', exact: true }).click()
  await expect(page.locator('.log')).toContainText('编译并链接成功')
  await page.getByLabel('片段着色器').fill('#version 300 es\nvoid main(){ gl_FragColor = vec4(1.0); }')
  await page.getByRole('button', { name: '编译', exact: true }).click()
  await expect(page.locator('.log')).toContainText('不要写 #version')
})

test('mobile layout reaches gallery, stage and source', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('./#/?fx=meteor&q=low&play=0')
  await ready(page, 'meteor')
  await page.getByRole('button', { name: '图库' }).click()
  await expect(page.locator('#effect-search')).toBeVisible()
  await page.getByRole('button', { name: '预览' }).click()
  await expect(page.locator('canvas')).toBeVisible()
  const box = await page.locator('canvas').boundingBox()
  expect(box?.width ?? 0).toBeGreaterThan(300)
  await page.getByRole('navigation', { name: '手机分区' }).getByRole('button', { name: '源码' }).click()
  await expect(page.locator('pre.code')).toContainText('createEffect')
})
