<script lang="ts" setup>
import { onMounted } from 'vue'
import router from '@/router'
import { useTabStore } from '@/store'

const tabStore = useTabStore()

const props = defineProps<{
  /** Tabs 的 key */
  tabsKey: keyof typeof tabStore.tabs
}>()

onMounted(() => {
  tabStore.gotoTab(props.tabsKey, {
    path: router.currentRoute.value.path,
    name: router.currentRoute.value.meta.title as string,
  })
})
</script>

<template>
  <header>
    <nav class="tabs">
      <div
        class="item"
        v-for="tab in tabStore.tabs[tabsKey]"
        :key="tab.name"
        :class="{ active: tab.path === $route.path }"
        @click="tabStore.gotoTab(tabsKey, tab)"
      >
        <span position="bottom">{{ tab.name }}</span>
        <span class="close" @click.stop="tabStore.removeTab(tabsKey, tab.path)" tooltip="关闭标签页" position="bottom">
          ×
        </span>
      </div>
      <div class="item" @click="tabStore.clearTab(tabsKey)" tooltip="清空标签页" position="bottom">
        <Icon name="clear" />
      </div>
    </nav>
    <nav>
      <router-link to="/">首页</router-link>
    </nav>
  </header>
</template>
