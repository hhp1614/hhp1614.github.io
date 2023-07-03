<script lang="ts" setup>
import { computed, reactive } from 'vue';
import jsonHighlight from '@/utils/syntax/jsonHighlight';
import useAutoFocus from '@/hooks/useAutofocus';

const inputRef = useAutoFocus();
/** scope 选择列表 */
const list = [{ value: 'html' }, { value: 'js' }, { value: 'php' }];

/** 页面数据 */
const json = reactive({
    name: '',
    prefix: '',
    desc: '',
    body: '',
    scope: 'html',
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
 * 清空表单
 */
function clearForm() {
    json.name = '';
    json.prefix = '';
    json.desc = '';
    json.scope = 'html';
}
</script>

<template>
    <div class="snippets">
        <div class="form">
            <FormInput v-model="json.name" label="name" placeholder="name" clearable />
            <FormSelect v-model="json.scope" :list="list" label="scope" placeholder="scope" clearable />
            <FormInput v-model="json.prefix" label="prefix" placeholder="prefix" clearable />
            <FormInput v-model="json.desc" label="desc" placeholder="desc" clearable />
            <BtnIcon icon="clear" @click="clearForm" />
        </div>
        <div class="actions">
            <div class="input">
                <BtnCopy :text="json.body" />
                <BtnIcon class="item" icon="clear" @click="json.body = ''" />
            </div>
            <div class="output">
                <BtnCopy :text="output" />
            </div>
        </div>
        <div class="content">
            <textarea v-model="json.body" class="input" ref="inputRef" placeholder="代码片段"></textarea>
            <div class="output">
                <div class="code-text" v-for="line in syntaxHighlight.split('\n')" v-html="line"></div>
            </div>
        </div>
    </div>
</template>
