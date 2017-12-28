import Cookies from 'js-cookie'

export default {
  token: Cookies.get('token') || '',
  authenticated: () => {
    if (Cookies.get('token')) {
      return true
    } else {
      return false
    }
  },
  setToken: token => {
    return Cookies.set('token', token, { expires: 1 })
  },
  removeToken: () => {
    Cookies.remove('token')
  }
}
