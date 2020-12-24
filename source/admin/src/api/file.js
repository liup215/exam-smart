import { getRequest } from '@/utils/request.js'
import BaseApi from '@/config/baseApi'

var request = getRequest(BaseApi.BASE_API)

export default {
  uploadToken: () => {
    return request({
      url: '/util/qiniu/upload_token',
      method: 'get'
    })
  }
}
