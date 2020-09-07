<template>
  <div class="Center">
    <div class="w">
      <div class="leftBox fl">
        <div class="mt">
          <p>购机中心</p>
          <ul class="fr change red" slot="item-tab">
            <li v-for="(item, index) in headerName" :key="index" :class="{ active: index === currentIndex }" @click="itemClick(index)">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="mb">
          <div class="cenL fl">
            <div class="img big" v-for="(item,index) in cenL.slice(0,1)" :key="index">
              <router-link :to="item.href">
                <img v-lazy="item.img" src="" alt="" />
                <p class="nowrap">{{item.title}}</p>
              </router-link>
            </div>
            <div class="imgBox">
              <div class="img" v-for="(item,index) in cenL.slice(1,3)" :key="index">
                <router-link :to="item.href">
                  <img v-lazy="item.img" src="" alt="" />
                  <p class="nowrap">{{item.title}}</p>
                </router-link>
              </div>
            </div>
          </div>
          <div class="cenR fr">
            <div class="item" v-for="(item, index) in top" :key="index">
              <div class="dd" v-if="index <= 1">
                <router-link :to="item.href">
                  <img v-lazy="item.src" src="" alt="" />
                  <div class="tit">
                    <h2 class="nowrap">{{ item.name }}</h2>
                    <p>{{ item.title }}</p>
                  </div>
                </router-link>
              </div>
              <router-link v-else :to="item.href">
                <div class="li">
                  {{ item.name }}
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="mt">
          <p>热门服务</p>
          <router-link class="more" to="/rent">更多>></router-link>
        </div>
        <div class="mb">
          <ul class="hotL fl">
            <li v-for="(item, index) in headerName2" :key="index" :class="{ active: index === currentIndex2 }" @click="itemClick2(index)">
              {{ item }}
            </li>
          </ul>
          <div class="hotR fr">
            <dl v-for="(item, index) in 2" :key="index">
              <dt>
                <div class="fl">机型</div>
                <div class="fr">市场参考价</div>
              </dt>
              <dd v-for="(item, index) in bottom.slice(
                  4 * index,
                  4 * (index + 1)
                )" :key="index">
                <div class="fl">{{ item.name }}</div>
                <div class="fr">{{ item.num }}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="rightBox fr">
        <like :Rec="CenterRec"></like>
      </div>
    </div>
  </div>
</template>

