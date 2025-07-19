import React from 'react'
import Teachers from './views/theme/Teachers/Teachers'
import TeachersList from './views/theme/TeachersList/TeachersList'
import BlogPost from './views/theme/Blog Post/BlogPost'
import BlogList from './views/theme/Blog List/BlogList'
import EditServiceLIst from './views/EditPages/EditServiceLIst'
import EditTeahcerList from './views/EditPages/EditTeahcerList'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Services = React.lazy(() => import('./views/theme/Services/Services'))
const ServicesList = React.lazy(() => import('./views/theme/ServicesList/ServicesList'))



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Services, exact: true },
  { path: '/theme/Services', name: 'Services', element: Services },
  { path: '/theme/ServicesList', name: 'ServicesList', element: ServicesList },
  { path: '/theme/teachers', name: 'teachers', element: Teachers },
  { path: '/theme/teachersList', name: 'teachers', element: TeachersList },
  { path: '/theme/BlogPost', name: 'teachers', element: BlogPost },
  { path: '/theme/BlogList', name: 'teachers', element: BlogList },
  { path: '/EditPages/EditServiceLIst/:id', name: 'EditServiceLIst', element: EditServiceLIst },
  { path: '/EditPages/EditTeahcerList/:id', name: 'EditTeahcerList', element: EditTeahcerList },

]

export default routes
