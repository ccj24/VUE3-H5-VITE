import axios from "axios";

// 创建axios实例
const service = axios.create({
  // 接口
  baseURL: "/api",
  // 超时时间
  timeout: 50000,
  headers: {
    "Content-type": "application/json;charset=utf-8",
  },
});

//请求拦截器(经常写一下token信息)

service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    console.error("Request error: ", error);
    return Promise.reject(error);
  }
);

// 响应拦截器(一般把拿到的信息给它返回)
service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      // 可以根据需要添加更多的错误处理
      console.error("Response error: ", response);
      return Promise.reject(
        new Error("Error with status code " + response.status)
      );
    }
  },
  (error) => {
    // 对常见的HTTP错误进行处理
    if (error.response) {
      // 请求已发出，服务器回复状态码不在2xx范围
      console.error("Error status: ", error.response.status);
      // 根据返回的状态码进行不同的处理
      // 例如: if (error.response.status === 401) { // 处理登录过期 }
    } else {
      // 服务器连回应都没有返回
      console.error("Network error: ", error);
    }
    return Promise.reject(error);
  }
);

export default service;
