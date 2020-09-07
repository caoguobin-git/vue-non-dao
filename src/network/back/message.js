import service from '../request.js'

//获取出租数据，封装数据放到组件内部
export function getSystemMessage(){
  return service.request({
    method:'get',
    url:'/system/webapi/notice/list'
  })
}

