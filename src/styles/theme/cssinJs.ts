import { createContext } from "react";

export const style = {
	// 黑色主题
	dark: {
		fontColor: "#FFFFFFD9",
		bgColor: "#001529",
		borderColor: "#4e4e4e"
	},
	// 白色主题
	light: {
		fontColor: "#000",
		bgColor: "#fff",
		borderColor: "#e4e7ed"
	}
};

// @ts-ignore
export const ThemeContext = createContext();
