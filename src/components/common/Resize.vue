<script lang="ts" setup>
import { throttle } from '@/utils';
import { ref, watch } from 'vue';

const props = defineProps({
    isHorizontal: Boolean,
});

const emit = defineEmits<{
    (e: 'resize', data: { width: number; height: number; x: number; y: number }): void;
}>();

const resizer = ref<HTMLElement>();
const isDragging = ref(false);

const onMouseMove = throttle((e: MouseEvent) => {
    if (!isDragging.value) {
        return;
    }
    emit('resize', {
        width: resizer.value.offsetWidth,
        height: resizer.value.offsetHeight,
        x: e.clientX,
        y: e.clientY,
    });
}, 10);

function onResizeStart() {
    isDragging.value = true;
}
function onResizeEnd() {
    isDragging.value = false;
}

watch(isDragging, v => {
    if (v) {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onResizeEnd);
    } else {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onResizeEnd);
    }
});
</script>

<template>
    <div ref="resizer" class="resizer" @mousedown.passive="onResizeStart"></div>
</template>
