import Layout from '@/layout'

export default{
  path: '/user',
  component: Layout,
  // component: () => import('@/views/user'),
  name: 'UserPage',
  meta: {
    title: '用户管理',
    icon: 'users'
  },
  children: [
    {
      path: 'student/list',
      component: () => import('@/views/user/student/list'),
      name: 'UserStudentPageList',
      meta: { title: '学生列表', noCache: true, icon: 'users' }
    },
    {
      path: 'student/edit',
      component: () => import('@/views/user/student/edit'),
      name: 'UserStudentEdit',
      meta: { title: '学生编辑', noCache: true, activeMenu: '/user/student/list',  },
      hidden: true
    },
    {
      path: 'teacher/list',
      component: () => import('@/views/user/teacher/list'),
      name: 'UserTeacherPageList',
      meta: { title: '教师列表', noCache: true, icon: 'users' }
    },
    {
      path: 'teacher/edit',
      component: () => import('@/views/user/teacher/edit'),
      name: 'UserTeacherEdit',
      meta: { title: '教师编辑', noCache: true, activeMenu: '/user/teacher/list' },
      hidden: true
    },
    {
      path: 'admin/list',
      component: () => import('@/views/user/admin/list'),
      name: 'UserAdminPageList',
      meta: { title: '管理员列表', noCache: true, icon: 'users' }
    },
    {
      path: 'admin/edit',
      component: () => import('@/views/user/admin/edit'),
      name: 'UserAdminEdit',
      meta: { title: '管理员编辑', noCache: true, activeMenu: '/user/admin/list' },
      hidden: true
    }
  ]
}
