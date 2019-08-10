<template>
  <header class="header" :class="{ 'head-out': headOut }">
    <!-- <h1>{{ $themeConfig.title }}</h1> -->
    <div class="nav">
      <div class="item" v-for="(item, index) in $themeConfig.sideBar" :key="index">
        <a v-if="show(item)" @click="jump(item.link)">{{ item.text }}</a>
      </div>
    </div>
  </header>
</template>

<script>
import { isMobile } from 'hhp-utils';

export default {
  props: {
    headOut: {
      type: Boolean
    }
  },
  data() {
    return {
      isMobile: isMobile()
    };
  },
  methods: {
    jump(link) {
      if (link === this.$saber.$route.fullPath) return;
      this.$emit('changeRoute');
      setTimeout(() => this.$router.push({ path: link }), 300);
    },
    show(item) {
      if (!this.isMobile) {
        return true;
      }
      return item.link !== '/search.html'
    }
  }
};
</script>
