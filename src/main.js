import Vue from "vue";
//ant-design导入
import Antd from 'ant-design-vue';

import App from "./App.vue";
import router from "./router";
import store from "./store";

//图片懒加载导入
import Lazyload from "vue-lazyload";

//ant-design样式文件导入
import "ant-design-vue/dist/antd.css";
//iconfont图标
import "assets/fonts/iconfont.css";

//swiper样式文件导入
import 'swiper/swiper-bundle.css'
Vue.config.productionTip = false;

//ant-design使用
Vue.use(Antd);
//图片懒加载使用
Vue.use(Lazyload, {
  loading: require("assets/img/lazy.jpg"),
});

//路由守卫
router.afterEach((to, from) => {
  //切换页面时返回顶部
  window.scrollTo(0, 0);
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");