import { getRequest } from '@/utils/request.js'

var request = getRequest(process.env.VUE_APP_BASE_API)

export function getUserPageList(data) {
  return request({
    url: '/admin/user/page/list',
    method: 'post',
    data: data
  })
}

export function getUserEventPageList() {
  return request({
    url: '/dashboard',
    method: 'post'
  })
}

export function createUser() {
  return request({
    url: '/aa',
    method: 'post'
  })
}

export function selectUser() {
  return request({
    url: '/aa',
    method: 'post'
  })
}

export function getCurrentUser() {
  return request({
    url: '/aa',
    method: 'post'
  })
}

export function updateUser() {
  return request({
    url: '/aa',
    method: 'post'
  })
}

export function changeStatus() {
  return request({
    url: '/aa',
    method: 'post'
  })
}

export function deleteUser() {
  return request({
    url: '/aa',
    method: 'post'
  })
}

export function selectByUserName() {
  return request({
    url: '/aa',
    method: 'post'
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
