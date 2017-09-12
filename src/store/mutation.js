import * as types from './mutation-types'

const mutations = {
  [types.SET_ARTICLE] (state, article) {
    state.article = article
  },
  [types.SET_SHOW_LOGO] (state, flag) {
    state.showLogo = flag
  }
}

export default mutations
