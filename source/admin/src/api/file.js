import { getRequest } from '@/utils/request.js'
var request = getRequest(process.env.VUE_APP_BASE_API)

export default {
  uploadToken: () => {
    return request({
      url: '/util/qiniu/upload_token',
      method: 'get'
    })
  }
}
