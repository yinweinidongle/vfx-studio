<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { StudioStage } from '../engine/stage'
import { currentMeta, studio } from '../state/studio'

const canvas = ref<HTMLCanvasElement | null>(null)
const frame = ref<HTMLElement | null>(null)
let stage: StudioStage | null = null
let observer: ResizeObserver | null = null

onMounted(() => {
  const element = canvas.value
  if (!element) return
  stage = new StudioStage({
    canvas: element,
    getEffectId: () => studio.effectId,
    getValues: () => studio.values,
    getQuality: () => studio.quality,
    getPlaying: () => studio.playing,
    getReducedMotion: () => studio.reduceMotion ?? studio.systemReduce,
    getSeek: () => studio.time,
    onSnapshot: (snapshot) => {
      studio.ready = snapshot.ready
      studio.loading = snapshot.loading
      studio.fps = snapshot.fps
      studio.error = snapshot.errors[0] ?? null
    },
  })
  stage.mount()
  observer = new ResizeObserver(() => stage?.resize())
  observer.observe(element)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  stage?.dispose()
  stage = null
})

watch(() => studio.effectId, () => void stage?.reload())
watch(() => studio.quality, () => void stage?.reload())
watch(() => [studio.values, studio.reduceMotion], () => stage?.applyParams(), { deep: true })
watch(() => studio.playing, (playing) => stage?.setPlaying(playing))
watch(() => studio.seekToken, () => {
  if (studio.time !== null) stage?.seek(studio.time)
})

const label = () => `${currentMeta().name}。${currentMeta().description}`

async function fullscreen(): Promise<void> {
  const node = frame.value
  if (!node) return
  if (document.fullscreenElement) await document.exitFullscreen()
  else await node.requestFullscreen()
}

defineExpose({ fullscreen })
</script>

<template>
  <div ref="frame" class="stage-frame" :data-ready="studio.ready" :data-effect="studio.effectId">
    <canvas ref="canvas" :aria-label="label()" role="img"></canvas>
    <p v-if="studio.loading" class="stage-note">正在装入着色器…</p>
    <p v-if="studio.error" class="stage-error" role="alert">{{ studio.error }}</p>
  </div>
</template>
