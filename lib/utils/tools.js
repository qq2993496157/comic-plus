"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function debounce(func, interval = 200) {
  if (typeof func !== "function") {
    throw new TypeError("need a function arguments");
  }
  let t = null;
  return function(...args) {
    clearTimeout(t);
    t = setTimeout(() => {
      func.apply(this, args);
    }, interval);
  };
}
function throttle(func, interval = 500) {
  if (typeof func !== "function") {
    throw new TypeError("need a function arguments");
  }
  let t = null;
  return function(...args) {
    if (!t) {
      t = setTimeout(function() {
        func.apply(this, args);
        clearTimeout(t);
        t = null;
      }, interval);
    }
  };
}
const deleteAfterIndex = (arr, index) => {
  if (index >= 0 && index < arr.length) {
    arr.splice(index + 1, arr.length - index - 1);
  }
  return arr;
};
const repairZero = (value) => {
  value = Number(value);
  if (isNaN(value)) {
    throw new Error("Value must be a number or a numeric string");
  }
  return (value < 10 ? "0" + value : value).toString();
};
const formatDate = (timestamp, fmt) => {
  if (!timestamp || isNaN(new Date(timestamp).getTime())) {
    return "";
  }
  try {
    var date = new Date(timestamp);
    if (!fmt)
      fmt = "yyyy-MM-dd hh:mm:ss";
    var o = {
      "M+": date.getMonth() + 1,
      //月份
      "d+": date.getDate(),
      //日
      "h+": date.getHours(),
      //小时
      "m+": date.getMinutes(),
      //分
      "s+": date.getSeconds(),
      //秒
      "q+": Math.floor((date.getMonth() + 3) / 3),
      //季度
      S: date.getMilliseconds()
      //毫秒
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    return fmt;
  } catch (e) {
    return "";
  }
};
const findIndexOfMinOrMax = (arr, flag) => {
  if (arr.length === 0) {
    return -1;
  }
  let flagValue;
  {
    flagValue = Math.min(...arr);
  }
  const index = arr.indexOf(flagValue);
  return index;
};
const flattenArray = (arr, key) => {
  const newArray = JSON.parse(JSON.stringify(arr));
  const result = [];
  function flatten(obj) {
    result.push(obj);
    if (obj[key]) {
      obj[key].forEach((child) => flatten(child));
    }
  }
  newArray.forEach((obj) => flatten(obj));
  return result;
};
const deepEqual = (o1, o2) => {
  if (o1 === o2)
    return true;
  if (typeof o1 !== "object" || o1 === null || typeof o2 !== "object" || o2 === null) {
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
exports.debounce = debounce;
exports.deepEqual = deepEqual;
exports.deleteAfterIndex = deleteAfterIndex;
exports.findIndexOfMinOrMax = findIndexOfMinOrMax;
exports.flattenArray = flattenArray;
exports.formatDate = formatDate;
exports.repairZero = repairZero;
exports.throttle = throttle;
