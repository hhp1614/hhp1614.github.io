<script lang="ts" setup>
import { pages } from '@/router/pages'
import router from '@/router'
</script>

<template>
  <aside>
    <div v-for="item in pages" :key="item.name" class="item">
      {{ item.meta.title }}
      <template v-if="item.children.length">
        <div v-for="child in item.children" :key="child.name" class="child" :class="{ active: child.path === $route.path }" @click="router.push(child.path)">
          {{ child.meta!.title }}
        </div>
      </template>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  padding: 0.5rem;
  min-width: 20vmin;

  .item {
    color: var(--color-3);
    margin-bottom: 0.5rem;
    line-height: 1.5;

    .child {
      display: block;
      padding: 0 0.5em;
      cursor: pointer;
      transition: var(--transition);
      color: var(--color-2);

      &:hover,
      &.active {
        color: var(--theme-color);
      }
    }
  }
}
</style>
