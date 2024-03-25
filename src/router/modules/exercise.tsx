import React, { lazy } from 'react'
import { LayoutIdx } from '../utils/layoutIdx'
import { RouteObject } from '../interface'

const ExciseRouter: Array<RouteObject> = [
  {
    path: '/excise',
    com: LayoutIdx,
    title: '实用功能',
    key: 'menu.utilities',
    children: [
      {
        path: '/excise/uploadBigFile',
        isCache: true,
        com: lazy(() => import('@/pages/excise/uploadBigFile')),
        title: '大文件上传',
        key: 'menu.bigFileUpload',
      },
    ],
  },
]

export default ExciseRouter
