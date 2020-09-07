import service from './request.js'
import store from "store";
/**
 * 密码找回 手机验证码验证
 */
export function sendCheckPhone(key, phone, value) {
  return service.request({
    method: "get",
    url: "/system/webapi/member/checkPhone",
    params: {
      key,
      phone,
      value
    }
  })
}

/**
 * 密码找回 修改密码
 */
export function updatePass(pass, phone) {
  return service.request({
    method: "put",
    url: "/system/webapi/member/updatePass",
    params: {
      phone,
      pass
    }
  })
}