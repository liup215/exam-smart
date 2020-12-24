import { getRequest } from '@/utils/request.js'
import BaseApi from '@/config/baseApi'

var request = getRequest(BaseApi.USER_BASE_API)

export default {
  chapterTree: (data) => {
    return request({
      url: "/admin/chapter/tree",
      method: "post",
      data: data
    })
  },
  chapterAdd: (data) => {
    return request({
      url: "/admin/chapter/add",
      method: "post",
      data: data
    })
  },
  chapterUpdate: (data) => {
    return request({
      url: "/admin/chapter/update",
      method: "post",
      data: data
    })
  },
  chapterDelete: (data) => {
    return request({
      url: "/admin/chapter/delete",
      method: "post",
      data: data
    })
  }
}