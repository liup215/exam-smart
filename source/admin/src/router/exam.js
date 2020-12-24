import Layout from '@/layout'

export default {
  path: '/exam',
  component: Layout,
  name: 'ExamPage',
  meta: {
    title: '卷题管理',
    icon: 'exam'
  },
  children: [
    {
      path: 'paper/list',
      component: () => import('@/views/exam/paper/list'),
      name: 'ExamPaperPageList',
      meta: { title: '试卷列表', noCache: true, icon: 'users' }
    },
    {
      path: 'paper/edit',
      component: () => import('@/views/exam/paper/edit'),
      name: 'ExamPaperEdit',
      meta: { title: '试卷编辑', noCache: true, activeMenu: '/exam/paper/list' },
      hidden: true
    },
    {
      path: 'pastPaper/list',
      component: () => import('@/views/exam/pastpaper/list'),
      name: 'PastPaperPageList',
      meta: { title: '真题试卷', noCache: true, icon: 'users' }
    },
    {
      path: 'pastPaper/add',
      component: () => import('@/views/exam/pastpaper/edit'),
      name: 'PastPaperAdd',
      meta: { title: '真题试卷添加', noCache: true, activeMenu: '/exam/pastPaper/list'},
      hidden: true
    },
    {
      path: 'pastPaper/edit',
      component: () => import('@/views/exam/pastpaper/edit'),
      name: 'PastPaperEdit',
      meta: { title: '真题试卷编辑', noCache: true, activeMenu: '/exam/pastPaper/list'},
      hidden: true
    },
    {
      path: 'question/list',
      component: () => import('@/views/exam/question/list'),
      name: 'ExamQuestionPageList',
      meta: { title: '题目列表', noCache: true, icon: 'users' }
    },
    { 
      path: 'question/edit',
      component: () => import('@/views/exam/question/edit/index'),
      name: 'QuestionEdit',
      meta: {title: '题目编辑', noCache: true, activeMenu: '/exam/question/list' },
      hidden: true
    },
    {
      path: 'question/edit/singleChoice',
      component: () => import('@/views/exam/question/edit/single-choice'),
      name: 'singleChoicePage',
      meta: { title: '单选题编辑', noCache: true, activeMenu: '/exam/question/list' },
      hidden: true
    },
    {
      path: 'question/edit/multipleChoice',
      component: () => import('@/views/exam/question/edit/multiple-choice'),
      name: 'multipleChoicePage',
      meta: { title: '多选题编辑', noCache: true, activeMenu: '/exam/question/list' },
      hidden: true
    },
    {
      path: 'question/edit/trueFalse',
      component: () => import('@/views/exam/question/edit/true-false'),
      name: 'trueFalsePage',
      meta: { title: '判断题编辑', noCache: true, activeMenu: '/exam/question/list' },
      hidden: true
    },
    {
      path: 'question/edit/gapFilling',
      component: () => import('@/views/exam/question/edit/gap-filling'),
      name: 'gapFillingPage',
      meta: { title: '填空题编辑', noCache: true, activeMenu: '/exam/question/list' },
      hidden: true
    },
    {
      path: 'question/edit/shortAnswer',
      component: () => import('@/views/exam/question/edit/short-answer'),
      name: 'shortAnswerPage',
      meta: { title: '简答题编辑', noCache: true, activeMenu: '/exam/question/list' },
      hidden: true
    }
  ]
}