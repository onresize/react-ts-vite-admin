import React, { lazy } from 'react'
import { LayoutIdx } from '../utils/layoutIdx'
import LazyLoad from '../utils/lazyLoad'
import { RouteObject } from '../interface'

const linkRouter: Array<RouteObject> = [
  {
    element: <LayoutIdx />,
    meta: {
      title: '外部链接',
    },
    children: [
      {
        path: '/link/gitee',
        element: LazyLoad(lazy(() => import('@/pages/link/gitee/index'))),
        meta: {
          requiresAuth: true,
          title: 'Gitee 仓库',
          key: 'gitee_key',
        },
      },
    ],
  },
]

export default linkRouter
