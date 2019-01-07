import Vue from 'vue'
import Axios from 'axios'
// import Qs from 'qs'
import Element from 'element-ui'

const BASE_URL = '/api'

Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Axios.interceptors.request.use(config => {
  // 在发送请求之前做某事
  // console.log('拦截')
  // console.log(config)// 单次请求的配置信息对象
  if (['get', 'delete'].includes(config.method)) {
    let [url, params] = [config.url, config.params]
    if (params) {
      url += url.indexOf('?') < 0 ? '?' : '&'
      for (let [key, value] of Object.entries(params)) {
        if (value) {
          if (value instanceof Array || value instanceof Object) {
            value = JSON.stringify(value)
          }
          url += `${key}=${value}&`
        }
      }
      if (url.endsWith('&')) url = url.substring(0, url.length - 1)
    }
    config.url = encodeURI(url)
    config.params = null
  } else {
    config.transformRequest = [data => {
      if (data) {
        let ret = ''
        for (let [key, value] of Object.entries(data)) {
          if (value) {
            ret += encodeURIComponent(key) + '=' + encodeURIComponent(JSON.stringify(value)) + '&'
          }
        }
        return ret.endsWith('&') ? ret.substring(0, ret.length - 1) : ret
      }
    }]
  }
  config.baseURL = BASE_URL
  return config// 只有return config后，才能成功发送请求
}, error => {
  // 请求错误时做些事
  // console.log(error)
  return Promise.reject(error)
})
Axios.interceptors.response.use(response => {
  let data = response.data
  // console.log(data)
  // // token 已过期，重定向到登录页面
  // if (data.code == 4){
  //   localStorage.clear()
  //   router.replace({
  //     path: '/signin',
  //     query: {redirect: router.currentRoute.fullPath}
  //   })
  // }
  return data
}, error => {
  // console.log(error.response)
  Element.Notification.error({
    title: '错误',
    message: '请求错误',
    // customClass: 'bg-red',
    duration: 3000
  })
  // console.log(error)
  // Do something with response error
  return Promise.reject(error)
})

Vue.prototype.$axios = Axios
