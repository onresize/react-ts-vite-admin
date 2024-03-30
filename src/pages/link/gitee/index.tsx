import React, { useContext } from "react";
import { ThemeContext } from "@/styles/theme/cssinJs";

const Gitee = (_props: any) => {
	const themeStyle: any = useContext(ThemeContext);

	return (
		<div
			className="card content-box"
			style={{
				borderColor: themeStyle.borderColor,
				background: themeStyle.bgColor
			}}
		>
			<span className="text">
				Gitee 仓库：
				<a href="https://gitee.com/onresize/react-ts-vite-admin" target="_blank" rel="noreferrer">
					https://gitee.com/onresize/react-ts-vite-admin
				</a>{" "}
				🍒🍉🍊
			</span>
		</div>
	);
};

export default Gitee;
