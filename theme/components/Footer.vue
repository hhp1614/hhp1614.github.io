<template>
  <div class="footer">
    <div class="sp-copyright">
      {{ copyRight }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    copyRight() {
      return this.$themeConfig.copyRight
    }
  }
}
</script>

<style lang="stylus">
body
  padding-bottom 1.8rem
.footer
  width 100%
  height 1.8rem
  position fixed
  left 0
  bottom 0
  padding 0 4vmin
  background var(--bg-color)
  z-index 9999
  box-shadow 1px 0 15px #adadad
.sp-copyright
  text-align center
</style>
