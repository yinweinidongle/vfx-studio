<script setup lang="ts">
import { computed } from 'vue'
import { currentMeta, seek, selectPreset, setParam, studio } from '../state/studio'

const meta = computed(() => currentMeta())
const loopTime = computed(() => {
  const loop = meta.value.loop
  const time = studio.time ?? meta.value.posterTime
  const wrapped = ((time % loop) + loop) % loop
  return Math.round(wrapped * 100) / 100
})

function onRange(key: string, event: Event): void {
  const target = event.target as HTMLInputElement
  setParam(key, Number(target.value))
}

function onColor(key: string, event: Event): void {
  setParam(key, (event.target as HTMLInputElement).value)
}

function onCheck(key: string, event: Event): void {
  setParam(key, (event.target as HTMLInputElement).checked)
}

function onSeek(event: Event): void {
  seek(Number((event.target as HTMLInputElement).value))
}
</script>

<template>
  <section class="inspector" aria-label="参数">
    <header>
      <p class="eyebrow">{{ meta.category }}</p>
      <h2>{{ meta.name }}</h2>
      <p class="lead">{{ meta.description }}</p>
    </header>
    <div class="presets" role="listbox" aria-label="预设">
      <button
        v-for="preset in meta.presets"
        :key="preset.id"
        type="button"
        :class="{ on: studio.presetId === preset.id }"
        @click="selectPreset(preset.id)"
      >
        <strong>{{ preset.name }}</strong>
        <span>{{ preset.blurb }}</span>
      </button>
    </div>
    <label class="field">
      <span>循环时间 <b>{{ loopTime.toFixed(2) }}s</b></span>
      <input
        type="range"
        min="0"
        :max="meta.loop"
        step="0.01"
        :value="loopTime"
        :aria-valuetext="`${loopTime} 秒`"
        @input="onSeek"
      />
    </label>
    <label v-for="param in meta.params" :key="param.key" class="field">
      <span>
        {{ param.label }}
        <b v-if="param.type === 'float'">{{ Number(studio.values[param.key]).toFixed(2) }}</b>
      </span>
      <input
        v-if="param.type === 'float'"
        type="range"
        :min="param.min"
        :max="param.max"
        :step="param.step"
        :value="Number(studio.values[param.key])"
        @input="onRange(param.key, $event)"
      />
      <input
        v-else-if="param.type === 'color'"
        type="color"
        :value="String(studio.values[param.key])"
        @input="onColor(param.key, $event)"
      />
      <input
        v-else
        type="checkbox"
        :checked="studio.values[param.key] === true"
        @change="onCheck(param.key, $event)"
      />
    </label>
    <section class="credits">
      <h3>这一条用到的来源</h3>
      <ul>
        <li v-for="item in meta.attribution" :key="item.url">
          <a :href="item.url" target="_blank" rel="noreferrer noopener">{{ item.title }}</a>
          <small>{{ item.kind === 'incorporated' ? '直接纳入' : item.kind === 'adapted' ? '改编' : '原创' }} · {{ item.license }}</small>
          <p>{{ item.note }}</p>
        </li>
      </ul>
    </section>
  </section>
</template>
