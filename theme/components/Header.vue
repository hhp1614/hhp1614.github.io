<template>
  <header class="header">
    <h1>{{ $themeConfig.title }}</h1>
    <div class="nav">
      <div
        class="nav-item"
        v-for="(item, index) in $themeConfig.sideBar"
        :key="index"
      >
        <div class="nav-item-bg-1"></div>
        <div class="nav-item-bg-2"></div>
        <div class="nav-item-bg-3"></div>
        <div class="nav-item-main">
          <saber-link :to="item.link">{{ item.text }}</saber-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  created() {
    // console.log(this)
  }
}
</script>

<style lang="stylus">
headerHeight = 10vmin
btnBgColor = #99999980

.header
  display flex
  height: headerHeight
  padding 0 80px
  h1
    line-height headerHeight
  .nav
    flex 1
    display flex
    justify-content flex-end
    height headerHeight
    &-item
      display flex
      justify-content center
      align-items center
      position relative
      width headerHeight
      margin-left 10px
      &-bg-1
        position absolute
        width 60%
        height 60%
        background btnBgColor
        z-index -1
        transition all 800ms
        transform rotateZ(0deg)
        animation rotateMain1 5s linear infinite
      &-bg-2
        position absolute
        width 60%
        height 60%
        background btnBgColor
        z-index -1
        transition all 800ms
        transform rotateZ(-30deg)
        animation rotateMain2 5s linear infinite
      &-bg-3
        position absolute
        width 60%
        height 60%
        background btnBgColor
        z-index -1
        transition all 800ms
        transform rotateZ(-60deg)
        animation rotateMain3 5s linear infinite
      &-main
        width 100%
        height 100%
        // background #eaeadd80
        // animation rotateMain linear .9s infinite
      a
        display flex
        justify-content center
        align-items center
        width 100%
        height 100%
        color #586e75
        transition all 500ms
      a:hover
        color var(--bg-color)
    &-item:hover
      .nav-item-bg-1
        background #ff572280
        animation-duration 1s
      .nav-item-bg-2
        background #ff572280
        animation-duration 1s
      .nav-item-bg-3
        background #ff572280
        animation-duration 1s
@keyframes rotateMain1
  from
    transform rotateZ(0deg)
  to
    transform rotateZ(360deg)
@keyframes rotateMain2
  from
    transform rotateZ(-30deg)
  to
    transform rotateZ(330deg)
@keyframes rotateMain3
  from
    transform rotateZ(-60deg)
  to
    transform rotateZ(300deg)
</style>
