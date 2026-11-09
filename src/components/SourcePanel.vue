<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import hljs from 'highlight.js/lib/core'
import glsl from 'highlight.js/lib/languages/glsl'
import typescript from 'highlight.js/lib/languages/typescript'
import javascript from 'highlight.js/lib/languages/javascript'
import markdown from 'highlight.js/lib/languages/markdown'
import { findEffect } from '../effects/registry'
import type { EffectModule, SourceFile } from '../engine/types'
import { shaderLabTemplate } from '../engine/shaderLab'
import { studio } from '../state/studio'

hljs.registerLanguage('glsl', glsl)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('markdown', markdown)

const module = ref<EffectModule | null>(null)
const loadError = ref('')
const active = ref(0)
const copyState = ref('')
const labSource = ref(shaderLabTemplate)
const labLog = ref('还没有编译。着色器只在这台浏览器里跑，不会上传。')

const files = computed<SourceFile[]>(() => module.value?.sources ?? [])
const current = computed(() => files.value[active.value] ?? null)
const highlighted = computed(() => {
  const file = current.value
  if (!file) return ''
  const language = file.language === 'javascript' ? 'javascript' : file.language
  return hljs.highlight(file.contents, { language }).value
})

async function load(id: string): Promise<void> {
  loadError.value = ''
  try {
    module.value = await findEffect(id).load()
    active.value = 0
  } catch (error) {
    loadError.value = error instanceof Error ? error.message : '源码加载失败'
  }
}

watch(() => studio.effectId, (id) => void load(id), { immediate: true })

async function copyText(): Promise<void> {
  const file = current.value
  if (!file) return
  try {
    await navigator.clipboard.writeText(file.contents)
    copyState.value = '已复制'
  } catch {
    copyState.value = '复制失败，请手动选择文本'
  }
  window.setTimeout(() => {
    copyState.value = ''
  }, 1600)
}

function download(): void {
  const file = current.value
  if (!file) return
  const blob = new Blob([file.contents], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = file.filename
  link.click()
  URL.revokeObjectURL(url)
}

function compile(preview: boolean): void {
  const stage = window.__XUANLAN_STAGE__
  if (!stage) {
    labLog.value = '渲染器还没准备好。'
    return
  }
  const result = preview ? stage.showUserShader(labSource.value) : stage.compileUserShader(labSource.value)
  labLog.value = result.log
}

async function restore(): Promise<void> {
  await window.__XUANLAN_STAGE__?.leaveShaderLab()
  labLog.value = '已回到当前效果。'
}

const roleName: Record<string, string> = {
  implementation: '实现',
  shader: '着色器',
  compiled: '拼接后',
  shared: '共享',
  notes: '说明',
  upstream: '上游',
}
</script>

<template>
  <section class="source" aria-label="源码">
    <p v-if="loadError" class="empty">{{ loadError }}</p>
    <template v-else>
      <div class="file-tabs" role="tablist" aria-label="源码文件">
        <button
          v-for="(file, index) in files"
          :key="file.filename + file.role"
          type="button"
          role="tab"
          :aria-selected="active === index"
          :class="{ on: active === index }"
          @click="active = index"
        >
          <small>{{ roleName[file.role] }}</small>
          {{ file.filename }}
        </button>
      </div>
      <div class="source-actions">
        <button type="button" @click="copyText">复制</button>
        <button type="button" @click="download">下载</button>
        <span aria-live="polite">{{ copyState }}</span>
      </div>
      <pre v-if="current" class="code"><code v-html="highlighted"></code></pre>
      <section class="lab">
        <h3>本地着色器校验</h3>
        <p>只编译你粘贴的片段着色器。不会执行 JavaScript，也不会上传。通过后可以暂时替换成一个预览球。</p>
        <textarea v-model="labSource" spellcheck="false" aria-label="片段着色器"></textarea>
        <div class="source-actions">
          <button type="button" @click="compile(false)">编译</button>
          <button type="button" @click="compile(true)">编译并预览</button>
          <button type="button" @click="restore">回到效果</button>
        </div>
        <pre class="log">{{ labLog }}</pre>
      </section>
    </template>
  </section>
</template>
