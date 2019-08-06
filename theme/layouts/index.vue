<template>
  <div class="layout">
    <Header @changeRoute="changeRoute" :headOut="headOut" />
    <div class="main index" :class="{ 'page-out': pageOut }">
      <div class="list" v-if="posts">
        <Scrollbar>
          <div class="item" v-for="post in posts" :key="post.permalink">
            <a @click="changeRoute(post.attributes.permalink)">
              <span class="title">{{ post.attributes.title }}</span>
              <span class="date">
                {{ formatDate(post.attributes.createdAt) }}
              </span>
            </a>
          </div>
        </Scrollbar>
      </div>
    </div>
    <div class="pagination" :class="{ 'foot-out': footOut }">
      <saber-link class="prev" title="上一页" v-if="page.pagination.hasNext" :to="page.pagination.nextLink">
        &lt; 上一页
      </saber-link>
      <span class="current"> {{ page.pagination.current }} / {{ page.pagination.total }} </span>
      <saber-link class="next" title="下一页" v-if="page.pagination.hasPrev" :to="page.pagination.prevLink">
        下一页 &gt;
      </saber-link>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Scrollbar from '../components/Scrollbar';

export default {
  components: {
    Header,
    Scrollbar
  },
  props: ['page'],
  head() {
    const pageTitle = this.page.attributes.title;
    return {
      title: pageTitle ? `${pageTitle} - ${this.$siteConfig.title}` : this.$siteConfig.title
    };
  },
  data() {
    return {
      pageOut: false,
      headOut: false,
      footOut: false
    };
  },
  computed: {
    posts() {
      return this.page.posts;
    }
  },
  methods: {
    formatDate(v) {
      const date = new Date(v);
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    changeRoute(path) {
      this.pageOut = true;
      this.headOut = true;
      this.footOut = true;
      setTimeout(() => {
        this.pageOut = false;
        this.headOut = false;
        this.footOut = false;
        typeof path === 'string' && this.$router.push({ path });
      }, 300);
    }
  }
};
</script>
