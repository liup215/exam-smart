import { getRequest } from '@/utils/request.js'

var request = getRequest(process.env.VUE_APP_BASE_API)

export default {
  chapterTree: (data) => {
    return request({
      url: "/chapter/tree",
      method: "post",
      data: data
    })
  },
  chapterAdd: (data) => {
    return request({
      url: "/chapter/add",
      method: "post",
      data: data
    })
  },
  chapterUpdate: (data) => {
    return request({
      url: "/chapter/update",
      method: "post",
      data: data
    })
  },
  chapterDelete: (data) => {
    return request({
      url: "/chapter/delete",
      method: "post",
      data: data
    })
  }
}