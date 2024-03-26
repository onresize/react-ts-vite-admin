import { RouteObject } from "@/router/interface";

// 设置展开的 subMenu
export const getOpenKeys = (path: string) => {
	let str: string = "";
	let newArr: any[] = [];
	let arr = path.split("/").map(v => "/" + v);
	for (let i = 1; i < arr.length - 1; i++) {
		str += arr[i];
		newArr.push(str);
	}
	return newArr;
};

// 获取浏览器默认语言
export const getBrowserLang = () => {
	let browserLang = navigator.language ? navigator.language : navigator.browserLanguage;
	let defaultBrowserLang = "";
	if (browserLang.toLowerCase() === "cn" || browserLang.toLowerCase() === "zh" || browserLang.toLowerCase() === "zh-cn") {
		defaultBrowserLang = "zh";
	} else {
		defaultBrowserLang = "en";
	}
	return defaultBrowserLang;
};

// 递归查询对应的路由
export const searchRoute = (path: string, routes: RouteObject[] = []): any => {
	let result: object = {};
	for (let item of routes) {
		if (item.path === path) return item;
		if (item.children) {
			const res = searchRoute(path, item.children);
			if (Object.keys(res).length) result = res;
		}
	}
	return result;
};

// 递归查询对应的路由 Meta信息
export const searchRouteMeta = (path: string, routes: RouteObject[] = []): RouteObject => {
	let result: any = [];
	for (let item of routes) {
		if (item.children?.length) {
			item.children.forEach((row: any) => {
				if (row.path == path) {
					result = [item?.key, row?.key];
				}
			});
		}
	}
	return result;
};

// 统计页面加载完成时间
export const loadTiming = () => {
	setTimeout(() => {
		let t = window.performance.timing;
		let performanceInfo = [
			{
				key: "Redirect",
				desc: "网页重定向的耗时",
				"value(ms)": t.redirectEnd - t.redirectStart
			},
			{
				key: "AppCache",
				desc: "检查本地缓存的耗时",
				"value(ms)": t.domainLookupStart - t.fetchStart
			},
			{
				key: "DNS",
				desc: "DNS查询的耗时",
				"value(ms)": t.domainLookupEnd - t.domainLookupStart
			},
			{
				key: "TCP",
				desc: "TCP链接的耗时",
				"value(ms)": t.connectEnd - t.connectStart
			},
			{
				key: "Waiting(TTFB)",
				desc: "从客户端发起请求到接收响应的时间",
				"value(ms)": t.responseStart - t.requestStart
			},
			{
				key: "Content Download",
				desc: "下载服务端返回数据的时间",
				"value(ms)": t.responseEnd - t.responseStart
			},
			{
				key: "HTTP Total Time",
				desc: "http请求总耗时",
				"value(ms)": t.responseEnd - t.requestStart
			},
			{
				key: "First Time",
				desc: "首包时间",
				"value(ms)": t.responseStart - t.domainLookupStart
			},
			{
				key: "White screen time",
				desc: "白屏时间",
				"value(ms)": t.responseEnd - t.fetchStart
			},
			{
				key: "Time to Interactive(TTI)",
				desc: "首次可交互时间",
				"value(ms)": t.domInteractive - t.fetchStart
			},
			{
				key: "DOM Parsing",
				desc: "DOM 解析耗时",
				"value(ms)": t.domInteractive - t.responseEnd
			},
			{
				key: "DOMContentLoaded",
				desc: "DOM 加载完成的时间",
				"value(ms)": t.domInteractive - t.navigationStart
			},
			{
				key: "Loaded",
				desc: "页面load的总耗时",
				"value(ms)": t.loadEventEnd - t.navigationStart
			}
		];

		console.table(performanceInfo);
	}, 0);
};
