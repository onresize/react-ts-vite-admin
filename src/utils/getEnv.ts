// 读取所有环境变量配置文件包装一遍
export function wrapperEnv(envConf: Recordable) {
	const ret: any = {};
	for (const envName of Object.keys(envConf)) {
		// console.log('获取到每一个环境变量值：', envConf[envName])
		let relName = envConf[envName];
		relName = relName === "true" ? true : relName === "false" ? false : relName;

		switch (envName) {
			case "VITE_PORT":
				relName = Number(relName);
				break;
			default:
				break;
		}

		ret[envName] = relName;
		process.env[envName] = relName;
	}
	// console.log('最终结果：', ret)
	return ret;
}
