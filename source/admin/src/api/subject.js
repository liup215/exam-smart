import { getRequest } from '@/utils/request.js'
import BaseApi from '@/config/baseApi'

var request = getRequest(BaseApi.USER_BASE_API)

export default {
  list: () => {
    return request({
      url: '/admin/subject/all',
      method: 'post'
    })
  },
  pageList: query => {
    return request({
      url: '/admin/subject/list',
      method: 'post',
      data: query
    })
  },
  edit: query => {
    return request({
      url: '/admin/subject/edit',
      method: 'post',
      data: query
    })
  },
  add: query => {
    return request({
      url: '/admin/subject/add',
      method: 'post',
      data: query
    })
  },
  select: id => {
    return request({
      url: '/admin/subject/select/' + id,
      method: 'post'
    })
  }
}
