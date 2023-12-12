<script lang="ts" setup>
import { reactive } from 'vue';

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
    form.cipher = btoa(unescape(encodeURIComponent(form.origin)));
    form.msg = '';
}

/**
 * 解码
 */
function decode() {
    try {
        form.origin = decodeURIComponent(escape(atob(form.cipher)));
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
                <span class="desc">btoa(unescape(encodeURIComponent('原文')))</span>
            </div>
            <div class="output">
                <BtnCopy :text="form.cipher" />
                <BtnIcon icon="clear" @click="clearForm" />
                <span class="desc">decodeURIComponent(escape(atob('密文')))</span>
                <span class="msg">{{ form.msg }}</span>
            </div>
        </div>
        <div class="content">
            <Editor class="input" v-model="form.origin" @change="encode" placeholder="原文" autofocus />
            <Editor class="output" v-model="form.cipher" @change="decode" placeholder="密文" />
        </div>
    </div>
</template>
