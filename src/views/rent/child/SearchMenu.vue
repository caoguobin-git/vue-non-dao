<template>
  <div
      class="SearchMenu">
    <div
        class="w">
      <div
          class="searchMenu">
        <!--        <div class="item" v-for="(bItem,index1) in MenuData" :key="index1">-->
        <!--          <span><i>*</i>{{bItem.name}}</span>-->
        <!--          <div class="rightBox">-->
        <!--            <searchItme :bItem="bItem"></searchItme>-->
        <!--          </div>-->
        <!--        </div>-->

        <div
            class="item"
            v-for="(item,index) in tagListArray"
            :key="index">
          <span><i>*</i>{{getTag(index)}}</span>
          <div
              class="rightBox">
            <searchItme
                :type="$route.query.dictType"
                :activeTagContent="$route.query.tag"
                :bItem="item"></searchItme>
          </div>
        </div>
<!--        <select-->
<!--            v-model="selectedProv">-->
<!--          <option-->
<!--              v-for="item in prov"-->
<!--              :value="item">-->
<!--            {{item.name}}-->
<!--          </option>-->
<!--        </select>-->
<!--        <select-->
<!--            v-model="selectedCity">-->
<!--          <option-->
<!--              v-for="item in city"-->
<!--              :value="item">-->
<!--            {{item.name}}-->
<!--          </option>-->
<!--        </select>-->
<!--        <select-->
<!--            v-model="selectArea">-->
<!--          <option-->
<!--              v-for="item in area"-->
<!--              :value="item">-->
<!--            {{item.name}}-->
<!--          </option>-->
<!--        </select>-->
      </div>
    </div>
  </div>
</template>

<script>
import searchItme
  from "./SearchItem";
import {
  getTagLists,
  getCityList
} from "@/network/rentDetails";

export default {
  name: "SearchMenu",
  data() {
    return {
      tagLists: {},
      // MenuData: [
      //   {
      //     name: "机械类型",
      //     hot: true,
      //     item: [
      //       {
      //         src: "",
      //         name: "a",
      //         active: true,
      //       },
      //       {
      //         src: "",
      //         name: "b",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "c",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "b",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "c",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "b",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "c",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "b",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "c",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //     ],
      //   },
      //   {
      //     name: "机械类型",
      //     hot: true,
      //     item: [
      //       {
      //         src: "",
      //         name: "1",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "6",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "1",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //       {
      //         src: "",
      //         name: "不限",
      //         active: false,
      //       },
      //     ],
      //   },
      // ],
      cityLists: [],
      selectedProv: {
        id:1
      },
      selectedCity: {},
      selectArea: {}
    };
  },
  components: {
    searchItme,
  },
  methods: {
    async getTagLists() {
      await getTagLists().then(res => {
        this.tagLists = res.data
      })
    },
    getTag(val) {
      let result = ''
      switch (val) {
        case 0:
          result = '机械类型';
          break;
        case 1:
          result = '机械所有人';
          break;
        case 2:
          result = '燃油类型';
          break;
        case 3:
          result = '环保等级';
          break;
        case 4:
          result = '价格区间';
          break;
        case 5:
          result = '发布时间';
          break;
      }

      return result;
    }
  },
  mounted() {
    this.getTagLists()
    //获取激活的数据：比如：挖掘机
    // console.log(this.$route.query.tag)
    getCityList().then(res => {
      this.cityLists = res.data
      console.log(this.cityLists)
    })
    console.log(this.cityLists)
  },
  computed: {
    tagListArray() {
      let tabArray = [];
      tabArray.push(this.tagLists['api_mechanics_type'])
      tabArray.push(this.tagLists['api_belong_type'])
      tabArray.push(this.tagLists['api_fuel_type'])
      tabArray.push(this.tagLists['api_level_type'])
      tabArray.push(this.tagLists['api_out_pice'])
      tabArray.push(this.tagLists['api_uptime_type'])
      return tabArray;
    },
    prov() {
      return this.cityLists.filter(item => {
        return item.level === 1
      })
    },
    city() {
      return this.cityLists.filter(item => {
        return item['parent_id'] === this.selectedProv.id
      })
    },
    area(){
      return this.cityLists.filter(item => {
        return item['parent_id'] === this.selectedCity.id
      })
    }
  }
};
</script>

<style
    lang="scss"
    scoped>
.searchMenu {
  border-top: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
  margin-bottom: 35px;

  .item {
    border-bottom: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    overflow: hidden;

    span {
      width: 150px;
      float: left;
      padding-left: 24px;
      line-height: 58px;
      font-size: 14px;
      color: #666666;

      i {
        color: #cc242c;
        margin-right: 7px;
      }
    }

    .rightBox {
      float: left;
      width: 1048px;
    }
  }
}
</style>