import service from './request.js'
import store from "store";
/**
 * 获取一个机械详细信息
 */
export function Mechanicl(mid) {
  return service.request({
    method: "get",
    url: "/system/webapi/mechanicl/" + mid,
  })
}
/**
 * 获取一个机械详细信息
 */
export function RecommendMec() {
  return service.request({
    method: "get",
    url: "/system/webapi/adv/recommendMec",
  })
}


//获取rent页面选择标签
export function getTagLists(){
  return service.request({
    method: "get",
    url: "/system/webapi/dict/listAll",
  })
}



//获取城市列表
export function getCityList(){
  return service.request({
    method: "get",
    url: "/system/webapi/area/list",
  })
}