<script>
import like from "./like";
export default {
  name: "Center",
  props: {
    CenterRec: Object,
  },
  data() {
    return {
      headerName: ["促销活动", "服务信息"],
      headerName2: ["所有", "租赁", "保险", "维保", "金融服务"],
      currentIndex: 0,
      currentIndex2: 0,
      cenL: [
        {
          title: "神钢SK200-8挖掘机",
          href: "/rentDetails",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
        },
        {
          title: "神钢SK200-8挖掘机",
          href: "/rentDetails",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
        },
        {
          title: "神钢SK200-8挖掘机",
          href: "/rentDetails",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
        },
      ],
      top: [
        {
          name: "神钢SK200-8挖掘机",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          title:
            "全车原版原样，动力强劲手续齐全，发动机三大件免质保一年。本公司所有的挖掘机均提供定期保养和维护……",
          href: "/rentDetails",
        },
        {
          name: "神钢SK200-8挖掘机",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          title:
            "全车原版原样，动力强劲手续齐全，发动机三大件免质保一年。本公司所有的挖掘机均提供定期保养和维护……",
          href: "/rentDetails",
        },
        {
          name: "神钢SK200-8挖掘机",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          title:
            "全车原版原样，动力强劲手续齐全，发动机三大件免质保一年。本公司所有的挖掘机均提供定期保养和维护……",
          href: "/rentDetails",
        },
        {
          name: "神钢SK200-8挖掘机",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          title:
            "全车原版原样，动力强劲手续齐全，发动机三大件免质保一年。本公司所有的挖掘机均提供定期保养和维护……",
          href: "/rentDetails",
        },
        {
          name: "神钢SK200-8挖掘机",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          title:
            "全车原版原样，动力强劲手续齐全，发动机三大件免质保一年。本公司所有的挖掘机均提供定期保养和维护……",
          href: "/rentDetails",
        },
      ],
      bottom: [
        {
          name: "新一代CAT® 320",
          num: "询价1",
          href: "/rentDetails",
        },
        {
          name: "新一代CAT® 320",
          num: "80~85万2",
          href: "/rentDetails",
        },
        {
          name: "新一代CAT® 320",
          num: "询价3",
          href: "/rentDetails",
        },
        {
          name: "新一代CAT® 320",
          num: "80~85万4",
          href: "/rentDetails",
        },
        {
          name: "新一代CAT® 320",
          num: "询价",
          href: "/rentDetails",
        },
        {
          name: "新一代CAT® 320",
          num: "80~85万",
          href: "/rentDetails",
        },
        {
          name: "新一代CAT® 320",
          num: "询价",
          href: "/rentDetails",
        },
        {
          name: "新一代CAT® 320",
          num: "80~85万",
          href: "/rentDetails",
        },
      ],
    };
  },
  components: {
    like,
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    itemClick2(index) {
      this.currentIndex2 = index;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
.Center {
  overflow: hidden;
  .mb {
    margin-bottom: 0;
  }
  .leftBox {
    width: 870px;
    .cenL {
      width: 363px;
      .img {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        p {
          margin: 0;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 42px;
          line-height: 42px;
          color: #fff;
          padding: 0 15px;
          background: rgba(96, 96, 96, 0.65);
        }
      }
      .big {
        width: 363px;
        height: 248px;
        margin-bottom: 6px;
        img {
          width: 363px;
          height: 248px;
        }
      }
      .imgBox {
        .img {
          width: 178px;
          height: 68px;
          float: right;
          img {
            width: 178px;
            height: 68px;
          }
          p {
            font-size: 12px;
            height: 28px;
            line-height: 28px;
          }
          &:first-child {
            float: left;
          }
        }
      }
    }
    .cenR {
      width: 456px;
      .item {
        .dd {
          overflow: hidden;
          margin-bottom: 13px;
          cursor: pointer;
          img {
            width: 170px;
            height: 96px;
            float: left;
          }
          .tit {
            width: 285px;
            padding: 0 15px;
            float: right;
            h2 {
              color: #333333;
              font-size: 14px;
              margin: 8px 0 7px 0;
            }
            p {
              font-size: 12px;
              color: #999999;
              line-height: 18px;
              height: 54px;
              overflow: hidden;
              margin: 0;
            }
          }
        }
        .li {
          line-height: 38px;
          font-size: 14px;
          color: #333333;
          padding-left: 16px;
          cursor: pointer;
          position: relative;
          &:after {
            content: "";
            position: absolute;
            top: 16px;
            left: 0;
            width: 6px;
            height: 6px;
            background: #e1dede;
          }
        }
      }
    }
    .hotL {
      margin: 0;
      padding: 0;
      width: 115px;
      li {
        height: 50px;
        border-bottom: 1px solid #fff;
        text-align: center;
        cursor: pointer;
        line-height: 50px;
        background: #efefef;
        font-size: 16px;
        color: #666666;
        &.active {
          color: #fff;
          background: #46559f;
          border-bottom-color: #46559f;
        }
        &:last-child {
          border-bottom: 0 !important;
        }
      }
    }
    .hotR {
      width: 724px;
      overflow: hidden;
      dl {
        float: left;
        width: 50%;
        padding-left: 50px;
        line-height: 50px;
        dt {
          overflow: hidden;
          font-size: 16px;
          color: #666666;
        }
        dd {
          overflow: hidden;
          margin: 0;
          cursor: pointer;
          .fl {
            font-size: 18px;
            color: #333333;
          }
          .fr {
            font-size: 16px;
            color: #ee181d;
          }
        }
        &:first-child {
          position: relative;
          padding-right: 50px;
          padding-left: 0;
          &:after {
            content: "";
            position: absolute;
            top: 40px;
            right: 0;
            width: 1px;
            height: 188px;
            background: #cfcfcf;
          }
        }
      }
    }
  }
}
</style>
