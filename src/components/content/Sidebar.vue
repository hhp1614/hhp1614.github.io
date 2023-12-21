<script lang="ts" setup>
import router from '@/router';
import toolbox from '@/router/toolbox';
import admin from '@/router/admin';
import playground from '@/router/playground';
import { useTabStore } from '@/store';

const tabStore = useTabStore();

const list: { [key in keyof typeof tabStore.tabs]: Pages } = {
    toolbox,
    admin,
    playground,
};

const props = defineProps<{
    /** Tabs 的 key */
    tabsKey: keyof typeof tabStore.tabs;
}>();

/**
 * 切换视图
 * @param path 路由路径
 * @param name 标签名
 */
function switchView(path: string, name: string) {
    tabStore.gotoTab(props.tabsKey, { path, name });
    router.push(path);
}
</script>

<template>
    <aside>
        <div class="item" v-for="item in list[tabsKey]" :key="item.name">
            {{ item.meta.title }}
            <template v-if="item.children.length">
                <div
                    class="child"
                    v-for="child in item.children"
                    :key="child.name"
                    :class="{ active: child.path === $route.path }"
                    @click="switchView(child.path, child.meta.title)"
                    :tooltip="child.meta.desc"
                    position="right"
                >
                    {{ child.meta!.title }}
                </div>
            </template>
        </div>
    </aside>
</template>
