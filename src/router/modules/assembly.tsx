import React, { lazy } from 'react'
import { LayoutIdx } from '../utils/layoutIdx'
import lazyLoad from '../utils/lazyLoad'
import { RouteObject } from '../interface'

const Assembly: Array<RouteObject> = [
  {
    element: <LayoutIdx />,
    meta: {
      title: '常用组件',
    },
    children: [
      {
        path: '/assembly/button',
        element: lazyLoad(lazy(() => import('@/pages/assembly/button'))),
        meta: {
          requiresAuth: true,
          title: '按钮',
          key: 'button_key',
        },
      },
    ],
  },
]

export default Assembly
