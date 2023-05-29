<script lang="ts" setup>
import { ref } from 'vue'

/**
 * 当前时间
 */
function useDatetime() {
  const dateTime = ref('')
  const padZero = (num: number) => String(num).padStart(2, '0')

  const rec = () => {
    const d = new Date()
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const date = d.getDate()
    const day = d.getDay()
    const hour = padZero(d.getHours())
    const minute = padZero(d.getMinutes())
    const second = padZero(d.getSeconds())
    const week = '日一二三四五六'
    dateTime.value = `${year}年${month}月${date}日 星期${week[day]} ${hour}:${minute}:${second}`
    setTimeout(() => rec(), 1000)
    return dateTime
  }

  return rec()
}

const datetime = useDatetime()
</script>

<template>
  <footer>
    <div>{{ datetime }}</div>
    <div>© <a href="https://github.com/hhp1614" target="_blank">hhp1614</a></div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  gap: 1em;
  padding: 0 0.5em;
  line-height: 2;
  color: var(--color-2);
  background-color: var(--bg-2);
}
</style>
