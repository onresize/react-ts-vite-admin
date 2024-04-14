import React, { useContext } from "react";
import { ThemeContext } from "@/styles/theme/cssinJs";

const WithCard = (WrapChild: React.ComponentType) => {
	return function Card(props: any) {
		const themeStyle: any = useContext(ThemeContext);

		return (
			<div
				className="card"
				style={{
					borderColor: themeStyle.borderColor,
					background: themeStyle.bgColor,
					height: "100%"
				}}
			>
				{WrapChild ? <WrapChild {...props}></WrapChild> : props.children}
			</div>
		);
	};
};

export default WithCard;

// @ts-ignore
export const WrapCom = WithCard();
