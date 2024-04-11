# 第二阶段：nginx打包
FROM nginx:1.22.1
EXPOSE 80
# 替换nginx配置
COPY nginx.conf /etc/nginx/conf.d/default.conf
# 将第一阶段的静态文件复制到nginx中
RUN rm -rf /usr/share/nginx/html
RUN mkdir /usr/share/nginx/html
# COPY --from=frontend-builder /build-app/buildBundle /usr/share/nginx/html/react-ts-vite-admin
COPY ./buildBundle /usr/share/nginx/html

# 运行
CMD ["nginx", "-g", "daemon off;"]
