import * as types from '../types'

const state = {
  articleList: false,
  test: 123
}

const getters = {
  // articleList: ({status}) => status.articleList
  // tips: 上面这种方法是错误的。这里的getters传入进来的不是state的根对象，
  // 而是当前的state对象，在这里也就相当于是state = state.status
  // 所以可以放心的用state
  articleList: state => state.articleList
}

const mutations = {
  [types.ARTICLE_LIST] (state) {
    state.articleList = !state.articleList
  }
}

const actions = {
  articleListSwitch ({ commit }) {
    commit(types.ARTICLE_LIST)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
