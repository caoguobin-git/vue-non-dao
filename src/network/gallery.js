import service from './request.js'

export function getGalleryTop() {
  return service.request({
    method: "get",
    url: "/system/webapi/pic/top",
  })
}

export function getGalleryPicList() {
  return service.request({
    method: "get",
    url: "/system/webapi/pic/list",
  })
}