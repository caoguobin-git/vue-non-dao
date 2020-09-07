<template>
  <div class="newsList">
    <navCom></navCom>
    <div class="mt">
      <div class="w">
        <!--        <router-link to="/news">-->
        <!--          <h2>{{newsHot5[0].title}}</h2>-->
        <!--        </router-link>-->
        <div @click="toNewsDetailPage(newsHot5[0])">
          <h2>{{newsHot5[0].title}}</h2>
        </div>
        <ul>
          <!--          <li v-for="item in title">-->
          <!--            <router-link :to="item.path">{{ item.name }}</router-link>-->
          <!--          </li>-->
          <li v-for="(item,index) in newsHot5.slice(1)">
            <div @click="toNewsDetailPage(newsHot5[index])">
              {{item.title}}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="mc">
      <div class="w">
        <div class="fl">
          <div class="item">
            <div @click="toNewsDetailPage(newsHot3[0])">
              <img :src="getHotNewsPic(0)" alt="" />
              <div class="title">
                <p class="nowrap">
                  {{newsHot3[0].title||''}}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="fr">
          <div class="item top">
            <div @click="toNewsDetailPage(newsHot3[1])">
              <img :src="getHotNewsPic(1)" alt="" />
              <div class="title">
                <p class="nowrap">
                  {{newsHot3[1].title||''}}
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div @click="toNewsDetailPage(newsHot3[2])">
              <img :src="getHotNewsPic(2)" alt="" />
              <div class="title">
                <p class="nowrap">
                  {{newsHot3[2].title||''}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb">
      <div class="w">
        <div class="fl">
          <div class="h2">
            <p>公司新闻</p>
          </div>
          <!--          <template v-for="item in Data">-->
          <!--            <list :list="item"></list>-->
          <!--          </template>-->
          <template v-for="item in newsList">
            <list :list="item"></list>
          </template>
          <div class="pagex">
            <a-pagination class="top" :default-current="1" :total="40" @change="changeNewsPage" :default-page-size="newListParams.pageSize" :item-render="itemRender" />
          </div>
          <!--          分页实现-->
          <!--          <div class="pagex">-->
          <!--            <a-pagination-->
          <!--              class="top"-->
          <!--              :default-current="1"-->
          <!--              :total="totalNews"-->
          <!--                @change="changeNewsPage"-->
          <!--              :default-page-size="newListParams.pageSize"-->
          <!--              :item-render="itemRender"-->
          <!--            />-->
          <!--          </div>-->
        </div>
        <div class="fr">
          <div class="item">
            <div class="h2">
              <p>图库</p>
            </div>
            <div class="tuku">
              <!--              <template v-for="item in Data">-->
              <!--                <imgItem :imgData="item"></imgItem>-->
              <!--              </template>-->
              <template v-for="item in hotList">
                <imgItem :imgData="item"></imgItem>
              </template>
            </div>
          </div>
          <div class="item">
            <div class="h2">
              <p>热点推荐</p>
            </div>
            <div class="title">
              <!--              <template v-for="(item, index) in Data">-->
              <!--                <hotItem :index="index + 1" :hot="item"></hotItem>-->
              <!--              </template>-->
              <template v-for="(item, index) in newsRecommend">
                <hotItem :index="index + 1" :hot="item"></hotItem>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navCom from "components/common/nav/Nav";
import list from "./child/List";
import imgItem from "./child/ImgItem";
import hotItem from "./child/HotItem";
import { getList } from "network/news.js";

import {
  getTopNews3,
  getTopNews5,
  getNewsList,
  getHotList,
  getNewsRecommend,
} from "@/network/news";

export default {
  name: "NewsList",
  data() {
    return {
      title: [
        {
          name: "钢铁硬汉，无惧挑战！专啃“硬骨头”的新一代三一铣刨机重磅来袭",
          path: "/news",
        },
        {
          name: "VR小店上线助力企业营销新变革",
          path: "/news",
        },
        {
          name: "卡特彼勒：防守悍将续写实干传奇",
          path: "/news",
        },
        {
          name: "三一路机用户价值体验专题",
          path: "/news",
        },
      ],
      Data: [
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
          path2: "/news",
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
          path2: "/news",
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
          path2: "/news",
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
          path2: "/news",
        },
      ],
      newsHot3: [],
      newsHot5: [],
      newListParams: {
        page: 1,
        pageSize: 4,
      },
      newsList: [],
      hotList: [],
      newsRecommend: [],
      totalNews: 0,
    };
  },
  components: {
    navCom,
    list,
    imgItem,
    hotItem,
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
    getTopNews3() {
      getTopNews3().then((res) => {
        this.newsHot3.splice(0, 100);
        this.newsHot3.push(...res.list);
      });
    },
    getTopNews5() {
      console.log("获取数据");
      getTopNews5().then((res) => {
        this.newsHot5.splice(0, 100);
        this.newsHot5.push(...res.list);
      });
    },
    getHotNewsPic(val) {
      return this.$store.state.imgUrl + this.newsHot3[val].img;
    },

    getNewsList() {
      getNewsList(this.newListParams).then((res) => {
        this.newsList.splice(0, 1000);
        this.newsList.push(...res.list);
        this.totalNews = res.rows;
      });
    },
    changeNewsPage(val) {
      this.newListParams.page = val;
      this.getNewsList();
    },
    getHotList() {
      getHotList().then((res) => {
        this.hotList.splice(0, 100);
        this.hotList.push(...res.list);
      });
    },
    getNewsRecommend() {
      getNewsRecommend().then((res) => {
        this.newsRecommend.splice(0, 1000);
        this.newsRecommend.push(...res.list);
        console.log(this.newsRecommend);
      });
    },
    toNewsDetailPage(data) {
      console.log(data);
      this.$router.push({
        path: "/news",
        query: {
          newsData: data,
        },
      });
    },
  },
  created() {
    // getList().then((res) => {
    //   console.log(res);
    // });
  },
  mounted() {
    console.log("hellloadfasdfadf");
    this.getTopNews5();
    this.getTopNews3();
    this.getNewsList();
    this.getHotList();
    this.getNewsRecommend();
  },
};
</script>

