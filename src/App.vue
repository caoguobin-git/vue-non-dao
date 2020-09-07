<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
//伪登录
import {
  fakeLogin,
  getDictList,
  getAreaList,
  getAllDictList,
} from "network/app.js";
import { setToKen, getToKen } from "utils/app.js";
import zhCn from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  name: "App",
  data() {
    return {
      locale: zhCn,
    };
  },
  created() {
    // 伪登录
    fakeLogin()
      .then((res) => {
        //判断是否已登录
        if (!getToKen()) {
          //伪登录用户名清空 因为判断是否登录的条件是 username有值
          res.username = "";
          setToKen(res.access_token);
          this.$store.dispatch("app/setToKenActions", res.access_token);
        }
        //获取数据字典
        getDictList()
          .then((res) => {
            // console.log(res);
            this.$store.dispatch("app/setDictList", res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        //获取所有数据字典数据
        getAllDictList()
          .then((res) => {
            console.log(res);
            this.$store.dispatch("app/setAllDictList", res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        //获取所有区域信息
        getAreaList()
          .then((res) => {
            this.$store.dispatch("app/setAreaList", res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss">
@import "assets/css/main.scss";
</style>
