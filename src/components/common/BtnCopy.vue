<script lang="ts" setup>
import { copyText } from '@/utils/copy';
import BtnIcon from './BtnIcon.vue';

defineProps({
    text: { type: String, default: '' },
});
</script>

<template>
    <BtnIcon icon="copy" @click="copyText(text)" />
</template>
