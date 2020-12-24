import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'


export function getRequest(baseUrl) {
  // 创建axios实例
  const service = axios.create({
    baseURL: baseUrl, // api的base_url
    timeout: 15000 // 请求超时时间
  })

  // request拦截器
  service.interceptors.request.use(config => {
    if (store.getters.token) {
      config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  }, error => {
    // Do something with request error
    Promise.reject(error)
  })

  // respone拦截器
  service.interceptors.response.use(
    response => {
    /**
    * code为非200是抛错 可结合自己业务进行修改
    */
      const res = response.data
      if (res.code !== 200) {
        Message.alert(res.message, '提示', {
          type: 'error'
        })

        // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
        // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        //   Message.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        //     okLabel: '重新登录',
        //     cancelLabel: '取消',
        //     type: 'warning'
        //   }).then(() => {
        //     store.dispatch('FedLogOut').then(() => {
        //       location.reload()// 为了重新实例化vue-router对象 避免bug
        //     })
        //   })
        // }
        return Promise.reject(new Error(res.message))
      } else {
        return response.data
      }
    },
    error => {
      if (typeof error.response === 'undefined') {
        Promise.reject(error)
      }
      if (error.response.code == '401') {
        store.dispatch('FedLogOut').then(() => {
          location.reload()// 为了重新实例化vue-router对象 避免bug
        })
      }
      // Message.alert(error, {
      //   title: '提示',
      //   type: 'error'
      // })
      return Promise.reject(error)
    }
  )

  return service
}
