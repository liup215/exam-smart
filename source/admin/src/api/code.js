import { getRequest } from '@/utils/request.js'

var request = getRequest(process.env.VUE_APP_BASE_API)

export default {
  list: (data) => {
    return request({
      url: '/code/list',
      method: 'post',
      data: data
    })
  },
  add: (data) => {
    return request({
      url: '/code/add',
      method: 'post',
      data: data
    })
  },
  edit: (data) => {
    return request({
      url: '/code/edit',
      method: 'post',
      data: data
    })
  },
  getById: (id) => {
    return request({
      url: '/code/getById?id=' + id,
      method: 'post'
    })
  }
}
