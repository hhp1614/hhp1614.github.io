<script lang="ts" setup>
defineProps({
    tooltip: { type: String, default: '清空' },
});
</script>

<template>
    <button :tooltip="tooltip">
        <Icon name="clear" />
    </button>
</template>
