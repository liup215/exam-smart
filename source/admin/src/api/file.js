import { getRequest } from '@/utils/request.js'
import BaseApi from '@/config/baseApi'

var request = getRequest(BaseApi.SYSTEM_API)

export default {
  uploadToken: () => {
    return request({
      url: '/util/qiniu/upload_token',
      method: 'get'
    })
  }
}
