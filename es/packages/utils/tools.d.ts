/**
 * @description: 防抖
 * @param {Function} func
 * @param {number} interval
 */
declare function debounce(func: (...args: any) => void, interval?: number): (...args: any) => void;
/**
 * @description: 节流
 * @param {Function} func
 * @param {number} interval
 */
declare function throttle(func: (...args: any) => void, interval?: number): (...args: any) => void;
/**
 * @description: 截取指定下标前的内容并返回新数组
 * @param {any[]} arr
 * @param {number} index
 */
declare const deleteAfterIndex: (arr: any[], index: number) => any[];
/**
 * @description: 补0操作
 * @param {number | string} value
 */
declare const repairZero: (value: number | string) => string;
/**
 * @description: 日期格式化
 * @param {any} timestamp
 * @param {string} fmt
 */
declare const formatDate: (timestamp: any, fmt: string) => string;
/**
 * @description: 找出数组最大值或最小值的下标
 * @param {number[]} arr 数组
 * @param {boolean} flag  true为最大值 false为最小值  默认false
 * @return {number}
 */
declare const findIndexOfMinOrMax: (arr: number[], flag?: boolean) => number;
/**
 * @description: 根据指定字段将深度递归的数组拍扁
 * @param {any} arr
 * @param {string} key
 * @return {*}
 */
declare const flattenArray: (arr: any[], key: string) => any[];
/**
 * @description: 判断两个对象是否相等 包含proxy代理的对象
 * @param {any} o1
 * @param {any} o2
 */
declare const deepEqual: (o1: any, o2: any) => boolean;
export { debounce, throttle, deleteAfterIndex, repairZero, formatDate, findIndexOfMinOrMax, flattenArray, deepEqual };
