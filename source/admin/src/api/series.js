import { getRequest } from '@/utils/request.js'

var request = getRequest(process.env.VUE_APP_BASE_API)

export default {
  list: (data) => {
    return request({
      url: '/series/list',
      method: 'post',
      data: data
    })
  },
  add: (data) => {
    return request({
      url: '/series/add',
      method: 'post',
      data: data
    })
  },
  edit: (data) => {
    return request({
      url: '/series/edit',
      method: 'post',
      data: data
    })
  },
  getById: (id) => {
    return request({
      url: '/series/getById?id=' + id,
      method: 'post'
    })
  },
  getAll: () => {
    return request({
      url: '/series/all',
      method: 'post'
    })
  }
}
