<script lang="ts" setup>
import useAutofocus from '@/hooks/useAutofocus';
import { reactive } from 'vue';

const inputRef = useAutofocus();
const form = reactive({
    origin: '',
    cipher: '',
    msg: '',
});

function originInput() {
    form.cipher = window.btoa(form.origin);
    form.msg = '';
}

function cipherInput() {
    try {
        form.origin = window.atob(form.cipher);
        form.msg = '';
    } catch {
        form.msg = '要解码的字符串未正确编码';
    }
}

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
            <textarea
                v-model="form.origin"
                class="input"
                ref="inputRef"
                placeholder="原文"
                @input="originInput"
            ></textarea>
            <textarea v-model="form.cipher" class="input" placeholder="密文" @input="cipherInput"></textarea>
        </div>
    </div>
</template>
