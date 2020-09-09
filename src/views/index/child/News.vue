<template>
  <div class="News">
    <div class="w">
      <div class="leftBox fl">
        <div class="mt">
          <p>新闻中心</p>
          <router-link class="more" to="/newsList">更多新闻</router-link>
        </div>
        <div class="mb">
          <div class="newL fl">
            <div class="img big" v-for="(item, index) in left3.slice(0, 1)" :key="index" @click="itemClick(item)">
              <img v-lazy="getPicUrl(item)" src="" alt="" />
              <p class="nowrap">{{ item.title }}</p>
            </div>
            <div class="imgBox">
              <div class="img" v-for="(item, index) in left3.slice(1, 3)" :key="index" @click="itemClick(item)">
                <img v-lazy="getPicUrl(item)" src="" alt="" />
                <p class="nowrap">{{ item.title }}</p>
              </div>
            </div>
          </div>
          <div class="newR fr">
            <div class="item">
              <div v-for="(item, index) in newsRightUp.slice(0, 1)" :key="index" @click="itemClick(item)">
                <div class="h2 nowrap">{{ item.title }}</div>
              </div>
              <ul>
                <li v-for="(item, index) in newsRightUp.slice(1, 5)" :key="index" @click="itemClick(item)">
                  {{ item.title }}
                </li>
              </ul>
            </div>
            <div class="item">
              <div v-for="(item, index) in newsRightMid.slice(0, 1)" :key="index" @click="itemClick(item)">
                <div class="h2 nowrap">{{ item.title }}</div>
              </div>
              <ul>
                <li v-for="(item, index) in newsRightMid.slice(1, 5)" :key="index" @click="itemClick(item)">
                  {{ item.title }}
                </li>
              </ul>
            </div>
            <div class="item">
              <div v-for="(item, index) in newsRightBottom.slice(0, 1)" :key="index" @click="itemClick(item)">
                <div class="h2 nowrap">{{ item.title }}</div>
              </div>
              <ul>
                <li v-for="(item, index) in newsRightBottom.slice(1, 5)" :key="index" @click="itemClick(item)">
                  {{ item.title }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="rightBox fr">
        <like :Rec="NewsRec"></like>
      </div>
    </div>
  </div>
</template>

<script>
import like from "./like";
export default {
  name: "News",
  props: {
    left3: Array,
    newsRightUp: Array,
    newsRightMid: Array,
    newsRightBottom: Array,
    NewsRec: Object,
  },
  components: { like },
  methods: {
    itemClick(item) {
      this.$store.commit('setCurrentDisplayNewsDetail',item)
      this.$router.push({
        path: "/news",
        query: {
          newsData: item,
        },
      });
    },
    getPicUrl(item) {
      return this.$store.state.imgUrl + item.img;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
.News {
  overflow: hidden;
}
.leftBox {
  width: 870px;
}
.newL {
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
      height: 143px;
      float: right;
      img {
        width: 178px;
        height: 143px;
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
.newR {
  width: 480px;
  .item {
    overflow: hidden;
    border-bottom: 1px solid #ececec;
    &:last-child {
      border: 0;
    }
  }
  ul {
    margin: 0;
    padding: 10px 0;
    overflow: hidden;
    li {
      width: 50%;
      float: left;
      display: block;
      padding-left: 20px;
      line-height: 34px;
      font-size: 16px;
      color: #333333;
      cursor: pointer;
      &:hover {
        color: #0152f5;
      }
    }
  }
}
.h2 {
  color: #141a1a;
  font-size: 22px;
  margin-top: 15px;
  display: block;
  cursor: pointer;
  &:hover {
    color: #0152f5;
  }
}
</style>
