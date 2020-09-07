<template>
  <div class="smNav">
    <div class="w">
      <template v-for="(item,index) in smNavData">
        <div class="li">
          <div class="img">
            <router-link :to="item.href">
              <i class="iconfont" :class="item.icon"></i>
              <span>{{item.name}}</span>
            </router-link>
          </div>
          <ul :class="'ul' + index">
            <template v-for="(item,index) in item.nav">
              <li>
                <router-link :to="item.href">{{item.name}}</router-link>
              </li>
            </template>
          </ul>
        </div>
        <div v-if="index != 3" class="line"></div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "smNav",
  data() {
    return {
      smNavData: [
        {
          icon: "icon-icon-test",
          name: "购机",
          href: "",
          nav: [
            {
              name: "选机型",
              href: "",
            },
            {
              name: "旗舰店",
              href: "",
            },
            {
              name: "询价",
              href: "",
            },
            {
              name: "测评",
              href: "",
            },
            {
              name: "导购",
              href: "",
            },
            {
              name: "选品牌",
              href: "",
            },
            {
              name: "代理商",
              href: "",
            },
            {
              name: "指数",
              href: "",
            },
            {
              name: "口碑",
              href: "",
            },
            {
              name: "展厅",
              href: "",
            },
          ],
        },
        {
          icon: "icon-zixun",
          name: "资讯",
          href: "/newsList",
          nav: [
            {
              name: "企业",
              href: "",
            },
            {
              name: "产品",
              href: "",
            },
            {
              name: "趋势",
              href: "",
            },
            {
              name: "人物",
              href: "",
            },
            {
              name: "铁碗儿",
              href: "",
            },
            {
              name: "直播",
              href: "",
            },
            {
              name: "视频",
              href: "",
            },
            {
              name: "图库",
              href: "/gallery",
            },
            {
              name: "专题",
              href: "",
            },
            {
              name: "CM趣闻",
              href: "",
            },
          ],
        },
        {
          icon: "icon-gongqiu",
          name: "供求",
          href: "/rent",
          nav: [
            {
              name: "二手",
              href: "",
            },
            {
              name: "配件",
              href: "",
            },
            {
              name: "租赁",
              href: "",
            },
            {
              name: "人才",
              href: "",
            },
          ],
        },
        {
          icon: "icon-R",
          name: "服务",
          href: "",
          nav: [
            {
              name: "新媒体",
              href: "",
            },
            {
              name: "网站创意",
              href: "",
            },
            {
              name: "大数据",
              href: "",
            },
            {
              name: "数字展馆",
              href: "",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.smNav {
  height: 94px;
  padding-top: 22px;
  text-align: center;
  .w {
    display: block;
  }
  .line {
    display: inline-block;
    border-left: 1px solid #d6d6d6;
    height: 38px;
    vertical-align: top;
    padding-right: 28px;
    margin-left: 27px;
    margin-top: 7px;
  }
  .li {
    display: inline-block;
    .img {
      width: 80px;
      padding: 0 10px;
      text-align: center;
      float: left;
      i {
        color: #d34040;
        font-size: 30px;
        display: block;
        line-height: 30px;
      }
      span {
        font-size: 14px;
        display: block;
        color: #252525;
      }
    }
    ul {
      width: calc(100% - 50px);
      float: left;
      padding: 0;
      margin: 0;
      height: 52px;
      li {
        float: left;
        height: 26px;
        padding-right: 12px;
      }
    }
    .ul0,
    .ul1 {
      width: 240px;
    }
    .ul2 {
      width: 100px;
    }
    .ul3 {
      width: 130px;
    }
  }
}
</style>