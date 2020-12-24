import { getRequest } from '@/utils/request.js'
import BaseApi from '@/config/baseApi'

var request = getRequest(BaseApi.BASE_API)

export default {
  pageList: query => request({
    url: '/admin/question/list',
    method: 'post',
    data: query
  }),
  add: (data) => {
    return request({
      url: '/admin/question/add',
      method: 'post',
      data: data
    })
  },
  edit: query => request({
    url: '/admin/question/edit',
    method: 'post',
    data: query
  }),
  select: id => request({
    url: '/admin/question/selectById?id=' + id,
    method: 'post',
    param: {id: id}
  }),
  deleteQuestion: id => request({
    url: '/admin/question/delete/' + id,
    method: 'post'
  })
}
