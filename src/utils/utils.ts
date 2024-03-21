import { RouteObject } from '@/router/interface'

// 设置展开的 subMenu
export const getOpenKeys = (path: string) => {
  let str: string = ''
  let newArr: any[] = []
  let arr = path.split('/').map((v) => '/' + v)
  for (let i = 1; i < arr.length - 1; i++) {
    str += arr[i]
    newArr.push(str)
  }
  return newArr
}

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
export const searchRoute = (path: string, routes: RouteObject[] = []): RouteObject => {
  let result: RouteObject = {};
  for (let item of routes) {
    if (item.path === path) return item;
    if (item.children) {
      const res = searchRoute(path, item.children);
      if (Object.keys(res).length) result = res;
    }
  }
  return result;
};