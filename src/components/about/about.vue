<template>
  <div class="about">
    <h1>前端工程师（H5工程师）</h1>
    <p>目前工作在深圳，深圳的小伙伴可以随时来约 :) </br>
    专注于前端开发（Nodejs/Angular/Vue），全栈发展。</br>
    欢迎来到我的博客，在这里，我会分享我的工作和生活中的感想，欢迎大家和我交流，如有需要请给我留言。
    </p>
    <div>
      <span class="contact">联系方式</span>
      <span class="emile">邮箱：765068439@qq.com</span>
      <span class="qq">QQ：765068439</span>
    </div>

    <h1 class="info">给我留言</h1>
    <textarea placeholder="欢迎留言..."></textarea>
    <button class="btn">保存留言</button>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data () {
      return {
        msg: 'about'
      }
    }
  }
</script>

<style lang="sass" scoped>
@import '../../assets/css/var'
.about
  height: 700px
  padding: 40px 50px
  box-sizing: border-box
  h1
    font-size: 16px
    color: $fontColor
    margin-bottom: 20px
  p
    line-height: 20px
    color: $fontDescColor
  span
    color: $fontDescColor
    display: block
    margin-bottom: 8px
  .contact
    margin: 20px 0
    color: $fontColor
    font-size: 16px
  .info
    margin-top: 20px
  textarea
    width: 100%
    height: 100px
    resize: none
    border: 1px solid $fontDescColor
  .btn
    float: right
    margin-top: 10px
    &:hover
      background: $fontColor
      color: $witheColor
</style>
