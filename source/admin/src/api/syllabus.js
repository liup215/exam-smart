import { getRequest } from '@/utils/request.js'
import BaseApi from '@/config/baseApi'

var request = getRequest(BaseApi.USER_BASE_API)

export default {
  list: (data) => {
    return request({
      url: '/admin/syllabus/list',
      method: 'post',
      data: data
    })
  },
  add: (data) => {
    return request({
      url: '/admin/education/syllabus/add',
      method: 'post',
      data: data
    })
  },
  edit: (data) => {
    return request({
      url: '/admin/education/syllabus/update',
      method: 'post',
      data: data
    })
  },
  getById: (query) => {
    return request({
      url: '/admin/education/syllabus/getById',
      method: 'post',
      data: query
    })
  }
}
