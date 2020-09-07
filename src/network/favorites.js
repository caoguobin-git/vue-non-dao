import service from './request.js'
import store from "store";
/**
 * 获取收藏
 */
export function getFavorites(data) {
  return service.request({
    method: "get",
    url: "/system/webapi/collection/list",
    params: {
      cid: data.cid,
      ctitle: data.ctitle,
      ctype: data.ctype,
      mid: data.mid,
    }
  })
}

/**
 * 删除收藏
 */
export function deleteFavorites(id) {
  return service.request({
    method: "post",
    url: "/system/webapi/collection/delCollection/" + id,
  })
}
/**
 * 保存收藏
 */
export function saveFavorites(data) {
  console.log(data);
  return service.request({
    method: "post",
    url: "/system/webapi/collection/saveCollection",
    params: {
      cid: data.cid,
      ctitle: data.ctitle,
      ctype: data.ctype,
      mid: data.mid,
    }
  })
}