<script lang="ts" setup>
const props = defineProps({
  /** 当前页 */
  page: { type: Number, default: 1 },
  /** 每页条数 */
  size: { type: Number, default: 20 },
  /** 总条数 */
  total: { type: Number, default: 0 },
  /** 最大页码按钮数 */
  count: { type: Number, default: 7 },
})

const emit = defineEmits<{
  /**
   * 改变页码
   * @param page 页码
   */
  (e: 'change', page: number): void
}>()

/**
 * 计算分页数据
 */
const list = computed(() => {
  const getArray = (min: number, max: number) => new Array(max - min + 1).fill(0).map((_, i) => i + min)
  const min = 1
  const max = Math.ceil(props.total / props.size)
  const len = props.count
  if (max <= len) {
    return getArray(min, max)
  }
  const count = len - 2
  const radius = Math.floor(count / 2)
  let start = props.page - radius
  let end = props.page + radius
  if (start < min + 1) {
    start = min + 1
    end = min + count
  }
  if (end > max - 1) {
    start = max - count
    end = max - 1
  }
  const range = []
  if (start > min + 1) {
    range.push('backward')
  }
  range.push(...getArray(start, end))
  if (end < max - 1) {
    range.push('forward')
  }
  return [min, ...range, max]
})

/**
 * 改变页码
 * @param page 页码
 */
function change(page: number | string) {
  if (page === props.page) {
    return
  }
  // 快退
  if (page === 'backward') {
    page = props.page - (props.count - 2)
  }
  // 快进
  if (page === 'forward') {
    page = props.page + (props.count - 2)
  }
  emit('change', page as number)
}
</script>

<template>
  <ul class="paginate">
    <li v-for="(item, i) in list" :key="i" :class="{ active: item === page }" @click="change(item)">
      <template v-if="typeof item === 'string'">··</template>
      <template v-else>{{ item }}</template>
    </li>
    <div>共 {{ total }} 条</div>
  </ul>
</template>
