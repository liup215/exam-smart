import { getRequest } from '@/utils/request.js'

var request = getRequest(process.env.VUE_APP_BASE_API)

export function index() {
  return request({
    url: '/dashboard',
    method: 'post'
  })
}