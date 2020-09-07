<template>
  <div
      class="GalleryDetails">
    <!-- 导航 -->
    <navCom></navCom>
    <!-- 面包屑 -->
    <breadcrumb></breadcrumb>
    <div
        class="swiper">
      <div
          class="w">
        <swiper ref="swaper"
            :swiperList="displayPicsList"></swiper>
      </div>
    </div>
    <div
        class="hot clearfix">
      <div
          class="w">
        <div
            class="h2">
          <p>热门图集</p>
          <router-link
              to="">
            更多>>
          </router-link>
        </div>
        <div
            class="box clearfix">
          <ul>
            <li v-for="item in hotPicList">
              <galleryItem @changeItem="changeItem"
                  :galleryItem="item"></galleryItem>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navCom
  from "components/common/nav/Nav";
import breadcrumb
  from "components/common/breadcrumb/Breadcrumb";
import swiper
  from "./child/Swiper";
import galleryItem
  from "views/gallery/child/GalleryItem";

import { getDisplayPics } from "@/network/galleryDetails";
import {getHotList} from "@/network/news";
import {getGalleryPicList} from "@/network/gallery";

export default {
  name: "GalleryDetails",
  data() {
    return {
      mid: null,
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
      ],
      displayPicsList:[],
      hotPicList:[]
    }
  },

  created() {

  },
  components: {
    navCom,
    breadcrumb,
    swiper,
    galleryItem,
  },
  methods: {
    getDisplayPics() {
      getDisplayPics(this.mid).then(res => {
        this.displayPicsList.splice(0,100)
        for (let i = 0; i < res.list.length; i++) {
          this.displayPicsList.push(res.list[i])
        }
        console.log(this.displayPicsList)
      })
    },
    getHotPicList(){
      getGalleryPicList().then(res=>{
        this.hotPicList.splice(0,100)
        this.hotPicList.push(...res.list)
      })
    },
    changeItem(data){
      this.mid=data.id
      this.getDisplayPics()
      this.$refs.swaper.initSwaper()
    }
  },
  mounted() {
    //数据临时保存
    console.log(this.$route.params.mid)
    this.mid=this.$route.params.mid
    this.getDisplayPics()
    // this.getHotList()
    this.getHotPicList()
  }
};
</script>

<style
    lang="scss"
    scoped>
.swiper {
  padding-bottom: 70px;
}

.hot {
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
}

.h2 {
  border-bottom: 1px solid #e6e6e6;
  overflow: hidden;
  line-height: 52px;
  margin-bottom: 34px;

  p {
    font-size: 20px;
    color: #050505;
    margin: 0;
    position: relative;
    float: left;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      background: #0152f5;
    }
  }

  a {
    float: right;
  }
}
</style>
