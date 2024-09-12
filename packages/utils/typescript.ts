import { Component } from 'vue';

export type ImageFit = 'fill' | 'cover' | 'contain' | 'none' | 'scale-down';
export type ComicType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ComicType2 = 'primary' | 'success' | 'warning' | 'error' | 'info';
export type ComicSize = 'large' | 'default' | 'small';
export type ComicDisplay = 'always' | 'hover' | 'never';
export type ComicDir = 'vertical' | 'horizontal';

export type Config = {
  size?: ComicSize;
  color?:
    | string
    | {
        primary?: string;
        success?: string;
        danger?: string;
        warning?: string;
        info?: string;
      };
  zIndex?: number;
};

export type Arrayable<T> = T | T[];

export type ArrayMix<T> = T[];

/**
 * @description: 判断是否是字符串类型
 * @param {any} value
 * @see http://comicui.cn/api?name=type
 */
export const isString = (value: any): value is string => typeof value === 'string';

/**
 * @description: 判断是否是数字类型
 * @param {any} value
 * @see http://comicui.cn/api?name=type
 */
export const isNumber = (value: any): value is number => typeof value === 'number';

/**
 * @description: 判断是否是布尔类型
 * @param {any} value
 * @see http://comicui.cn/api?name=type
 */
export const isBoolean = (value: any): value is boolean => typeof value === 'boolean';

/**
 * @description: 判断是否是数组
 * @param {any} value
 * @see http://comicui.cn/api?name=type
 */
export const isArray = (value: any): value is any[] => Array.isArray(value);

/**
 * @description: 判断是否是对象
 * @param {any} value
 * @see http://comicui.cn/api?name=type
 */
export const isObject = (value: any): value is Record<string, any> =>
  typeof value === 'object' && !Array.isArray(value);

/**
 * @description: 判断是否是函数
 * @param {any} value
 * @see http://comicui.cn/api?name=type
 */
export const isFunction = (value: any): value is Function => typeof value === 'function';

/**
 * @description: 判断是否是Promise
 * @param {any} value
 * @see http://comicui.cn/api?name=type
 */
export const isPromise = (value: any): value is Promise<any> => value instanceof Promise;

/**
 * @description: 判断是否是Window
 * @param {any} value
 * @see http://comicui.cn/api?name=type
 */
export const isWindow = (value: any): value is Window => value === window;

/**
 * @description: 判断是否是Vue组件
 * @param {any} value
 */
export const isVueComponent = (value: any): value is Component => {
  return typeof value === 'object' && 'setup' in value && 'props' in value;
};
