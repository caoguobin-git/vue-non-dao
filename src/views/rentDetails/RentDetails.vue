<template>
  <div class="RentDetails">
    <!-- 导航 -->
    <navCom></navCom>
    <!-- 面包屑 -->
    <breadcrumb></breadcrumb>
    <div class="mt">
      <div class="w">
        <!-- 详情轮播 -->
        <div class="swiper">
          <swiper :swiperList="swiperList"></swiper>
        </div>
        <div class="title">
          <h2>{{ Data.name }}</h2>
          <p>
            {{ Data.type }}
            <!-- <span>|</span>{{ Data.company }} -->
          </p>
          <ul>
            <li>
              价格：<span class="price"
                >￥<i>{{ Data.price }}元</i>/{{ Data.time }}</span
              >
            </li>
            <!-- <li>
              库存：<span>{{ Data.num }}</span>
            </li> -->
            <li>
              型号：<span>{{ Data.xing }}</span>
            </li>
            <li>
              发货地：<span>{{ Data.address }}</span>
            </li>
          </ul>
          <div class="btn">
            <a-button
              class="btn keep"
              @click="keep"
              type="primary"
              :loading="loadingState"
              >{{ Data.keep ? "取消收藏" : "加入收藏" }}</a-button
            >
            <div class="btn phone" @click="showModal">获取联系方式</div>
          </div>
          <h3>免责声明：具体情况以实际签约为准，平台概不负责！</h3>
          <a-modal
            v-model="visible"
            title="联系方式"
            @ok="handleOk"
            :footer="null"
            dialogClass="dialog"
          >
            <!-- <p v-show="Data.company">公司名称:{{Data.company}}</p> -->
            <p>联系人:{{ Data.people }}</p>
            <p>手机号码：{{ Data.phone }}</p>
            <!-- <p v-show="Data.email">电子邮箱：{{Data.email}}</p> -->
          </a-modal>
        </div>
      </div>
    </div>
    <div class="mb">
      <div class="w">
        <div class="leftBox">
          <template v-for="item in itemData">
            <leftItem :itemData="item"></leftItem>
          </template>
        </div>
        <div class="rightBox rentDetailsBox">
          <a-tabs default-active-key="1">
            <a-tab-pane key="1" tab="设备参数">
              <table border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td class="head" colspan="4"><span>*</span>常规参数</td>
                  </tr>
                  <tr>
                    <td>设备型号</td>
                    <td>{{ Data.type }}</td>
                    <td>环保等级</td>
                    <td>{{ Data.level }}</td>
                  </tr>
                  <tr>
                    <td>车辆出厂时间</td>
                    <td>{{ Data.date }}</td>
                    <td>燃油类型</td>
                    <td>{{ Data.fuel }}</td>
                  </tr>
                  <tr>
                    <td class="head" colspan="4"><span>*</span>发动机</td>
                  </tr>
                  <tr>
                    <td>额定功率</td>
                    <td>{{ Data.power }}</td>
                    <td>车长</td>
                    <td>{{ Data.sizel }}</td>
                  </tr>
                </tbody>
              </table>
            </a-tab-pane>
            <a-tab-pane key="2" tab="设备简介">
              <p class="jianjie">{{ title }}</p>
            </a-tab-pane>
            <a-tab-pane key="3" tab="商家出租">
              <div class="box" v-for="item in rentData">
                <rent class="rent" :rentData="item"></rent>
              </div>
              <div class="pagex">
                <a-pagination
                  :default-current="1"
                  :total="200"
                  :default-page-size="12"
                  :item-render="itemRender"
                />
              </div>
            </a-tab-pane>
            <a-tab-pane key="4" tab="商家求租">
              <div class="box" v-for="item in askData">
                <ask class="ask" :askData="item"></ask>
              </div>
              <div class="pagex">
                <a-pagination
                  class="top"
                  :default-current="1"
                  :total="200"
                  :default-page-size="12"
                  :item-render="itemRender"
                />
              </div>
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navCom from "components/common/nav/Nav";
import breadcrumb from "components/common/breadcrumb/Breadcrumb";
import swiper from "./child/Swiper";
import leftItem from "./child/LeftItem";
import rent from "views/rent/child/RentItem";
import ask from "views/rent/child/AskItem";
import { saveFavorites } from "network/favorites.js";
import { Mechanicl, RecommendMec } from "network/rentDetails.js";

