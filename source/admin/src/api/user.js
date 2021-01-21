import { getRequest } from '@/utils/request.js'

var request = getRequest(process.env.VUE_APP_BASE_API)

export function getUserPageList(data) {
  return request({
    url: '/user/page/list',
    method: 'post',
    data: data
  })
}

export function getUserEventPageList(data) {
  return request({
    url: '/event/list',
    method: 'post',
    data: data
  })
}

export function createUser(data) {
  return request({
    url: '/create',
    method: 'post',
    data: data
  })
}

export function selectUser(data) {
  return request({
    url: '/select/' + data,
    method: 'post',
  })
}

export function getCurrentUser() {
  return request({
    url: '/current',
    method: 'post'
  })
}

export function updateUser(data) {
  return request({
    url: '/update',
    method: 'post',
    data
  })
}

export function changeStatus(data) {
  return request({
    url: '/changeStatus/' + data,
    method: 'post'
  })
}

export function deleteUser(data) {
  return request({
    url: '/data',
    method: 'post',
    data: data
  })
}

export function selectByUserName(data) {
  return request({
    url: '/selectByUserName',
    method: 'post',
    data: data
  })
}

// export default {
//   getUserPageList: query => post('/api/admin/user/page/list', query),
//   getUserEventPageList: query => post('/api/admin/user/event/page/list', query),
//   createUser: query => post('/api/admin/user/edit', query),
//   selectUser: id => post('/api/admin/user/select/' + id),
//   getCurrentUser: () => post('/api/admin/user/current'),
//   updateUser: query => post('/api/admin/user/update', query),
//   changeStatus: id => post('/api/admin/user/changeStatus/' + id),
//   deleteUser: id => post('/api/admin/user/delete/' + id),
//   selectByUserName: query => post('/api/admin/user/selectByUserName', query)
// }

