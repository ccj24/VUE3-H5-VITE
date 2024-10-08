import axios from "axios";
import { baseURL } from "./my-account";
// import { ElMessage } from "element-plus";

// 创建axios实例
const instance = axios.create({
  // 接口
  baseURL: baseURL,
  // 超时时间
  timeout: 50000,
});

//请求拦截器(经常写一下token信息)
instance.interceptors.request.use(
  (config) => {
    let token = sessionStorage.getItem("token");
    if (token) {
      config.headers["token"] = token; //在请求头加上token
    }
    return config;
  },
  (error) => {
    //  请求发生错误，抛出异常
    Promise.reject(error);
  }
);

// 响应拦截器(一般把拿到的信息给它返回)
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error && error.response) {
      const status = error.response.status;
      switch (status) {
        case 400:
          console.log("请求失败");
          // ElMessage.error("请求错误");
          break;
        case 401:
          console.log("未授权，请重新登录");
          // ElMessage.error("未授权，请重新登录");
          break;
        case 403:
          console.log("拒绝访问");
          // ElMessage.error("拒绝访问");
          break;
        case 404:
          console.log("请求错误，未找到相应的资源");
          // ElMessage.error("请求错误，未找到相应的资源");
          break;
        case 408:
          console.log("请求超时");
          // ElMessage.error("请求超时");
          break;
        case 500:
          console.log("服务器内部错误");
          // ElMessage.error("服务器内部错误");
          break;
        case 501:
          console.log("网络未实现");
          // ElMessage.error("网络未实现");
          break;
        case 502:
          console.log("网络错误");
          // ElMessage.error("网络错误");
          break;
        case 503:
          console.log("服务不可用");
          // ElMessage.error("服务不可用");
          break;
        case 504:
          console.log("网络超时");
          // ElMessage.error("网络超时");
          break;
        case 505:
          console.log("HTTP版本不支持该请求");
          // ElMessage.error("HTTP版本不支持该请求");
          break;
        default:
          console.log("请求失败");
        // ElMessage.error("请求失败");
      }
    } else {
      if (JSON.stringify(error).includes("timeout")) {
        console.log("服务器响应超时，请刷新页面");
        // ElMessage.error("服务器响应超时，请刷新页面");
      }
      console.log("连接服务器失败");
      // ElMessage.error("连接服务器失败");
    }
    return Promise.reject(error);
  }
);

export default instance;
