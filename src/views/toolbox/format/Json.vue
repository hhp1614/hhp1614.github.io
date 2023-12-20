<script lang="ts" setup>
import { useJsonStore } from '@/store'

const jsonStore = useJsonStore()

const result = computed(() => formatJson(jsonStore.activeTabText))

/**
 * 格式化 JSON 字符串
 * @param json JSON 字符串
 */
function formatJson(json: string, compress = false) {
  json = json.trim()
  if (!json) return ''
  try {
    return JSON.stringify(JSON.parse(json), null, compress ? 0 : 4)
  } catch {
    return 'Error: is not valid JSON'
  }
}
</script>

<template>
  <div class="json has-tabs">
    <nav class="tabs">
      <div
        class="item"
        v-for="tab in jsonStore.tabs"
        :key="tab.id"
        :class="{ active: tab.id === jsonStore.activeTabId }"
      >
        <span
          class="title"
          @blur="e => jsonStore.changeTabName(tab.id, tab.title, (e.target as HTMLSpanElement).innerText)"
          @keydown.enter="$event => ($event.target as HTMLInputElement).blur()"
          @click="jsonStore.changeTab(tab.id)"
          contenteditable
        >
          {{ tab.title }}
        </span>
        <span class="close" tooltip="关闭标签" @click.stop="jsonStore.removeTab(tab.id)">×</span>
      </div>
      <button class="item" @click="jsonStore.addTab" tooltip="添加标签">
        <Icon name="plus" />
      </button>
      <BtnIcon class="item" icon="clear" tooltip="清空标签" @click="jsonStore.clearTab" />
    </nav>
    <div class="actions">
      <div class="input">
        <BtnCopy :text="jsonStore.activeTabText" />
        <BtnIcon class="item" icon="clear" @click="jsonStore.changeTabText('')" />
        <button @click="jsonStore.changeTabText(formatJson(jsonStore.activeTabText))">格式化</button>
        <button @click="jsonStore.changeTabText(formatJson(jsonStore.activeTabText, true))">压缩</button>
      </div>
      <div class="output">
        <BtnCopy :text="formatJson(jsonStore.activeTabText)" />
      </div>
    </div>
    <div class="content">
      <Editor
        class="input"
        :model-value="jsonStore.activeTabText"
        language="json"
        placeholder="输入 JSON 数据"
        @change="jsonStore.changeTabText"
        autofocus
      />
      <Editor class="output" :model-value="result" language="json" disabled />
    </div>
  </div>
</template>
