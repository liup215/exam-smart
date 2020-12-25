import { getRequest } from '@/utils/request.js'
import BaseApi from '@/config/baseApi'

var request = getRequest(BaseApi.BASE_API)

export default {
  list: (data) => {
    return request({
      url: '/syllabus/list',
      method: 'post',
      data: data
    })
  },
  add: (data) => {
    return request({
      url: '/education/syllabus/add',
      method: 'post',
      data: data
    })
  },
  edit: (data) => {
    return request({
      url: '/education/syllabus/update',
      method: 'post',
      data: data
    })
  },
  getById: (query) => {
    return request({
      url: '/education/syllabus/getById',
      method: 'post',
      data: query
    })
  }
}
