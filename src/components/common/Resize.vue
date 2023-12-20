<script lang="ts" setup>
import { throttle } from '@/utils'

const emit = defineEmits<{
  (e: 'resize', data: { width: number; height: number; x: number; y: number }): void
}>()

const resizer = ref<HTMLElement>()
const isDragging = ref(false)

const onMouseMove = throttle((e: MouseEvent) => {
  if (!isDragging.value) {
    return
  }
  const data = {
    width: resizer.value.offsetWidth,
    height: resizer.value.offsetHeight,
    x: e.clientX,
    y: e.clientY,
  }
  emit('resize', data)
}, 10)

function setIframePointer(flag: boolean) {
  ;[...document.querySelectorAll('iframe')].forEach(iframe => {
    iframe.style.pointerEvents = flag ? 'auto' : 'none'
  })
}

function onResizeStart() {
  isDragging.value = true
  setIframePointer(false)
}

function onResizeEnd() {
  isDragging.value = false
  setIframePointer(true)
}

watch(isDragging, v => {
  const action: keyof typeof window = v ? 'addEventListener' : 'removeEventListener'
  window[action]('mousemove', onMouseMove)
  window[action]('mouseup', onResizeEnd)
})
</script>

<template>
  <div ref="resizer" class="resizer" @mousedown.passive="onResizeStart"></div>
</template>
