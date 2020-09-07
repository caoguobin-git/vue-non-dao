import service from './request.js'

export function getDisplayPics(id) {
  return service.request({
    method: "get",
    url: "/system/webapi/pic/getOne/"+id,
  })
}

export function getHotPicList(id) {
  return service.request({
    method: "get",
    url: "/system/webapi/pic/getOne/"+id,
  })
}