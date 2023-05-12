<script lang="ts" setup>
import { onMounted } from 'vue';
import { useDarkModeStore } from './store';

function handleDarkMode(e: MediaQueryList | MediaQueryListEvent) {
    const store = useDarkModeStore();
    store.setDarkModeOn(e.matches);
    const favicon: HTMLLinkElement = document.querySelector('link[rel=icon]')!;
    favicon.href = store.darkModeOn ? '/avatar-dark.svg' : '/avatar.svg';
}

onMounted(() => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark');
    handleDarkMode(darkMode);
    darkMode.addEventListener('change', handleDarkMode);
});
</script>

<template>
    <router-view />
</template>
