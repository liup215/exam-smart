import Layout from '@/layout'

export default {
  path: '/education',
  component: Layout,
  name: 'EducationPage',
  meta: {
    title: '教育管理',
    icon: 'education'
  },
  alwaysShow: true,
  children: [
    {
      path: 'subject/list',
      component: () => import('@/views/education/subject/list'),
      name: 'EducationSubjectPage',
      meta: { title: '学科列表', noCache: true, icon: 'users' }
    },
    {
      path: 'subject/edit',
      component: () => import('@/views/education/subject/edit'),
      name: 'EducationSubjectEditPage',
      meta: { title: '学科编辑', noCache: true, activeMenu: '/education/subject/list' },
      hidden: true
    },
    {
      path: 'syllabus/list',
      component: () => import('@/views/education/syllabus/list'),
      name: 'EducationSyllabusList',
      meta: { title: '考纲列表', noCache: true, icon: 'users' }
    },
    {
      path: 'syllabus/chapter',
      component: () =>import('@/views/education/syllabus/chapter'),
      name: 'EducationSyllabusChapter',
      meta: { title: '考纲章节', noCache: true, icon: 'users'},
      hidden: true
    },
    {
      path: 'syllabus/edit',
      component: () => import('@/views/education/syllabus/edit'),
      name: 'EducationSyllabusEdit',
      meta: { title: '考纲编辑', noCache: true, icon: 'users'},
      hidden: true
    }
  ]
}