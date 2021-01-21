import { getRequest } from '@/utils/request.js'

var request = getRequest(process.env.VUE_APP_BASE_API)

export default {
  pageList: query => request({
    url: '/question/list',
    method: 'post',
    data: query
  }),
  add: (data) => {
    return request({
      url: '/question/add',
      method: 'post',
      data: data
    })
  },
  edit: query => request({
    url: '/question/edit',
    method: 'post',
    data: query
  }),
  select: id => request({
    url: '/question/selectById?id=' + id,
    method: 'post',
    param: {id: id}
  }),
  deleteQuestion: id => request({
    url: '/question/delete/' + id,
    method: 'post'
  })
}
