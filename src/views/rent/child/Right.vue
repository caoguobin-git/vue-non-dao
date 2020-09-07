<template>
  <div class="Right">
    <h2Head :title="title"></h2Head>
    <ul>
      <li v-for="(item,index) in xData" :key="index">
        <router-link :to="item.href">
          <span>{{item.type}}</span>
          <p class="nowrap">{{item.name}}</p>
        </router-link>
      </li>
    </ul>
    <div class="img" v-for="(item,index) in img">
      <a :href="item.href">
        <img v-lazy="item.img" src="" alt="">
        <div class="title">广告</div>
      </a>
    </div>
  </div>
</template>

<script>
import h2Head from "components/common/h2Head/H2Head";
export default {
  name: "Right",
  data() {
    return {
      title: "最新发布",
      xData: [
        {
          name: "救援先锋勇担当 雷萨力量助力防汛一线！",
          type: "出租",
          href: "/news",
        },
        {
          name:
            "救援先锋勇担当 雷萨力量助力防汛一线！雷萨力量助力防汛一线！雷萨力量助力防汛一线！",
          type: "出租",
          href: "/news",
        },
      ],
      img: [
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          href: "",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          href: "",
        },
      ],
    };
  },
  components: {
    h2Head,
  },
};
</script>

<style lang="scss" scoped>
.Right {
  ul {
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
    li {
      padding: 13px 0;
      overflow: hidden;
      border-bottom: 1px solid #e9e9e9;
      cursor: pointer;
      span {
        float: left;
        width: 40px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background: #2651a8;
        color: #fff;
        font-size: 12px;
      }
      p {
        float: right;
        color: #666666;
        margin: 0;
        line-height: 20px;
        width: calc(100% - 50px);
      }
      &:last-child {
        border-bottom: 0;
      }
    }
  }
  .img {
    position: relative;
    margin-bottom: 15px;
    img {
      width: 100%;
    }
    .title {
      position: absolute;
      bottom: 5px;
      right: 10px;
      color: #fff;
    }
  }
}
</style>