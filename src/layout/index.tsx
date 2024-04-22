import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme, Alert } from "antd";
import useStore from "@/mobx/index";
import { observer } from "mobx-react-lite";
import LayoutMenu from "./components/Menu";
import LayoutHeader from "./components/Header";
import LayoutTabs from "./components/Tabs";
import LayoutFooter from "./components/Footer";
import SmokeCat from "./components/SmokeCat";
import "./index.less";

const LayoutIndex: React.FC = observer((_props: any) => {
	const { Sider, Content } = Layout;
	const { header } = useStore();

	const { ErrorBoundary } = Alert;

	return (
		<section className="container APP" color-mode={header.themeType}>
			<Sider trigger={null} collapsed={header.isCollapse} width={220}>
				<LayoutMenu></LayoutMenu>
			</Sider>
			<Layout>
				<LayoutHeader></LayoutHeader>
				{/* <LayoutTabs></LayoutTabs> */}
				<ErrorBoundary>
					<Content>
						<Outlet></Outlet>
					</Content>
				</ErrorBoundary>
				{!header.isMobileBool && <LayoutFooter />}
				{!header.isMobileBool && <SmokeCat />}
			</Layout>
		</section>
	);
});

export default LayoutIndex;
