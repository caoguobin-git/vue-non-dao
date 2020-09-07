import service from './request.js'
import store from "store";
/**
 * 伪登录
 */
export function fakeLogin() {
  return service.request({
    method: "post",
    url: "/auth/oauth/token?client_id=webapi&client_secret=123456&grant_type=password&username=openuser&password=123456"
  })
}

/**
 * 获取数据字典
 */
export function getDictList() {
  return service.request({
    method: "get",
    url: "/system/webapi/dict/list"
  })
}

/**
 * 获取数据字典
 */
export function getAllDictList() {
  return service.request({
    method: "get",
    url: "/system/webapi/dict/listAll"
  })
}
/**
 * 查看数据字典详细信息
 */
export function getDictType(dictType) {
  return service.request({
    method: "get",
    url: "/system/webapi/dict/" + dictType
  })
}


/**
 * 获取头部广告--默认三条
 */
export function getAdvTop() {
  return service.request({
    method: "get",
    url: "/system/webapi/adv/top"
  })
}
/**
 * 获取主营业务 机械信息获取
 */
export function getRelease(data) {
  return service.request({
    method: "get",
    url: "/system/webapi/index/release",
    params: {
      area: data.area,
      fuel: data.fuel,
      level: data.level,
      mechanics: data.mechanics,
      page: data.page,
      pageSize: data.pageSize,
      priceRange: data.priceRange,
      sort: data.sort,
      timeRange: data.timeRange,
      type: data.type,
    }
  })
}

/**
 * 网站主页新闻--左侧三条大图新闻
 */
export function getNewsLeft3() {
  return service.request({
    method: "get",
    url: "/system/webapi/news/left3"
  })
}

/**
 * 网站主页新闻--右侧上部5条新闻
 */
export function getNewsRightUp(data) {
  return service.request({
    method: "get",
    url: "/system/webapi/news/rightUp",
  })
}

/**
 * 网站主页新闻--右侧中部5条新闻
 */
export function getNewsRightMid(data) {
  return service.request({
    method: "get",
    url: "/system/webapi/news/rightMid",
  })
}

/**
 * 网站主页新闻--右侧下部5条新闻
 */
export function getNewsRightDown(data) {
  return service.request({
    method: "get",
    url: "/system/webapi/news/rightDown",
  })
}

/**
 * 获取推荐广告--新闻中心右侧广告
 */
export function getNewsRec(data) {
  return service.request({
    method: "get",
    url: "/system/webapi/adv/recommend3",
  })
}

/**
 * 获取中部广告条--默认一条
 */
export function getAdvMid() {
  return service.request({
    method: "get",
    url: "/system/webapi/adv/mid"
  })
}

/**
 * 获取网站首页图库
 */
export function getPicMain() {
  return service.request({
    method: "get",
    url: "/system/webapi/pic/main"
  })
}

/**
 * 获取底部广告条--默认一条
 */
export function getAdvBottom() {
  return service.request({
    method: "get",
    url: "/system/webapi/adv/bottom",
  })
}

/**
 * 获取推荐广告--新闻中心右侧广告
 */
export function getCenterRec(data) {
  return service.request({
    method: "get",
    url: "/system/webapi/adv/recommend5",
  })
}

/**
 * 获取所有区域信息
 */
export function getAreaList() {
  return service.request({
    method: "get",
    url: "/system/webapi/area/list",
  })
}


/**
 * 注册短信验证
 */
export function RegisteredPhoneCode(phone) {
  return service.request({
    method: "get",
    url: "/phoneCode/" + phone
  })
}

/**
 * 注册验证用户名是否重复
 */
export function RegisteredUserName(username) {
  return service.request({
    method: "get",
    url: "/system/webapi/member/validName/" + username
  })
}

/**
 * 注册验证手机号是否重复
 */
export function RegisteredPhoneNum(phone) {
  return service.request({
    method: "get",
    url: "/system/webapi/member/validPhone/" + phone
  })
}

/**
 * 注册短信验证
 */
export function Registered(data) {
  return service.request({
    method: "post",
    url: "/system/webapi/member/registration",
    params: {
      key: data.key,
      mname: data.mname,
      mpassword: data.mpassword,
      mphone: data.mphone,
      value: data.value,
    }
  })
}