import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import codeBlock from "./codeBlock";
import { useLocation } from "react-router-dom";
import styles from "./index.module.less";

function SandPack() {
	const { search } = useLocation();

	return (
		<div className={styles.box}>
			<Sandpack
				theme="light"
				options={{
					resizablePanels: true,
					autorun: true,
					autoReload: false,
					editorHeight: "100vh",
					showTabs: true,
					closableTabs: true,
					showNavigator: false,
					showConsole: true,
					showConsoleButton: true,
					showLineNumbers: true
				}}
				files={{
					"/index.js": {
						code: codeBlock?.[search.slice(1)] || codeBlock.promise1
					}
				}}
				template="vanilla"
			/>
		</div>
	);
}

export default SandPack;