<style lang="scss" scoped>
.mt {
  padding-top: 30px;
  h2 {
    font-size: 32px;
    color: #0f46b5;
    font-weight: bold;
    text-align: center;
    margin-bottom: 15px;
  }
  ul {
    margin: 0;
    padding: 0;
    margin-bottom: 25px;
    overflow: hidden;
    display: flex;
    border-bottom: 1px solid #e9e9e9;
    li {
      flex: 1 1 auto;
      padding: 10px 15px;
      color: #666666;
    }
  }
}
.mc {
  overflow: hidden;
  margin-bottom: 30px;
  img {
    width: 100%;
    height: 100%;
  }
  .fl {
    width: 750px;
    height: 400px;
    position: relative;
  }
  .item {
    position: relative;
    width: 100%;
    height: 100%;
    .title {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 0 18px;
      background: rgba(62, 62, 62, 0.6);
      p {
        margin: 0;
        color: #fff;
        padding: 15px 0;
        font-size: 20px;
      }
    }
    &.top {
      margin-bottom: 20px;
      cursor: pointer;
    }
  }
  .fr {
    width: 400px;
    .item {
      height: 190px;
    }
  }
}
.mb {
  overflow: hidden;
  .fl {
    width: 816px;
  }
  .fr {
    width: 340px;
    .tuku {
      padding-top: 20px;
    }
    .item {
      margin-bottom: 30px;
    }
  }
}
.h2 {
  border-bottom: 1px solid #e6e6e6;
  overflow: hidden;
  line-height: 52px;
  p {
    font-size: 20px;
    color: #0f46b5;
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
