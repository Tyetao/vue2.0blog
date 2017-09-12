<template>
  <div class="article-details">
    <pre>
      ssss 
    </pre>
    <div class="navPage">
      <div class="prve">
        <span>上一篇：</span>
        <a>javascript</a>
      </div>
      <div class="next">
        <span>下一篇：</span>
        <a>javascript2</a>
      </div>
    </div>
    <div class="comment">
      <p class="p">欢迎评论:</p>
      <textarea></textarea>
      <button>保存评论</button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'articleDetails',
    data () {
      return {
        tabActive: 0,
        show: false
      }
    },
    methods: {
      ...mapActions(['goDetails'])
    },
    created () {
      this.goDetails(true)
    }
  }
</script>

<style lang="sass" scoped>
@import '../../assets/css/var'
.article-details
  margin-bottom: 50px
  .navPage
    display: flex
    justify-content: space-between
    background: $bodyColor
    height: 60px
    line-height: 60px
    .prve, .next
      a
        color: $fontDescColor
  .comment
    textarea
      width: 100%
      border: 1px solid #ccc
      box-sizing: border-box
</style>
