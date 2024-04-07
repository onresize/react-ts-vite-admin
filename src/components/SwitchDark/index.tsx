import { Switch } from "antd";
import useStore from "@/mobx/index";
import styles from "./index.module.less";

const SwitchDark = (_props: any) => {
	const { header } = useStore();
	return (
		<Switch
			className={styles.dark}
			defaultChecked={header.themeType == "dark"}
			checkedChildren={<>🌞</>}
			unCheckedChildren={<>🌜</>}
			onChange={bool => header.setThemeType(bool ? "dark" : "light")}
		/>
	);
};

export default SwitchDark;
