import { getRequest } from '@/utils/request.js'
import BaseApi from '@/config/baseApi'

var request = getRequest(BaseApi.BASE_API)

export function index() {
  return request({
    url: '/admin/dashboard',
    method: 'post'
  })
}