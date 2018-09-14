import * as types from './mutation-types'
import * as actions from './actions'

const $state = {
  info: {}
}

const mutations = {
  /**
   * 存储token信息
   * @param {Object} state Vuex state
   * @param {String} data data
   */
  [types.USER_INFO] (state, data) {
    state.info = data
  }
}

export default {
  state: $state,
  actions,
  mutations
}
