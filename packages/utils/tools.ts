/**
 * @description: 防抖
 * @param {Function} func
 * @param {number} interval
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

/**
 * @description: 获取高度值，判断是否是number类型，如果是则返回携带px的高度，否则返回自身
 * @param {any} height
 * @return {*}
 */
const getCssHeight = (height: any): any => {
  if (!height) return undefined;
  if (isNaN(Number(height))) {
    return height;
  } else {
    return height + 'px';
  }
};

/**
 * @description: 生成随机颜色
 * @return {*}
 */
const randomColor = (): string => {
  return (
    '#' +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, '0')
  );
};

export { debounce, throttle, repairZero, formatDate, deepEqual, getCssHeight, randomColor };
