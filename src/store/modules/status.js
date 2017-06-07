import * as types from '../types'

import getScrollData from 'src/utils/scroll'
import * as device from 'src/utils/device'

const state = {
  sideBar: false,
  scroll: {
    scrollTop: 0,
    scrollHeight: 0,
    windowHeight: 0,
    scrollBottom: 0
  },
  scrollDirection: true, // down: true | up: false
  navShrink: false,
  appReady: true,
  device: {
    width: device.deviceWidth(),
    height: device.deviceHeight(),
    isPc: device.isPc(),
    browserType: device.browserType(),
    isWx: device.isWechatAgent
  }
}

const getters = {
  // sideBar: ({status}) => status.sideBar
  // tips: 上面这种方法是错误的。这里的getters传入进来的不是state的根对象，
  // 而是当前的state对象，在这里也就相当于是state = state.status
  // 所以可以放心的用state
  sideBar: state => state.sideBar,
  scrollDirection: state => state.scrollDirection,
  navShrink: state => state.navShrink,
  appReady: state => state.appReady,
  device: state => state.device
}

const mutations = {
  [types.ARTICLE_LIST] (state) {
    state.sideBar = !state.sideBar
  },
  [types.SCROLLDATA] (state, scrollObj) {
    state.scrollDirection = scrollObj.scrollTop > state.scroll.scrollTop
    if (scrollObj.scrollTop > 210) {
      state.navShrink = true
    } else if (scrollObj.scrollTop < 50) {
      state.navShrink = false
    }
    state.scroll = scrollObj
  },
  [types.SCROLLTOP] () {
    document.querySelector('.app__content').scrollTop = 0
  },
  [types.APPREADY] (state, bool) {
    state.appReady = bool
  },
  [types.DEVICE] (state, device) {
    state.device = device
  }
}

const actions = {
  sideBarSwitch ({ commit }) {
    commit(types.ARTICLE_LIST)
  },
  pushScrollData ({ commit }) {
    commit(types.SCROLLDATA, getScrollData(), { silent: true })
  },
  scollTop ({ commit }) {
    commit(types.SCROLLTOP)
  },
  updateAppStatus ({ commit }, status) {
    commit(types.APPREADY, status)
  },
  device ({ commit }) {
    commit(types.DEVICE, {
      width: device.deviceWidth(),
      height: device.deviceHeight(),
      isPc: device.isPc(),
      browserType: device.browserType(),
      isWx: device.isWechatAgent
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
