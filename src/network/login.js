import service from './request.js'
import store from "store";
/**
 * 获取验证码图
 */
export function getyanzPicture() {
  return service.request({
    method: "get",
    url: "/code",
  })
}
/**
 * 登录
 */
export function trueLogin() {
  return service.request({
    method: "post",
    url: "/auth/oauth/token?client_id=webapi&client_secret=123456&grant_type=password&username=member1&password=123456&userType=webapi"
  })
}
// export function trueLogin(data) {
//   return service.request({
//     method: "post",
//     url: "/auth/oauth/token",
//     params: {
//       client_id: "webapi",
//       client_secret: "123456",
//       grant_type: "password",
//       password: data.password,
//       username: data.username
//     }
//   })
// }