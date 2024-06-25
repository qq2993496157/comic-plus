export type ImageFit = 'fill' | 'cover' | 'contain' | 'none' | 'scale-down';
export type ComicType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ComicType2 = 'primary' | 'success' | 'warning' | 'error' | 'info';
export type ComicSize = 'large' | 'default' | 'small';
export type ComicDisplay = 'always' | 'hover' | 'never';
export type ComicDir = 'vertical' | 'horizontal';
export type Config = {
    size?: ComicSize;
    color?: string | {
        primary?: string;
        success?: string;
        danger?: string;
        warning?: string;
        info?: string;
        text?: string;
    };
    zIndex?: number;
    isComic?: boolean;
};
export type Arrayable<T> = T | T[];
export type ArrayMix<T> = T[];
/**
 * @description: 判断是否是字符串类型
 * @param {any} value
 */
export declare const isString: (value: any) => value is string;
/**
 * @description: 判断是否是数字类型
 * @param {any} value
 */
export declare const isNumber: (value: any) => value is number;
/**
 * @description: 判断是否是布尔类型
 * @param {any} value
 */
export declare const isBoolean: (value: any) => value is boolean;
/**
 * @description: 判断是否是数组
 * @param {any} value
 */
export declare const isArray: (value: any) => value is any[];
/**
 * @description: 判断是否是对象
 * @param {any} value
 */
export declare const isObject: (value: any) => value is Record<string, any>;
/**
 * @description: 判断是否是函数
 * @param {any} value
 */
export declare const isFunction: (value: any) => value is Function;
/**
 * @description: 判断是否是Promise
 * @param {any} value
 */
export declare const isPromise: (value: any) => value is Promise<any>;
/**
 * @description: 判断是否是Window
 * @param {any} value
 */
export declare const isWindow: (value: any) => value is Window;
