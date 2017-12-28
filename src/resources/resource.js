import axios from 'axios'
import auth from './auth'

const instance = axios.create({
  baseURL: 'http://localhost:8889/',
  // baseURL: 'http://api.leenty.com/'
  timeout: 1000
})

instance.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded'
  }
  return config
}, Promise.reject)

instance.interceptors.response.use(({data}) => {
  if (data.success && data.token) {
    auth.setToken(data.token)
  }
  return data
}, Promise.reject)

const makeResource = function (url, baseData = {}) {
  const resuorce = function (methods, data = {}) {
    return instance[methods](url, Object.assign({}, baseData, data))
  }
  return {
    get: resuorce.bind(this, 'get'),
    post: resuorce.bind(this, 'post'),
    put: resuorce.bind(this, 'put'),
    delete: resuorce.bind(this, 'delete')
  }
}

export const user = makeResource('/auth/user')
export const user1 = makeResource('/auth/user/1')
export const comment = makeResource('/api/comment')
