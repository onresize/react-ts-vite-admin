import React from "react";
import WithCard, { WrapCom } from "@/components/HOC/WithCard/index";

const Github = (_props: any) => {
	return (
		<WrapCom>
			<div className="content-box">
				<span className="text">
					GitHub 仓库：
					<a href="https://github.com/onresize/react-ts-vite-admin" target="_blank" rel="noreferrer">
						https://github.com/onresize/react-ts-vite-admin
					</a>{" "}
					🍒🍉🍊
				</span>
			</div>
		</WrapCom>
	);
};

export default Github;
