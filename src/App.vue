<script lang="ts" setup>
import { useDarkModeStore } from '@/store';

/**
 * 深色模式设置
 * @param e 事件对象
 */
function handleDarkMode(e: MediaQueryList | MediaQueryListEvent) {
    const store = useDarkModeStore();
    store.setDarkModeOn(e.matches);
}

const darkMode = window.matchMedia('(prefers-color-scheme: dark');
handleDarkMode(darkMode);
// 监听深色模式切换
darkMode.addEventListener('change', handleDarkMode);
</script>

<template>
    <router-view class="layout" />
</template>
