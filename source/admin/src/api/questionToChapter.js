import { getRequest } from '@/utils/request.js'
import BaseApi from '@/config/baseApi'

var request = getRequest(BaseApi.BASE_API)

export default {
  add: (data) => {
    return request({
      url: '/questionToChapter/add',
      method: 'post',
      data: data
    })
  },
  delete: data => request({
    url: '/questionToChapter/delete',
    method: 'post',
    data: data
  })
}
