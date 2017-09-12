<template>
  <div class="archives">
    <section id="posts" class="posts-collapse">
      <h2 ref="year" class="archive-year">2017</h2>
      <article class="post post-type-normal">
        <header class="post-header">
          <time class="post-time">
              08-31
            </time>
          <a class="post-title-link">
            <span>SVG线条动画应用</span>
          </a>
        </header>
      </article>
      <article class="post post-type-normal">
        <header class="post-header">
          <time class="post-time">
              08-31
            </time>
          <a class="post-title-link">
            <span>SVG线条动画应用</span>
          </a>
        </header>
      </article>
      <article class="post post-type-normal">
        <header class="post-header">
          <time class="post-time">
              08-31
            </time>
          <a class="post-title-link">
            <span>SVG线条动画应用</span>
          </a>
        </header>
      </article>
      <article class="post post-type-normal">
        <header class="post-header">
          <time class="post-time">
              08-31
            </time>
          <a class="post-title-link">
            <span>SVG线条动画应用</span>
          </a>
        </header>
      </article>
      <article class="post post-type-normal">
        <header class="post-header">
          <time class="post-time">
              08-31
            </time>
          <a class="post-title-link">
            <span>SVG线条动画应用</span>
          </a>
        </header>
      </article>
      <article class="post post-type-normal">
        <header class="post-header">
          <time class="post-time">
              08-31
            </time>
          <a class="post-title-link">
            <span>SVG线条动画应用</span>
          </a>
        </header>
      </article>
      <article class="post post-type-normal">
        <header class="post-header">
          <time class="post-time">
              08-31
            </time>
          <a class="post-title-link">
            <span>SVG线条动画应用</span>
          </a>
        </header>
      </article>
      <article class="post post-type-normal">
        <header class="post-header">
          <time class="post-time">
              08-31
            </time>
          <a class="post-title-link">
            <span>SVG线条动画应用</span>
          </a>
        </header>
      </article>
      <article class="post post-type-normal">
        <header class="post-header">
          <time class="post-time">
              08-31
            </time>
          <a class="post-title-link">
            <span>SVG线条动画应用</span>
          </a>
        </header>
      </article>
      <article class="post post-type-normal">
        <header class="post-header">
          <time class="post-time">
              08-31
            </time>
          <a class="post-title-link">
            <span>SVG线条动画应用</span>
          </a>
        </header>
      </article>
    </section>

    <div class="pagination">
      <a><</a>
      <a class="page-number">2</a>
      <a class="page-number">7</a>
      <a class="extend next">3</a>
      <a>></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'archives',
    data () {
      return {
        show: true
      }
    },
    mounted () {
      // let year = this.$refs.year
      // year.style.opacity = 1
      // year.style.transform = 'translateX(0px)'
    }
  }
</script>

<style lang="sass" scoped>
@import '../../assets/css/var'
.archives
  padding: 0 100px
  box-sizing: border-box
  .posts-collapse
    position: relative
    z-index: 1010
    margin-bottom: 60px
    .archive-year
      position: relative
      font-weight: 900
      color: $fontColor
      font-size: 20px
      margin: 60px 0
      padding-left: 20px
      animation: rollIn 1s ease-in-out 1.8s
      &::before
        content: " "
        position: absolute
        left: 0
        top: 50%
        margin-left: -4px
        margin-top: -4px
        width: 8px
        height: 8px
        background: #bbb
        border-radius: 50%
    .post
      padding: 20px 0
      animation: fadeYApi 1.5s ease-in-out 2.5s
      border-bottom: 1px dashed #ccc
      &:hover
        border-bottom-color: #666
    .post-header
      position: relative
      padding: 10px 0 10px 20px
      .post-time
        color: $fontDescColor
        margin-right: 10px
      .post-title-link
        font-weight: 900
        color: $fontColor
    .post-header::before
      content: " "
      position: absolute
      left: 0
      top: 12px
      width: 6px
      height: 6px
      margin-left: -4px
      background: #bbb
      border-radius: 50%
      border: 1px solid #fff
      transition-duration: 0.2s
      transition-timing-function: ease-in-out
      transition-delay: 0s
      transition-property: background
    .post-header:hover::before
      background: #222
  .posts-collapse::after
    content: " "
    position: absolute
    top: 20px
    left: 0
    margin-left: -2px
    width: 4px
    height: 100%
    background: #f5f5f5
    z-index: -1
  .pagination
    border-top: 1px solid #ccc
    text-align: center
    padding: 40px 0
    a
      width: 26px
      height: 26px
      background: #ccc
      display: inline-block
      line-height: 26px
      text-align: center
      color: #fff
</style>
