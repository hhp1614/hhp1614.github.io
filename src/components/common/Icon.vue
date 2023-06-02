<script lang="ts" setup>
const props = defineProps({
    name: { type: String, require: true },
});
</script>

<template>
    <i class="iconfont" :class="`icon-${props.name}`"></i>
</template>
