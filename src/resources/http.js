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
  const resuorce = function (methods, resData = {}) {
    const data = Object.assign({}, baseData, resData)
    // 替换参数
    url = url.replace(/:([A-z]+)/g, (str, p1) => data[p1])
    return instance[methods](url, data)
  }
  return {
    get: resuorce.bind(this, 'get'),
    post: resuorce.bind(this, 'post'),
    put: resuorce.bind(this, 'put'),
    delete: resuorce.bind(this, 'delete')
  }
}

export default makeResource
