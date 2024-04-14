import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Input, Button } from "antd";
import WithCard, { WrapCom } from "@/components/HOC/WithCard/index";
// @ts-ignore
import KeepAlive from "@/components/KeepAlive/index";
import { ThemeContext } from "@/styles/theme/cssinJs";
import { useAliveController } from "react-activation";
import "./index.less";

const UploadBigFile = (_props: any) => {
	const { pathname, search } = useLocation();
	const { refresh, refreshScope, drop, dropScope, clear } = useAliveController();
	let TagId = pathname + search;

	const reFreshClick = () => {
		// 刷新KeepAlive包裹的组件缓存
		refresh();
	};

	const dropClick = () => {
		// 卸载KeepAlive包裹的组件缓存
		dropScope();
	};

	return (
		// KeepAlive包裹后、默认缓存真实DOM、如：滚动条状态、输入框状态
		// cacheKey: 唯一值、官方说明：这个声明唯一且不变的值、为了确保缓存的稳定性
		// https://github.com/CJY0208/react-activation
		<WrapCom>
			{/* @ts-ignore */}
			<KeepAlive cacheKey={pathname}>
				<div className="uploadBigFile">
					<Input placeholder="KeepAlive缓存真实DOM、默认开启缓存" />
					<Button type="primary" onClick={reFreshClick}>
						刷新当前组件缓存
					</Button>
					<Button type="primary" onClick={dropClick}>
						卸载当前组件缓存
					</Button>
				</div>
			</KeepAlive>
		</WrapCom>
	);
};

export default UploadBigFile;
