<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import GalleryPanel from './GalleryPanel.vue'
import InspectorPanel from './InspectorPanel.vue'
import SourcePanel from './SourcePanel.vue'
import StageView from './StageView.vue'
import {
  applyQuery,
  currentMeta,
  neighbor,
  queryIsCurrent,
  reducedMotionActive,
  replay,
  selectPreset,
  setQuality,
  studio,
  togglePlay,
  toQueryRecord,
} from '../state/studio'
import type { QualityChoice } from '../engine/quality'

const route = useRoute()
const router = useRouter()
const base = import.meta.env.BASE_URL
const search = ref('')
const category = ref('all')
const linkState = ref('')
let syncing = false

const qualities: { id: QualityChoice; label: string }[] = [
  { id: 'auto', label: '自动' },
  { id: 'low', label: '低' },
  { id: 'high', label: '高' },
]

function routeQuery(): Record<string, string | string[] | null | undefined> {
  const out: Record<string, string | string[] | null | undefined> = {}
  for (const [key, value] of Object.entries(route.query)) {
    if (Array.isArray(value)) out[key] = value.filter((item): item is string => typeof item === 'string')
    else if (typeof value === 'string') out[key] = value
  }
  return out
}

function syncFromRoute(): void {
  const query = routeQuery()
  if (queryIsCurrent(query)) return
  syncing = true
  applyQuery(query)
  syncing = false
}

watch(() => route.fullPath, () => syncFromRoute())

watch(
  () => [studio.effectId, studio.presetId, studio.quality, studio.playing, studio.reduceMotion, studio.time, JSON.stringify(studio.values)],
  () => {
    if (syncing) return
    const next = toQueryRecord()
    if (queryIsCurrent(routeQuery())) return
    void router.replace({ query: next })
  },
)

onMounted(() => {
  window.addEventListener('keydown', onKey)
  syncFromRoute()
})

onBeforeUnmount(() => window.removeEventListener('keydown', onKey))

function onKey(event: KeyboardEvent): void {
  const target = event.target as HTMLElement | null
  const typing = target ? ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) : false
  if (event.key === 'Escape') {
    studio.cinema = false
    studio.helpOpen = false
    if (document.fullscreenElement) void document.exitFullscreen()
    return
  }
  if (typing) return
  if (event.key === 'ArrowRight') {
    neighbor(1)
    event.preventDefault()
  } else if (event.key === 'ArrowLeft') {
    neighbor(-1)
    event.preventDefault()
  } else if (event.key === ' ') {
    togglePlay()
    event.preventDefault()
  } else if (event.key === 'r' || event.key === 'R') replay()
  else if (event.key === 'f' || event.key === 'F') void fullscreen()
  else if (event.key === 'c' || event.key === 'C') studio.cinema = !studio.cinema
  else if (event.key === '/') {
    event.preventDefault()
    document.getElementById('effect-search')?.focus()
  } else if (event.key === '1' || event.key === '2' || event.key === '3') {
    const preset = currentMeta().presets[Number(event.key) - 1]
    if (preset) selectPreset(preset.id)
  }
}

async function fullscreen(): Promise<void> {
  const node = document.querySelector('.stage-frame')
  if (!(node instanceof HTMLElement)) return
  if (document.fullscreenElement) await document.exitFullscreen()
  else await node.requestFullscreen()
}

async function copyLink(): Promise<void> {
  try {
    await navigator.clipboard.writeText(window.location.href)
    linkState.value = '链接已复制'
  } catch {
    linkState.value = '无法复制链接'
  }
  window.setTimeout(() => {
    linkState.value = ''
  }, 1600)
}

function toggleMotion(): void {
  studio.reduceMotion = reducedMotionActive() ? false : true
}
</script>

<template>
  <div class="app" :class="{ cinema: studio.cinema, ['pane-' + studio.mobilePane]: true }">
    <a class="skip" href="#stage">跳到预览</a>
    <header class="topbar">
      <div class="brand">
        <span class="mark">折光社</span>
        <span class="latin">ZHEGUANG</span>
      </div>
      <div class="now">
        <strong>{{ currentMeta().name }}</strong>
        <span>{{ currentMeta().summary }}</span>
      </div>
      <div class="tools">
        <div class="segmented" role="group" aria-label="画质">
          <button
            v-for="item in qualities"
            :key="item.id"
            type="button"
            :class="{ on: studio.quality === item.id }"
            :aria-pressed="studio.quality === item.id"
            @click="setQuality(item.id)"
          >
            {{ item.label }}
          </button>
        </div>
        <button type="button" @click="togglePlay">{{ studio.playing ? '暂停' : '播放' }}</button>
        <button type="button" @click="replay">重放</button>
        <button type="button" :aria-pressed="studio.cinema" @click="studio.cinema = !studio.cinema">影院</button>
        <button type="button" @click="fullscreen">全屏</button>
        <button type="button" :aria-pressed="reducedMotionActive()" @click="toggleMotion">
          {{ reducedMotionActive() ? '动效已减弱' : '减弱动效' }}
        </button>
        <button type="button" @click="copyLink">分享</button>
        <button type="button" class="fps" :aria-pressed="studio.showFps" @click="studio.showFps = !studio.showFps">
          {{ studio.showFps ? (studio.fps === null ? '实测 —' : `实测 ${Math.round(studio.fps)}`) : '帧率关' }}
        </button>
        <button type="button" @click="studio.helpOpen = true">按键</button>
      </div>
    </header>
    <p class="status" aria-live="polite">{{ linkState }}</p>
    <main class="workspace">
      <GalleryPanel v-model:query="search" v-model:category="category" />
      <section id="stage" class="stage-wrap" :class="{ dim: studio.mobilePane !== 'stage' }">
        <StageView />
      </section>
      <aside class="side" :class="{ dim: studio.mobilePane === 'stage' && false }">
        <div class="side-tabs" role="tablist">
          <button type="button" :class="{ on: studio.sideTab === 'controls' }" @click="studio.sideTab = 'controls'">调控</button>
          <button type="button" :class="{ on: studio.sideTab === 'source' }" @click="studio.sideTab = 'source'">源码</button>
        </div>
        <InspectorPanel v-show="studio.sideTab === 'controls'" />
        <SourcePanel v-if="studio.sideTab === 'source'" />
      </aside>
    </main>
    <nav class="mobile-nav" aria-label="手机分区">
      <button type="button" :class="{ on: studio.mobilePane === 'gallery' }" @click="studio.mobilePane = 'gallery'">图库</button>
      <button type="button" :class="{ on: studio.mobilePane === 'stage' }" @click="studio.mobilePane = 'stage'; studio.sideTab = 'controls'">预览</button>
      <button type="button" :class="{ on: studio.mobilePane === 'source' }" @click="studio.mobilePane = 'source'; studio.sideTab = 'source'">源码</button>
    </nav>
    <dialog :open="studio.helpOpen" class="help" aria-labelledby="help-title">
      <form method="dialog">
        <h2 id="help-title">键盘</h2>
        <ul>
          <li>左右方向键切换效果</li>
          <li>空格暂停或播放</li>
          <li>R 重放，F 全屏，C 影院</li>
          <li>/ 聚焦搜索，1 到 3 选预设</li>
          <li>Esc 退出影院、帮助和全屏</li>
        </ul>
        <p>实测帧率来自最近约三十帧的采样，只说明此刻，不是性能承诺。</p>
        <p><a :href="`${base}THIRD_PARTY_NOTICES.md`">第三方声明</a></p>
        <button type="button" @click="studio.helpOpen = false">关闭</button>
      </form>
    </dialog>
  </div>
</template>
