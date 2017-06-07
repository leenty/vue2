var userAgent = navigator.userAgent
export const isPc = function () {
  // var userAgent = navigator.userAgent
  var Agents = ['Android', 'iPhone',
    'SymbianOS', 'Windows Phone',
    'iPad', 'iPod']
  var flag = true
  Agents.forEach(function (v) {
    if (userAgent.indexOf(v) > 0) {
      flag = false
      return false
    }
  })
  return flag
}

export const browserType = function () {
  var isOpera = userAgent.indexOf('Opera') > -1
  if (isOpera) {
    return 'Opera'
  }
  if (userAgent.indexOf('Firefox') > -1) {
    return 'Firefox'
  }
  if (userAgent.indexOf('Chrome') > -1) {
    return 'Chrome'
  }
  if (userAgent.indexOf('Safari') > -1) {
    return 'Safari'
  }
  if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera) {
    return 'IE'
  }
}

export const isWechatAgent = userAgent.indexOf('MicroMessenger') >= 0

export const deviceWidth = () => window.innerWidth

export const deviceHeight = () => window.innerHeight
