import { getRequest } from '@/utils/request.js'
import BaseApi from '@/config/baseApi'

var request = getRequest(BaseApi.USER_BASE_API)

export default {
  list: () => {
    return request({
      url: '/admin/education/subject/all',
      method: 'post'
    })
  },
  pageList: query => {
    return request({
      url: '/admin/education/subject/list',
      method: 'post',
      data: query
    })
  },
  edit: query => {
    return request({
      url: '/admin/education/subject/edit',
      method: 'post',
      data: query
    })
  },
  add: query => {
    return request({
      url: '/admin/education/subject/add',
      method: 'post',
      data: query
    })
  },
  select: id => {
    return request({
      url: '/admin/education/subject/select/' + id,
      method: 'post'
    })
  }
}
