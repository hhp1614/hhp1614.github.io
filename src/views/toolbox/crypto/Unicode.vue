<script lang="ts" setup>
/** 类型 */
type Type = 'UTF-8' | 'UTF-16';

/** 占位符 */
const re = /{}/g;

const defaultType: Type = 'UTF-8';

/** 格式 */
const format = new Map([
    ['UTF-8', '\\x{}'],
    ['UTF-16', '\\u{}'],
]);

/** radio 列表 */
const list: { value: Type; desc: string }[] = [
    { value: 'UTF-8', desc: format.get('UTF-8')!.replace(re, 'XX') },
    { value: 'UTF-16', desc: format.get('UTF-16')!.replace(re, 'XXXX') },
];

/** 页面数据 */
const form = reactive({
    /** 类型 */
    type: defaultType as Type,
    /** 格式 */
    format: format.get(defaultType)!,
    /** 原文 */
    source: '',
    /** 结果 */
    result: '',
});

/** 类型 => 编码函数 */
const encodeMap = new Map<Type, (text: string) => string[]>([
    ['UTF-8', encodeUtf8],
    ['UTF-16', encodeUtf16],
]);

/** 类型 => 解码函数 */
const decodeMap = new Map<Type, (data: string[]) => string>([
    ['UTF-8', decodeUtf8],
    ['UTF-16', decodeUtf16],
]);

/**
 * 编码
 */
function encode() {
    const enc = encodeMap.get(form.type)!;
    const data = enc(form.source);
    form.result = data.map(x => form.format.replace(re, x)).join('');
}

/**
 * 解码
 */
function decode() {
    const reBase = form.format.replace('\\', '\\\\');
    const reSplit = new RegExp(reBase.replace('{}', '(\\w+)'), 'g');
    const reRemove = new RegExp(reBase.replace('{}', '|'), 'g');
    const data = form.result.match(reSplit)?.map(x => x.replace(reRemove, '')) || [];
    const dec = decodeMap.get(form.type)!;
    form.source = dec(data);
}

/**
 * UTF-8 编码
 * @param text 文本
 */
function encodeUtf8(text: string) {
    return Array.from(new TextEncoder().encode(text)).map(x => x.toString(16));
}

/**
 * UTF-8 解码
 * @param data 数组
 */
function decodeUtf8(data: string[]) {
    return new TextDecoder().decode(new Uint8Array(data.map(x => parseInt(x, 16))));
}

/**
 * UTF-16 编码
 * @param text 文本
 */
function encodeUtf16(text: string) {
    let res = [];
    for (let i = 0; i < text.length; i++) {
        res.push(text.charCodeAt(i).toString(16).padStart(4, '0'));
    }
    return res;
}

/**
 * UTF-16 解码
 * @param data 数组
 */
function decodeUtf16(data: string[]) {
    return String.fromCodePoint(...data.map(x => parseInt(x, 16)));
}

/**
 * 切换类型
 */
function changeType() {
    form.source = '';
    form.result = '';
    form.format = format.get(form.type)!;
}
</script>

<template>
    <div class="unicode">
        <div class="form">
            <FormRadio v-model="form.type" :list="list" @change="changeType" />
        </div>
        <div class="actions">
            <div class="input">
                <BtnCopy :text="form.source" />
                <BtnIcon icon="clear" @click="form.source = ''" />
            </div>
            <div class="output">
                <BtnCopy :text="form.result" />
                <BtnIcon icon="clear" @click="form.result = ''" />
            </div>
        </div>
        <div class="content">
            <Editor class="input" v-model="form.source" placeholder="原文" @change="encode" autofocus />
            <Editor class="output" v-model="form.result" :placeholder="`${form.type} 编码文本`" @change="decode" />
        </div>
    </div>
</template>
