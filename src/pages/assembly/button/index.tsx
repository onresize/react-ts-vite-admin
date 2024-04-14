import React, { useContext } from "react";
import { Button } from "antd";
import { useIntl } from "react-intl";
import Wrapper from "@/components/Wrapper";
import WithCard, { WrapCom } from "@/components/HOC/WithCard/index";
import { ThemeContext } from "@/styles/theme/cssinJs";

const styles = { margin: "6px" };

const ButtonSelf = (_props: any) => {
	const { formatMessage: t } = useIntl();
	const themeStyle: any = useContext(ThemeContext);

	return (
		<WrapCom>
			<Wrapper name={t({ id: "home.inset" })} type="primary" Inset="true" styles={styles}></Wrapper>
			<Wrapper name={t({ id: "home.shake" })} type="primary" Shake="true" styles={styles}></Wrapper>
			<Wrapper happyWave={t({ id: "home.waves" })} styles={styles}></Wrapper>
		</WrapCom>
	);
};

export default ButtonSelf;
