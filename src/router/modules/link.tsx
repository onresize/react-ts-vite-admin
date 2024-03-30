import React, { lazy } from "react";
import { LayoutIdx } from "../utils/layoutIdx";
import { RouteObject } from "../interface";

const linkRouter: Array<RouteObject> = [
	{
		path: "/link",
		com: LayoutIdx,
		title: "外部链接",
		key: "menu.externalLinks",
		children: [
			{
				path: "/link/github",
				com: lazy(() => import("@/pages/link/github/index")),
				title: "Github 仓库",
				key: "menu.github"
			},
			{
				path: "/link/gitee",
				com: lazy(() => import("@/pages/link/gitee/index")),
				title: "Gitee 仓库",
				key: "menu.gitee"
			}
		]
	}
];

export default linkRouter;
