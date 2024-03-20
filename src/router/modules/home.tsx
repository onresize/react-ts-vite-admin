import React from 'react'
import { LayoutIdx } from '../utils/layoutIdx'
import Home from '@/pages/home'
import { RouteObject } from '../interface'

// 首页模块
const homeRouter: Array<RouteObject> = [
  {
    element: <LayoutIdx />,
    children: [
      {
        path: '/home',
        element: <Home />,
        meta: {
          requiresAuth: true,
          title: '首页',
          key: 'home_key',
        },
      },
    ],
  },
]

export default homeRouter
