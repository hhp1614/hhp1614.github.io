<template>
  <div class="layout">
    <Header />
    <div class="main default">
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
          <div class="page-time">
            {{ formatDate(page.attributes.updatedAt) }}
          </div>
        </div>
        <div class="page-body">
          <div class="markdown-body">
            <slot name="default"></slot>
          </div>
        </div>
        <div class="prev-next" v-if="page.prevPost || page.nextPost">
          <router-link
            v-if="page.nextPost"
            :to="page.nextPost.permalink"
            class="prev"
          >
            ← {{ page.nextPost.title }}
          </router-link>
          <router-link
            v-if="page.prevPost"
            :to="page.prevPost.permalink"
            class="next"
          >
            {{ page.prevPost.title }} →
          </router-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { timeFormatPass } from 'hhp-utils'
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
    return { title }
  },
  props: ['page'],
  components: {
    Header,
    Footer
  },
  computed: {
    tags() {
      return this.page.attributes.tags && this.page.attributes.tags.sort()
    }
  },
  methods: {
    formatDate(v) {
      return timeFormatPass(v)
    }
  }
}
</script>

<style lang="stylus">
.default
  padding 20px
  overflow auto
  .prev-next
    overflow hidden
    .prev
      float left
    .next
      float right
  .page-time
    color var(--light-color)
</style>

