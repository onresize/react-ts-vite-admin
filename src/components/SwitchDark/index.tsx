import { Switch } from "antd";
import './index.less'

const SwitchDark = (props: any) => {
	const { setThemeConfig, themeConfig } = props;

	return (
		<Switch
			className="dark"
			checkedChildren={<>🌞</>}
			unCheckedChildren={<>🌜</>}
		/>
	);
};

export default SwitchDark
