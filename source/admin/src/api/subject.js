import { getRequest } from '@/utils/request.js'

var request = getRequest(process.env.VUE_APP_BASE_API)

export default {
  list: () => {
    return request({
      url: '/subject/all',
      method: 'post'
    })
  },
  pageList: query => {
    return request({
      url: '/subject/list',
      method: 'post',
      data: query
    })
  },
  edit: query => {
    return request({
      url: '/subject/edit',
      method: 'post',
      data: query
    })
  },
  add: query => {
    return request({
      url: '/subject/add',
      method: 'post',
      data: query
    })
  },
  select: id => {
    return request({
      url: '/subject/select/' + id,
      method: 'post'
    })
  }
}
