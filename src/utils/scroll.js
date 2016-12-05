const selector = '.app__content'

// 滚动条在Y轴上的滚动距离
function getScrollTop (scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0) {
  scrollTop = document.querySelector(selector).scrollTop
  return scrollTop
}
// 文档的总高度
function getScrollHeight (scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0) {
  scrollHeight = document.querySelector(selector).scrollHeight
  return scrollHeight
}
// 浏览器视口的高度
function getWindowHeight (windowHeight = 0) {
  if (document.compatMode === 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight
  } else {
    windowHeight = document.body.clientHeight
  }
  return windowHeight
}

const getScrollData = function () {
  let scrollTop = getScrollTop()
  let scrollHeight = getScrollHeight()
  let windowHeight = getWindowHeight()
  return {
    scrollTop,
    scrollHeight,
    windowHeight,
    scrollBottom: scrollHeight - scrollTop - windowHeight
  }
}

export default getScrollData
