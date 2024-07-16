import { isBoolean, isFunction } from '../utils';
/**
 * @description: 对象深度合并
 * @param {object} target
 * @param {object} source
 * @return {*}
 * @see http://comicui.cn/api?name=deepMerge
 */
const deepMerge = (target: object, source: object): object => {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] instanceof Object) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return target;
};

/**
 * @description: 将数组拆解成指定长度的二维数组
 * @param {any} value
 * @param {number} length
 * @return {*}
 * @see http://comicui.cn/api?name=chunkArray
 */
const chunkArray = (value: any[], length: number): any[] => {
  const result: any[] = [];
  for (let i = 0; i < value.length; i += length) {
    const chunk: any[] = value.slice(i, i + length);
    result.push(chunk);
  }
  return result;
};

/**
 * @description: 复制文本内容到粘贴板
 * @param {string} text
 * @return {*}
 * @see http://comicui.cn/api?name=copyToClipboard
 */
const copyToClipboard = (text: string): Promise<unknown> => {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  } else {
    let textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'absolute';
    textArea.style.opacity = '0';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    // textArea.focus();
    textArea.select();
    return new Promise<void>((res, rej) => {
      document.execCommand('copy') ? res() : rej();
      textArea.remove();
    });
  }
};
/**
 * @description: 生成随机颜色
 * @see http://comicui.cn/api?name=randomColor
 */
const randomColor = (): string => {
  return (
    '#' +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, '0')
  );
};

/**
 * @description: 生成随机uid
 * @see http://comicui.cn/api?name=randomUid
 */
const randomUid = (): string => {
  return Math.random().toString(36).slice(2) + Date.now();
};

/**
 * @description: 判断奇偶
 * @param {number} num
 * @return {boolean} true 奇数 false 偶数
 * @see http://comicui.cn/api?name=parity
 */
function parity(num: number): boolean {
  return num % 2 !== 0;
}

/**
 * @description: 判断指定参数是否包含在条件数组内，即：权限查询
 * @param {number | string} c
 * @param {(string | number)[]} j
 * @param {object} o
 * @return {boolean} 权限结果：boolean
 * @see http://comicui.cn/api?name=hasJurisdiction
 */
function hasJurisdiction(
  c: string | number,
  j: (string | number)[],
  o?: {
    logic?: boolean;
    also?: boolean;
    extra?: () => boolean;
  }
): boolean {
  let also = isBoolean(o?.also) ? o?.also : false;
  let logic = isBoolean(o?.logic) ? o.logic : true;
  let result = logic ? j.includes(c) : !j.includes(c);

  if (isFunction(o?.extra)) {
    return also ? result && o.extra() : result || o.extra();
  } else {
    return result;
  }
}

export { deepMerge, chunkArray, copyToClipboard, randomColor, randomUid, parity, hasJurisdiction };

export {
  debounce,
  throttle,
  formatDate,
  isNumber,
  isString,
  isBoolean,
  isArray,
  isFunction,
  isPromise,
  isWindow
} from '../utils';
