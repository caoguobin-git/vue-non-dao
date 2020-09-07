import service from './request.js'
/**
 * 获取列表
 */
export function getList(data) {
  return service.request({
    method: "get",
    url: "/system/webapi/news/list",
  })
}

/**
 * 新增信息
 */
export function AddInfo(data) {
  return service.request({
    method: "post",
    url: "/news/add/",
    data
  })
}

/**
 * 编辑信息
 */
export function EditInfo(data) {
  return service.request({
    method: "post",
    url: "/news/editInfo/",
    data
  })
}

/**
 * 删除信息
 */
export function DeleteInfo(data) {
  return service.request({
    method: "post",
    url: "/news/deleteInfo/",
    data
  })
}


/**
 * 添加一级分类
 */
export function AddFirstCategory(data) {
  return service.request({
    method: "post",
    url: "/news/addFirstCategory/",
    data
  })
}

/**
 * 获取分类
 */
export function GetCategory(data) {
  return service.request({
    method: "post",
    url: "/news/getCategory/",
    data
  })
}

/**
 * 删除分类
 */
export function DeleteCategory(data) {
  return service.request({
    method: "post",
    url: "/news/deleteCategory/",
    data
  })
}

/**
 * 修改分类
 */
export function EditCategory(data) {
  return service.request({
    method: "post",
    url: "/news/editCategory/",
    data
  })
}


export function getTopNews3() {
  return service.request({
    method: "get",
    url: "/system/webapi/news/top3"
  })
}

export function getTopNews5() {
  return service.request({
    method: "get",
    url: "/system/webapi/news/top5"
  })
}

export function getNewsList(params) {
  return service.request({
    method: "get",
    url: "/system/webapi/news/list",
    params:params
  })
}

export function getHotList() {
  return service.request({
    method: "get",
    url: "/system/webapi/pic/hotList",
  })
}

export function getNewsRecommend() {
  return service.request({
    method: "get",
    url: "/system/webapi/news/recommend",
  })
}

export function getAdvRecommend3() {
  return service.request({
    method: "get",
    url: "/system/webapi/adv/recommend3",
  })
}
export function getRandomNews(num) {
  return service.request({
    method: "get",
    url: "/system/webapi/news/list/"+num,
  })
}