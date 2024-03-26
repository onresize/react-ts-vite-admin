import React, { Fragment } from 'react'
import { rootRouter } from './routes'
import { useRoutes } from 'react-router-dom'
import LazyLoad from '@/router/utils/lazyLoad'

const getRoutes = (routes: any) => {
  return routes.map((route: any) => {
    if (route.children) {
      route.children = getRoutes(route.children)
    }
    route.element = route?.element
      ? route.element
      : LazyLoad(route.com, route.isCache)
    return route
  })
}
// console.log('插入后的路由：', getRoutes(rootRouter))

// @ts-ignore
// const Router = () => useRoutes(rootRouter)

const Router = () => useRoutes(getRoutes(rootRouter))
export default Router
