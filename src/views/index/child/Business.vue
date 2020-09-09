<template>
  <div class="Business">
    <div class="w">
      <div class="mt">
        <p>主营业务</p>
        <ul class="fr change blue" slot="item-tab">
          <li v-for="(item, index) in headerName" :key="index" :class="{ active: index === currentIndex }" @click="navClick(index)">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="mb">
        <div class="leftBox fl">
          <div class="item" v-for="(item, index) in tagListArray" :key="index">
            <p><i class="iconfont" :class="getTag(index).icon"></i>{{ getTag(index).result }}</p>
            <ul>
              <li @click="toSearchPage(item1)" v-for="(item1, index1) in tagListArray[index]" :key="index1">
                <!--                <router-link :to="item.href">-->
                <!--                  {{ item.name }}-->
                <!--                </router-link>-->
                <span>{{item1.dictLabel}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="rightbox fr">
          <ul>
            <li v-for="(item, index) in businessRight" :key="index" @click="itemClick(item)">
              <img v-lazy="getPicUrl(item)" src="" alt="" />
              <h2 class="nowrap">{{ item.title }}</h2>
              <p>{{ item.ramark }}</p>
              <span>了解更多</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDictType } from "network/app.js";
import { getTagLists } from "@/network/rentDetails";
export default {
  name: "Business",
  props: {
    businessRight: Array,
    businessLeft: Array,
  },
  data() {
    return {
      tagLists: {},
      headerName: ["租赁", "金融服务", "保险", "维保", "其他"],
      currentIndex: 0,
      leftBox: [
        {
          name: "设备类型",
          icon: "icon-leixing",
          item: [
            {
              name: "挖掘机",
              href: "/rent",
            },
            {
              name: "压路机",
              href: "/rent",
            },
            {
              name: "载装机",
              href: "/rent",
            },
            {
              name: "推土机",
              href: "/rent",
            },
            {
              name: "平地机",
              href: "/rent",
            },
            {
              name: "起重机",
              href: "/rent",
            },
            {
              name: "压路机",
              href: "/rent",
            },
            {
              name: "其他",
              href: "/rent",
            },
          ],
        },
        {
          name: "燃油类型",
          icon: "icon-ranyou",
          item: [
            {
              name: "汽油",
              href: "/rent",
            },
            {
              name: "纯电动",
              href: "/rent",
            },
            {
              name: "柴油",
              href: "/rent",
            },
            {
              name: "其它",
              href: "/rent",
            },
          ],
        },
        {
          name: "环保等级",
          icon: "icon-level",
          item: [
            {
              name: "国Ⅰ",
              href: "/rent",
            },
            {
              name: "国Ⅱ",
              href: "/rent",
            },
          ],
        },
        {
          name: "环保登记号",
          icon: "icon-yijiaob",
          item: [
            {
              name: "有",
              href: "/rent",
            },
            {
              name: "无",
              href: "/rent",
            },
          ],
        },
        {
          name: "机械所有人",
          icon: "icon-certified",
          item: [
            {
              name: "个人",
              href: "/rent",
            },
            {
              name: "企业",
              href: "/rent",
            },
          ],
        },
      ],
    };
  },
  methods: {
    toSearchPage(item){
      let payload={
        type:item.dictType,
        value:item.dictLabel
      }
      this.$store.commit('clearRentRequestParams')
      this.$store.commit('setRentRequestParams',payload)
      this.$router.push('/rent?tag='+item.dictLabel+'&dictType='+item.dictType)
    },
    //点击切换选中项
    navClick(index) {
      this.currentIndex = index;
    },
    itemClick(item) {
      this.$router.push("/rentDetails/" + item.id);
    },
    async getTagLists() {
      await getTagLists().then((res) => {
        this.tagLists = res.data;
        console.log(this.tagLists);
      });
    },
    getTag(val) {
      let result = "";
      let icon = "";
      switch (val) {
        case 0:
          result = "机械类型";
          icon = "icon-leixing";
          break;
        case 1:
          result = "燃油类型";
          icon = "icon-ranyou";
          break;
        case 2:
          result = "环保等级";
          icon = "icon-level";
          break;
        case 3:
          result = "机械所有人";
          icon = "icon-certified";
          break;
      }
      return { result, icon };
    },
    getPicUrl(item) {
      return this.$store.state.imgUrl + item.pic.split(",")[0];
    },
  },
  mounted() {
    this.getTagLists();
    //获取激活的数据：比如：挖掘机
    // console.log(this.$route.query.tag)
  },
  computed: {
    tagListArray() {
      let tabArray = [];
      tabArray.push(this.tagLists["api_mechanics_type"]);
      tabArray.push(this.tagLists["api_fuel_type"]);
      tabArray.push(this.tagLists["api_level_type"]);
      tabArray.push(this.tagLists["api_belong_type"]);
      // tabArray.push(this.tagLists['api_out_pice'])
      // tabArray.push(this.tagLists['api_uptime_type'])
      return tabArray;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
.leftBox {
  width: 365px;
  padding-left: 18px;
  background: #f3f3f3;
  .item {
    padding-bottom: 10px;
    p {
      line-height: 68px;
      margin: 0;
      font-size: 18px;
      color: #333333;
      i {
        color: #fdbe13;
        font-size: 22px;
        margin-right: 16px;
      }
    }
    ul {
      margin: 0;
      padding: 0;
      overflow: hidden;
      li {
        float: left;
        cursor: pointer;
        width: 100px;
        height: 38px;
        text-align: center;
        line-height: 38px;
        background: #fff;
        margin-bottom: 12px;
        margin-right: 14px;
      }
    }
  }
}
.rightbox {
  width: 828px;
  ul {
    overflow: hidden;
    margin: 0;
    padding: 0;
    li {
      width: 263px;
      margin-left: 13px;
      float: left;
      cursor: pointer;
      img {
        width: 263px;
        height: 205px;
      }
      h2 {
        font-size: 16px;
        color: #333333;
        line-height: 54px;
        margin: 0;
      }
      p {
        font-size: 12px;
        color: #666666;
        line-height: 18px;
        height: 54px;
        overflow: hidden;
        margin-bottom: 20px;
      }
      span {
        width: 130px;
        height: 44px;
        border: 1px solid #d48844;
        text-align: center;
        line-height: 42px;
        color: #d48844;
        display: block;
        @include webkit(transition, all 0.3s ease 0s);
        &:hover {
          color: #fff;
          background: #d48844;
        }
      }
    }
    li:nth-child(1),
    li:nth-child(2),
    li:nth-child(3) {
      margin-bottom: 41px;
    }
  }
}
</style>
