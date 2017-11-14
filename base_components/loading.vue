<template>
  <div id="app-wrapper-mode">
    <div class="app-wrapper">
      <span class="whirly-loader">Loading…</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loading'
  }
</script>

<style lang="sass" scoped>
#app-wrapper-mode
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  display: none
  .app-wrapper
    position: absolute
    top: 50%
    left: 50%
    transform: translate3d(-50%, -50%, 0)
</style>
