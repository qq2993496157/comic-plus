//手机号
const PHONE = /^(?:(?:\+|00)86)?1\d{10}$/;
//邮箱
const EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//中文姓名
const NAME_ZH = /^(?:[\u4e00-\u9fa5·]{2,16})$/;
//英文姓名
const NAME_EN = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
//身份证（中国大陆1、2代）
const IDCARD =
  /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/;
//正整数
const INTEGER = /^\+?[1-9]\d*$/;
//车牌号
const LICENSE_PLATE =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/;

/**
 * @description: 校验手机号
 * @param {any} value
 * @return {*}
 * @see http://comicui.cn/api?name=regular
 */
const validatePhone = (value: any): boolean => PHONE.test(value);
/**
 * @description: 校验邮箱
 * @param {any} value
 * @return {*}
 * @see http://comicui.cn/api?name=regular
 */
const validateEmail = (value: any): boolean => EMAIL.test(value);
/**
 * @description: 校验中文姓名
 * @param {any} value
 * @return {*}
 * @see http://comicui.cn/api?name=regular
 */
const validateNameZh = (value: any): boolean => NAME_ZH.test(value);
/**
 * @description: 校验英文姓名
 * @param {any} value
 * @return {*}
 * @see http://comicui.cn/api?name=regular
 */
const validateNameEn = (value: any): boolean => NAME_EN.test(value);
/**
 * @description: 校验身份证
 * @param {any} value
 * @return {*}
 * @see http://comicui.cn/api?name=regular
 */
const validateIdcard = (value: any): boolean => IDCARD.test(value);
/**
 * @description: 校验正整数
 * @param {any} value
 * @return {*}
 * @see http://comicui.cn/api?name=regular
 */
const validateInteger = (value: any): boolean => INTEGER.test(value);
/**
 * @description: 校验车牌号
 * @param {any} value
 * @return {*}
 * @see http://comicui.cn/api?name=regular
 */
const validateLicenseplate = (value: any): boolean => LICENSE_PLATE.test(value);
/**
 * @description: 验证数字是否在指定范围内
 * @param {number} value
 * @param {number} max
 * @param {number} min
 * @return {*}
 * @see http://comicui.cn/api?name=otherRegular
 */
const validateNumRange = (value: number, max: number = Number.MAX_VALUE, min: number = 0): boolean => {
  value = Number(value);
  max = Number(max);
  min = Number(min);
  if (isNaN(value) || isNaN(max) || isNaN(min)) {
    return false;
  }
  return value < max && value > min;
};
/**
 * @description: 判断是否有值
 * @param {any} value
 * @return {*}
 * @see http://comicui.cn/api?name=otherRegular
 */
const validateExists = (value: any): boolean => typeof value !== 'undefined' && value !== null;

export {
  validatePhone,
  validateEmail,
  validateNameZh,
  validateNameEn,
  validateIdcard,
  validateInteger,
  validateLicenseplate,
  validateNumRange,
  validateExists
};
