import React, { useState, useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Spin, theme } from "antd";
import { useIntl } from "react-intl";
import { observer } from "mobx-react-lite";
import useStore from "@/mobx/index";
import classnames from "classnames";
import * as Icons from "@ant-design/icons";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import { getOpenKeys } from "@/utils/utils";
import "./index.less";
// @ts-ignore
import { menuArr } from "@/router/localRoutes";

const LayoutMenu: React.FC = observer((_props: any) => {
	const { pathname } = useLocation();
	const [selectKeys, setSelectKeys] = useState<string[]>([pathname]); // 指定高亮选中
	const [openKeys, setOpenKeys] = useState<string[]>([]); // 指定展开项
	const { header } = useStore();
	const { formatMessage: t } = useIntl();

	const {
		// @ts-ignore
		token: { themeStyle }
	} = theme.useToken();

	// 设置当前展开 subMenu
	const menuOpenChange = (openKeys: string[]) => {
		console.log("openKeys:", openKeys);
		if (openKeys?.length === 0 || openKeys?.length === 1) {
			return setOpenKeys(openKeys);
		}
		// @ts-ignore
		setOpenKeys([openKeys.at(-1)]);
	};

	// @ts-ignore
	const getItem = (
		languageID: string,
		label: React.ReactNode,
		key: React.Key,
		icon?: React.ReactNode,
		children?: any[],
		type?: "group"
	) => {
		return {
			key,
			icon,
			children,
			label: t({ id: languageID }),
			type
		} as any;
	};

	// 动态渲染 ICON
	const customIcons: { [key: string]: any } = Icons;
	const addIcon = (name: string) => {
		return React.createElement(customIcons[name]);
	};

	// 处理后台返回菜单 key 值为 antd 菜单需要的 key 值
	const deepLoopFloat = (menuData: any[], newArr: any[] = []) => {
		menuData.forEach((item: any) => {
			if (!item?.children?.length) {
				return newArr.push(getItem(item.languageID, item.title, item.path, addIcon(item.icon!)));
			}
			newArr.push(getItem(item.languageID, item.title, item.path, addIcon(item.icon!), deepLoopFloat(item.children)));
		});
		return newArr;
	};

	// 获取菜单列表并处理成 antd menu 需要的格式
	const [loading, setLoading] = useState(false);
	const [menuList, setMenuList] = useState<any[]>([]);
	const getMenuData = () => {
		try {
			setLoading(true);
			const deepMenuArr = deepLoopFloat(menuArr);
			// console.log('最终的menuList：', deepMenuArr)
			setMenuList(deepMenuArr);
		} finally {
			setLoading(false);
		}
	};

	const [bool, setBool] = useState(false);
	const listenWindow = () => {
		window.onresize = () => {
			const screenWidth = document.body.clientWidth;
			screenWidth <= 950 ? setBool(true) : setBool(false);

			if (!header.isCollapse && screenWidth < 1200) {
				header.setCollapse(true);
			}
			if (header.isCollapse && screenWidth > 1200) {
				header.setCollapse(false);
			}
		};
	};

	const navigate = useNavigate();
	const menuItemClick = ({ key }: { key: string }) => {
		navigate(key);
	};

	useLayoutEffect(() => {
		header.isHydrated && getMenuData();
		return () => {
			setMenuList([]);
		};
	}, [header.language]);

	useEffect(() => {
		window.addEventListener("resize", listenWindow);

		return () => {
			window.removeEventListener("resize", listenWindow);
		};
	}, []);

	// 刷新页面保持高亮
	useEffect(() => {
		setSelectKeys([pathname]);
		setOpenKeys(getOpenKeys(pathname));
	}, [pathname]);

	return (
		// <div className={classnames('menu', { menuHeight: bool })}>
		<div className={`menu`}>
			<Spin spinning={loading}>
				<Menu
					style={{
						borderRightColor: themeStyle.borderColor,
						borderRightStyle: "solid",
						borderRightWidth: "1px"
					}}
					theme="dark"
					mode="inline"
					triggerSubMenuAction="click"
					items={menuList}
					selectedKeys={selectKeys}
					openKeys={openKeys}
					onOpenChange={menuOpenChange}
					onClick={menuItemClick}
				></Menu>
			</Spin>
		</div>
	);
});

export default LayoutMenu;
