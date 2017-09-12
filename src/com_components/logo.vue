<template>
  <div class="logo">
    <img class="logo-img" src="../assets/imgs/logo.jpg" />
    <p class="blog-name">TYT</p>
    <p class="site-description">javascript | HTML5 | CSS3 | Node | React | Angular | Vue | MongoDB</p>
    <div class="sub-nav">
      <a>
        <div class="top">64</div>
        <div class="bom">日志</div>
      </a>
      <a>
        <div class="top">8</div>
        <div class="bom">分类</div>
      </a>
      <a>
        <div class="top">100</div>
        <div class="bom">标签</div>
      </a>
    </div>
    <div class="friend">
      <span class="github">
          <a target="_blank" href="https://github.com/Tyetao">
            <i class="iconfont icon-github"></i>
            Github
          </a>
        </span>
      <span class="weibo">
          <a target="_blank" href="https://weibo.com/u/5666553637">
            <i class="iconfont icon-wb"></i>
            微博
          </a>
        </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'logo',
    data () {
      return {
        msg: 'logo'
      }
    }
  }
</script>

<style lang="sass" scoped>
@import '../assets/css/var'
.logo
  .logo-img
    display: block
    margin: 0 auto
    padding: 2px
    max-width: 110px
    height: 100px
    border: 1px solid #eee
  .blog-name
    text-align: center
    color: $fontColor
    font-weight: bold
    margin: 10px 0 20px 0
    font-size: 14px
  .site-description
    text-align: center
    color: $fontDescColor
    line-height: 18px
  .sub-nav
    display: flex
    margin: 20px 0 0 0
    border-bottom: 1px dotted #ccc
    padding-bottom: 20px
    a
      flex: 1
      border-right: 1px solid #eee
      text-align: center
      .top
        font-weight: bold
        color: $fontColor
        font-size: 13px
      .bom
        color: $fontDescColor
        margin-top: 6px
      &:last-of-type
        border: none
  .friend
    display: flex
    margin-top: 20px
    span
      flex: 1 
      text-align: center
      color: $fontColor
</style>
