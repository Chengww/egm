import Vue from 'vue'
import Axios from 'axios'
import Qs from 'qs'
import Element from 'element-ui'

const BASE_URL = '/api'
Axios.interceptors.request.use(config => {
  // 在发送请求之前做某事
  // console.log('拦截')
  // console.log(config)// 单次请求的配置信息对象
  if (['get', 'delete'].includes(config.method)) {
    // var params = { ...config.params }

    // for (let [key, value] of Object.entries(params)) {
    //   if (value instanceof Array) {
    //     params[key] = JSON.stringify(value)
    //   } else if (value instanceof Object) {
    //     params[key] = JSON.stringify(value)
    //   } else if (value != null) {
    //     params[key] = value
    //   }
    // }
    // config.params = params
    // config.headers = { 'Content-Type': 'application/json;charset=UTF-8' }
    // for (let [key, value] of Object.entries(params)) {
    //   if (value != null) {
    //     url += key + '=' + value + '&'
    //   }
    // }
    config.paramsSerializer = params => {
      return Qs.stringify(params, { arrayFormat: 'repeat' })
    }
  } else {
    // config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    // config.headers = { 'Content-Type': 'application/json;charset=UTF-8' }
    // var params = { ...config.data }

    // for (let [key, value] of Object.entries(params)) {
    //   if (value instanceof Array) {
    //     params[key] = JSON.stringify(value)
    //   } else if (value instanceof Object) {
    //     params[key] = JSON.stringify(value)
    //   } else if (value != null) {
    //     params[key] = value
    //   }
    // }

    // config.data = JSON.stringify(params)
    // config.data = Qs.stringify({ ...config.data }, {
    //   arrayFormat: 'indices'
    // })
  }
  // console.log(config.data, config.params)
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
