/**
 * @description: 对象深度合并
 * @param {object} target
 * @param {object} source
 * @return {*}
 */
declare const deepMerge: (target: object, source: object) => object;
/**
 * @description: 将数组拆解成指定长度的二维数组
 * @param {any} value
 * @param {number} length
 * @return {*}
 */
declare const chunkArray: (value: any[], length: number) => any[];
/**
 * @description: 复制文本内容到粘贴板
 * @param {string} text
 * @return {*}
 */
declare const copyToClipboard: (text: string) => Promise<unknown>;
/**
 * @description: 生成随机颜色
 * @param {*}
 * @return {*}
 */
declare const randomColor: () => string;
/**
 * @description: 生成随机uid
 * @param {*}
 * @return {*}
 */
declare const randomUid: () => string;
/**
 * @description: 判断奇偶
 * @param {number} num
 * @return {boolean} true 奇数 false 偶数
 */
declare function parity(num: number): boolean;
export { deepMerge, chunkArray, copyToClipboard, randomColor, randomUid, parity };
export { debounce, throttle, formatDate, isNumber, isString, isBoolean, isArray, isFunction, isPromise, isWindow } from '../utils';
