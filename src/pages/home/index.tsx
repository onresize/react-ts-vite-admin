import React, { useContext } from "react";
import { ThemeContext } from "@/styles/theme/cssinJs";
import { theme } from "antd";
import "./index.less";

const Home = (_props: any) => {
	const themeStyle: any = useContext(ThemeContext);

	return (
		<div
			className="home card"
			style={{
				borderColor: themeStyle.borderColor,
				background: themeStyle.bgColor
			}}
		></div>
	);
};

export default Home;
