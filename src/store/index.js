import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{},
    nowPath: "",
    indexData: {
      title: "非道网",
      nav: [{
          name: "首页",
          href: "/index"
        }, {
          name: "租赁",
          href: "/rent"
        },
        {
          name: "维保",
          href: "/rent"
        },
        {
          name: "金融服务",
          href: "/rent"
        },
        {
          name: "保险",
          href: "/rent"
        }, {
          name: "租赁",
          href: "/rent"
        },
        {
          name: "维保",
          href: "/rent"
        },
        {
          name: "金融服务",
          href: "/rent"
        },
        {
          name: "保险",
          href: "/rent"
        },
      ],
      phone: "400-010-1234",
      address: "合肥市经开区九龙路与容成路交口东湖高新12-1栋",
      link: [{
        name: "宇胜科技",
        href: "https://www.baidu.com"
      }, {
        name: "宇胜科技",
        href: "https://www.baidu.com"
      }, {
        name: "宇胜科技",
        href: "https://www.baidu.com"
      }, {
        name: "宇胜科技",
        href: "https://www.baidu.com"
      }, {
        name: "宇胜科技",
        href: "https://www.baidu.com"
      }, {
        name: "宇胜科技",
        href: "https://www.baidu.com"
      }, {
        name: "宇胜科技",
        href: "https://www.baidu.com"
      }, {
        name: "宇胜科技",
        href: "https://www.baidu.com"
      }, ],
      record: {
        name: "皖ICP备19016798号-1",
        href: "https://www.baidu.com"
      },
      littleName: "机械之家",
      copy: "版权所有 © 2002, All Rights Reserved."
    },
    imgUrl: "http://60.168.16.182:18088"
  },

  mutations:{
    setUserInfo(state,userInfo) {
      state.userInfo=userInfo;
    },
  },
  actions:{
    //action中没有state，有默认的上下文context
    setUserInfo(context,userInfo){
        context.commit('setUserInfo',userInfo);
    }
  },

  modules: {
    app
  }
})