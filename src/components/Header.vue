<template>
  <header>
    <nav>
      <template v-if="$route.path.startsWith('/toolbox')">
        <div>tabs</div>
      </template>
    </nav>
    <nav>
      <router-link v-if="$route.path.startsWith('/toolbox')" to="/">首页</router-link>
      <router-link v-else to="/toolbox">工具箱</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  gap: 1em;
  padding: 0 0.5em;
  line-height: 2;

  nav {
    display: flex;
    gap: 1em;
  }
}
</style>
