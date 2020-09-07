import axios from 'axios'
import store from "store";
import {
  getToKen
} from 'utils/app.js';


// export function request(config) {
// 1.创建axios的实例
const service = axios.create({
  //baseURL: 'http://117.67.145.145:18080',
  baseURL: 'http://mall.rainbase.cn',
  timeout: 15000
})

// 2.axios的拦截器
// 2.1.请求拦截的作用
service.interceptors.request.use(config => {
  // 1.比如config中的一些信息不符合服务器的要求

  // 2.比如每次发送网络请求时, 都希望在界面中显示一个请求的图标

  // 3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息
  config.headers.Authorization = "Bearer " + getToKen();

  return config
}, err => {
  // console.log(err);
})

// 2.2.响应拦截
service.interceptors.response.use(res => {
  let data = res.data;
  if (data.resCode !== 0) {
    return Promise.resolve(data);
  } else {
    return Promise.reject(data);
  }
  return res.data
}, err => {
  console.log(err);
})

// 3.发送真正的网络请求
//   return instance(config)
// }
export default service;