<template>
  <div class="News">
    <!-- 导航 -->
    <navCom></navCom>
    <!-- 面包屑 -->
    <breadcrumb></breadcrumb>
    <div class="main">
      <div class="w">
        <div class="fl">
          <div class="box">
            <h2>{{newsData.title}}</h2>
            <h3>{{newsData.publishtime}}</h3>
            <div class="title">
              <!--              <p>-->
              <!--                7月13日，国新办举行国务院政策例行吹风会，释放出水利重大工程加码提速的明确信号：将安排150项重大水利工-->
              <!--                程，匡算总投资约1.29万亿元，能够带动直接和间接投资约6.6万亿元。-->

              <!--                事实上，不仅仅是水利工程，包括综合交通体系建设、高标准农田建设、现代化污水处理系统工程等一大批超重大-->
              <!--                工程都在加紧谋划推进。接受本报记者采访的业内专家表示，聚焦补短板惠民生，当前应加快顶层谋划、加大政策力度-->
              <!--                推进一批超大项目落地，既有利于稳投资稳经济，又有利于国计民生。-->

              <!--                7月8日召开的国务院常务会议研究部署了2020-2022年重点推进150项重大水利工程建设，以促进扩大有效投资，-->
              <!--                增强防御水旱灾害能力。-->

              <!--                国新办13日举行的吹风会进一步披露了相关细节。国家发展改革委副秘书长苏伟介绍，150项重大水利工程有五大-->
              <!--                类型，包括防洪减灾工程56项、水资源优化配置工程26项、灌溉节水和供水工程55项、水生态保护修复工程8项、智慧水-->
              <!--                利工程5项，其中有96项都涉及京津冀协同发展、长江经济带发展、黄河流域生态保护和高质量发展等国家重大战略。-->

              <!--                从投资规模看，150项重大水利工程匡算总投资是1.29万亿元，超过500亿元的项目有5个，300亿元到500亿元的-->
              <!--                项目有4个，100亿元到300亿元的项目有18个。-->

              <!--                不仅是水利工程，聚焦补短板，今年以来，多领域重大投资项目加快推进，尤其是总投资规模巨大的一批重大项目-->
              <!--                也开始加快谋划。-->

              <!--                日前，农业部等七部门联合印发《关于扩大农业农村有效投资 加快补上“三农”领域突出短板的意见》。《意见》-->
              <!--                要求，要加快高标准农田、农产品仓储保鲜冷链物流设施、现代农业园区、动植物保护、沿海现代渔港、农村人居环境整-->
              <!--                治、农村供水保障、乡镇污水处理、智慧农业和数字乡村、农村公路、农村电网等11个农业农村重点领域补短板重大工-->
              <!--                程项目建设。</p>-->
              <p>{{newsData.content}}</p>
              <div class="erweima">
                <img :src="getPicUrl(newsData)" alt="">
                <p>关注我们，获取更多精彩资讯</p>
              </div>
            </div>
          </div>
          <div class="h2">
            <p>相关阅读</p>
          </div>
          <template v-for="item in newsList">
            <!--          <template v-for="item in Data.slice(0,titleNum)">-->
            <list @changeNews="changeNews" :list="item"></list>
          </template>
          <div v-if="moreState" @click="getMore" class="more">查看更多
            <a-icon type="down" />
          </div>
        </div>
        <div class="fr">
          <div class="item">
            <div class="h2">
              <p>热点推荐</p>
            </div>
            <div class="title">
              <!--              <template v-for="(item,index) in Data">-->
              <!--                <hotItem :index="index+1" :hot="item"></hotItem>-->
              <!--              </template> -->
              <template v-for="(item,index) in newsRecommend">
                <hotItem @changeNews="changeNews" :index="index+1" :hot="item"></hotItem>
              </template>
            </div>
          </div>
          <div class="item">
            <div class="h2">
              <p>为你推荐</p>
            </div>
            <div class="tuku">
              <!--              <template v-for="item in Data">-->
              <!--                <imgItem :imgData="item"></imgItem>-->
              <!--              </template>-->
              <template v-for="item in advRecommend3">
                <imgItem :imgData="item"></imgItem>
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
import breadcrumb from "components/common/breadcrumb/Breadcrumb";
import list from "views/newsList/child/List";
import imgItem from "views/newsList/child/ImgItem";
import hotItem from "views/newsList/child/HotItem";
import {
  getHotList,
  getNewsList,
  getAdvRecommend3,
  getNewsRecommend,
  getRandomNews,
} from "@/network/news";
export default {
  name: "News",
  data() {
    return {
      titleNum: 3,
      moreState: true,
      title: [
        {
          name: "钢铁硬汉，无惧挑战！专啃“硬骨头”的新一代三一铣刨机重磅来袭",
          path: "",
        },
        {
          name: "VR小店上线助力企业营销新变革",
          path: "",
        },
        {
          name: "卡特彼勒：防守悍将续写实干传奇",
          path: "",
        },
        {
          name: "三一路机用户价值体验专题",
          path: "",
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
      newsData: {},
      newsList: [],
      newListParams: {
        page: 1,
        pageSize: 3,
      },
      hotList: [],
      advRecommend3: [],
      newsRecommend: [],
    };
  },
  methods: {
    getPicUrl(item) {
      return this.$store.state.imgUrl + item.img;
    },
    changeNews(data) {
      console.log(data);
      this.newsData = data;
    },
    //获取更多
    getMore() {
      // this.titleNum = 5;
      // this.newListParams.page++;
      // this.getNewsList();
      this.getRandomNews(3);
      // this.moreState = false;
    },
    getNewsList() {
      getNewsList(this.newListParams).then((res) => {
        // this.newsList.splice(0,1000)
        this.newsList.push(...res.list);
        this.totalNews = res.rows;
      });
    },
    getHotList() {
      getHotList().then((res) => {
        this.hotList.splice(0, 100);
        this.hotList.push(...res.list);
      });
    },
    getAdvRecommend3() {
      getAdvRecommend3().then((res) => {
        this.advRecommend3.slice(0, 100);
        this.advRecommend3.push(...res.list);
        console.log(this.advRecommend3);
      });
    },
    getNewsRecommend() {
      getNewsRecommend().then((res) => {
        this.newsRecommend.splice(0, 1000);
        this.newsRecommend.push(...res.list);
        console.log(this.newsRecommend);
      });
    },
    getRandomNews(num) {
      getRandomNews(num).then((res) => {
        console.log(res);
        //todo 是否清空？
        // this.newsList.splice(0,100)
        this.newsList.push(...res);
      });
    },
  },
  components: {
    navCom,
    breadcrumb,
    list,
    imgItem,
    hotItem,
  },
  mounted() {
    this.newsData = this.$route.query.newsData;
    console.log(this.newsData);
    // this.getNewsList()
    this.getAdvRecommend3();
    this.getNewsRecommend();
    this.getRandomNews(3);
  },
};
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
  .fl {
    width: 820px;
    .box {
      padding-bottom: 50px;
      h2 {
        font-size: 28px;
        color: #000000;
      }
      h3 {
        font-size: 12px;
        color: #999999;
      }
      .erweima {
        text-align: center;
        margin-top: 80px;
        img {
          width: 244px;
          height: 244px;
          display: inline-block;
        }
        p {
          color: #666666;
          margin-top: 25px;
        }
      }
    }
    .more {
      font-size: 16px;
      color: #de4636;
      padding: 20px 0;
      text-align: center;
      cursor: pointer;
    }
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
    color: #000;
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