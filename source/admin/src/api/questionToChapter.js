import { getRequest } from '@/utils/request.js'

var request = getRequest(process.env.VUE_APP_BASE_API)

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
