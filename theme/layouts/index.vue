<template>
  <div class="layout">
    <Header />
    <div class="main index">
      <slot name="default" />
      <div class="posts" v-if="posts">
        <template v-for="(post, index) in posts">
          <saber-link
            class="posts-item"
            v-if="post.attributes"
            :key="post.permalink"
            :to="post.attributes.permalink"
          >
            <span class="posts-item-title">{{ post.attributes.title }}</span>
            <span class="posts-item-date">
              {{ formatDate(post.attributes.createdAt) }}
            </span>
          </saber-link>
          <div v-else :key="index" style="flex: 1;"></div>
        </template>
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
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Footer
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
      if (this.page.posts.length < 10) {
        // this.page.posts.length = 10
        for (let i = 0; i < 10; i++) {
          if (!this.page.posts[i]) {
            this.page.posts[i] = {}
          }
        }
      }
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

<style lang="stylus">
.index
  .posts
    flex 1
    display flex
    flex-direction column
    &-item
      flex 1
      align-items center
      display flex
      height 100%
      padding 0 20px
      transition var(--transition-default)
      &-title
        flex 1
        font-size 1.8rem
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
      &-date
        color var(--light-color)
    &-item:hover
      box-shadow 0 0 15px var(--box-shadow-color)
  .pagination
    position relative
    text-align center
    // .current
    //   width 100%
    .prev
      position absolute
      top 0
      left 20px
    .next
      position absolute
      top 0
      right 20px

@media (max-width 768px)
  .index
    .posts
      &-item
        &-title
          font-size 1rem
</style>