<script lang="ts" setup>
import { computed } from 'vue';
import Icon from './Icon.vue';

const prop = defineProps({
    /** 图标 */
    icon: { type: String, required: true },
    /** 提示 */
    tooltip: { type: String, default: '' },
});

/** 图标 <=> 提示 */
const map = new Map([
    ['copy', '复制'],
    ['clear', '清空'],
]);

/** 默认提示 */
const defTooltip = computed(() => map.get(prop.icon) ?? '');
</script>

<template>
    <button :tooltip="tooltip || defTooltip">
        <Icon :name="icon" />
    </button>
</template>
