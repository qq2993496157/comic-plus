"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const axios = require("axios");
const index = require("../components/message-box/index.js");
const Message = index.default.message;
var instance;
const defaultCreateAxiosInstanceOption = {
  baseURL: "",
  timeout: 6e4,
  dataType: "json",
  tokenKey: "token"
};
const ERROR = {
  400: "错误请求",
  401: "未授权",
  403: "拒绝访问",
  404: "请求错误,未找到该资源",
  405: "请求方法未允许",
  408: "请求超时",
  500: "服务器端出错",
  501: "网络未实现",
  502: "网络错误",
  503: "服务不可用",
  504: "网络超时",
  505: "http版本不支持该请求"
};
function getError(code) {
  return ERROR[code] || "Error";
}
function createAxiosInstance(option) {
  option = Object.assign(defaultCreateAxiosInstanceOption, option);
  const { baseURL, timeout, getToken, dataType, tokenKey, headers } = option;
  const axiosInstance = axios.create({
    baseURL,
    timeout
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      config.data = JSON.stringify(config.data);
      config.headers["Content-Type"] = dataType === "formData" ? "application/x-www-form-urlencoded" : "application/json";
      config.headers[tokenKey] = getToken && getToken();
      if (headers) {
        for (const key in headers) {
          config.headers[key] = headers[key];
        }
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    (response) => {
      const resData = response.data;
      if (response.status === 200) {
        if (resData.code === 200 || resData.status == 200) {
          return Promise.resolve(resData);
        } else {
          if (ERROR[resData.code]) {
            const message2 = getError(resData.code);
            Message.error(message2);
            return Promise.reject(new Error(message2));
          }
        }
        return Promise.resolve(resData);
      }
      const message = getError(response.status);
      Message.error(message);
      return Promise.reject(new Error(message));
    },
    (error) => {
      if (error && error.response) {
        error.message = getError(error.response.status);
      } else {
        error.message = "服务器链接失败";
      }
      Message.error(error.message);
      return Promise.resolve(error.response);
    }
  );
  return axiosInstance;
}
const http = {
  create: (option) => {
    instance = createAxiosInstance(option);
  },
  get: (url, config) => instance(Object.assign({}, { url }, config, { method: "GET" })),
  post: (url, config) => instance(Object.assign({}, { url }, config, { method: "POST" })),
  put: (url, config) => instance(Object.assign({}, { url }, config, { method: "PUT" })),
  delete: (url, config) => instance(Object.assign({}, { url }, config, { method: "DELETE" }))
};
exports.http = http;
