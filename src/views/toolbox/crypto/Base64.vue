<script lang="ts" setup>
import useAutofocus from '@/hooks/useAutofocus';
import { ref } from 'vue';

const inputRef = useAutofocus();
const origin = ref('');
const cipher = ref('');
const msg = ref('');

function originInput() {
    cipher.value = window.btoa(origin.value);
    msg.value = '';
}

function cipherInput() {
    try {
        origin.value = window.atob(cipher.value);
        msg.value = '';
    } catch (err) {
        msg.value = '要解码的字符串未正确编码';
    }
}
</script>

<template>
    <div class="base64">
        <div class="actions">
            <div class="input">
                <BtnCopy :text="origin" />
                <BtnIcon icon="clear" @click="origin = cipher = msg = ''" />
            </div>
            <div class="output">
                <BtnCopy :text="cipher" />
                <BtnIcon icon="clear" @click="origin = cipher = msg = ''" />
                <div class="msg">{{ msg }}</div>
            </div>
        </div>
        <div class="content">
            <textarea v-model="origin" class="input" ref="inputRef" placeholder="原文" @input="originInput"></textarea>
            <textarea v-model="cipher" class="input" placeholder="Base64" @input="cipherInput"></textarea>
        </div>
    </div>
</template>
