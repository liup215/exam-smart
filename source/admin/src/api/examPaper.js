import { getRequest } from '@/utils/request.js'
import BaseApi from '@/config/baseApi'

var request = getRequest(BaseApi.USER_BASE_API)

export default {
  pageList: query => request({
    url: '/admin/exam/paper/list',
    method: 'post',
    data: query
  }),
  taskExamPage: query => request({
    url: '/admin/exam/paper/taskExamPage',
    method: 'post',
    data: query
  }),
  edit: query => request({
    url: '/admin/exam/paper/edit',
    method: 'post',
    data: query
  }),
  select: id => request({
    url: '/admin/exam/paper/selectById',
    data: {ID: id},
    method: 'post'
  }),
  deletePaper: id => request({
    url: '/admin/exam/paper/delete/' + id,
    method: 'post'
  }),
  pastPaperList: data => request({
    url: '/admin/exam/pastPaper/list',
    method: 'post',
    data: data
  }),
  addPastPaper: data => request({
    url: '/admin/exam/pastPaper/add',
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
  }),
}
