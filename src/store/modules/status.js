import * as types from '../types'

const state = {
  articleList: false
}

const mutations = {
  [types.ARTICLE_LIST] (state, bool) {
    state.articleList = bool
  }
}

export default {
  state,
  mutations
}
