import React, { lazy } from 'react'
import { LayoutIdx } from '../utils/layoutIdx'
import LazyLoad from '../utils/lazyLoad'
import { RouteObject } from '../interface'

const linkRouter: Array<RouteObject> = [
  {
    element: <LayoutIdx />,
    children: [
      {
        path: '/link/gitee',
        element: LazyLoad(lazy(() => import('@/pages/link/gitee'))),
        meta: {
          requiresAuth: true,
          title: 'Gitee仓库',
          key: 'gitee_key',
        },
      },
    ],
  },
]

export default linkRouter
