<script lang="ts" setup>
import Footer from '@/components/Footer.vue'
import { onMounted } from 'vue'
import { useDarkModeStore } from '@store'

/**
 * 根据深色模式设置网站 favicon
 * @param e 事件对象
 */
function handleDarkMode(e: MediaQueryList | MediaQueryListEvent) {
  const store = useDarkModeStore()
  store.setDarkModeOn(e.matches)
  const favicon: HTMLLinkElement = document.querySelector('link[rel=icon]')!
  favicon.href = store.darkModeOn ? '/avatar-dark.svg' : '/avatar.svg'
}

onMounted(() => {
  const darkMode = window.matchMedia('(prefers-color-scheme: dark')
  handleDarkMode(darkMode)
  // 监听深色模式切换
  darkMode.addEventListener('change', handleDarkMode)
})
</script>

<template>
  <router-view />
  <Footer />
</template>
