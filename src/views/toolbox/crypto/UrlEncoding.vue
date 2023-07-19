<script lang="ts" setup>
import useAutofocus from '@/hooks/useAutofocus';
import { reactive } from 'vue';

const inputRef = useAutofocus();
/** 页面数据 */
const form = reactive({
    origin: '',
    cipher: '',
});

/**
 * 编码
 */
function encode() {
    form.cipher = encodeURIComponent(form.origin);
}

/**
 * 解码
 */
function decode() {
    form.origin = decodeURIComponent(form.cipher);
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
    <div class="url-encoding">
        <div class="actions">
            <div class="input">
                <BtnCopy :text="form.origin" />
                <BtnIcon icon="clear" @click="clearForm" />
                <span class="desc">decodeURIComponent('密文')</span>
            </div>
            <div class="output">
                <BtnCopy :text="form.cipher" />
                <BtnIcon icon="clear" @click="clearForm" />
                <span class="desc">encodeURIComponent('原文')</span>
            </div>
        </div>
        <div class="content">
            <textarea v-model="form.origin" class="input" ref="inputRef" placeholder="原文" @input="encode"></textarea>
            <textarea v-model="form.cipher" class="input" placeholder="密文" @input="decode"></textarea>
        </div>
    </div>
</template>
