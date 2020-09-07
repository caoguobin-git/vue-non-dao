<template>
  <div>
    <!-- 导航 -->
    <navCom></navCom>
    <!-- 面包屑 -->
    <breadcrumb></breadcrumb>
    <childMain></childMain>
  </div>
</template>

<script>
import navCom from "components/common/nav/Nav";
import breadcrumb from "components/common/breadcrumb/Breadcrumb";
import childMain from "./child/childMain";
import { getStateList } from "network/rent.js";
export default {
  name: "Rent",
  data() {
    return {
      num: 0,
      size: 30,
      list: [],
      listState: [],
    };
  },
  created() {
    let num = this.num;
    let size = this.size;
    let rlsid = this.$store.state.app.user.user_id;
    // getList(num, size, rlsid)
    //   .then((res) => {
    //     console.log(res);
    //     this.list = res;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    getStateList(data)
      .then((res) => {
        console.log(res);
        this.listState = res;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    navCom,
    breadcrumb,
    childMain,
  },
};
</script>

<style lang="scss" scoped></style>
