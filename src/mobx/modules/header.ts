import { configure, makeAutoObservable, reaction, action } from "mobx";
import { makePersistable, isHydrated } from "mobx-persist-store";
import { getBrowserLang } from "@/utils/utils";

configure({
	enforceActions: "never"
});

const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)"); // 系统是否为深色
console.log("系统是否为深色:", isDarkTheme.matches);

const language = getBrowserLang();
console.log("系统语言:", language);

type themeConfig = "light" | "dark";

class Header {
	isCollapse = false; // false：展开
	language = ["zh", "en"].includes(language) && language; // 国际化
	componentSize = "middle"; // 组件大小
	direction = "ltr"; // 字体方向
	footer = true; // 页脚
	breadcrumb = true; // 面包屑状态
	breadcrumbArr = []; // 面包屑集合
	themeType = isDarkTheme.matches ? "dark" : "light"; // 主题类型
	themeColor = "#1890ff";

	// 重置状态
	@action resetState() {
		globalThis.localStorage.clear();
		this.isCollapse = false;
		this.language = ["zh", "en"].includes(language) ? language : "zh";
		this.componentSize = "middle";
		this.direction = "ltr";
		this.footer = true;
		this.breadcrumb = true;
		this.breadcrumbArr = [];
		this.themeType = isDarkTheme.matches ? "dark" : "light";
	}

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true });
		makePersistable(this, {
			name: "HeaderStore",
			// 需要持久化的属性key
			properties: [
				"isCollapse",
				"language",
				"componentSize",
				"direction",
				"footer",
				"breadcrumb",
				"breadcrumbArr",
				"themeType",
				"themeColor"
			],
			storage: window.localStorage
		});
	}

	get isHydrated() {
		return isHydrated(this);
	}

	updateCollapse(bool: boolean) {
		this.isCollapse = bool;
	}

	setLanguage(str: string) {
		this.language = str;
	}

	setComponentSize(str: string) {
		this.componentSize = str;
	}

	setDirection(str: string) {
		this.direction = str;
	}

	setFooter(bool: boolean) {
		this.footer = bool;
	}

	setBreadcrumb(bool: boolean) {
		this.breadcrumb = bool;
	}

	setBreadcrumbArr(arr: any) {
		this.breadcrumbArr = arr;
	}

	setThemeType(type: themeConfig) {
		this.themeType = type;
	}

	setThemeColor(color: string) {
		this.themeColor = color;
	}
}

const header = new Header();
export default header;
