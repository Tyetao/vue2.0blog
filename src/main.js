// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {sync} from 'vuex-router-sync' // 同步路由与组件状态
import store from './store'

import '@/assets/css/main'

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
!((w, cb) => {
  var e = w.document
  var t = e.documentElement
  var o = 'orientationchange' in w ? 'orientationchange' : 'resize'
  var a = function () {
    if (!w.loading) {
      w.loading = t.querySelector('#app-wrapper-mode')
      w.loading.style.display = 'block'
      cb()
    }
  }
  // 0 == false
  e.addEventListener && (w.addEventListener(o, a, !1), e.addEventListener('DOMContentLoaded', a, !1))
})(window, () => {
  let loading = function (show) {
    show ? window.loading.style.display = 'block' : window.loading.style.display = 'none'
  }

  // axios.defaults.withCredentials = true
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  axios.defaults.baseURL = process.env.host
  axios.interceptors.request.use((config) => {
    loading(true)
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  axios.interceptors.response.use((response) => {
    loading(false)
    return response.data
  }, (error) => {
    return Promise.reject(error)
  })

  let bus = new Vue() // 中央事件总线(非父子之间通信)
  Vue.prototype.$http = axios
  Vue.prototype.$loading = loading
  Vue.prototype.$bus = bus

  router.beforeEach((to, from, next) => {
    window.loading.style.display = 'block'
    next()
  })

  router.afterEach((to, from, next) => {
    window.loading.style.display = 'none'
    bus.$emit('page-active')
  })

  sync(store, router)

  window.app = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
      App
    }
  })
})
