import * as types from './mutation-types'

export const goDetails = function ({
  commit,
  state
}, showLogo) {
  commit(types.SET_SHOW_LOGO, showLogo)
}
