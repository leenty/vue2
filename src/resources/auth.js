import Cookies from 'js-cookie'

export default {
  token: Cookies.get('token') || '',
  authenticated: () => !!Cookies.get('token'),
  setToken: token => {
    return Cookies.set('token', token, { expires: 1 })
  },
  removeToken: () => {
    Cookies.remove('token')
  }
}
