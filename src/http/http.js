import axios from 'axios'
// import router from '../router'
// import store from '../store'
// import { Message } from 'element-ui'

axios.defaults.timeout = 30000// 超时
axios.defaults.baseURL = ''
// axios.defaults.baseURL = "http://10.100.173.18:8080";

// 请求初始化配置

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.withCredentials = false// cookie验证

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 请求初始化配置

  if (config.url && config.url.indexOf('login') === -1) { // 确保url正确
    // post方法
    if (config.method === 'post') {
    } else {
      // get方法
    }
  };

  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 非正常的200

  // 超时
  return response
}, function (error) {
  // 返回的报错
  if (error.response) {
    // 有返回的报错
  } else {
    // 没有返回报错
    error.response = {}
    error.response.data = {}
    // 超时或者其他异常
    error.response.data.message = '服务器异常'
  }

  return Promise.reject(error.response)
})
export default axios