export default {
  name: "RentDetails",
  data() {
    return {
      mid: null,
      visible: false,
      loadingState: false,
      datax: null,
      title: "",
      Data: {
        name: "",
        type: "", //
        price: "",
        time: "月",
        num: "件",
        xing: "",
        address: "",
        keep: false,
        phone: "",
        email: "",
        people: "",
        fuel: "",
        level: "",
        date: "",
        sizel: "",
      },
      swiperList: [],
      itemData: [],
      data2: [
        {
          name: "常规参数",
          hot: true,
          itemx: [
            {
              name: "设备型号",
              title: "QY16C",
            },
            {
              name: "设备型号",
              title: "QY16C",
            },
            {
              name: "设备型号",
              title: "QY16C",
            },
            {
              name: "设备型号",
              title: "QY16C",
            },
            {
              name: "设备型号",
              title: "QY16C",
            },
          ],
        },
        {
          name: "常规参数",
          hot: true,
          itemx: [
            {
              name: "设备型号",
              title: "QY16C",
            },
            {
              name: "设备型号",
              title: "QY16C",
            },
            {
              name: "设备型号",
              title: "QY16C",
            },
            {
              name: "设备型号",
              title: "QY16C",
            },
          ],
        },
        {
          name: "常规参数",
          hot: true,
          itemx: [
            {
              name: "设备型号",
              title: "QY16C",
            },
            {
              name: "设备型号",
              title: "QY16C",
            },
            {
              name: "设备型号",
              title: "QY16C",
            },
            {
              name: "设备型号",
              title: "QY16C",
            },
          ],
        },
        {
          name: "常规参数",
          hot: true,
          itemx: [
            {
              name: "设备型号",
              title: "QY16C",
            },
            {
              name: "设备型号",
              title: "QY16C",
            },
            {
              name: "设备型号",
              title: "QY16C",
            },
            {
              name: "设备型号",
              title: "QY16C",
            },
          ],
        },
      ],
      rentData: [
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
        },
      ],
      askData: [
        {
          time: "07-20",
          name: "求租2012年产的山工机械平地机",
          people: "张先生",
          company: "成都昊远机械有限公司",
          phone: "136589943612",
          email: "56123458@qq.com",
        },
        {
          time: "07-20",
          name: "求租2012年产的山工机械平地机",
          people: "张先生",
        },
      ],
    };
  },
  components: {
    navCom,
    breadcrumb,
    swiper,
    leftItem,
    rent,
    ask,
  },
  created() {
    this.mid = this.$route.params.mid;
    //获取一个机械详细信息
    Mechanicl(this.mid)
      .then((res) => {
        this.datax = res;
        this.title = res.out.detail;
        this.title = res.out.detail;
        this.Data.name = res.out.ramark;
        this.Data.type = res.out.mechanics;
        this.Data.price = res.out.price;
        this.Data.fuel = res.out.fuel;
        this.Data.level = res.out.level;
        this.Data.mechanics = res.out.mechanics;
        this.Data.date = res.out.mdate;
        this.Data.power = res.out.power;
        this.Data.sizel = res.out.sizel;
        this.Data.address = res.out.area;
        this.Data.people = res.out.linkman;
        this.Data.phone = res.out.linkphone;
        this.Data.type = res.out.mechanics;
        this.Data.xing = res.out.brand;
        this.title = res.out.ramark;
        this.swiperList = res.out.pic.split(",");
      })
      .catch((err) => {
        console.log(err);
      });
    RecommendMec()
      .then((res) => {
        this.itemData = res.list;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    //获取联系方式点击
    showModal() {
      this.visible = true;
    },
    //获取联系方式关闭
    handleOk(e) {
      this.visible = false;
    },
    //收藏
    keep() {
      let mid = this.$store.state.app.user.user_id;
      let data = {
        cid: this.mid,
        ctitle: this.Data.name,
        ctype: "出租",
        mid: mid,
      };
      if (mid) {
        this.loadingState = !this.loadingState;
        saveFavorites(data)
          .then((res) => {
            this.loadingState = !this.loadingState;
            this.Data.keep = !this.Data.keep;
          })
          .catch((err) => {
            this.loadingState = !this.loadingState;
            console.log(err);
          });
      } else {
        this.$message.error("请登录");
      }
    },
    //分页器文字改变
    itemRender(current, type, originalElement) {
      if (type === "prev") {
        return <a class="ant-pagination-item-link page">上一页</a>;
      } else if (type === "next") {
        return <a class="ant-pagination-item-link page">下一页</a>;
      }
      return originalElement;
    },
  },
};
</script>

<style lang="scss" scoped>
.mt {
  overflow: hidden;
  padding-bottom: 70px;
  .swiper {
    float: left;
    width: 450px;
  }
  .title {
    width: 715px;
    float: right;
    h2 {
      font-size: 24px;
      color: #000000;
    }
    p {
      color: #999999;
      padding-bottom: 18px;
      border-bottom: 1px solid #e9e9e9;
      margin-bottom: 10px;
      span {
        padding: 0 10px;
      }
    }
    ul {
      margin: 0;
      padding: 0;
      overflow: hidden;
      li {
        color: #333333;
        margin-bottom: 14px;
        span {
          color: #666666;
          &.price {
            color: #ff7a00;
            font-size: 20px;
            i {
              font-size: 32px;
              font-style: normal;
            }
          }
        }
      }
    }
    .btn {
      overflow: hidden;
      margin: 8px 0 13px 0;
      .btn {
        width: 150px;
        height: 34px;
        text-align: center;
        line-height: 34px;
        color: #fff;
        float: left;
        margin-right: 20px;
        cursor: pointer;
      }
      .keep {
        background: #ff7a00;
        border-radius: 0;
        border: 0;
      }
      .phone {
        background: #0152f5;
      }
    }
    h3 {
      margin: 0;
      color: #999999;
      font-size: 14px;
    }
  }
}
.mb {
  overflow: hidden;
  .leftBox {
    float: left;
    width: 264px;
  }
  .rightBox {
    float: right;
    width: 900px;
    .ant-tabs-tab {
      padding-left: 0 !important;
    }
    table {
      width: 100%;
      border-top: 1px solid #e9e9e9;
      border-left: 1px solid #e9e9e9;
      position: relative;
      tr {
        border-bottom: 1px solid #e9e9e9;
        td {
          position: relative;
          padding: 0 33px;
          line-height: 50px;
          color: #666666;
          &.head {
            color: #333333;
            padding: 0 18px;
            span {
              color: #cc242c;
              margin-right: 12px;
            }
          }
          &:after {
            content: "";
            position: absolute;
            right: -1px;
            top: 0;
            width: 1px;
            height: 100%;
            background: #e9e9e9;
          }
        }
      }
      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        width: 1px;
        height: 100%;
        background: #e9e9e9;
      }
    }

    .jianjie {
      color: #666666;
    }
    .rent {
      float: left;
      margin-right: 40px;
    }
  }
  .top {
    margin-top: 20px;
  }
}
</style>
