<script lang="ts" setup>
import { computed, reactive } from 'vue';

/** scope 选择列表 */
const list = [{ value: 'html' }, { value: 'javascript' }, { value: 'php' }];

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
            <FormInput v-model="json.name" label="name" clearable />
            <FormSelect v-model="json.scope" :list="list" label="scope" clearable />
            <FormInput v-model="json.prefix" label="prefix" clearable />
            <FormInput v-model="json.desc" label="desc" clearable />
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
            <Editor class="input" v-model="json.body" :language="json.scope" placeholder="代码片段" autofocus />
            <Editor class="output" :model-value="output" language="json" disabled />
        </div>
    </div>
</template>
