<script lang="ts" setup>
import { computed } from 'vue';
import { Codemirror } from 'vue-codemirror';
import { basicSetup, EditorView } from 'codemirror';
import { keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { oneDark } from '@codemirror/theme-one-dark';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { php } from '@codemirror/lang-php';
import { css } from '@codemirror/lang-css';
import { useDarkModeStore } from '@/store';

const store = useDarkModeStore();

const languages = {
    json: json(),
    html: html(),
    javascript: javascript(),
    php: php(),
    css: css(),
};

const props = defineProps({
    /** 绑定值 */
    modelValue: String,
    /** 语言 */
    language: String,
    /** 占位 */
    placeholder: String,
    /** 自动聚焦 */
    autofocus: Boolean,
    /** 禁止编辑 */
    disabled: Boolean,
    /** tab 大小 */
    tabSize: { type: Number, default: 4 },
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'change', value: string): void;
}>();

// 扩展
const extensions = computed(() => {
    const result = [basicSetup, keymap.of([indentWithTab]), EditorView.lineWrapping];
    if (props.language && props.language in languages) {
        result.push(languages[props.language as keyof typeof languages]);
    }
    if (store.darkModeOn) {
        result.push(oneDark);
    }
    return result;
});

function handleChange(value: string) {
    emit('update:modelValue', value);
    emit('change', value);
}
</script>

<template>
    <div>
        <Codemirror
            :style="{ backgroundColor: 'var(--bg-0) !important' }"
            :model-value="props.modelValue"
            :extensions="extensions"
            :placeholder="placeholder"
            :autofocus="props.autofocus"
            :disabled="props.disabled"
            :line-wrapping="true"
            :tab-size="props.tabSize"
            @change="handleChange"
        />
    </div>
</template>
