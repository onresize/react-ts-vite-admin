import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { AxiosCanceler } from '@/api/helper/axiosCancel'
import { searchRoute } from '@/utils/utils'
import { rootRouter } from '@/router/routes'
import { getToken } from '@/utils/authCookie'
import { ROUTER_WHITE_LIST } from '@/config/config'

const axiosCanceler = new AxiosCanceler()

// 路由守卫组件
const AuthRouter = (props: { children: JSX.Element }) => {
  const { pathname } = useLocation()
  const route = searchRoute(pathname, rootRouter) // 查询当前路由地址下的路由信息
  console.log('路由守卫组件--->', route)

  // 路由跳转前、清除所有请求
  axiosCanceler.removeAllPending()

  // 没有token则重定向登录页
  const token = getToken()
  if (!token && ROUTER_WHITE_LIST.indexOf(pathname) === -1)
    return <Navigate to="/login" replace />

  return props.children
}

export default AuthRouter
