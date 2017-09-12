<template>
  <div class="home">
    <article>
      <h1>
        <a @click="goDetailsFn()">
          Babel使用入门
        </a>
      </h1>
      <div class="post-meta">
        <span>发表于 2017-05-02</span> &nbsp;&nbsp;|&nbsp;&nbsp;
        <span>分类于 jsvascript</span> &nbsp;&nbsp;|&nbsp;&nbsp;
        <span>阅读数 1000次</span>
      </div>
      <p class="desc">
        Babel是一个广泛使用的ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。 ECMAScript 6是JavaScript语言的下一代标准。因为当前版本的ES6是在2015年发布的，所以又称ECMAScript 2015。但是目前浏览器对es6不完全兼容，需要借住babel编译。</p>
      
      <button class="btn" @click="goDetailsFn()">
        阅读全文»
      </button>
    </article>
  
    <article>
      <h1>
        <a>
            Babel使用入门
          </a>
      </h1>
      <div class="post-meta">
        <span>发表于 2017-05-02</span> &nbsp;&nbsp;|&nbsp;&nbsp;
        <span>分类于 jsvascript</span> &nbsp;&nbsp;|&nbsp;&nbsp;
        <span>阅读数 1000次</span>
      </div>
      <p class="desc">
        Babel是一个广泛使用的ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。 ECMAScript 6是JavaScript语言的下一代标准。因为当前版本的ES6是在2015年发布的，所以又称ECMAScript 2015。但是目前浏览器对es6不完全兼容，需要借住babel编译。</p>
      <button class="btn">
          阅读全文»
        </button>
    </article>
    <article>
      <h1>
        <a>
            Babel使用入门
          </a>
      </h1>
      <div class="post-meta">
        <span>发表于 2017-05-02</span> &nbsp;&nbsp;|&nbsp;&nbsp;
        <span>分类于 jsvascript</span> &nbsp;&nbsp;|&nbsp;&nbsp;
        <span>阅读数 1000次</span>
      </div>
      <p class="desc">
        Babel是一个广泛使用的ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。 ECMAScript 6是JavaScript语言的下一代标准。因为当前版本的ES6是在2015年发布的，所以又称ECMAScript 2015。但是目前浏览器对es6不完全兼容，需要借住babel编译。</p>
      <button class="btn">
          阅读全文»
        </button>
    </article>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'home',
    data () {
      return {
        msg: 'home'
      }
    },
    methods: {
      goDetailsFn () {
        this.goDetails(true)
        this.$router.push('/articleDetails')
      },
      ...mapActions(['goDetails'])
    }
  }
</script>

<style lang="sass" scoped>
@import '../../assets/css/var'
.home
  padding: 40px
  box-sizing: border-box
  article
    margin-bottom: 50px
    h1
      font-size: 20px
      text-align: center
      word-break: break-word
      font-weight: 400
      a
        position: relative
        display: inline-block
        color: $fontColor
        border-bottom: none
        line-height: 1.2
        vertical-align: top
        cursor: pointer
        &::before
          content: ""
          position: absolute
          width: 100%
          height: 2px
          bottom: 0
          left: 0
          background-color: #000
          visibility: hidden
          transform: scaleX(0)
          transition-duration: 0.2s //规定完成过渡效果需要多少秒或毫秒
          transition-timing-function: ease-in-out
        &:hover::before
          visibility: visible
          transform: scaleX(1)
    .post-meta
      color: $fontDescColor
      text-align: center
      margin: 30px 0
    .desc
      color: $fontColor
      text-align: justify
      line-height: 20px
    .btn
      margin: 30px auto
      &:hover
        background: $fontColor
        color: $witheColor
</style>
