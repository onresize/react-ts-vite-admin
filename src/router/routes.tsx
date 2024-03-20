import { RouteObject } from './interface'
import { Navigate, useRoutes } from 'react-router-dom'
import { LayoutIdx } from './utils/layoutIdx'
import Login from '@/pages/login'

const metaRouters: { [key: string]: any } = import.meta.globEager(
  './modules/*.tsx'
)

export const routerArray: RouteObject[] = []
Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item]).forEach((key) => {
    routerArray.push(...metaRouters[item][key])
  })
})
// console.log('拼接后的静态路由:', routerArray)

// 静态路由
export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login"></Navigate>,
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login',
    },
  },
  ...routerArray,
  {
    path: '*',
    element: <Navigate to="/404"></Navigate>,
  },
]
console.log('完整路由：', rootRouter)
