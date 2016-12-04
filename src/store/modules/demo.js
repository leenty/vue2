import * as types from '../types'

const state = {
  demoFollow: false
}

const getters = {
  demoFollowStatus: state => state.demoFollow ? '已关注' : '未关注'
}

const mutations = {
  [types.DEMO__VUEX_FOLLOW] (state, status = NaN) {
    state.demoFollow = isNaN(status) ? !state.demoFollow : status
  }
}

const actions = {
  demoFollowSwitch ({commit}, status) {
    commit(types.DEMO__VUEX_FOLLOW, status)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
