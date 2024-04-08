import React, { useContext, useState, useReducer, useRef, forwardRef, useImperativeHandle } from "react";
import { ThemeContext } from "@/styles/theme/cssinJs";
import { theme, Button } from "antd";
import useStore from "@/mobx/index";
// @ts-ignore
import { home } from "./index.module.less";

const Home = (_props: any) => {
	const themeStyle: any = useContext(ThemeContext);
	const { header } = useStore();

	return (
		<div
			className={`${home} card`}
			style={{
				// background: themeStyle.bgColor,
				border: header.themeType == "dark" ? `1px solid ${themeStyle.borderColor}` : "none",
				filter: header.themeType == "light" ? "grayscale(100%) invert(1)" : ""
			}}
		></div>
	);
};

export default Home;
