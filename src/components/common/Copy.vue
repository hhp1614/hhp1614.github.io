<script lang="ts" setup>
import { copyText } from '@/utils/copy';

defineProps({
    text: { type: String, default: '' },
});
</script>

<template>
    <button @click="copyText(text)" tooltip="复制">
        <Icon name="copy" />
    </button>
</template>
