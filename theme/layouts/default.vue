<template>
  <div>
    <Header />
    <div class="main">
      <div class="page-content">
        <div class="page-tags" v-if="tags">
          <saber-link
            class="tag"
            :to="`/tags/${tag}`"
            v-for="tag in tags"
            :key="tag"
          >
            #{{ tag }}
          </saber-link>
        </div>
        <div class="page-header">
          <h1 class="page-title">{{ page.attributes.title }}</h1>
          <h2 class="page-subtitle">{{ page.attributes.subTitle }}</h2>
        </div>
        <div class="page-body">
          <div class="markdown-body">
            <slot name="default"></slot>
          </div>
        </div>
        <div class="page-footer">
          <time class="page-time">
            {{ formatDate(page.attributes.updatedAt) }}
          </time>
        </div>
        <div class="prev-next" v-if="page.prevPost || page.nextPost">
          <router-link
            v-if="page.prevPost"
            :to="page.prevPost.permalink"
            class="prev"
          >
            ← {{ page.prevPost.title }}
          </router-link>
          <router-link
            v-if="page.nextPost"
            :to="page.nextPost.permalink"
            class="next"
          >
            {{ page.nextPost.title }} →
          </router-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  head() {
    const title = this.page.attributes.title
    let summary = this.page.attributes.subtitle || this.page.excerpt
    if (summary) {
      // Strip HTML tags
      summary = summary.replace(/<(?:.|\n)*?>/gm, '')
    }
    return {
      title
    }
  },
  props: ['page'],
  components: {
    Header,
    Footer
  },
  computed: {
    tags() {
      return this.page.attributes.tags && this.page.attributes.tags.sort()
      // return []
    }
  },
  methods: {
    formatDate(v) {
      const date = new Date(v)
      return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
    }
  },
  created() {
    // console.log(this)
  }
}
</script>

<style lang="stylus">
.main
  max-width 1200px
  p
    margin 0
</style>

