<script lang="ts" setup>
import useAutofocus from '@/hooks/useAutofocus';
import { reactive } from 'vue';

const inputRef = useAutofocus();
/** 页面数据 */
const form = reactive({
    origin: '',
    cipher: '',
    msg: '',
});

/**
 * 编码
 */
function encode() {
    form.cipher = window.btoa(form.origin);
    form.msg = '';
}

/**
 * 解码
 */
function decode() {
    try {
        form.origin = window.atob(form.cipher);
        form.msg = '';
    } catch {
        form.msg = '要解码的字符串未正确编码';
    }
}

/**
 * 清空表单
 */
function clearForm() {
    form.origin = '';
    form.cipher = '';
    form.msg = '';
}
</script>

<template>
    <div class="base64">
        <div class="actions">
            <div class="input">
                <BtnCopy :text="form.origin" />
                <BtnIcon icon="clear" @click="clearForm" />
                <span class="desc">window.btoa('密文')</span>
            </div>
            <div class="output">
                <BtnCopy :text="form.cipher" />
                <BtnIcon icon="clear" @click="clearForm" />
                <span class="desc">window.atob('原文')</span>
                <span class="msg">{{ form.msg }}</span>
            </div>
        </div>
        <div class="content">
            <textarea v-model="form.origin" class="input" ref="inputRef" placeholder="原文" @input="encode"></textarea>
            <textarea v-model="form.cipher" class="input" placeholder="密文" @input="decode"></textarea>
        </div>
    </div>
</template>
