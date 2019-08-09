<template>
  <div class="layout">
    <Header @changeRoute="changeRoute" :headOut="headOut" />
    <div class="main default" :class="{ 'page-out': pageOut }">
      <Scrollbar>
        <div class="default-content">
          <div class="tags" v-if="tags">
            <saber-link class="tag" v-for="tag in tags" :key="tag" :to="`/tags/${tag}`">
              <span style="color: #00b368;">#</span>{{ tag }}
            </saber-link>
          </div>
          <div class="default-header">
            <h1 class="title">{{ page.attributes.title }}</h1>
            <h2 class="subtitle">{{ page.attributes.subTitle }}</h2>
            <div class="time">
              {{ formatDate(page.attributes.updatedAt) }}
            </div>
          </div>
          <div class="default-body">
            <div class="markdown-body">
              <slot name="default"></slot>
            </div>
          </div>
          <div class="prev-next" v-if="page.prevPost || page.nextPost">
            <router-link v-if="page.nextPost" :to="page.nextPost.permalink" class="prev">
              ← {{ page.nextPost.title }}
            </router-link>
            <router-link v-if="page.prevPost" :to="page.prevPost.permalink" class="next">
              {{ page.prevPost.title }} →
            </router-link>
          </div>
        </div>
      </Scrollbar>
    </div>
  </div>
</template>

<script>
import { timeFormatPass } from 'hhp-utils';
import Header from '../components/Header.vue';
import Scrollbar from '../components/Scrollbar.vue';

export default {
  head() {
    const title = this.page.attributes.title;
    let summary = this.page.attributes.subtitle || this.page.excerpt || '';
    if (summary) {
      // Strip HTML tags
      summary = summary.replace(/<(?:.|\n)*?>/gm, '');
    }
    return { title };
  },
  props: ['page'],
  components: {
    Header,
    Scrollbar
  },
  data() {
    return {
      pageOut: false,
      headOut: false
    };
  },
  computed: {
    tags() {
      return this.page.attributes.tags && this.page.attributes.tags.sort();
    }
  },
  methods: {
    formatDate(v) {
      return timeFormatPass(v);
    },
    changeRoute() {
      this.pageOut = true;
      this.headOut = true;
      setTimeout(() => {
        this.pageOut = false;
        this.headOut = false;
        typeof path === 'string' && this.$router.push({ path });
      }, 300);
    }
  }
};
</script>
