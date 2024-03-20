import { Switch } from "antd";
import './index.less'

const SwitchDark = (_props: any) => {

	return (
		<Switch
			className="dark"
			checkedChildren={<>🌞</>}
			unCheckedChildren={<>🌜</>}
		/>
	);
};

export default SwitchDark
