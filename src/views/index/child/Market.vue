<template>
  <div class="Market">
    <div class="w">
      <div class="mt">
        <p>供求市场</p>
        <router-link class="more" to="/rent">更多>></router-link>
      </div>
      <div class="mb">
        <div class="leftBox">
          <h2>
            供求平台<br />
            找寻更加方便
          </h2>
          <ul class="change" slot="item-tab">
            <li v-for="(item, index) in headerName" :key="index" :class="{ active: index === currentIndex }" @click="itemClick(index)">
              {{ item }}
            </li>
          </ul>
          <dl>
            <dd v-for="(item, index) in newData" :key="index">
              <router-link :to="item.href">
                <div class="type">{{ item.type }}</div>
                <div>|</div>
                <div class="title nowrap">{{ item.title }}</div>
                <div class="time">{{ item.time }}</div>
              </router-link>
            </dd>
          </dl>
        </div>
        <div class="rightBox">
          <ul>
            <li v-for="(item, index) in newimgData" :key="index">
              <router-link :to="item.href">
                <img v-lazy="item.src" src="" alt="" />
                <div class="box">
                  <h2 class="nowrap">{{ item.title }}</h2>
                  <p>
                    <span>品牌：{{ item.pai }}</span>
                    <span>地区：{{ item.address }}</span>
                  </p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Business",
  data() {
    return {
      headerName: ["供应", "租赁", "其它"],
      currentIndex: 0,
      newData: [
        {
          type: "出租",
          title: "出租出租出租出租出租出租出租出租出租出租",
          time: "07-14",
          href: "/rentDetails",
        },
        {
          type: "出租",
          title: "出租出租出租出租出租出租出租出租出租出租",
          time: "07-14",
          href: "/rentDetails",
        },
        {
          type: "出租",
          title: "出租出租出租出租出租出租出租出租出租出租",
          time: "07-14",
          href: "/rentDetails",
        },
        {
          type: "出租",
          title: "出租出租出租出租出租出租出租出租出租出租",
          time: "07-14",
          href: "/rentDetails",
        },
        {
          type: "出租",
          title: "出租出租出租出租出租出租出租出租出租出租",
          time: "07-14",
          href: "/rentDetails",
        },
        {
          type: "出租",
          title: "出租出租出租出租出租出租出租出租出租出租",
          time: "07-14",
          href: "/rentDetails",
        },
        {
          type: "出租",
          title: "出租出租出租出租出租出租出租出租出租出租",
          time: "07-14",
          href: "/rentDetails",
        },
      ],
      newimgData: [
        {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          title:
            "神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机",
          pai: "玉柴",
          address: "安徽合肥",
          href: "/rentDetails",
        },
        {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          title:
            "神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机",
          pai: "玉柴",
          address: "安徽合肥",
          href: "/rentDetails",
        },
        {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          title:
            "神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机",
          pai: "玉柴",
          address: "安徽合肥",
          href: "/rentDetails",
        },
        {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          title:
            "神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机",
          pai: "玉柴",
          address: "安徽合肥",
          href: "/rentDetails",
        },
        {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          title:
            "神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机",
          pai: "玉柴",
          address: "安徽合肥",
          href: "/rentDetails",
        },
        {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          title:
            "神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机神钢SK200-8挖掘机",
          pai: "玉柴",
          address: "安徽合肥",
          href: "/rentDetails",
        },
      ],
    };
  },
  methods: {
    //状态切换
    itemClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
.leftBox {
  width: 364px;
  float: left;
  h2 {
    height: 126px;
    background: #264889;
    padding: 0 28px;
    margin: 0;
    color: #fff;
    font-size: 30px;
    line-height: 40px;
    padding-top: 21px;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      font-size: 16px;
      color: #666666;
      line-height: 38px;
      background: #f3f3f3;
      cursor: pointer;
      &.active {
        background: #fff;
        color: #264889;
      }
    }
  }
  dl {
    dd {
      margin: 0;
      a {
        line-height: 56px;
        padding: 0 18px;
        overflow: hidden;
        display: block;
        div {
          float: left;
          font-size: 16px;
          color: #c5c5c5;
        }
        .type {
          width: 66px;
          text-align: center;
          color: #666;
        }
        .title {
          width: 180px;
          margin: 0 15px;
          color: #333333;
        }
        .time {
          color: #666;
        }
        &:hover .title {
          color: #264889;
        }
      }
    }
  }
}
.rightBox {
  float: right;
  ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
    width: 825px;
    li {
      width: 263px;
      float: left;
      margin-left: 12px;
      img {
        width: 263px;
        height: 191px;
        display: block;
      }
      .box {
        padding: 20px 0;
        h2 {
          font-size: 16px;
          color: #333333;
        }
        p {
          margin-bottom: 0;
          span {
            font-size: 12px;
            color: #666666;
            &:first-child {
              margin-right: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
