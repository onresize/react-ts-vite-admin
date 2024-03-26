import { lazy } from "react";
import { RouteObject } from "./interface";
import { Navigate, useRoutes } from "react-router-dom";
import { LayoutIdx } from "./utils/layoutIdx";

const metaRouters: { [key: string]: any } = import.meta.globEager("./modules/*.tsx");

export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach(key => {
		routerArray.push(...metaRouters[item][key]);
	});
});
// console.log('拼接后的静态路由:', routerArray)

// 静态路由
export const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/home" replace></Navigate>,
		title: "入口页",
		key: "info_key1"
	},
	{
		path: "/login",
		com: lazy(() => import("@/pages/login")),
		title: "登录页",
		key: "login_key"
	},
	...routerArray,
	{
		path: "*",
		element: <Navigate to="/404"></Navigate>,
		title: "404页",
		key: "404_key"
	}
];
// console.log('完整路由：', rootRouter)
