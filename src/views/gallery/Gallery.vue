<template>
  <div class="Gallery">
    <navCom></navCom>
    <div class="galleryNav">
      <div class="w">
        <div class="logo"><img src="~assets/img/logo1.png" alt=""></div>
        <!-- <ul>
          <li :class="{active: current == index}" v-for="(item,index) in picture" @click="itemClick(index)">
            {{item.name}}
          </li>
        </ul> -->
      </div>
    </div>
    <div class="galleryTop">
      <div class="w">
        <ul class="Box fl">
          <li v-for="item in topList.slice(0,2)">
            <router-link :to="'/galleryDetails/'+item.id">
              <img v-lazy="getPicUrl(item)" src="" alt="">
              <div class="title nowrap">
                <span>{{item.pictype}}</span>{{item.title}}
              </div>
            </router-link>
          </li>
        </ul>
        <ul class="Box fr">
          <li v-for="item in topList.slice(2,4)">
            <router-link :to="'/galleryDetails/'+item.id">
              <img v-lazy="getPicUrl(item)" src="" alt="">
              <div class="title nowrap">
                <span>{{item.pictype}}</span>{{item.title}}
              </div>
            </router-link>
          </li>
        </ul>
        <div class="swiper">
          <swiper :swiperList="topList"></swiper>
          <!--          <swiper :swiperList="swiperList"></swiper>-->
        </div>
      </div>
    </div>
    <div class="galleryMain">
      <div class="w">
        <div class="box clearfix">
          <ul class=" clearfix">
            <li v-for="item in picList">
              <galleryItem :galleryItem="item"></galleryItem>
            </li>
          </ul>
        </div>
        <div class="pagex">
          <a-pagination class="top" :default-current="1" :total="200" :default-page-size="12" :item-render="itemRender" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navCom from "components/common/nav/Nav";
import swiper from "./child/Swiper";
import galleryItem from "./child/GalleryItem";

import { getGalleryTop, getGalleryPicList } from "@/network/gallery";

export default {
  name: "Gallery",
  data() {
    return {
      current: 0,
      picture: [
        {
          name: "全部",
          url: "",
        },
        {
          name: "全部",
          url: "",
        },
        {
          name: "全部",
          url: "",
        },
        {
          name: "全部",
          url: "",
        },
      ],
      swiperList: [
        {
          id: 1,
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          type: "活动",
          title:
            "2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开",
          path: "/galleryDetails",
        },
        {
          id: 1,
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          type: "活动",
          title:
            "2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开",
          path: "/galleryDetails",
        },
        {
          id: 1,
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          type: "活动",
          title:
            "2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开",
          path: "/galleryDetails",
        },
        {
          id: 1,
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          type: "活动",
          title:
            "2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开",
          path: "/galleryDetails",
        },
        {
          id: 1,
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          type: "活动",
          title:
            "2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开",
          path: "/galleryDetails",
        },
      ],
      bottom: [
        {
          id: 1,
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          type: "活动",
          title:
            "2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开",
          time: "2020-7-20",
          num: 8,
          liu: 55,
          path: "/galleryDetails",
        },
        {
          id: 1,
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          type: "活动",
          title:
            "2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开",
          time: "2020-7-20",
          num: 8,
          liu: 55,
          path: "/galleryDetails",
        },
        {
          id: 1,
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          type: "活动",
          title:
            "2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开",
          time: "2020-7-20",
          num: 8,
          liu: 55,
          path: "/galleryDetails",
        },
        {
          id: 1,
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          type: "活动",
          title:
            "2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开",
          time: "2020-7-20",
          num: 8,
          liu: 55,
          path: "/galleryDetails",
        },
        {
          id: 1,
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          type: "活动",
          title:
            "2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开2019年斗山工程机械新品发布会在京召开",
          time: "2020-7-20",
          num: 8,
          liu: 55,
          path: "/galleryDetails",
        },
      ],
      topList: [],
      picList: [],
    };
  },
  components: {
    navCom,
    swiper,
    galleryItem,
  },
  methods: {
    //分页器文字改变
    itemRender(current, type, originalElement) {
      if (type === "prev") {
        return <a class="ant-pagination-item-link page">上一页</a>;
      } else if (type === "next") {
        return <a class="ant-pagination-item-link page">下一页</a>;
      }
      return originalElement;
    },
    //点击切换
    itemClick(index) {
      this.current = index;
    },
    getGalleryTop() {
      getGalleryTop().then((res) => {
        this.topList.splice(0, 100);
        this.topList.push(...res.list);
      });
    },
    getPicUrl(item) {
      return this.$store.state.imgUrl + item.firstpic.split(",")[0];
    },
    getGalleryPicList() {
      getGalleryPicList().then((res) => {
        this.picList.splice(0, 100);
        this.picList.push(...res.list);
      });
    },
  },
  mounted() {
    this.getGalleryTop();
    this.getGalleryPicList();
  },
};
</script>

<style lang="scss" scoped>
.galleryNav {
  overflow: hidden;
  padding: 32px 0;
  .logo {
    float: left;
  }
  ul {
    float: right;
    margin: 0;
    padding: 0;
    margin-top: 12px;
    li {
      float: left;
      margin-left: 13px;
      text-align: center;
      color: #666666;
      width: 90px;
      height: 32px;
      line-height: 30px;
      border: 1px solid #c5c8d0;
      border-radius: 16px;
      display: block;
      cursor: pointer;
      &.active {
        color: #e4393c;
        border: 1px solid #e4393c;
      }
    }
  }
}
.galleryTop {
  overflow: hidden;
  margin-bottom: 30px;
  .Box {
    width: 310px;
    margin: 0;
    padding: 0;
    li {
      width: 310px;
      height: 164px;
      margin-bottom: 18px;
      position: relative;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
      .title {
        width: 100%;
        padding: 11px 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 44px;
        background: rgba(82, 82, 82, 0.5);
        color: #fff;
        span {
          display: inline-block;
          padding: 2px 5px;
          text-align: center;
          line-height: 22px;
          color: #fff;
          background: #e4393c;
          border-radius: 4px;
          margin-right: 20px;
        }
      }
    }
  }
  .swiper {
    width: 550px;
    height: 340px;
    float: left;
    margin-left: 16px;
  }
}
.galleryMain {
  .box {
    width: 1200px;
    ul {
      padding: 0;
      margin: 0;
      width: 1221px;
      li {
        margin-right: 21px;
        margin-bottom: 52px;
        float: left;
      }
    }
  }
  .pagex {
    padding-bottom: 52px;
  }
}
</style>