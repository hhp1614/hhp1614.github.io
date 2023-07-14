<script lang="ts" setup>
import toolbox from '@/router/toolbox';
import router from '@/router';
import { useTabStore } from '@/store';

/**
 * 切换视图
 * @param path 路由路径
 * @param name 标签名
 */
function switchView(path: string, name: string) {
    const tabStore = useTabStore();
    tabStore.gotoTab({ path, name });
    router.push(path);
}
</script>

<template>
    <aside>
        <div class="item" v-for="item in toolbox" :key="item.name">
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
