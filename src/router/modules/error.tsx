import React, { lazy } from "react";
import { RouteObject } from "../interface";

const errorRouter: Array<RouteObject> = [
	{
		path: "/403",
		com: lazy(() => import("@/components/ErrorMessage/403")),
		title: "403页面",
		key: "403_key"
	},
	{
		path: "/404",
		com: lazy(() => import("@/components/ErrorMessage/404")),
		title: "404页面",
		key: "404_key"
	},
	{
		path: "/500",
		com: lazy(() => import("@/components/ErrorMessage/500")),
		title: "500页面",
		key: "500_key"
	}
];

export default errorRouter;
