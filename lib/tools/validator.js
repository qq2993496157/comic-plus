"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const PHONE = /^(?:(?:\+|00)86)?1\d{10}$/;
const EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const NAME_ZH = /^(?:[\u4e00-\u9fa5·]{2,16})$/;
const NAME_EN = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
const IDCARD = /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/;
const INTEGER = /^\+?[1-9]\d*$/;
const LICENSE_PLATE = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/;
const validatePhone = (value) => PHONE.test(value);
const validateEmail = (value) => EMAIL.test(value);
const validateNameZh = (value) => NAME_ZH.test(value);
const validateNameEn = (value) => NAME_EN.test(value);
const validateIdcard = (value) => IDCARD.test(value);
const validateInteger = (value) => INTEGER.test(value);
const validateLicenseplate = (value) => LICENSE_PLATE.test(value);
const validateNumRange = (value, max = Number.MAX_VALUE, min = 0) => {
  value = Number(value);
  max = Number(max);
  min = Number(min);
  if (isNaN(value) || isNaN(max) || isNaN(min)) {
    return false;
  }
  return value < max && value > min;
};
const validateExists = (value) => typeof value !== "undefined" && value !== null;
exports.validateEmail = validateEmail;
exports.validateExists = validateExists;
exports.validateIdcard = validateIdcard;
exports.validateInteger = validateInteger;
exports.validateLicenseplate = validateLicenseplate;
exports.validateNameEn = validateNameEn;
exports.validateNameZh = validateNameZh;
exports.validateNumRange = validateNumRange;
exports.validatePhone = validatePhone;
