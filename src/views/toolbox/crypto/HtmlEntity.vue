<script lang="ts" setup>
import { reactive } from 'vue';
import he from 'he';

/** 页面数据 */
const form = reactive({
    origin: '',
    cipher: '',
});

/**
 * 编码
 */
function encode() {
    form.cipher = he.encode(form.origin, { useNamedReferences: true });
}

/**
 * 解码
 */
function decode() {
    form.origin = he.decode(form.cipher);
}

/**
 * 清空表单
 */
function clearForm() {
    form.origin = '';
    form.cipher = '';
}
</script>

<template>
    <div class="html-entity">
        <div class="actions">
            <div class="input">
                <BtnCopy :text="form.origin" />
                <BtnIcon icon="clear" @click="clearForm" />
                <span class="desc">he.encode('原文', { useNamedReferences: true })</span>
            </div>
            <div class="output">
                <BtnCopy :text="form.cipher" />
                <BtnIcon icon="clear" @click="clearForm" />
                <span class="desc">he.decode('密文')</span>
            </div>
        </div>
        <div class="content">
            <Editor class="input" v-model="form.origin" placeholder="原文" @change="encode" autofocus />
            <Editor class="output" v-model="form.cipher" placeholder="密文" @change="decode" />
        </div>
    </div>
</template>
