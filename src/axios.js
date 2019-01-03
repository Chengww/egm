import Vue from 'vue'
import Axios from 'axios'
import Qs from 'qs'

Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做某事
  // console.log('拦截')
  // console.log(config)// 单次请求的配置信息对象
  let params = { ...config.data }
  for (const [key, value] of Object.entries(params)) {
    params[key] = JSON.stringify(value)
  }
  config.data = Qs.stringify(params)
  config.url = '/api' + config.url
  return config// 只有return config后，才能成功发送请求
}, function (error) {
  // 请求错误时做些事
  return Promise.reject(error)
})

Vue.prototype.$axios = Axios
