import cookie from 'cookie_js';

const admin_toKen = 'admin_toKen';
const admin_user = 'admin_user'
const admin_phoneCodeId = 'admin_phoneCodeId';

/**
 * 获取token
 */
export function getToKen() {
  return cookie.get(admin_toKen);
}

/**
 * 设置token
 */
export function setToKen(toKen) {
  return cookie.set(admin_toKen, toKen);
}

/**
 * 移除token
 */
export function removeToKen(toKen) {
  return cookie.remove(admin_toKen);
}
/**
 * 获取user
 */
export function getUser() {
  if (cookie.get(admin_user)) {
    return JSON.parse(cookie.get(admin_user));
  } else {
    return false;
  }
}

/**
 * 设置user
 */
export function setUser(user) {
  return cookie.set(admin_user, JSON.stringify(user));
}

/**
 * 移除user
 */
export function removeUser(user) {
  return cookie.remove(admin_user);
}

/**
 * 获取手机验证码Id
 */
export function getPhoneCodeId() {
  return cookie.get(admin_phoneCodeId);
}

/**
 * 设置手机验证码Id
 */
export function setPhoneCodeId(phone) {
  return cookie.set(admin_phoneCodeId, phone);
}

/**
 * 移除手机验证码Id
 */
export function removePhoneCodeId(phone) {
  return cookie.remove(admin_phoneCodeId);
}