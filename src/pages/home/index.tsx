import React, { useContext, useState, useReducer, useRef, forwardRef, useImperativeHandle } from "react";
import { ThemeContext } from "@/styles/theme/cssinJs";
import { theme, Button } from "antd";
// @ts-ignore
import { home } from "./index.module.less";

const Home = (_props: any) => {
	const themeStyle: any = useContext(ThemeContext);

	return (
		<div
			className={`${home} card`}
			style={{
				borderColor: themeStyle.borderColor,
				background: themeStyle.bgColor
			}}
		></div>
	);
};

export default Home;
