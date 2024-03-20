import React from 'react'
import { useRoutes } from 'react-router-dom'
import { routerArray, rootRouter } from './routes'
// @ts-expect-error
const Router = () => useRoutes(rootRouter)

export default Router
