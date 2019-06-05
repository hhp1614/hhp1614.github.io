<template>
  <nav>
    <h1>Title</h1>
    <ul>
      <li v-for="(item, index) in $themeConfig.sideBar" :key="index">
        <saber-link :to="item.link">{{ item.text }}</saber-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  created() {
    // console.log(this)
  }
}
</script>

<style>
nav {
  display: flex;
  height: 30px;
  align-items: center;
  border-bottom: 3px solid #f0f0f0;
}
nav h1 {
  margin: 0;
}
nav ul {
  flex: 1;
  display: flex;
  margin: 0;
  list-style: none;
}
</style>
