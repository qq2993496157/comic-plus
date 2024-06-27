/**
 * @description: 防抖
 * @param {Function} func
 * @param {number} interval
 * @see http://comicui.cn/api?name=throttle
 */
function debounce(func: (...args: any) => void, interval: number = 200): (...args: any) => void {
  if (typeof func !== 'function') {
    throw new TypeError('need a function arguments');
  }
  let t: number | null = null;
  return function (...args: any) {
    clearTimeout(t);
    t = setTimeout(() => {
      func.apply(this, args);
    }, interval);
  };
}

/**
 * @description: 节流
 * @param {Function} func
 * @param {number} interval
 * @see http://comicui.cn/api?name=throttle
 */
function throttle(func: (...args: any) => void, interval: number = 500): (...args: any) => void {
  if (typeof func !== 'function') {
    throw new TypeError('need a function arguments');
  }
  let t: number | null = null;
  return function (...args: any) {
    if (!t) {
      t = setTimeout(function () {
        func.apply(this, args);
        clearTimeout(t);
        t = null;
      }, interval);
    }
  };
}

/**
 * @description: 截取指定下标前的内容并返回新数组
 * @param {any[]} arr
 * @param {number} index
 */
const deleteAfterIndex = (arr: any[], index: number): any[] => {
  if (index >= 0 && index < arr.length) {
    arr.splice(index + 1, arr.length - index - 1);
  }
  return arr;
};

/**
 * @description: 补0操作
 * @param {number | string} value
 */
const repairZero = (value: number | string): string => {
  value = Number(value);
  if (isNaN(value)) {
    throw new Error('Value must be a number or a numeric string');
  }
  return (value < 10 ? '0' + value : value).toString();
};

/**
 * @description: 日期格式化
 * @param {any} timestamp
 * @param {string} fmt
 */
const formatDate = (timestamp: any, fmt?: string): string => {
  if (!timestamp || isNaN(new Date(timestamp).getTime())) {
    return '';
  }
  try {
    var date: Date = new Date(timestamp);

    if (!fmt) fmt = 'yyyy-MM-dd hh:mm:ss';

    var o = {
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日
      'h+': date.getHours(), //小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds(), //秒
      'q+': Math.floor((date.getMonth() + 3) / 3), //季度
      S: date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp('(' + k + ')').test(fmt))
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    return fmt;
  } catch (e) {
    return '';
  }
};

/**
 * @description: 找出数组最大值或最小值的下标
 * @param {number[]} arr 数组
 * @param {boolean} flag  true为最大值 false为最小值  默认false
 * @return {number}
 */
const findIndexOfMinOrMax = (arr: number[], flag?: boolean): number => {
  if (arr.length === 0) {
    return -1;
  }
  let flagValue: number;
  if (flag) {
    flagValue = Math.max(...arr);
  } else {
    flagValue = Math.min(...arr);
  }
  const index = arr.indexOf(flagValue);
  return index;
};

/**
 * @description: 根据指定字段将深度递归的数组拍扁
 * @param {any} arr
 * @param {string} key
 * @return {*}
 */
const flattenArray = (arr: any[], key: string): any[] => {
  const newArray = JSON.parse(JSON.stringify(arr));

  const result: any[] = [];
  function flatten(obj) {
    result.push(obj);
    if (obj[key]) {
      obj[key].forEach((child) => flatten(child));
      // delete obj[key];
    }
  }
  newArray.forEach((obj) => flatten(obj));
  return result;
};

/**
 * @description: 判断两个对象是否相等 包含proxy代理的对象
 * @param {any} o1
 * @param {any} o2
 */
const deepEqual = (o1: any, o2: any): boolean => {
  if (o1 === o2) return true;
  if (typeof o1 !== 'object' || o1 === null || typeof o2 !== 'object' || o2 === null) {
    return false;
  }
  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }
    if (!deepEqual(o1[key], o2[key])) {
      return false;
    }
  }
  return true;
};

export { debounce, throttle, deleteAfterIndex, repairZero, formatDate, findIndexOfMinOrMax, flattenArray, deepEqual };
