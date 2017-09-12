<template>
  <div class="app">
    <transition name="bounceInLeft" appear>
      <keep-alive>
        <router-view class="left-container"></router-view>
      </keep-alive>
    </transition>
    <section class="right-container">
      <div class="r-top-container">
        <div class="blog-name">
          <div class="line">
            <div class="line-in">
              <h1>TYT'S Blog</h1>
              <p>世界很大，我真的很想去看看</p>
            </div>
          </div>
        </div>
        <my-nav></my-nav>
      </div>  
      <div class="r-bottom-container">
        <div v-if="showLogo">
          <tab-bar :active="tabActive" @tab-change="tabBarClick">
            <tab-bar-item>
              文章目录
            </tab-bar-item>
            <tab-bar-item>
              站点概览
            </tab-bar-item>
            <div slot="bottom_line" class="tarbar-bottom-line"></div>
          </tab-bar>
          <TabBarContent>
            <div class="container1" v-if="tabActive === 0">
              1
            </div>
            <div class="container2" v-if="tabActive === 1">
               <logo></logo>
            </div>
          </TabBarContent>
        </div>
        <logo v-if="!showLogo"></logo>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import logo from '@/com_components/logo'
  import myNav from '@/com_components/nav'
  import { TabBar, TabBarItem, TabBarContent } from 'base/tabbars'
  export default {
    name: 'app',
    data () {
      return {
        tabActive: 0
      }
    },
    methods: {
      tabBarClick (index) {
        this.tabActive = index
      }
    },
    computed: {
      ...mapGetters(['showLogo'])
    },
    components: {
      logo,
      myNav,
      TabBar,
      TabBarItem,
      TabBarContent
    }
  }
</script>

<style lang="sass">
  @import './assets/css/var'
  @import './assets/font/iconfont.css'
  .app
    display: flex
    justify-content: space-between
    width: 950px
    margin: 0 auto
    .left-container
      width: 700px
      background: $asideColor
    .right-container
      // position: relative
      width: 240px
      background: $bodyColor
      // margin-left: 10px
      .r-top-container
        width: 100%
        background: $asideColor
        .blog-name
          width: 240px
          height: 90px
          background: $bgColor
          color: #fff
          padding-top: 30px
          .line
            text-align: center
            .line-in
              position: relative
              width: 200px
              margin: 0 auto
            .line-in::before,.line-in::after
              content: ""
              display: block
              position: absolute
              width: 220px
              height: 60px
              top: -10px
              left: -10px
              border: 2px solid #fff
              z-index: 1
              box-sizing: border-box
              animation: clipAni 6s infinite linear
            .line-in::before
              animation-delay: -3s
          h1
            font-size: 18px
            margin: 10px 0 8px 0
      .r-bottom-container
        width: 100%
        background: $asideColor
        margin-top: 10px
        padding: 20px
        box-sizing: border-box
        .wk-tab-bar
          margin-bottom: 20px
          background: none
          a
            color: $fontColor
          .tarbar-bottom-line
            width: 54px
          .wk-tab-link-highlight
            top: 20px
            display: flex
            justify-content: center
            > div
              background: $fontColor
  .bounceInLeft-enter-active
    animation: bounceInLeft 2s   
</style>

