import { AxiosRequestConfig } from 'axios';

interface createAxiosInstanceOption {
    baseURL?: string;
    timeout?: number;
    getToken?: Function;
    dataType?: string;
    tokenKey?: string;
    headers?: Headers;
}
declare const http: {
    create: (option: createAxiosInstanceOption) => void;
    get: (url: string, config: AxiosRequestConfig) => Promise<import('axios').AxiosResponse<any, any>>;
    post: (url: string, config: AxiosRequestConfig) => Promise<import('axios').AxiosResponse<any, any>>;
    put: (url: string, config: AxiosRequestConfig) => Promise<import('axios').AxiosResponse<any, any>>;
    delete: (url: string, config: AxiosRequestConfig) => Promise<import('axios').AxiosResponse<any, any>>;
};
export { http };
