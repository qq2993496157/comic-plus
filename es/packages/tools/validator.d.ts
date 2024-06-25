/**
 * @description: 校验手机号
 * @param {any} value
 * @return {*}
 */
declare const validatePhone: (value: any) => boolean;
/**
 * @description: 校验邮箱
 * @param {any} value
 * @return {*}
 */
declare const validateEmail: (value: any) => boolean;
/**
 * @description: 校验中文姓名
 * @param {any} value
 * @return {*}
 */
declare const validateNameZh: (value: any) => boolean;
/**
 * @description: 校验英文姓名
 * @param {any} value
 * @return {*}
 */
declare const validateNameEn: (value: any) => boolean;
/**
 * @description: 校验身份证
 * @param {any} value
 * @return {*}
 */
declare const validateIdcard: (value: any) => boolean;
/**
 * @description: 校验正整数
 * @param {any} value
 * @return {*}
 */
declare const validateInteger: (value: any) => boolean;
/**
 * @description: 校验车牌号
 * @param {any} value
 * @return {*}
 */
declare const validateLicenseplate: (value: any) => boolean;
/**
 * @description: 验证数字是否在指定范围内
 * @param {number} value
 * @param {number} max
 * @param {number} min
 * @return {*}
 */
declare const validateNumRange: (value: number, max?: number, min?: number) => boolean;
/**
 * @description: 判断是否有值
 * @param {any} value
 * @return {*}
 */
declare const validateExists: (value: any) => boolean;
export { validatePhone, validateEmail, validateNameZh, validateNameEn, validateIdcard, validateInteger, validateLicenseplate, validateNumRange, validateExists };
