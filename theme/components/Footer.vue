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
.footer
  width 100%
  height 1.8rem
  position relative
  z-index 1
  padding 0 var(--side-padding)
  background var(--bg-color)
  box-shadow 1px 0 15px var(--box-shadow-color)
.sp-copyright
  text-align center
</style>
