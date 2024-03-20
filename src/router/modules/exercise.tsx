import React, { lazy } from 'react'
import { LayoutIdx } from '../utils/layoutIdx'
import lazyLoad from '../utils/lazyLoad'
import { RouteObject } from '../interface'

// 练习模块
const ExciseRouter: Array<RouteObject> = [
  {
    element: <LayoutIdx />,
    meta: {
      title: '练习',
    },
    children: [
      {
        path: '/excise/uploadBigFile',
        element: lazyLoad(lazy(() => import('@/pages/excise/uploadBigFile'))),
        meta: {
          requiresAuth: true,
          title: '大文件上传',
          key: 'uploadBigFile_key',
        },
      },
    ],
  },
]

export default ExciseRouter
