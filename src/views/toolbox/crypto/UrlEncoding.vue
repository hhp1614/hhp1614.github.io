<script lang="ts" setup>
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
    form.cipher = encodeURIComponent(form.origin);
}

/**
 * 解码
 */
function decode() {
    try {
        form.origin = decodeURIComponent(form.cipher);
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
    <div class="url-encoding">
        <div class="actions">
            <div class="input">
                <BtnCopy :text="form.origin" />
                <BtnIcon icon="clear" @click="clearForm" />
                <span class="desc">encodeURIComponent('原文')</span>
            </div>
            <div class="output">
                <BtnCopy :text="form.cipher" />
                <BtnIcon icon="clear" @click="clearForm" />
                <span class="desc">decodeURIComponent('密文')</span>
                <span class="msg">{{ form.msg }}</span>
            </div>
        </div>
        <div class="content">
            <Editor class="input" v-model="form.origin" placeholder="原文" @change="encode" autofocus />
            <Editor class="output" v-model="form.cipher" placeholder="密文" @change="decode" />
        </div>
    </div>
</template>
