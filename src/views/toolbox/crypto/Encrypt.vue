<script lang="ts" setup>
import { reactive } from 'vue';
import CryptoJS from 'crypto-js';

/** 加密方式 */
type Key = 'AES' | 'DES' | 'RC4' | 'RC4Drop' | 'Rabbit' | 'RabbitLegacy' | 'TripleDES';

/** 加密方式列表 */
const list: { value: Key; }[] = [
    { value: 'AES' },
    { value: 'DES' },
    { value: 'RC4' },
    { value: 'RC4Drop' },
    { value: 'Rabbit' },
    { value: 'RabbitLegacy' },
    { value: 'TripleDES' },
];

/** 页面数据 */
const form = reactive({
    type: 'AES',
    secret: '',
    origin: '',
    cipher: '',
    msg: '',
});

/**
 * 加密
 */
function encrypt() {
    form.cipher = CryptoJS[form.type as Key].encrypt(form.origin, form.secret).toString();
    form.msg = '';
}

/**
 * 解密
 */
function decrypt() {
    const bytes = CryptoJS[form.type as Key].decrypt(form.cipher, form.secret);
    if (bytes.sigBytes >= 0) {
        form.origin = CryptoJS.enc.Utf8.stringify(bytes);
        form.msg = '';
    } else {
        form.origin = '';
        form.msg = '解密失败，信息有误';
    }
}
</script>

<template>
    <div class="encrypt">
        <div class="form">
            <FormSelect v-model="form.type" :list="list" label="加密方式" />
            <FormInput v-model="form.secret" class="full" label="密钥" clearable />
        </div>
        <div class="actions">
            <div class="input">
                <BtnCopy :text="form.origin" />
                <BtnIcon icon="clear" @click="form.origin = ''" />
                <button @click="encrypt" :tooltip="`CryptoJS.${form.type}.encrypt('原文', '密钥').toString()`">
                    加密
                </button>
            </div>
            <div class="output">
                <BtnCopy :text="form.cipher" />
                <BtnIcon icon="clear" @click="form.cipher = ''" />
                <button @click="decrypt"
                    :tooltip="`CryptoJS.enc.Utf8.stringify(CryptoJS.${form.type}.decrypt('密文', '密钥'))`">
                    解密
                </button>
                <span class="msg">{{ form.msg }}</span>
            </div>
        </div>
        <div class="content">
            <textarea v-model="form.origin" class="input" ref="inputRef" placeholder="原文"></textarea>
            <textarea v-model="form.cipher" class="input" placeholder="密文"></textarea>
        </div>
    </div>
</template>
