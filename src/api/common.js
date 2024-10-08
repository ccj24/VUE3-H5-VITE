import http from "../utils/http.js";
// 我要用到的一些接口
import service from "@/utils/request.js";

// 定义后台接口
export const login = (data) => {
  return http.post("/app/user/login/passwordLogin", data);
};
export const getUserList = (data) => {
  return http.get("/user/list", data);
};
export const saveUser = (data) => {
  return http.post("/user/save", data);
};
export const delUser = (data) => {
  return http.del("/user/delete", data);
};
export const getUserDetail = (data) => {
  return http.del("/user/detail", data);
};

// 登录接口
export function emailLogin(data) {
  return service({
    url: "/app/user/login/passwordLogin",
    method: "POST",
    data: data,
  });
}

// 销户接口
export function revokeUser(data) {
  return service({
    url: "/app/user/main/revoke",
    method: "POST",
    data: data,
  });
}
