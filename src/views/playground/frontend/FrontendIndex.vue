<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { generateDevtool, generatePage } from './generate';

const code = reactive({
    html: '',
    javascript: '',
    css: '',
});
const output = reactive({
    html: '',
    javascript: '',
    css: '',
});

const preview = ref<HTMLElement>();
const previewIframe = ref<HTMLIFrameElement>();
const devtoolsIframe = ref<HTMLIFrameElement>();
const devtoolsLoaded = ref(false);
const pageUrlBlob = ref('');
const devtoolsUrlBlob = ref('');
const iframeHeight = ref(0.625);

const pageUrl = computed(() => {
    const html = generatePage(output);
    pageUrlBlob.value = URL.createObjectURL(new Blob([html], { type: 'text/html' }));
    // setTimeout(() => URL.revokeObjectURL(url), 10);
    return pageUrlBlob.value;
});

const devtoolsUrl = computed(() => {
    const html = generateDevtool();
    devtoolsUrlBlob.value = URL.createObjectURL(new Blob([html], { type: 'text/html' }));
    // setTimeout(() => URL.revokeObjectURL(rowUrl), 10);
    return `${devtoolsUrlBlob.value}#?embedded=${encodeURIComponent(location.origin)}`;
});

window.addEventListener('message', (event: MessageEvent) => {
    if (previewIframe.value?.contentWindow && event.source === previewIframe.value?.contentWindow) {
        devtoolsIframe.value?.contentWindow?.postMessage(event.data, '*');
    }
    if (event.source === devtoolsIframe.value?.contentWindow) {
        previewIframe.value?.contentWindow!.postMessage({ event: 'DEV', data: event.data }, '*');
    }
});

function previewOnload() {
    URL.revokeObjectURL(pageUrlBlob.value);
    if (devtoolsLoaded.value) previewIframe.value!.contentWindow!.postMessage({ event: 'LOADED' }, '*');
}

function devtoolsOnload() {
    devtoolsLoaded.value = true;
    URL.revokeObjectURL(devtoolsUrlBlob.value);
}

function changeIframeHeight(height: number, y: number) {
    const rect = preview.value.getBoundingClientRect();
    const position = y - rect.top - height / 2;
    const size = preview.value.offsetHeight - height;
    const percent = position / size;
    iframeHeight.value = percent;
}

let timer: number;
watch(code, () => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
        output.css = code.css;
        output.html = code.html;
        output.javascript = code.javascript;
    }, 240);
});

onMounted(() => {
    code.html = '<div class="app">\n    Hello world\n</div>';
    code.css = '.app {\n    color: red;\n}';
    code.javascript = `console.log('Hello world')`;
});
</script>

<template>
    <div class="frontend-index">
        <div class="source">
            <template v-for="key in Object.keys(code)" :key="key">
                <div class="label">{{ key }}</div>
                <Editor class="editor" v-model="code[key as keyof typeof code]" :language="key" />
            </template>
        </div>
        <div class="preview" ref="preview">
            <iframe
                ref="previewIframe"
                :style="{ flex: iframeHeight }"
                :src="pageUrl"
                class="preview-page"
                @load="previewOnload"
                sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
            ></iframe>
            <Resize @resize="({ height, y }) => changeIframeHeight(height, y)" />
            <iframe
                id="devtools"
                ref="devtoolsIframe"
                :style="{ flex: 1 - iframeHeight }"
                :src="devtoolsUrl"
                class="preview-devtools"
                @load="devtoolsOnload"
            ></iframe>
        </div>
    </div>
</template>
