<script lang="ts" setup>
import { reactive } from 'vue';
import he from 'he';

/** 页面数据 */
const form = reactive({
    encodeOptions: {
        useNamedReferences: true,
        decimal: false,
        encodeEverything: false,
        strict: false,
        allowUnsafeSymbols: false,
    },
    decodeOptions: {
        isAttributeValue: false,
        strict: false,
    },
    origin: '',
    cipher: '',
    encodeMsg: '',
    decodeMsg: '',
});

type EncodeOptionsKey = keyof typeof form.encodeOptions;

/**
 * 编码
 */
function encode() {
    try {
        form.cipher = he.encode(form.origin, form.encodeOptions);
        form.encodeMsg = '';
    } catch {
        form.cipher = '';
        form.encodeMsg = '编码错误';
    }
}

/**
 * 解码
 */
function decode() {
    try {
        form.origin = he.decode(form.cipher, form.decodeOptions);
        form.decodeMsg = '';
    } catch {
        form.origin = '';
        form.decodeMsg = '解码错误';
    }
}

/**
 * 冲突
 * @param optsKey options key
 * @param cancelKey cancel key
 */
function encodeConflict(optsKey?: EncodeOptionsKey, cancelKey?: EncodeOptionsKey) {
    if (optsKey && cancelKey && form.encodeOptions[optsKey]) {
        form.encodeOptions[cancelKey] = false;
    }
    encode();
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
        <div class="form">
            <FormCheckbox
                v-model="form.encodeOptions.useNamedReferences"
                label="使用命名引用"
                tooltip="&copy;：&amp;#xA9; -> &amp;copy;"
                @change="encode"
            />
            <FormCheckbox
                v-model="form.encodeOptions.decimal"
                label="使用十进制"
                tooltip="&copy;：&amp;#xA9; -> &amp;#169;"
                @change="encode"
            />
            <FormCheckbox
                v-model="form.encodeOptions.encodeEverything"
                label="编码所有字符"
                tooltip="对输入字符串中的每个符号进行编码"
                @change="encodeConflict('encodeEverything', 'allowUnsafeSymbols')"
            />
            <FormCheckbox
                v-model="form.encodeOptions.strict"
                label="编码时校验"
                tooltip="解析错误会抛出异常"
                @change="encode()"
            />
            <FormCheckbox
                v-model="form.encodeOptions.allowUnsafeSymbols"
                label="允许编码不安全字符"
                tooltip="比如：&amp;, &lt;, &gt;, &quot;, ', &grave;"
                @change="encodeConflict('allowUnsafeSymbols', 'encodeEverything')"
            />
            <div class="separate"></div>
            <FormCheckbox
                v-model="form.decodeOptions.isAttributeValue"
                label="&后作为属性值"
                tooltip="比如：foo&ampbar 会保持原样解码"
                @change="decode"
            />
            <FormCheckbox
                v-model="form.decodeOptions.strict"
                label="解码时校验"
                tooltip="解析错误会抛出异常"
                @change="decode"
            />
        </div>
        <div class="actions">
            <div class="input">
                <BtnCopy :text="form.origin" />
                <BtnIcon icon="clear" @click="clearForm" />
                <span class="desc">he.encode('原文', options)</span>
                <span class="msg">{{ form.encodeMsg }}</span>
            </div>
            <div class="output">
                <BtnCopy :text="form.cipher" />
                <BtnIcon icon="clear" @click="clearForm" />
                <span class="desc">he.decode('密文')</span>
                <span class="msg">{{ form.decodeMsg }}</span>
            </div>
        </div>
        <div class="content">
            <Editor class="input" v-model="form.origin" placeholder="原文" @change="encode" autofocus />
            <Editor class="output" v-model="form.cipher" placeholder="密文" @change="decode" />
        </div>
    </div>
</template>
