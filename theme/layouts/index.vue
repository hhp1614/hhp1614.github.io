<template>
  <div class="layout">
    <Header />
    <div class="main index">
      <div class="list" v-if="posts">
        <Scrollbar>
          <div class="item" v-for="post in posts" :key="post.permalink">
            <saber-link :to="post.attributes.permalink">
              <span class="title">{{ post.attributes.title }}</span>
              <span class="date">
                {{ formatDate(post.attributes.createdAt) }}
              </span>
            </saber-link>
          </div>
        </Scrollbar>
      </div>
      <div class="pagination">
        <saber-link
          class="prev"
          title="上一页"
          v-if="page.pagination.hasNext"
          :to="page.pagination.nextLink"
        >
          &lt; 上一页
        </saber-link>
        <span class="current">
          {{ page.pagination.current }} / {{ page.pagination.total }}
        </span>
        <saber-link
          class="next"
          title="下一页"
          v-if="page.pagination.hasPrev"
          :to="page.pagination.prevLink"
        >
          下一页 &gt;
        </saber-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Scrollbar from '../components/Scrollbar'

export default {
  components: {
    Header,
    Scrollbar
  },
  props: ['page'],
  head() {
    const pageTitle = this.page.attributes.title
    return {
      title: pageTitle
        ? `${pageTitle} - ${this.$siteConfig.title}`
        : this.$siteConfig.title
    }
  },
  computed: {
    posts() {
      return this.page.posts
    }
  },
  methods: {
    formatDate(v) {
      const date = new Date(v)
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    }
  }
}
</script>

<style lang="stylus" scoped></style>
