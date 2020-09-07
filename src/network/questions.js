import service from './request.js'
/**
 * 获取个人提问记录
 */
export function getQuestions(id) {
  return service.request({
    method: "get",
    url: "/system/webapi/issue/list",
    params: {
      mid: id
    }
  })
}

/**
 * 保存提问信息
 */
export function setQuestions(type, title, content) {

  let data ={
    type,title,content
  }
  console.log(data)
  let jsonData = JSON.stringify(data)
  return service.request({
    method: "post",
    url: "/system/webapi/issue/saveIssue",
    data
    // params: {
    //   type,
    //   searchValue,
    //   content,
    // }
  })
}