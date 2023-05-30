<script lang="ts" setup>
import router from '@/router';
import { useTabStore } from '@store';

const tabStore = useTabStore();

tabStore.gotoTab({
    path: router.currentRoute.value.path,
    name: router.currentRoute.value.meta.title as string,
});
</script>

<template>
    <header>
        <nav class="tabs">
            <template v-if="$route.path.startsWith('/toolbox')">
                <div class="item" v-for="tab in tabStore.tabs" :key="tab.name" :class="{ active: tab.path === $route.path }" @click="tabStore.gotoTab(tab)">
                    <span>{{ tab.name }}</span>
                    <span class="close" @click.stop="tabStore.removeTab(tab)">×</span>
                </div>
            </template>
        </nav>
        <nav>
            <router-link v-if="$route.path.startsWith('/toolbox')" to="/">首页</router-link>
            <router-link v-else :to="tabStore.active.path || '/toolbox'">工具箱</router-link>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    gap: 1em;
    padding: 0 0.5em;
    line-height: 2;

    nav {
        display: flex;
        gap: 1em;
    }

    .tabs {
        .item {
            display: flex;
            align-items: center;
            gap: 0.2em;
            position: relative;
            color: var(--color-3);
            cursor: pointer;
            transition: var(--transition);
            user-select: none;

            .close {
                $size: 1.2em;
                width: $size;
                height: $size;
                line-height: $size;
                text-align: center;
                border-radius: 50%;

                &:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                }
            }

            &:hover {
                color: var(--theme-color);
            }

            &.active {
                color: var(--theme-color);

                &::after {
                    content: '';
                    display: block;
                    width: 100%;
                    height: 2px;
                    background-color: var(--theme-color);
                    position: absolute;
                    bottom: 0;
                    left: 0;
                }
            }
        }
    }
}
</style>
