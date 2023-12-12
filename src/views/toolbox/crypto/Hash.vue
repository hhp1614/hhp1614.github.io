<script lang="ts" setup>
import { computed, reactive } from 'vue';
import CryptoJS from 'crypto-js';

/** 页面数据 */
const form = reactive({
    secret: '',
    text: '',
});

/** 算法 */
const list = computed(() => {
    return [
        { name: 'MD5', value: CryptoJS.MD5(form.text).toString() },
        { name: 'SHA1', value: CryptoJS.SHA1(form.text).toString() },
        { name: 'SHA256', value: CryptoJS.SHA256(form.text).toString() },
        { name: 'SHA224', value: CryptoJS.SHA224(form.text).toString() },
        { name: 'SHA512', value: CryptoJS.SHA512(form.text).toString() },
        { name: 'SHA384', value: CryptoJS.SHA384(form.text).toString() },
        { name: 'SHA3', value: CryptoJS.SHA3(form.text).toString() },
        { name: 'RIPEMD160', value: CryptoJS.RIPEMD160(form.text).toString() },
    ];
});

/** Hmac 算法 */
const hmac = computed(() => {
    return [
        { name: 'HmacMD5', value: CryptoJS.HmacMD5(form.text, form.secret).toString() },
        { name: 'HmacSHA1', value: CryptoJS.HmacSHA1(form.text, form.secret).toString() },
        { name: 'HmacSHA256', value: CryptoJS.HmacSHA256(form.text, form.secret).toString() },
        { name: 'HmacSHA224', value: CryptoJS.HmacSHA224(form.text, form.secret).toString() },
        { name: 'HmacSHA512', value: CryptoJS.HmacSHA512(form.text, form.secret).toString() },
        { name: 'HmacSHA384', value: CryptoJS.HmacSHA384(form.text, form.secret).toString() },
        { name: 'HmacSHA3', value: CryptoJS.HmacSHA3(form.text, form.secret).toString() },
        { name: 'HmacRIPEMD160', value: CryptoJS.HmacRIPEMD160(form.text, form.secret).toString() },
    ];
});
</script>

<template>
    <div class="hash">
        <div class="form">
            <BtnCopy :text="form.text" />
            <FormInput v-model="form.secret" class="full" label="密钥" clearable />
        </div>
        <div class="content">
            <Editor class="input" v-model="form.text" placeholder="原文" autofocus />
            <div class="output">
                <div class="left">
                    <div class="item" v-for="item in list" :key="item.name">
                        <div class="item-title">
                            <span :tooltip="`CryptoJS.${item.name}('原文')`">{{ item.name }}</span>
                            <BtnCopy :text="item.value" />
                        </div>
                        <div class="item-value">{{ item.value }}</div>
                    </div>
                </div>
                <div class="right">
                    <div class="item" v-for="item in hmac" :key="item.name">
                        <div class="item-title">
                            <span :tooltip="`CryptoJS.${item.name}('原文', '密钥')`">{{ item.name }}</span>
                            <BtnCopy :text="item.value" />
                        </div>
                        <div class="item-value">{{ item.value }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
