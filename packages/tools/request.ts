import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import MessageBox from '../components/message-box';

const Message: any = MessageBox.message;

var instance: AxiosInstance | null;

interface createAxiosInstanceOption {
  baseURL?: string;
  timeout?: number;
  getToken?: () => any;
  dataType?: string;
  tokenKey?: string;
  headers?: Headers;
}
const defaultCreateAxiosInstanceOption = {
  baseURL: '',
  timeout: 60000,
  dataType: 'json',
  tokenKey: 'token'
};
const ERROR = {
  400: '错误请求',
  401: '未授权',
  403: '拒绝访问',
  404: '请求错误,未找到该资源',
  405: '请求方法未允许',
  408: '请求超时',
  500: '服务器端出错',
  501: '网络未实现',
  502: '网络错误',
  503: '服务不可用',
  504: '网络超时',
  505: 'http版本不支持该请求'
};
type ErrorCode = keyof typeof ERROR;

function getError(code: number) {
  return ERROR[code as ErrorCode] || 'Error';
}

function createAxiosInstance(option: createAxiosInstanceOption) {
  option = Object.assign(defaultCreateAxiosInstanceOption, option);
  const { baseURL, timeout, getToken, dataType, tokenKey, headers } = option;
  const axiosInstance: AxiosInstance = axios.create({
    baseURL,
    timeout
  });

  //请求拦截
  axiosInstance.interceptors.request.use(
    (config) => {
      config.data = JSON.stringify(config.data);
      config.headers['Content-Type'] =
        dataType === 'formData' ? 'application/x-www-form-urlencoded' : 'application/json';
      config.headers[tokenKey!] = getToken && getToken()!;
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

  //响应拦截
  axiosInstance.interceptors.response.use(
    (response) => {
      const resData = response.data;
      if (response.status === 200) {
        if (resData.code === 200 || resData.status == 200) {
          return Promise.resolve(resData);
        } else {
          if (ERROR[resData.code as ErrorCode]) {
            const message = getError(resData.code);
            Message.error(message);
            return Promise.reject(new Error(message));
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
        error.message = '服务器链接失败';
      }
      Message.error(error.message);

      return Promise.resolve(error.response);
    }
  );
  return axiosInstance;
}

function hasInstance() {
  if (!instance) {
    throw `HTTP is not initialized. Please call the create method of HTTP to initialize the axios instance first`;
  }
  return true;
}

const http = {
  create: (option: createAxiosInstanceOption) => {
    instance = createAxiosInstance(option);
  },
  get: (url: string, config: AxiosRequestConfig) =>
    hasInstance() && instance?.(Object.assign({}, { url }, config, { method: 'GET' })),
  post: (url: string, config: AxiosRequestConfig) =>
    hasInstance() && instance?.(Object.assign({}, { url }, config, { method: 'POST' })),
  put: (url: string, config: AxiosRequestConfig) =>
    hasInstance() && instance?.(Object.assign({}, { url }, config, { method: 'PUT' })),
  delete: (url: string, config: AxiosRequestConfig) =>
    hasInstance() && instance?.(Object.assign({}, { url }, config, { method: 'DELETE' }))
};

export { http };
