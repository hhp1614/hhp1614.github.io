<script lang="ts" setup>
defineProps({
  /** 是否显示弹窗 */
  modelValue: { type: Boolean, default: false },
  /** 弹窗标题 */
  title: String,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'success'): void
}>()

/**
 * 点击确定按钮
 */
function success() {
  emit('success')
  emit('update:modelValue', false)
}
</script>

<template>
  <div v-if="modelValue" class="dialog" @click.self="emit('update:modelValue', false)">
    <div class="dialog-wrapper">
      <div v-if="title" class="dialog-title">{{ title }}</div>
      <div class="dialog-content">
        <slot />
      </div>
      <div class="dialog-action">
        <slot name="action">
          <button @click="success">确定</button>
        </slot>
      </div>
    </div>
  </div>
</template>
