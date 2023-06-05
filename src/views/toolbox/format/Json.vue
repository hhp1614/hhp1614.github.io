<script lang="ts" setup>
import { computed } from 'vue';
import { useJsonStore } from '@/store';
import jsonHighlight from '@/utils/syntax/jsonHighlight';
import useAutofocus from '@/hooks/useAutofocus';

const inputRef = useAutofocus();
const jsonStore = useJsonStore();

/**
 * 格式化 JSON 字符串
 * @param json JSON 字符串
 */
function formatJson(json: string, compress = false) {
    if (!json) return '';
    try {
        return JSON.stringify(JSON.parse(json), null, compress ? 0 : 4);
    } catch {
        return 'Error: is not valid JSON';
    }
}

/** JSON 语法高亮 */
const syntaxHighlight = computed(() => jsonHighlight(formatJson(jsonStore.activeTabText)));
</script>

<template>
    <div class="json has-tabs">
        <nav class="tabs">
            <div class="item" v-for="tab in jsonStore.tabs" :key="tab.id" :class="{ active: tab.id === jsonStore.activeTabId }">
                <span
                    class="title"
                    @blur="e => jsonStore.changeTabName(tab.id, tab.title, (e.target as HTMLSpanElement).innerText)"
                    @keydown.enter="$event => ($event.target as HTMLInputElement).blur()"
                    @click="jsonStore.changeTab(tab.id)"
                    contenteditable
                >
                    {{ tab.title }}
                </span>
                <span class="close" @click.stop="jsonStore.removeTab(tab.id)" tooltip="关闭标签">×</span>
            </div>
            <div class="item" @click="jsonStore.addTab(inputRef!)" tooltip="添加标签">
                <Icon name="plus" />
            </div>
            <div class="item" @click="jsonStore.clearTab(inputRef!)" tooltip="清空标签">
                <Icon name="clear" />
            </div>
        </nav>
        <div class="actions">
            <div class="input">
                <Copy :text="jsonStore.activeTabText" />
                <button @click="jsonStore.changeTabText('')" tooltip="清空"><Icon name="clear" /></button>
                <button @click="jsonStore.changeTabText(formatJson(jsonStore.activeTabText))">格式化</button>
                <button @click="jsonStore.changeTabText(formatJson(jsonStore.activeTabText, true))">压缩</button>
            </div>
            <div class="output">
                <Copy :text="formatJson(jsonStore.activeTabText)" />
            </div>
        </div>
        <div class="content">
            <textarea
                class="input"
                ref="inputRef"
                :value="jsonStore.activeTabText"
                @input="e => jsonStore.changeTabText((e.target as HTMLTextAreaElement).value)"
            ></textarea>
            <div class="output">
                <div class="code-text" v-for="line in syntaxHighlight.split('\n')" v-html="line"></div>
            </div>
        </div>
    </div>
</template>
