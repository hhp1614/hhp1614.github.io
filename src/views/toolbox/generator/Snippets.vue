<script lang="ts" setup>
import { ref } from 'vue';

const list = ref([
    { label: 'HTML', value: 'html' },
    { label: 'JS', value: 'js' },
    { label: 'PHP', value: 'php' },
]);
const name = ref('');
const prefix = ref('');
const desc = ref('');
const body = ref('');
const scope = ref('');
</script>

<template>
    <div class="snippets">
        <div class="form">
            <FormInput v-model="name" label="name" placeholder="name" clearable />
            <FormSelect v-model="scope" :list="list" label="scope" placeholder="scope" />
            <FormInput v-model="prefix" label="prefix" placeholder="prefix" clearable />
            <FormInput v-model="desc" label="desc" placeholder="desc" clearable />
        </div>
        <div class="actions">
            <div class="input">
                <Copy text="inputRef.value" />
            </div>
            <div class="output">
                <Copy text="inputRef.value" />
            </div>
        </div>
        <div class="content">
            <textarea v-model="body" class="input" ref="inputRef" placeholder="代码片段"></textarea>
            <div class="output">output</div>
        </div>
    </div>
</template>
