<template>
  <div class="wk-tab-bar">
    <slot></slot>
    <div class="wk-tab-link-highlight" :style="tabLightStyle">
      <slot name="bottom_line"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      active: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        renderData: []
      }
    },
    computed: {
      tabLightStyle() {
        let x = this.active * 100
        let len = this.renderData.length
        return {
          width: len > 0 ? (100 / len).toFixed(4) + '%' : '100%',
          transform: 'translate3d(' + x + '%, 0, 0)'
        }
      }
    },
    methods: {
      handlerClick(index) {
        this.$emit('tab-change', index)
      }
    }
  }
</script>

<style lang="sass" scoped>
.wk-tab-bar
  display: flex
  justify-content: space-between
  align-items: center
  background: #000
  text-align: center
  font-size: .32rem
  line-height: .48rem
  position: relative
  width: 100%
  z-index: 100
  a
    color: #FFF
.wk-tab-link-highlight
  position: absolute
  left: 0
  bottom: 0
  height: .06rem
  background: #FFF
  transition: all .3s
  backface-visibility: hidden
  perspective: 1000
</style>
