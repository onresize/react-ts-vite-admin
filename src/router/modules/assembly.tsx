import React, { lazy } from "react";
import { LayoutIdx } from "../utils/layoutIdx";
import { RouteObject } from "../interface";

const Assembly: Array<RouteObject> = [
	{
		path: "/assembly",
		com: LayoutIdx,
		title: "常用组件",
		key: "menu.widget",
		children: [
			{
				path: "/assembly/button",
				com: lazy(() => import("@/pages/assembly/button")),
				title: "按钮",
				key: "menu.button"
			},
			{
				path: "/assembly/swiper",
				com: lazy(() => import("@/pages/assembly/swiper")),
				title: "轮播图",
				key: "menu.swiper"
			},
		]
	}
];

export default Assembly;
