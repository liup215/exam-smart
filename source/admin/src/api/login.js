import { getRequest } from '@/utils/request.js'
import BaseApi from '@/config/baseApi'

var request = getRequest(BaseApi.USER_BASE_API)

export function login(data) {
  return request({
    url: '/admin/vue-login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}

export function getCurrentUser() {
  return request({
    url: '/admin/current',
    method: 'post'
  })
}
