// 全局不动配置项 只做导出不做修改

// 首页地址（默认）
export const HOME_URL: string = "/home";

// Tabs（黑名单地址，不需要添加到 tabs 的路由地址，暂时没用）
export const TABS_BLACK_LIST: string[] = ["/403", "/404", "/500", "/login",];

// 路由白名单
export const ROUTER_WHITE_LIST: string[] = ["/login", "/403", "/404", "/500"]

// 高德地图key
export const MAP_KEY: string = "";

// 后端微服务端口名
export const PORT1 = "/hooks";
export const PORT2 = "/geeker";

// token凭证key
export const TokenKey = 'X-Access-Token'