<template>
  <div class="scrollbar">
    <div v-if="isPC" ref="content" class="scrollbar-content">
      <div ref="wrap" class="scrollbar-wrap">
        <slot></slot>
      </div>
      <div ref="bar" class="scrollbar-bar">
        <div ref="thumb" class="scrollbar-thumb"></div>
      </div>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
import { isMobile } from 'hhp-utils'
let cursorDown = false // 是否按下滚动条
let clickThumbAxis = 0 // 鼠标点击滚动条的位置

export default {
  data() {
    return {
      isPC: true,
      hasEvent: false
    }
  },
  created() {
    this.isPC = navigator ? !isMobile() : true
  },
  mounted() {
    this.init()
    window.addEventListener('resize', () => {
      this.isPC = navigator ? !isMobile() : true
      this.$nextTick(() => this.init())
    })
  },
  updated() {
    this.init()
  },
  methods: {
    // 初始化
    init() {
      if (!this.isPC) return
      const wrap = this.$refs.wrap
      const content = this.$refs.content
      const gutter = this.getScrollWidth()
      if (gutter) {
        wrap.style.marginRight = `-${gutter}px`
        content.style.marginRight = `${gutter}px`
      } else {
        wrap.style.marginRight = '0'
        content.style.marginRight = '0'
      }
      this.updateThumb()
      !this.hasEvent && this.event()
    },
    // 绑定事件
    event() {
      this.hasEvent = true
      const wrap = this.$refs.wrap
      const thumb = this.$refs.thumb
      const bar = this.$refs.bar
      wrap.addEventListener('scroll', this.handleScroll)
      bar.addEventListener('click', this.clickTrackHandle)
      thumb.addEventListener('mousedown', e => {
        this.startDrag(e)
        clickThumbAxis =
          e.currentTarget.offsetHeight -
          (e.clientY - e.currentTarget.getBoundingClientRect().top)
      })
    },
    // 计算滚动条宽度
    getScrollWidth() {
      const outer = document.createElement('div')
      // outer.className = 'el-scrollbar__wrap'
      outer.style.width = '100px'
      outer.style.visibility = 'hidden'
      outer.style.position = 'absolute'
      outer.style.top = '-9999px'
      document.body.appendChild(outer)

      const widthNoScroll = outer.offsetWidth
      outer.style.overflow = 'scroll'

      const inner = document.createElement('div')
      inner.style.width = '100%'
      outer.appendChild(inner)

      const widthWidthScroll = inner.offsetWidth
      outer.parentNode.removeChild(outer)
      const scrollBarWidth = widthNoScroll - widthWidthScroll
      return scrollBarWidth
    },
    // 更新滚动块长度
    updateThumb() {
      const wrap = this.$refs.wrap
      const thumb = this.$refs.thumb
      const heightPercentage = (wrap.clientHeight * 100) / wrap.scrollHeight
      thumb.style.height = `${heightPercentage}%`
      if (heightPercentage === 100) {
        thumb.style.display = 'none'
      } else {
        thumb.style.display = 'block'
      }
    },
    // 鼠标滚轮事件
    handleScroll() {
      const wrap = this.$refs.wrap
      const thumb = this.$refs.thumb
      if (!wrap) return
      const moveY = (wrap.scrollTop * 100) / wrap.clientHeight
      thumb.style.transform = `translateY(${moveY}%)`
    },
    // 点击滚动框
    clickTrackHandle(e) {
      const wrap = this.$refs.wrap
      const thumb = this.$refs.thumb
      // 获得点击位置与滚动条顶部之间的距离
      const offset = Math.abs(e.target.getBoundingClientRect().top - e.clientY)
      // 让点击位置处于滚动条的中间
      const thumbHalf = thumb.offsetHeight / 2
      // 计算出滚动条在滚动框的百分比位置
      const thumbPositionPercentage =
        ((offset - thumbHalf) * 100) / wrap.offsetHeight
      // 通过改变 scrollTop 来操作，所有操作滚动条的最后一步都是通过 handleScroll 来实现
      wrap.scrollTop = (thumbPositionPercentage * wrap.scrollHeight) / 100
    },
    // 鼠标点击
    startDrag(e) {
      e.stopImmediatePropagation()
      e.stopPropagation()
      cursorDown = true
      document.addEventListener('mousemove', this.mouseMoveDocumentHandler)
      document.addEventListener('mouseup', this.mouseUpDocumentHandler)
      document.onselectstart = () => false
    },
    // 鼠标移动事件
    mouseMoveDocumentHandler(e) {
      if (!cursorDown) return
      const prevPage = clickThumbAxis
      if (!prevPage) return
      const thumb = this.$refs.thumb
      const wrap = this.$refs.wrap
      const bar = this.$refs.bar
      // 获得点击位置与滚动框顶部之间的距离
      const offset = (bar.getBoundingClientRect().top - e.clientY) * -1
      // 获得点击位置与滚动条顶部之间的距离
      const thumbClickPosition = thumb.offsetHeight - prevPage
      // 获得滚动条所处的百分比位置
      const thumbPositionPercentage =
        ((offset - thumbClickPosition) * 100) / bar.offsetHeight
      // 计算出滚动条应该在滚动框中所处的位置，scrollTop
      wrap.scrollTop = (thumbPositionPercentage * wrap.scrollHeight) / 100
    },
    // 松开鼠标事件
    mouseUpDocumentHandler(e) {
      cursorDown = false
      clickThumbAxis = 0
      document.removeEventListener('mousemove', this.mouseMoveDocumentHandler)
      document.onselectstart = null
    }
  }
}
</script>

<style lang="stylus" scoped>
ul
  list-style none
  background-color #ddd

.scrollbar
  height 100%
  position relative

.scrollbar-content
  height 100%
  overflow hidden

.scrollbar-bar
  position absolute
  right 2px
  bottom 2px
  z-index 1
  width 6px
  height 100%
  border-radius 4px
  opacity 0
  transition opacity 120ms ease-out

.scrollbar-thumb
  position relative
  display block
  width 100%
  height 0
  border-radius inherit
  background-color rgba(135, 141, 153, 0.3)
  transition 0.3s background-color
  cursor pointer

.scrollbar:hover .scrollbar-bar
  opacity 1
  transition opacity 340ms ease-out

.scrollbar-wrap
  height 100%
  overflow auto
</style>
