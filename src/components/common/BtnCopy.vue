<script lang="ts" setup>
import { copyText } from '@/utils/copy'

defineProps({
  /** 需要复制的文本 */
  text: { type: String, default: '' },
})
</script>

<template>
  <BtnIcon icon="copy" @click="copyText(text)" />
</template>
