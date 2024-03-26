import React, { Suspense } from "react";
import { Spin, theme } from "antd";
import useStore from "@/mobx/index";
import { observer } from "mobx-react-lite";
import { style } from "@/styles/theme/cssinJs";

// 路由懒加载组件
const LazyLoad = (Com: any, isCache: any = "") => {
	const { header } = useStore();
	let themeStyle = header.themeType === "light" ? style.light : style.dark;

	return (
		<Suspense
			fallback={
				<Spin
					size="large"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100%"
					}}
				/>
			}
		>
			{<Com {...{ themeStyle }} />}
		</Suspense>
	);
};

export default LazyLoad;
