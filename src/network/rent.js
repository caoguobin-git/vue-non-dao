import service from './request.js'
import store from "store";

/**
 * 获取list
 */
// export function getList(num, size, rlsid) {
//   return service.request({
//     method: "get",
//     url: "/system/webapi/release/list/" + rlsid,
//     params: {
//       pageNum: num,
//       pageSize: size
//     }
//   })
// }

/**
 * 获取条件列表
 */
export function getStateList(data) {
  return service.request({
    method: "get",
    url: "/system/webapi/index/release",
    params: {
      area: data.area,
      fuel: data.fuel,
      level: data.level,
      mechanics: data.mechanics,
      owner: data.owner,
      page: data.page,
      pageSize: data.pageSize,
      priceRange: data.priceRange,
      sort: data.sort,
      timeRange: data.timeRange,
      type: data.type,
    }
  })
}

//获取出租数据，封装数据放到组件内部
export function getRentList(params){
  console.log("params start")
  console.log(params)
  console.log("params end")
  return service.request({
    method:'get',
    url:'/system/webapi/index/release',
    params
  })
}
