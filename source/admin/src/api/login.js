import { getRequest } from '@/utils/request.js'

var request = getRequest(process.env.VUE_APP_BASE_API)

export function login(data) {
  return request({
    url: '/vue-login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function getCurrentUser() {
  return request({
    url: '/current',
    method: 'post'
  })
}
