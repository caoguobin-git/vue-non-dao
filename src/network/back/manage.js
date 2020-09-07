import service from '../request.js'

//获取出租数据，封装数据放到组件内部
export function getManageList(id){
  return service.request({
    method:'get',
    url:'/system/webapi/release/list/'+id,
  })
}


export function deleteManageByIds(id){
  return service.request({
    method:'post',
    url:'/system/webapi/release/del',

  })
}
