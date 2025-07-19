import {
  cilBook,
  cilContact,
  cilFile,
  cilLan,
  cilListNumbered,
  cilPencil,
  cilPeople
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavItem, CNavTitle } from '@coreui/react'
import React from 'react'

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'ΛK⚡HΛY',
  //   // to: '/dashboard'
  //   to: '/TeachersList'
  // },
  {
    component: CNavTitle,
    name: 'Services'
  },

  {
    component: CNavItem,
    name: ' Services',
    to: '/theme/Services',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Services List',
    to: '/theme/ServicesList',
    icon: <CIcon icon={cilListNumbered} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Teachers'
  },
  {
    component: CNavItem,
    name: 'Teachers',
    to: '/theme/teachers',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Teachers List',
    to: '/theme/TeachersList',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Blog Post'
  },
  {
    component: CNavItem,
    name: 'Blog Post',
    to: '/theme/BlogPost',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Blog List',
    to: '/theme/BlogList',
    icon: <CIcon icon={cilLan} customClassName="nav-icon" />,
  }

]

export default _nav
