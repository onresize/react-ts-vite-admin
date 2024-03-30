import { Layout, theme } from "antd";
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

const LayoutHeader = () => {
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
				<BreadcrumbNav />
			</div>
			<div className="header-ri">
				<GithubStar />
				<TextAlign />
				<ComponentSize />
				<Language />
				<Theme />
				<Fullscreen />
				<AvatarIcon />
			</div>
		</Header>
	);
};

export default LayoutHeader;
