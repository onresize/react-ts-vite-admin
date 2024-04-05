import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import codeBlock from "./codeBlock";
import { useSearchParams } from "react-router-dom";
import styles from "./index.module.less";

function SandPack() {
	const [searchParams] = useSearchParams();

	let search: string = searchParams.get("codeType") || "promise1";
	return (
		<div className={styles.box}>
			<Sandpack
				theme="light"
				options={{
					resizablePanels: true,
					autorun: false,
					autoReload: false,
					editorHeight: "100vh",
					showTabs: true,
					closableTabs: true,
					showNavigator: false,
					showConsole: false,
					showConsoleButton: true,
					showLineNumbers: true
				}}
				files={{
					"/index.js": {
						code: codeBlock[search]
					}
				}}
				template="vanilla"
			/>
		</div>
	);
}

export default SandPack;
