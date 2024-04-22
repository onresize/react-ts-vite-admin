import { theme } from "antd";
import { observer } from "mobx-react-lite";
import useStore from "@/mobx/index";
import "./index.less";

const LayoutFooter = observer((props: any) => {
	const { header } = useStore();
	const {
		// @ts-ignore
		token: { themeStyle }
	} = theme.useToken();

	return (
		<>
			{header.footer && (
				<div
					className="footer"
					style={{
						borderTopColor: themeStyle.borderColor,
						background: themeStyle.bgColor
					}}
				>
					<a href="#" target="_blank" rel="noreferrer">
						2024 © react_ts_vite_admin.
					</a>
				</div>
			)}
		</>
	);
});

export default LayoutFooter;
