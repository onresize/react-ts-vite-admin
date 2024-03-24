import React, { lazy } from 'react'
import { LayoutIdx } from '../utils/layoutIdx'
import lazyLoad from '../utils/lazyLoad'
import { RouteObject } from '../interface'

const ExciseRouter: Array<RouteObject> = [
  {
    element: <LayoutIdx />,
    meta: {
      title: '实用功能',
      key: 'menu.utilities',
    },
    children: [
      {
        path: '/excise/uploadBigFile',
        element: lazyLoad(lazy(() => import('@/pages/excise/uploadBigFile'))),
        meta: {
          requiresAuth: true,
          title: '大文件上传',
          key: 'menu.bigFileUpload',
        },
      },
    ],
  },
]

export default ExciseRouter
