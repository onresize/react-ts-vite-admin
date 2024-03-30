import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { observer } from "mobx-react-lite";
import AuthRouter from "./router/utils/authRouter";
import { loadTiming } from "@/utils/utils";
import Router from "./router";
import useStore from "./mobx/index";
import { getBrowserLang } from "./utils/utils";
import { IntlProvider } from "react-intl";
import zhCN from "antd/locale/zh_CN";
import enUS from "antd/locale/en_US";
import zh_CN from "./language/zh";
import en_US from "./language/en";
import { style } from "@/styles/theme/cssinJs";
import { AliveScope } from "react-activation";
import { ThemeContext } from "@/styles/theme/cssinJs";

window.addEventListener("load", loadTiming, false);

const messages: {
	[key: string]: any;
} = {
	zh: zh_CN,
	en: en_US
} as any;

const ReactApp: React.FC = observer(() => {
	const [count, setCount] = useState(0);
	const [i18nLocale, setI18nLocale] = useState(zhCN);
	const { header } = useStore();
	let { language, componentSize, direction, themeType, isHydrated, themeColor } = header;
	const themeStyle = themeType === "light" ? style.light : style.dark;

	// 设置 antd 语言国际化
	const setAntdLanguage = (): void => {
		// 如果 redux 中有默认语言就设置成 redux 的默认语言，没有默认语言就设置成浏览器默认语言
		if (language && language == "zh") return setI18nLocale(zhCN);
		if (language && language == "en") return setI18nLocale(enUS);
		if (getBrowserLang() == "zh") return setI18nLocale(zhCN);
		if (getBrowserLang() == "en") return setI18nLocale(enUS);
	};

	useEffect(() => {
		// 全局使用国际化
		isHydrated && setAntdLanguage();
	}, [language]);

	return (
		<BrowserRouter basename={"/" + import.meta.env.VITE_GLOB_APP_TITLE}>
			<AliveScope>
				{/*  @ts-ignore */}
				<IntlProvider locale={language} messages={messages[language]}>
					<ConfigProvider
						direction={direction as any}
						locale={i18nLocale as any}
						componentSize={componentSize as any}
						theme={{
							algorithm: themeType === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
							token: {
								themeStyle,
								colorPrimary: themeColor
							} as any
						}}
					>
						<ThemeContext.Provider value={themeStyle}>
							<AuthRouter>
								<Router />
							</AuthRouter>
						</ThemeContext.Provider>
					</ConfigProvider>
				</IntlProvider>
			</AliveScope>
		</BrowserRouter>
	);
});

export default ReactApp;
