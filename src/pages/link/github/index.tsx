import React, { useContext } from "react";
import { ThemeContext } from "@/styles/theme/cssinJs";

const Github = (_props: any) => {
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
				GitHub 仓库：
				<a href="https://github.com/onresize/react-ts-vite-admin" target="_blank" rel="noreferrer">
					https://github.com/onresize/react-ts-vite-admin
				</a>{" "}
				🍒🍉🍊
			</span>
		</div>
	);
};

export default Github;
