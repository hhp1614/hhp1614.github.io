<template>
  <header class="header" :class="{ 'head-out': headOut }">
    <!-- <h1>{{ $themeConfig.title }}</h1> -->
    <div class="nav">
      <div
        class="item"
        v-for="(item, index) in $themeConfig.sideBar"
        :key="index"
      >
        <a @click="jump(item.link)">{{ item.text }}</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      // headOut: false
    }
  },
  props: {
    headOut: {
      type: Boolean
    }
  },
  methods: {
    jump(link) {
      if (link === this.$saber.$route.fullPath) return
      this.$emit('changeRoute')
      setTimeout(() => {
        this.$router.push({ path: link })
      }, 300)
    }
  }
}
</script>
