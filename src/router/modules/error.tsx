import React, { lazy } from 'react'
import lazyLoad from '../utils/lazyLoad'
import { RouteObject } from '../interface'

const errorRouter: Array<RouteObject> = [
  {
    path: '/403',
    element: lazyLoad(lazy(() => import('@/components/ErrorMessage/403'))),
    meta: {
      requiresAuth: true,
      title: '403页面',
      key: '403_key',
    },
  },
  {
    path: '/404',
    element: lazyLoad(lazy(() => import('@/components/ErrorMessage/404'))),
    meta: {
      requiresAuth: false,
      title: '404页面',
      key: '404_key',
    },
  },
  {
    path: '/500',
    element: lazyLoad(lazy(() => import('@/components/ErrorMessage/500'))),
    meta: {
      requiresAuth: false,
      title: '500页面',
      key: '500_key',
    },
  },
]

export default errorRouter
