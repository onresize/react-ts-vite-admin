import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { LayoutIdx } from '../utils/layoutIdx'
import { RouteObject } from '../interface'

const homeRouter: Array<RouteObject> = [
  {
    path: '/',
    com: LayoutIdx,
    title: '入口页',
    key: 'info_key2',
    children: [
      {
        path: '/home',
        com: lazy(() => import('@/pages/home')),
        title: '首页',
        key: 'menu.home',
      },
    ],
  },
]

export default homeRouter
