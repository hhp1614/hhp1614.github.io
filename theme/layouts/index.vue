<template>
  <div>
    <Header />
    <div class="main">
      <slot name="default" />
      <div class="recent-posts" v-if="page.posts">
        <ul>
          <li v-for="post in page.posts" :key="post.permalink">
            <h4>
              {{ formatDate(post.attributes.createdAt) }} -
              <saber-link :to="post.attributes.permalink">
                {{ post.attributes.title }}
              </saber-link>
            </h4>
          </li>
        </ul>
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
  methods: {
    formatDate(v) {
      const date = new Date(v)
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    }
  },
  created() {
    // console.log(this)
  }
}
</script>

<style lang="stylus">
.recent-posts ul
  margin 0
  padding-left 0
  list-style none
</style>