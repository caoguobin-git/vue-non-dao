import service from './request.js'
import store from "store";
/**
 * 求租 信息新增修改保存
 */
export function Rental(data) {
  return service.request({
    method: "post",
    url: "/system/webapi/release/in",
    params: data
  })
}

/**
 * 招租信息 新增修改保存
 */
export function releaseRental(data) {
  return service.request({
    method: "post",
    url: "/system/webapi/release/out",
    params: data
  })
}
/**
 * 删除供求信息
 */
export function sendDelete(data) {
  return service.request({
    method: "delete",
    url: "/system/webapi/release/del",
    params: {
      id: data
    }
  })
}

/**
 * 求租信息获取
 */
export function RentalIn(id) {
  return service.request({
    method: "post",
    url: "/system/webapi/release/in" + id,
  })
}


/**
 * 出租信息 获取
 */
export function RentalOut(id) {
  return service.request({
    method: "post",
    url: "/system/webapi/release/out" + id,
  })
}