<template>
  <div id="index">
    <!-- 大导航 -->
    <navCom></navCom>
    <!-- 小导航 -->
    <smNavCom></smNavCom>
    <!-- banner -->
    <banner :banner="advTop"></banner>
    <!-- 主营业务 -->
    <business
      :businessLeft="businessLeft"
      :businessRight="businessRight"
    ></business>
    <banner :banner="advMid"></banner>
    <!--新闻中心 -->
    <news
      :left3="left3"
      :newsRightUp="newsRightUp"
      :newsRightMid="newsRightMid"
      :newsRightBottom="newsRightBottom"
      :NewsRec="NewsRec"
    ></news>
    <banner :banner="advBottom"></banner>
    <!--供求市场 -->
    <market></market>
    <!--产品图库 -->
    <prcture :PicMain="PicMain"></prcture>
    <!-- 购机中心 -->
    <center :CenterRec="CenterRec"></center>
  </div>
</template>

<script>
//导航

import navCom from "components/common/nav/Nav";
import smNavCom from "./child/smNav";
import banner from "./child/Banner";
import business from "./child/Business";
import news from "./child/News";
import market from "./child/Market";
import prcture from "./child/Prcture";
import center from "./child/Center";
import {
  fakeLogin,
  getAdvTop,
  getAdvMid,
  getAdvBottom,
  getDictType,
  getRelease,
  getNewsLeft3,
  getNewsRightUp,
  getNewsRightMid,
  getNewsRightDown,
  getNewsRec,
  getPicMain,
  getCenterRec,
} from "network/app.js";
import { setToKen, getToKen } from "utils/app.js";

export default {
  name: "Index",
  data() {
    return {
      advTop: [],
      advMid: [],
      advBottom: [],
      businessLeft: [],
      businessRight: [],
      left3: [],
      newsRightUp: [],
      newsRightMid: [],
      newsRightBottom: [],
      NewsRec: {
        title: "猜你喜欢",
        list: [],
      },
      CenterRec: {
        title: "热门推荐",
        list: [],
      },
      PicMain: [],
    };
  },
  components: {
    navCom,
    smNavCom,
    banner,
    business,
    news,
    market,
    prcture,
    center,
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

        //获取头部广告
        getAdvTop()
          .then((res) => {
            this.advTop = res.list;
          })
          .catch((err) => {
            console.log(err);
          });
        let releseData = {
          area: "",
          fuel: "",
          level: "",
          mechanics: "",
          page: "",
          pageSize: "",
          priceRange: "",
          sort: "",
          timeRange: "",
          type: "",
        };
        //获取主营业务 机械信息获取
        getRelease(releseData)
          .then((res) => {
            this.businessRight = res.list;
            //获取主营业务 机械信息获取
            // let dictType1 = this.$store.state.app.dictList[0].dictType;
            // getDictType(dictType1)
            //   .then((res) => {
            //     console.log(res);
            //     // this.businessRight = res.list;
            //   })
            //   .catch((err) => {
            //     console.log(err);
            //   });
          })
          .catch((err) => {
            console.log(err);
          });

        //获取中部广告
        getAdvMid()
          .then((res) => {
            this.advMid = res.list;
          })
          .catch((err) => {
            console.log(err);
          });

        //网站主页新闻--左侧三条大图新闻
        getNewsLeft3()
          .then((res) => {
            this.left3 = res.list;
          })
          .catch((err) => {
            console.log(err);
          });

        //新闻信息获取
        getNewsRightUp()
          .then((res) => {
            this.newsRightUp = res.list;
          })
          .catch((err) => {
            console.log(err);
          });
        getNewsRightMid()
          .then((res) => {
            this.newsRightMid = res.list;
          })
          .catch((err) => {
            console.log(err);
          });
        getNewsRightDown()
          .then((res) => {
            this.newsRightBottom = res.list;
          })
          .catch((err) => {
            console.log(err);
          });

        //获取推荐广告--新闻中心右侧广告
        getNewsRec()
          .then((res) => {
            this.NewsRec.list = res.list;
          })
          .catch((err) => {
            console.log(err);
          });

        //获取网站首页图库
        getPicMain()
          .then((res) => {
            // console.log(res.list);
            this.PicMain = res.list;
          })
          .catch((err) => {
            console.log(err);
          });

        //获取底部广告;
        getAdvBottom()
          .then((res) => {
            this.advBottom = res.list;
          })
          .catch((err) => {
            console.log(err);
          });

        //获取推荐广告--购机中心右侧广告
        getCenterRec()
          .then((res) => {
            this.CenterRec.list = res.list;
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

<style lang="scss" scoped></style>
