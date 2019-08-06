<template>
  <div class="tag-cloud-tags">
    <div v-for="(count, key) in tagsCount" :key="key" class="tag-cloud-tag">
      <saber-link :to="`/tags/${key}`" :class="getSize(count)">
        {{ key }}
      </saber-link>
    </div>
  </div>
</template>

<script>
  export const attributes = {
    title: '标签',
    layout: 'default'
  };
  export default {
    props: ['page'],
    methods: {
      getSize(count) {
        const length = this.$siteConfig.tags.length;
        let size = 'medium';
        if (count > length / 10) {
          size = 'large';
        } else if (count < length / 30) {
          size = 'small';
        }
        return size;
      }
    },
    computed: {
      tagsCount() {
        const frequency = {};
        this.$siteConfig.tags.forEach(tag => {
          frequency[tag] = frequency[tag] ? frequency[tag] + 1 : 1;
        });
        return frequency;
      }
    }
  };
</script>

<style lang="scss">
  .tag-cloud-tags {
    font-size: 16px;

    @media screen and (max-width: 760px) {
      font-size: 12px;
    }
  }

  .tag-cloud-tag {
    display: inline-block;
    margin: 0.625em;

    a {
      display: inline-block;
      line-height: 1.6em;
      transition: all 0.3s ease;
      $color: #0094f0;

      &::after {
        background-color: $color;
      }
    }

    .small {
      font-size: 1.2em;
    }

    .medium {
      font-size: 1.6em;
    }

    .large {
      font-size: 2em;
    }
  }
</style>
