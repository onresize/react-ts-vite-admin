# React-Ts-Vite-Admin 🚀

### 介绍 📖

🚀🚀🚀 React-Ts-Vite-Admin，基于 React18、React-Router、React-Hooks、Mobx、TypeScript、Vite、Ant-Design 开源的一套后台管理框架。

### 一、项目相关文档 📚

- 项目更新日志：[CHANGELOG.md](./CHANGELOG.md)

### 二、🔨🔨🔨 项目功能

- 🚀 采用最新技术找开发：React18、React-Router v6、AHooks、TypeScript、Vite4、Mobx
- 🚀 采用 Vite4 作为项目开发、打包工具（配置了 Gzip 打包、跨域代理、打包预览工具、按需字体压缩、样式前缀兼容...）
- 🚀 整个项目集成了 TypeScript
- 🚀 使用 Mobx 做状态管理，集成 mobx-persist-store 开发
- 🚀 使用 TypeScript 对 Axios 二次封装 （错误拦截、常用请求封装、全局请求 Loading、取消重复请求…）
- 🚀 支持 Antd 组件大小切换、暗黑模式、i18n 国际化
- 🚀 支持 KeepAlive 缓存页面
- 🚀 使用 自定义高阶组件 进行路由权限拦截（403 页面）、页面按钮权限配置
- 🚀 支持 React-Router v6 路由懒加载配置、菜单手风琴模式、无限级菜单、多标签页、面包屑导航
- 🚀 使用 Prettier 统一格式化代码，集成 Eslint、Stylelint 代码校验规范（项目规范配置）
- 🚀 使用 husky、lint-staged、commitlint、commitizen、cz-git 规范提交信息（项目规范配置）

### 三、自托管 📑

**来自 docker hub:**

```sh
docker run -d --name it-tools --restart unless-stopped -p 8080:80 onresize/react-ts-vite-admin:latest
```

**来自 github packages:**

```sh
docker run -d --name it-tools --restart unless-stopped -p 8080:80 ghcr.io/onresize/react-ts-vite-admin:latest
```

**其他方案:**

- [Cloudron](https://www.cloudron.io/store/tech.ittools.cloudron.html)
- [Tipi](https://www.runtipi.io/docs/apps-available)
- [Unraid](https://unraid.net/community/apps?q=it-tools)


### 四、安装使用步骤 📑
- **Clone：**

```text
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
yarn build:pro

# 生产环境打包并使用eslint检测
yarn build:lint

# 开发环境打包
yarn build:dev

# 打包开发环境、docker打包镜像
yarn deploy:docker
```

- **Lint：**

```text
# eslint 检测代码
yarn lint-fix

# prettier 格式化代码
yarn lint-prettier

# 过滤出仅git暂存区的文件统一检测和格式化
yarn lint-staged
```

- **commit：**

```text
# 提交代码（会自动执行 lint-staged 命令）
yarn commit
```

- **CHANGELOG：**

```text
# 更新日志文件
yarn release
```

### 五、文件资源目录 📚

```text
 react-ts-vite-admin
 |-- .browserslistrc              # 指定目标浏览器范围
 |-- .editorconfig                # 编辑器配置（格式化）
 |-- .dockerignore                # docker打包镜像忽略
 |-- .env                         # vite 公用配置
 |-- .env.development             # 开发环境配置
 |-- .env.production              # 生产环境配置
 |-- .eslintignore                # 忽略 Eslint 校验
 |-- .eslintrc.cjs                # Eslint 校验配置
 |-- .gitignore                   # git 提交忽略
 |-- .npmrc                       # 指定包管理器配置
 |-- .nvmrc                       # 推荐node版本
 |-- .prettierignore              # 忽略 prettier 格式化
 |-- .prettierrc.cjs              # prettier 配置
 |-- .versionrc                   # 指定日志文件输出类型
 |-- CHANGELOG.md                 # 项目更新日志
 |-- commitlint.config.cjs        # git 提交规范配置
 |-- index.html                   # 入口 html
 |-- LICENSE                      # 开源协议文件
 |-- Dockerfile                   # docker打包镜像配置
 |-- lint-staged.config.cjs       # lint-staged 配置文件
 |-- nginx.conf                   # 线上默认nginx配置
 |-- package.json                 # 依赖包管理
 |-- postcss.config.cjs           # postcss 配置
 |-- README.md                    # README 介绍
 |-- tsconfig.json                # typescript 全局配置
 |-- tsconfig.node.json           # 配置vite.config.ts的编译规则
 |-- vite.config.ts               # vite配置文件
 |-- yarn.lock                    # 依赖包包版本锁
 |-- .husky                       # git规范约束
 |-- .npm-only-allow              # 指定包管理器相关
 |-- .vscode                      # vscode推荐配置
 |-- certs                        # 本地https密钥
 |-- public                       # 静态资源文件（忽略打包）
 |-- server                       # 服务端代码
 |-- src
 |   |-- assets                   # 静态资源文件
 |   |-- components               # 全局组件
 |   |-- config                   # 全局配置项
 |   |-- hooks                    # 常用 Hooks
 |   |-- language                 # 语言国际化
 |   |-- layout                   # 框架布局
 |   |-- mobx                     # 框状态管理
 |   |-- pages                    # 路由页面
 |   |-- patchPlugins             # 补丁插件等
 |   |-- router                   # 路由管理
 |   |-- utils                    # 全局工具方法
 |   |-- styles                   # 全局样式
 |   |-- typings                  # 全局 ts 声明
```
