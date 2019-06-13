<template>
  <header class="header">
    <h1>{{ $themeConfig.title }}</h1>
    <div class="nav">
      <div
        class="nav-item"
        v-for="(item, index) in $themeConfig.sideBar"
        :class="{ 'nav-item-active': item.link === $saber.$route.fullPath }"
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
color = rgb(255,87,34)

.nav-item-bg
  position absolute
  width 60%
  height 60%
  background btnBgColor
  z-index -1
  transition all 800ms

.header
  display flex
  width 100%
  height: headerHeight
  position relative
  z-index 1
  padding 0 var(--side-padding)
  background var(--bg-color)
  box-shadow 0 1px 15px var(--box-shadow-color)
  h1
    line-height headerHeight
    color color
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
      margin-left 0.5vmin
      &-bg-1
        @extend .nav-item-bg
        transform rotateZ(0deg)
        animation rotateMain1 5s linear infinite
      &-bg-2
        @extend .nav-item-bg
        transform rotateZ(-30deg)
        animation rotateMain2 5s linear infinite
      &-bg-3
        @extend .nav-item-bg
        transform rotateZ(-60deg)
        animation rotateMain3 5s linear infinite
      &-main
        width 100%
        height 100%
      a
        display flex
        justify-content center
        align-items center
        width 100%
        height 100%
        color #586e75
        transition all 500ms
    &-item:hover, &-item-active
      .nav-item-bg-1
        background #ff572280
        animation-duration 1s
      .nav-item-bg-2
        background #ff572280
        animation-duration 1s
      .nav-item-bg-3
        background #ff572280
        animation-duration 1s
      a
        color var(--bg-color)

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
@media (max-width 768px)
  .header
    font-size 0.8rem
</style>
