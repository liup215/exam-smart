import { getRequest } from '@/utils/request.js'
import BaseApi from '@/config/baseApi'

var request = getRequest(BaseApi.BASE_API)

export default {
  pageList: query => request({
    url: '/exam/paper/list',
    method: 'post',
    data: query
  }),
  taskExamPage: query => request({
    url: '/exam/paper/taskExamPage',
    method: 'post',
    data: query
  }),
  edit: query => request({
    url: '/exam/paper/edit',
    method: 'post',
    data: query
  }),
  select: id => request({
    url: '/exam/paper/selectById',
    data: {id: id},
    method: 'post'
  }),
  download: id => request({
    url: '/admin/exam/paper/download?id=' + id,
    method: 'get'
  }),
  deletePaper: id => request({
    url: '/exam/paper/delete/' + id,
    method: 'post'
  }),
  pastPaperList: data => request({
    url: '/exam/pastPaper/list',
    method: 'post',
    data: data
  }),
  addPastPaper: data => request({
    url: '/exam/pastPaper/add',
    method: 'post',
    data: data
  }),
  editPastPaper: data => request({
    url: '/admin/exam/pastPaper/edit',
    method: 'post',
    data: data
  }),
  selectPastPaper: id => request({
    url: '/admin/exam/pastPaper/selectById',
    data: {ID: id},
    method: 'post'
  })
}
