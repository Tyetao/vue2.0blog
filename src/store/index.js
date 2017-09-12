/**
 * Created by liuqingling on 16/10/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutation'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
export default store
