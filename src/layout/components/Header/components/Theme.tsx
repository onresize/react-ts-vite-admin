import { Drawer, Divider, Switch, theme } from "antd";
import { useState } from "react";
import { useIntl } from "react-intl";
import { FireOutlined, SettingOutlined } from "@ant-design/icons";
import SwitchDark from "@/components/SwitchDark";
import { observer } from "mobx-react-lite";
import useStore from "@/mobx/index";

const Theme = observer((props: any) => {
	const [visible, setVisible] = useState<boolean>(false);
	const { setThemeConfig, updateCollapse } = props;
	const { header } = useStore();
	const { formatMessage: t } = useIntl();

	const {
		// @ts-ignore
		token: { colorBgContainer, themeStyle }
	} = theme.useToken();

	const style = {
		color: themeStyle.fontColor
	};

	const change = (color: { target: any }) => {
		// console.log('主题色：', color.target.value)
		header.setThemeColor(color?.target?.value || header.themeColor);
	};

	return (
		<>
			<i
				className="icon-style iconfont icon-zhuti"
				onClick={() => {
					setVisible(true);
				}}
			></i>
			<Drawer
				title={t({ id: "header.themeSetting" })}
				closable={false}
				onClose={() => setVisible(false)}
				open={visible}
				width={320}
				style={{ borderLeft: "1px solid #4e4e4e" }}
			>
				{/* 全局主题 */}
				<Divider className="divider">
					<FireOutlined />
					<span>{t({ id: "header.globalTheme" })}</span>
				</Divider>
				<div className="theme-item">
					<span {...{ style }}>{t({ id: "header.darkMode" })}</span>
					<SwitchDark />
				</div>
				<div className="theme-item">
					<span {...{ style }}>{t({ id: "header.themeColor" })}</span>
					<input type="color" value={header.themeColor} onChange={change} style={{ cursor: "pointer" }} />
				</div>
				<br />
				{/* 界面设置 */}
				<Divider className="divider">
					<SettingOutlined />
					<span>{t({ id: "header.pageSetting" })}</span>
				</Divider>
				<div className="theme-item">
					<span {...{ style }}>{t({ id: "header.foldMenu" })}</span>
					<Switch checked={header.isCollapse} onChange={e => header.updateCollapse(e)} />
				</div>
				<div className="theme-item">
					<span {...{ style }}>{t({ id: "header.breadcrumbNav" })}</span>
					<Switch checked={header.breadcrumb} onChange={e => header.setBreadcrumb(e)} />
				</div>

				{/* <div className="theme-item">
          <span>标签栏</span>
          <Switch
            checked={!tabs}
            onChange={(e) => {}}
          />
        </div> */}

				<div className="theme-item">
					<span {...{ style }}>{t({ id: "header.footer" })}</span>
					<Switch checked={header.footer} onChange={e => header.setFooter(e)} />
				</div>
			</Drawer>
		</>
	);
});

export default Theme;
