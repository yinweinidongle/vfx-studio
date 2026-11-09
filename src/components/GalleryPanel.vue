<script setup lang="ts">
import { computed } from 'vue'
import { publicAsset } from '../engine/assets'
import { catalog, categories } from '../effects/registry'
import { selectEffect, studio } from '../state/studio'

const props = defineProps<{ query: string; category: string }>()
const emit = defineEmits<{ 'update:query': [value: string]; 'update:category': [value: string] }>()

const visible = computed(() => {
  const needle = props.query.trim().toLowerCase()
  return catalog.filter((entry) => {
    const meta = entry.meta
    const categoryOk = props.category === 'all' || meta.categoryId === props.category
    if (!categoryOk) return false
    if (!needle) return true
    const haystack = [meta.name, meta.summary, meta.category, meta.id, ...meta.tags].join(' ').toLowerCase()
    return haystack.includes(needle)
  })
})

function thumb(id: string): string {
  return publicAsset(`thumbs/${id}.jpg`)
}
</script>

<template>
  <section class="gallery" aria-label="效果图库" :data-query="query" :data-category="category">
    <header class="gallery-head">
      <p class="eyebrow">图库</p>
      <h2>十二条分层效果</h2>
    </header>
    <label class="search">
      <span>搜索</span>
      <input
        id="effect-search"
        :value="query"
        type="search"
        placeholder="名称、分类或标签"
        @input="emit('update:query', ($event.target as HTMLInputElement).value)"
      />
    </label>
    <div class="chips" role="tablist" aria-label="分类">
      <button
        v-for="item in categories"
        :key="item.id"
        type="button"
        role="tab"
        :aria-selected="category === item.id"
        :class="{ on: category === item.id }"
        @click="emit('update:category', item.id)"
      >
        {{ item.name }}
      </button>
    </div>
    <p v-if="visible.length === 0" class="empty">没有对得上的效果。换个词，或切回全部分类。</p>
    <ul v-else class="cards">
      <li v-for="entry in visible" :key="entry.meta.id">
        <button
          type="button"
          class="card"
          :class="{ on: studio.effectId === entry.meta.id }"
          :aria-current="studio.effectId === entry.meta.id ? 'true' : undefined"
          :data-effect="entry.meta.id"
          @click="selectEffect(entry.meta.id)"
        >
          <img :src="thumb(entry.meta.id)" :alt="`${entry.meta.name}的静态截帧`" />
          <span>
            <small>{{ entry.meta.category }}</small>
            <strong>{{ entry.meta.name }}</strong>
            <em>{{ entry.meta.summary }}</em>
          </span>
        </button>
      </li>
    </ul>
  </section>
</template>
