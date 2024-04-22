import { Layout, theme } from "antd";
import useStore from "@/mobx/index";
import { observer } from "mobx-react-lite";
import { isMobile } from "react-device-detect";
import CollapseIcon from "./components/CollapseIcon";
import BreadcrumbNav from "./components/BreadcrumbNav";
import TextAlign from "./components/TextAlign";
import ComponentSize from "./components/ComponentSize";
import Language from "./components/Language";
import Theme from "./components/Theme";
import Fullscreen from "./components/Fullscreen";
import AvatarIcon from "./components/AvatarIcon";
import GithubStar from "./components/GithubStar";
import "./index.less";

const LayoutHeader = observer(() => {
	const { header } = useStore();

	const { Header } = Layout;
	const {
		// @ts-ignore
		token: { themeStyle }
	} = theme.useToken();

	return (
		<Header
			style={{
				background: themeStyle.bgColor,
				borderBottomColor: themeStyle.borderColor
			}}
		>
			<div className="header-lf">
				<CollapseIcon />
				{!header.isMobileBool && <BreadcrumbNav />}
			</div>
			<div className="header-ri">
				{!header.isMobileBool && <GithubStar />}
				<TextAlign />
				<ComponentSize />
				<Language />
				<Theme />
				{!isMobile && <Fullscreen />}
				<AvatarIcon />
			</div>
		</Header>
	);
});

export default LayoutHeader;
