<script lang="ts" setup>
import { toolboxPages } from '@/router/pages';
import router from '@/router';
import { useTabStore } from '@/store';

function switchView(path: string, name: string) {
    const tabStore = useTabStore();
    tabStore.gotoTab({ path, name });
    router.push(path);
}
</script>

<template>
    <aside>
        <div class="item" v-for="item in toolboxPages" :key="item.name">
            {{ item.meta.title }}
            <template v-if="item.children.length">
                <div
                    class="child"
                    v-for="child in item.children"
                    :key="child.name"
                    :class="{ active: child.path === $route.path }"
                    @click="switchView(child.path, child.meta.title)"
                >
                    {{ child.meta!.title }}
                </div>
            </template>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
aside {
    padding: 0.5rem;
    min-width: 20vmin;

    .item {
        color: var(--color-3);
        margin-bottom: 0.5rem;
        line-height: 1.5;

        .child {
            display: block;
            padding-left: 1em;
            cursor: pointer;
            transition: var(--transition);
            color: var(--color-2);

            &:hover,
            &.active {
                color: var(--theme-color);
            }
        }
    }
}
</style>
