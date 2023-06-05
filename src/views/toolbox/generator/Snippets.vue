<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import jsonHighlight from '@/utils/syntax/jsonHighlight';
import useAutoFocus from '@/hooks/useAutofocus';

const inputRef = useAutoFocus();
/** scope 选择列表 */
const list = ref([
    { label: 'HTML', value: 'html' },
    { label: 'JS', value: 'js' },
    { label: 'PHP', value: 'php' },
]);

/** 页面数据 */
const json = reactive({
    name: '',
    prefix: '',
    desc: '',
    body: '',
    scope: '',
});

/** 输出数据 */
const output = computed(() => {
    // 替换 $ 为 \$
    const lines = json.body.split('\n').map(line => line.replace(/\$/g, '\\$'));
    const result = {
        [json.name]: {
            scope: json.scope,
            prefix: json.prefix,
            description: json.desc,
            body: lines.length === 1 ? lines.pop() : lines, // 只有一行时，取最后一行
        },
    };
    return JSON.stringify(result, null, 4);
});

/** JSON 语法高亮 */
const syntaxHighlight = computed(() => jsonHighlight(output.value));

/**
 * 处理粘贴
 * @param e 剪贴板事件对象
 */
function handlePaste(e: ClipboardEvent) {
    let paste = e.clipboardData?.getData('text') ?? '';
    let tempSpace = 0;
    // 行首空格处理
    const lines = paste.split(/\r\n|\r|\n/g).map((line, i) => {
        if (i === 0) {
            const [space] = line.match(/^ +/) || [''];
            tempSpace = space.length;
        }
        return line.length >= tempSpace ? line.slice(tempSpace) : line;
    });
    json.body = lines.join('\n');
}

/**
 * 清空表单
 */
function resetForm() {
    json.name = '';
    json.prefix = '';
    json.desc = '';
    json.scope = '';
}
</script>

<template>
    <div class="snippets">
        <div class="form">
            <FormInput v-model="json.name" label="name" placeholder="name" clearable />
            <FormSelect v-model="json.scope" :list="list" label="scope" placeholder="scope" clearable />
            <FormInput v-model="json.prefix" label="prefix" placeholder="prefix" clearable />
            <FormInput v-model="json.desc" label="desc" placeholder="desc" clearable />
            <Clear @click="resetForm" />
        </div>
        <div class="actions">
            <div class="input">
                <Copy :text="json.body" />
                <Clear @click="json.body = ''" />
            </div>
            <div class="output">
                <Copy :text="output" />
            </div>
        </div>
        <div class="content">
            <textarea v-model="json.body" class="input" ref="inputRef" placeholder="代码片段" @paste.prevent="handlePaste($event)"></textarea>
            <div class="output">
                <div class="code-text" v-for="line in syntaxHighlight.split('\n')" v-html="line"></div>
            </div>
        </div>
    </div>
</template>
