import React, { lazy } from 'react'
import { LayoutIdx } from '../utils/layoutIdx'
import lazyLoad from '../utils/lazyLoad'
import { RouteObject } from '../interface'

const homeRouter: Array<RouteObject> = [
  {
    element: <LayoutIdx />,
    children: [
      {
        path: '/home',
        element: lazyLoad(lazy(() => import('@/pages/home'))),
        meta: {
          requiresAuth: true,
          title: '首页',
          key: 'menu.home',
        },
      },
    ],
  },
]

export default homeRouter
