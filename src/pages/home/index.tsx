import React, { useContext, useState, useReducer, useRef, forwardRef, useImperativeHandle } from "react";
import { ThemeContext } from "@/styles/theme/cssinJs";
import { theme, Button } from "antd";
import useStore from "@/mobx/index";
import WithCard, { WrapCom } from "@/components/HOC/WithCard/index";
// @ts-ignore
import { home } from "./index.module.less";

const Home = (_props: any) => {
	const themeStyle: any = useContext(ThemeContext);
	const { header } = useStore();

	return <WrapCom></WrapCom>;
};

export default Home;
