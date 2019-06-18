<template>
  <header class="header">
    <!-- <h1>{{ $themeConfig.title }}</h1> -->
    <div class="nav">
      <div
        class="item"
        v-for="(item, index) in $themeConfig.sideBar"
        :class="{ 'nav-item-active': item.link === $saber.$route.fullPath }"
        :key="index"
      >
        <saber-link :to="item.link">{{ item.text }}</saber-link>
      </div>
    </div>
  </header>
</template>

