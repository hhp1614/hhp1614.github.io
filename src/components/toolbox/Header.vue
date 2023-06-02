<script lang="ts" setup>
import router from '@/router';
import { useTabStore } from '@/store';

const tabStore = useTabStore();

tabStore.gotoTab({
    path: router.currentRoute.value.path,
    name: router.currentRoute.value.meta.title as string,
});
</script>

<template>
    <header>
        <nav class="tabs">
            <div class="item" v-for="tab in tabStore.tabs" :key="tab.name" :class="{ active: tab.path === $route.path }" @click="tabStore.gotoTab(tab)">
                <span position="bottom">{{ tab.name }}</span>
                <span class="close" @click.stop="tabStore.removeTab(tab.path)" tooltip="关闭标签页" position="bottom">×</span>
            </div>
            <div class="item" @click="tabStore.clearTab" tooltip="清空标签页" position="bottom">
                <Icon name="clear" />
            </div>
        </nav>
        <nav>
            <router-link to="/">首页</router-link>
        </nav>
    </header>
</template>
