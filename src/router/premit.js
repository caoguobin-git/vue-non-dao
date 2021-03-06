import VueRouter from "vue-router";
import router from "./index.js";

import {
  getToKen,
  removeToKen,
  removeUserName
} from "utils/app.js"

import store from "../store/index.js"

//白名单
const whiteRouter = ['/login'];

/**
 * 路由守卫
 */
router.beforeEach((to, from, next) => {
  alert('hello world')
  console.log(to.path)
  //判断是否真实用户登录
  if (to.path === '/seekRental') {
    console.log(typeof router.app.$options.store.state.userInfo.username)
    alert('不可以跳转')
    if ((typeof router.app.$options.store.state.userInfo.username) === 'undefined') {
      next('/login')
    }
  }

  //判断token否存在
  if (getToKen()) {

    //如果回到登录页 清除token和username vuex和cookie都清除
    if (to.path === '/login') {
      removeToKen();
      removeUserName();
      store.dispatch('app/setToKenActions', '');
      store.dispatch('app/setUserNameActions', '');
      next();
    } else {
      next();
    }
  } else {
    //判断要跳转的页面是否是白名单页面
    if (whiteRouter.indexOf(to.path) !== -1) {
      next();
    } else {
      // root.$message.error("邮箱不能为空！！");
      next('/login');
    }
  }
})