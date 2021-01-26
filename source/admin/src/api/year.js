import { getRequest } from '@/utils/request.js'

var request = getRequest(process.env.VUE_APP_BASE_API)

export default {
  list: (data) => {
    return request({
      url: '/year/list',
      method: 'post',
      data: data
    })
  },
  add: (data) => {
    return request({
      url: '/year/add',
      method: 'post',
      data: data
    })
  },
  edit: (data) => {
    return request({
      url: '/year/edit',
      method: 'post',
      data: data
    })
  },
  getById: (id) => {
    return request({
      url: '/year/getById?id=' + id,
      method: 'post'
    })
  },
  getAll: () => {
    return request({
      url: '/year/all',
      method: 'post'
    })
  }
}
