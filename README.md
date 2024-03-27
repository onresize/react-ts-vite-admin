# React-Ts-Vite-Admin 🚀

### 介绍 📖

🚀🚀🚀 React-Ts-Vite-Admin，基于 React18、React-Router、React-Hooks、Mbox、TypeScript、Vite、Ant-Design 开源的一套后台管理框架。



### 二、Git 仓库地址 (欢迎 Star⭐)

- Gitee：https://gitee.com/Embrance-T/react-ts-vite-admin

- GitHub：https://github.com/onresize/react-ts-vite-admin

### 三、🔨🔨🔨 项目功能

- 🚀 采用最新技术找开发：React18、React-Router v6、AHooks、TypeScript、Vite4、Mbox v6
- 🚀 采用 Vite4 作为项目开发、打包工具（配置了 Gzip 打包、跨域代理、打包预览工具、按需字体压缩、样式前缀兼容...）
- 🚀 整个项目集成了 TypeScript
- 🚀 使用 Mbox 做状态管理，集成 mobx-persist-store 开发
- 🚀 使用 TypeScript 对 Axios 二次封装 （错误拦截、常用请求封装、全局请求 Loading、取消重复请求…）
- 🚀 支持 Antd 组件大小切换、暗黑、i18n 国际化
- 🚀 支持 KeepAlive 缓存页面
- 🚀 使用 自定义高阶组件 进行路由权限拦截（403 页面）、页面按钮权限配置
- 🚀 支持 React-Router v6 路由懒加载配置、菜单手风琴模式、无限级菜单、多标签页、面包屑导航
- 🚀 使用 Prettier 统一格式化代码，集成 Eslint、Stylelint 代码校验规范（项目规范配置）
- 🚀 使用 husky、lint-staged、commitlint、commitizen、cz-git 规范提交信息（项目规范配置）

### 四、安装使用步骤 📑

- **Clone：**

```text
# Gitee
git clone https://gitee.com/Embrance-T/react-ts-vite-admin.git

# GitHub
git clone https://github.com/onresize/react-ts-vite-admin.git
```

- **Install：**

```text
yarn

# 安装失败，请升级 nodejs 到 18 以上
```

- **Run：**

```text
# 本地环境运行
yarn dev

# 本地项目公网映射运行
yarn devonLine
```

- **Build：**

```text
# 生产环境打包并编译检测ts
yarn build:tsc

# 生产环境打包并使用eslint检测
yarn build:lint
```

- **Lint：**

```text
# eslint 检测代码
yarn lint:fix

# prettier 格式化代码
yarn lint:prettier

# stylelint 格式化样式
yarn lint:stylelint
```

- **commit：**

```text
# 提交代码（会自动执行 lint:lint-staged 命令）
yarn commit
```
