<template>
  <div class="home">
    <article v-for="(item, index) in dataJson" :key="item.id">
      <h1>
        <a @click="goDetailsFn()">
          {{item.name}}
        </a>
      </h1>
      <div class="post-meta">
        <span>发表于 {{item.insertTime}}</span> &nbsp;&nbsp;|&nbsp;&nbsp;
        <span>分类于 {{item.classify}}</span> &nbsp;&nbsp;|&nbsp;&nbsp;
        <span>阅读数 {{item.rate}}次</span>
      </div>
      <p class="desc">撒；代付款；爱上对方可阿斯兰的护发素框架的发送到罚款收到回复阿萨德撒；代付款；爱上对方可阿斯兰的护发素框架的发送到罚款收到回复阿萨德撒；代付款；爱上对方可阿斯兰的护发素框架的发送到罚款收到回复阿萨德撒；代付款；爱上对方可阿斯兰的护发素框架的发送到罚款收到回复阿萨德撒；代付款；爱上对方可阿斯兰的护发素框架的发送到罚款收到回复阿萨德</p>
      <button class="btn" @click="goDetailsFn()">
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
        msg: 'home',
        dataJson: [{
          name: 'tanyetao',
          insertTime: '2017-7-6',
          classify: 222,
          item: 'ssss',
          filteredContent: '<div>撒；代付款；爱上对方可阿斯兰的护发素框架的发送到罚款收到回复阿萨德 </div>'
        },
        {
          name: 'tanyetao',
          insertTime: '2017-7-6',
          classify: 222,
          item: 'ssss',
          filteredContent: '<div>撒；代付款；爱上对方可阿斯兰的护发素框架的发送到罚款收到回复阿萨德 </div>'
        }]
      }
    },
    methods: {
      goDetailsFn () {
        this.goDetails(true)
        this.$router.push('/articleDetails')
      },
      lowEnough () {
        let pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight)// 滚动内容的高度

        let viewportHeight = window.innerHeight || // 窗口的高度
            document.documentElement.clientHeight ||
            document.body.clientHeight || 0

        let scrollHeight = window.pageYOffset || // 滚动的距离
            document.documentElement.scrollTop ||
            document.body.scrollTop || 0

        return pageHeight - viewportHeight - scrollHeight === 0
      },
      loadMore () {
        this.$http.get('/articleList')
          .then((response) => {
            if (response.result) {
              this.dataJson = this.dataJson.concat(response.datas)
            } else {
              alert(response.msg)
            }
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
      },
      ...mapActions(['goDetails'])
    },
    computed: {
      // filteredContent () {
      //   for (let i = 0; i < this.dataJson.length; i++) {
      //     const el = this.dataJson[i]
      //     return el.content.slice(0, 150)
      //   }
      // }
    },
    created () {
      // this.loadMore()
    },
    mounted () {
      // window.addEventListener('scroll', () => {
      //   console.log(this.lowEnough())
      //   if (this.lowEnough()) {
      //     this.loadMore()
      //   }
      // }, false)
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
