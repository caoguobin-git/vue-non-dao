/**
 * 过滤特殊字符
 */
export function stripscript(s) {
  var pattern = new RegExp("[` ~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{}【】‘；：”“'。，、？]")
  var rs = "";
  for (var i = 0; i < s.length; i++) {
    rs = rs + s.substr(i, 1).replace(pattern, '');
  }
  return rs;
}
/**
 * 验证用户名 支持中文、字母、数字、“-”“_”的组合，4-20个字符
 */
export function vUsername(value) {
  var reg = /^[a-zA-Z0-9_-]{4,20}$/;
  return reg.test(value);
}
/**
 * 验证密码 6至16位的数字+字母“-”“_”的组合
 */
export function vPassword(value) {
  let reg = /^[a-zA-Z0-9_-]{6,16}$/;
  return reg.test(value);
}

/**
 * 验证手机号
 */
export function vPhone(value) {
  let reg = /^1[3456789]\d{9}$/;
  return reg.test(value);
}
/**
 * 验证验证码
 */
// export function vCode(value) {
//   let reg = /^[a-z0-9]{6}$/;
//   return !reg.test(value);
// }