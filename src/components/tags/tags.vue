<template>
  <div class="tags">
    <h1 class="title">标签</h1>
    <p class="desc">目前共计标签66种</p>
    <ul>
      <li>
        <a>
          <span class="name">CSS3</span>
        </a>
      </li>
      <li>
        <a>
          <span class="name">HTML5</span>
        </a>
      </li>
      <li>
        <a>
          <span class="name">ES5</span>
        </a>
      </li>
      <li>
        <a>
          <span class="name">ES6</span>
        </a>
      </li>
      <li>
        <a>
          <span class="name">HEXO</span>
        </a>
      </li>
       <li>
        <a>
          <span class="name">源码解析</span>
        </a>
      </li>
       <li>
        <a>
          <span class="name">浏览器</span>
        </a>
      </li>
      <li>
        <a>
          <span class="name">ReactJS</span>
        </a>
      </li>
      <li>
        <a>
          <span class="name">SVG</span>
        </a>
      </li>
      <li>
        <a>
          <span class="name">Vue</span>
        </a>
      </li>
      <li>
        <a>
          <span class="name">debug</span>
        </a>
      </li>
      <li>
        <a>
          <span class="name">Git</span>
        </a>
      </li>
      <li>
        <a>
          <span class="name">svn</span>
        </a>
      </li>
      <li>
        <a>
          <span class="name">MongoDB</span>
        </a>
      </li>
      <li>
        <a>
          <span class="name">工具</span>
        </a>
      </li>
       <li>
        <a>
          <span class="name">调试</span>
        </a>
      </li>
       <li>
        <a>
          <span class="name">性能优化</span>
        </a>
      </li>
       <li>
        <a>
          <span class="name">工具</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'tags'
  }
</script>

<style lang="sass" scoped>
@import '../../assets/css/var'
.tags
  padding: 50px 0
  height: 600px
  .title,.desc
    text-align: center
  .title
    font-size: 18px
    color: $fontColor
  .desc
    color: $fontDescColor
    margin-top: 20px
  ul
    margin-left: 60px
    margin-top: 40px
    margin-right: 60px
    li
      margin-bottom: 20px
      float: left
      margin-left: 20px
      padding: 6px 20px
      border-radius: 30px
      box-shadow: 1px 1px 2px black
      a
        &:hover 
          text-decoration: underline
          color: $witheColor
</style>
