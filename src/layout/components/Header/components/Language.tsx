import { Dropdown, Menu } from "antd";
import type { MenuProps } from "antd";
import useStore from "@/mobx/index";
import { observer } from "mobx-react-lite";

const Language: React.FC = observer((_props: any) => {
	const { header } = useStore();

	const onClick: MenuProps["onClick"] = ({ key }: { key: string }) => {
		header.setLanguage(key);
	};

	const items: MenuProps["items"] = [
		{
			key: "zh",
			label: <span>简体中文</span>,
			disabled: header.language === "zh"
		},
		{
			key: "en",
			label: <span>English</span>,
			disabled: header.language === "en"
		}
	];

	const menuProps = {
		items,
		onClick
	};

	return (
		<Dropdown menu={menuProps} placement="bottom" trigger={["click"]} arrow={true}>
			<i className="icon-style iconfont icon-zhongyingwen"></i>
		</Dropdown>
	);
});

export default Language;
