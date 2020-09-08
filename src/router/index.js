import Vue from "vue";
import VueRouter from "vue-router";

//import {
//  getToKen,
//  removeToKen,
//  removeUserName
//} from "@/utils/app"

import {getToKen,removeToKen,removeUser} from "@/utils/app";

//import store from "../store/index.js"

//白名单
const whiteRouter = ['/login'];

Vue.use(VueRouter);

//修复路由重复点击报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

import Layout from 'components/common/layout/Layout.vue';
import store from "@/store";
const routes = [{
    path: "/",
    redirect: "index",
    meta: {
      name: '首页'
    }
  },
  {
    path: "/index",
    component: Layout,
    children: [{
        path: "/index",
        name: "Index",
        meta: {
          name: '首页',
          //头部和底部的类型 头部有search phone none 和nav 底部有message和copy
          headerType: "search",
          footerType: "message"
        },
        component: () => import("views/index/Index.vue")
      }, {
        path: "/rent",
        redirect: "/rentMain",
        name: "RentMain",
        meta: {
          name: '租赁',
          hidden: true,
          headerType: "search",
          footerType: "message"
        },
        component: () => import("views/rent/Rent.vue"),
        children: [{
          path: "/rentMain",
          name: "Rent",
          meta: {
            name: '租赁',
            headerType: "search",
            footerType: "message",
            itemRender: [{
              path: "",
              name: '租赁'
            }]
          },
          component: () => import("views/rent/child/RentData.vue"),
        }, {
          path: "/askMain",
          name: "Ask",
          meta: {
            name: '求租',
            headerType: "search",
            footerType: "message",
            itemRender: [{
              path: "",
              name: '求租'
            }]
          },
          component: () => import("views/rent/child/AskData.vue"),
        }, ]
      },
      {
        path: "/rentDetails/:mid",
        name: "RentDetails",
        meta: {
          name: '详情',
          headerType: "search",
          footerType: "message",
          itemRender: [{
            path: "/rentMain",
            name: '租赁'
          }, {
            path: "",
            name: '详情'
          }]
        },
        component: () => import("views/rentDetails/RentDetails.vue"),
      },
      {
        path: "/gallery",
        name: "Gallery",
        meta: {
          name: '图库',
          headerType: "none",
          footerType: "message"
        },
        component: () => import("views/gallery/Gallery.vue")
      },
      {
        // path: "/galleryDetails",
        path: "/galleryDetails/:mid",
        name: "GalleryDetails",
        meta: {
          name: '图片详情',
          headerType: "none",
          footerType: "message",
          itemRender: [{
            path: "/gallery",
            name: '图库'
          }, {
            path: "",
            name: '图片详情'
          }]
        },
        component: () => import("views/galleryDetails/GalleryDetails.vue")
      },
      {
        path: "/newsList",
        name: "NewsList",
        meta: {
          name: '新闻',
          headerType: "none",
          footerType: "message"
        },
        component: () => import("views/newsList/NewsList.vue")
      },
      {
        path: "/news",
        // path: "/news/:id",
        name: "News",
        meta: {
          name: '资讯',
          headerType: "none",
          footerType: "message",
          itemRender: [{
            path: "/newsList",
            name: '新闻'
          }, {
            path: "",
            name: '资讯'
          }]
        },
        component: () => import("views/news/News.vue")
      },
      {
        path: "/backstage",
        redirect: "/releaseRental",
        name: "Backstage",
        component: () => import("views/backstage/Backstage.vue"),
        children: [{
          path: "/supplyDemand",
          name: "SupplyDemand",
          redirect: "/releaseRental",
          meta: {
            name: '供求信息',
            icon: "icon-gongqiu",
          },
          component: () => import("views/backstage/supplyDemand/SupplyDemand.vue"),
          children: [{
            path: "/releaseRental",
            name: "ReleaseRental",
            meta: {
              name: '发布出租信息',
              headerType: "nav",
              footerType: "copy",
            },
            component: () => import("views/backstage/supplyDemand/child/ReleaseRental.vue"),
          }, {
            path: "/seekRental",
            name: "SeekRental",
            meta: {
              name: '发布求租信息',
              headerType: "nav",
              footerType: "copy",
            },
            component: () => import("views/backstage/supplyDemand/child/SeekRental.vue"),
          }, {
            path: "/manageSupplyDemand",
            name: "ManageSupplyDemand",
            meta: {
              name: '管理供求信息',
              headerType: "nav",
              footerType: "copy",
            },
            component: () => import("views/backstage/supplyDemand/child/ManageSupplyDemand.vue"),
          }, ]
        }, {
          path: "/favorites",
          name: "Favorites",
          redirect: "/myFavorites",
          meta: {
            name: '我的收藏',
            icon: "icon-shoucang",
          },
          component: () => import("views/backstage/favorites/Favorites.vue"),
          children: [{
            path: "/myFavorites",
            name: "MyFavorites",
            meta: {
              name: '我的收藏',
              headerType: "nav",
              footerType: "copy",
            },
            component: () => import("views/backstage/favorites/child/MyFavorites.vue"),
          }, ]
        }, {
          path: "/accountManagement",
          name: "AccountManagement",
          redirect: "/editInfo",
          meta: {
            name: '账号管理',
            icon: "icon-ren",
          },
          component: () => import("views/backstage/accountManagement/AccountManagement.vue"),
          children: [{
            path: "/editInfo",
            name: "EditInfo",
            meta: {
              name: '个人信息修改',
              headerType: "nav",
              footerType: "copy",
            },
            component: () => import("views/backstage/accountManagement/child/EditInfo.vue"),
          }, {
            path: "/changePassword",
            name: "ChangePassword",
            meta: {
              name: '密码修改',
              headerType: "nav",
              footerType: "copy",
            },
            component: () => import("views/backstage/accountManagement/child/ChangePassword.vue"),
          }, ]
        }, {
          path: "/questions",
          name: "Questions",
          redirect: "/myQuestions",
          meta: {
            name: '客服中心',
            icon: "icon-kefu",
          },
          component: () => import("views/backstage/questions/Questions.vue"),
          children: [{
            path: "/myQuestions",
            name: "MyQuestions",
            meta: {
              name: '我的提问',
              headerType: "nav",
              footerType: "copy",
            },
            component: () => import("views/backstage/questions/child/MyQuestions.vue"),
          }, {
            path: "/newQuestions",
            name: "NewQuestions",
            meta: {
              name: '发布新的提问',
              headerType: "nav",
              footerType: "copy",
            },
            component: () => import("views/backstage/questions/child/NewQuestions.vue"),
          }, ]
        }, {
          path: "/message",
          name: "Message",
          redirect: "/myMessage",
          meta: {
            name: '系统消息',
            icon: "icon-zhong",
          },
          component: () => import("views/backstage/message/Message.vue"),
          children: [{
            path: "/myMessage",
            name: "MyMessage",
            meta: {
              name: '系统消息',
              headerType: "nav",
              footerType: "copy",
            },
            component: () => import("views/backstage/message/child/MyMessage.vue"),
          }, ]
        }, ]
      },
      {
        path: "/login",
        name: "Login",
        meta: {
          name: '会员登录',
          headerType: "phone",
          footerType: "copy"
        },
        component: () => import("views/login/Login.vue")
      },
      {
        path: "/registered",
        name: "Registered",
        redirect: "/registerAccount",
        meta: {
          name: '会员注册',
          headerType: "phone",
          footerType: "copy"
        },
        component: () => import("views/registered/Registered.vue"),
        children: [{
          path: "/registerAccount",
          name: "RegisterAccount",
          meta: {
            name: '注册账号',
            headerType: "phone",
            footerType: "copy"
          },
          component: () => import("views/registered/child/RegisterAccount.vue"),
        }, {
          path: "/registerSuccess",
          name: "RegisterSuccess",
          meta: {
            name: '注册成功',
            headerType: "phone",
            footerType: "copy"
          },
          component: () => import("views/registered/child/Success.vue"),
        }, ]
      },
      {
        path: "/findPassword",
        name: "FindPassword",
        redirect: "/verifyPhone",
        meta: {
          name: '密码找回',
        },
        component: () => import("views/findPassword/FindPassword.vue"),
        children: [{
          path: "/verifyPhone",
          name: "VerifyPhone",
          meta: {
            name: '手机号码验证',
            headerType: "phone",
            footerType: "copy"
          },
          component: () => import("views/findPassword/child/VerifyPhone.vue"),
        }, {
          path: "/newPassword",
          name: "NewPassword",
          meta: {
            name: '设置新密码',
            headerType: "phone",
            footerType: "copy"
          },
          component: () => import("views/findPassword/child/NewPassword.vue"),
        }, {
          path: "/findPasswordSuccess",
          name: "FindPasswordSuccess",
          meta: {
            name: '找回密码成功',
            headerType: "phone",
            footerType: "copy"
          },
          component: () => import("views/findPassword/child/Success.vue"),
        }, ]
      },
    ]
  },
];

const router = new VueRouter({
  routes
});



/**
 * 路由守卫
 */
router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.path==='/index'){
    next()
  }
  //判断是否真实用户登录
  if (to.path === '/seekRental') {
    console.log(typeof router.app.$options.store.state.userInfo.username)
    if ((typeof router.app.$options.store.state.userInfo.username) === 'undefined') {
      next('/login')
    }
  }

  //判断token否存在
  if (getToKen()) {

    console.log('gettoken')
    //如果回到登录页 清除token和username vuex和cookie都清除
    if (to.path === '/login') {
      removeToKen();
      //removeUserName();
      removeUser();
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


export default router;