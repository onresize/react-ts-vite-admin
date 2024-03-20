import React from 'react'
import { useRoutes } from 'react-router-dom'
import { routerArray, rootRouter } from './routes'

// @ts-ignore
const Router = () => useRoutes(rootRouter)
export default Router
