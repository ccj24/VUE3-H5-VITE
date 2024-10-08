/*
 * @description:
 * @param: params
 * @return:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

//1、引入resolve，设置路径别名
import { resolve } from "path";
const pathResolve = (dir) => resolve(__dirname, ".", dir);

export default defineConfig({
  base: "./", //等同于  assetsPublicPath :'./'
  plugins: [vue()],
  //配置服务，使得可以在手机中浏览
  server: {
    // host: "172.20.0.224",
    // port: "8080",
    proxy: {
      "/api": {
        // target: "http://test-us-api.sihoodev.com:7800", //测试
        target: "https://us-api.sihoodev.com", //正式
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },

  // 2、配置路径别名
  resolve: {
    alias: [{ find: "@", replacement: pathResolve("src") }],
  },
});
