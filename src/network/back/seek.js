import service from '../request.js'

//获取出租数据，封装数据放到组件内部
export function saveSeek(data){
  return service.request({
    method:'post',
    url:'/system/webapi/release/in',
    data
  })
}

