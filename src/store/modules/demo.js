import * as types from '../types'

const state = {
  demoFollow: false,
  demoFollowPending: false
}

const getters = {
  demoFollowStatus: state => state.demoFollow ? '已关注' : '未关注'
}

const mutations = {
  [types.DEMO__VUEX_FOLLOW] (state, status = NaN) {
    state.demoFollow = isNaN(status) ? !state.demoFollow : status
  },
  [types.DEMO__VUEX_FOLLOW_PENDING] (state, status = NaN) {
    state.demoFollowPending = isNaN(status) ? !state.demoFollowPending : status
  }
}

const actions = {
  demoFollowAjax ({commit}, status) {
    commit(types.DEMO__VUEX_FOLLOW_PENDING)
    setTimeout(() => {
      commit(types.DEMO__VUEX_FOLLOW_PENDING)
      commit(types.DEMO__VUEX_FOLLOW, status)
    }, 2000)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
