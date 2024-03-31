import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { wrapperEnv } from "./src/utils/getEnv";
import { createHtmlPlugin } from "vite-plugin-html";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";
import eslintPlugin from "vite-plugin-eslint";
import basicSsl from "@vitejs/plugin-basic-ssl";
import fs from "fs";
import { transFontFile } from "./src/patchPlugins/trans-font";

const resolve = (dir: string): string => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
	const env = loadEnv(mode.mode, process.cwd());
	const viteEnv = wrapperEnv(env);
	console.log("env:", viteEnv);
	transFontFile([viteEnv.VITE_GLOB_APP_TITLE]); // 压缩字体

	return {
		base: viteEnv.VITE_MODE === "pro" ? "/" + viteEnv.VITE_GLOB_APP_TITLE : "/",
		resolve: {
			alias: {
				"@": resolve("src")
			}
		},
		// global css
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
					additionalData: `@import "@/styles/var.less";`
				}
			}
		},
		server: {
			host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
			port: viteEnv.VITE_PORT,
			open: viteEnv.VITE_OPEN,
			strictPort: true, // 若端口已被占用则会直接退出
			cors: true, // 配置 CORS
			hmr: {
				overlay: true // 服务器错误是否显示在页面上
			},
			// 开启本地https服务: https://xiaoshen.blog.csdn.net/article/details/135893188
			https: {
				key: fs.readFileSync("certs/localhost+3-key.pem"),
				cert: fs.readFileSync("certs/localhost+3.pem")
			},
			// 代理跨域
			proxy: {
				"/api": {
					target: viteEnv.VITE_PROXY_URL, // easymock
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, "")
				}
			}
		},
		plugins: [
			react(),
			basicSsl(), // 本地开启https相关
			// EJS模板能力
			createHtmlPlugin({
				inject: {
					data: {
						title: viteEnv.VITE_GLOB_APP_TITLE
					}
				}
			}),
			// * EsLint 报错信息显示在浏览器界面上
			eslintPlugin({
				cache: false // 是否缓存
			}),
			// * 是否生成包体积可视化预览
			viteEnv.VITE_REPORT &&
				visualizer({
					open: true, // 注意这里要设置为true，否则无效
					gzipSize: true, // 分析图生成的文件名
					brotliSize: true, // 收集 brotli 大小并将其显示
					filename: "bundle.html" // 分析图生成的文件名,
				}),
			// * gzip压缩
			viteEnv.VITE_BUILD_GZIP &&
				viteCompression({
					verbose: true,
					disable: false, // 不禁用压缩
					deleteOriginFile: false, // 压缩后是否删除原文件
					threshold: 10240, // 文件小于 10kb 不进行压缩
					algorithm: "gzip", // 压缩算法
					ext: ".gz" // 文件类型
				}),
			// 图片压缩
			viteImagemin({
				gifsicle: {
					optimizationLevel: 7,
					interlaced: false
				},
				optipng: {
					optimizationLevel: 7
				},
				mozjpeg: {
					quality: 20
				},
				pngquant: {
					quality: [0.8, 0.9],
					speed: 4
				},
				svgo: {
					plugins: [
						{
							name: "removeViewBox"
						},
						{
							name: "removeEmptyAttrs",
							active: false
						}
					]
				}
			})
		],
		esbuild: {
			pure: viteEnv.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
		},
		// build configure
		build: {
			outDir: "buildBundle",
			chunkSizeWarningLimit: 2000, // 大于2000k才警告
			// 打包出map文件
			sourcemap: viteEnv.VITE_SOURCEMAP,
			// esbuild 打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
			// minify: "esbuild",
			minify: "terser",
			terserOptions: {
				compress: {
					drop_console: viteEnv.VITE_DROP_CONSOLE,
					drop_debugger: true
				}
			},
			rollupOptions: {
				output: {
					// Static resource classification and packaging
					chunkFileNames: "assets/js/[name]-[hash].js",
					entryFileNames: "assets/js/[name]-[hash].js",
					assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
					// 分包
					// manualChunks(id) {
					// 	if (id.includes("node_modules")) {
					// 		return id.toString().split("node_modules/")[1].split("/")[0].toString();
					// 	}
					// }
				}
			}
		}
	};
});
