const isString = (value) => typeof value === "string";
const isNumber = (value) => typeof value === "number";
const isBoolean = (value) => typeof value === "boolean";
const isArray = (value) => Array.isArray(value);
const isObject = (value) => typeof value === "object" && !Array.isArray(value);
const isFunction = (value) => typeof value === "function";
const isPromise = (value) => value instanceof Promise;
const isWindow = (value) => value === window;
export {
  isArray,
  isBoolean,
  isFunction,
  isNumber,
  isObject,
  isPromise,
  isString,
  isWindow
};
