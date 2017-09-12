<template>
  <div class="nav">
    <ul class="nav-ul">
      <li>
        <router-link to="/home">
          <i class="iconfont icon-home"></i> 首页
        </router-link>
      </li>
      <li>
        <router-link to="/categories">
          <i class="iconfont icon-Categories"></i> 分类
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <i class="iconfont icon-about"></i> 关于
        </router-link>
      </li>
      <li>
        <router-link to="/archives">
          <i class="iconfont icon-archives"></i> 归档
        </router-link>
      </li>
      <li>
        <router-link to="/tags">
          <i class="iconfont icon-tag"></i> 标签
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'myNav',
    data () {
      return {
        msg: 'logo'
      }
    }
  }
</script>

<style lang="sass" scoped>
@import '../assets/css/var'
.nav
  padding: 10px 0
  .nav-ul
    i
      font-size: 12px
      display: inline-block
    a
      position: relative
      cursor: pointer
      padding: 10px 20px
      display: block
      color: $fontColor
      transition: background 0.3s
      &:hover
        background: $bodyColor
    a.router-link-active
      background: $bodyColor
      &:after
        content: " "
        position: absolute
        top: 50%
        margin-top: -3px
        right: 15px
        width: 6px
        height: 6px
        border-radius: 50%
        background-color: #bbb
</style>
