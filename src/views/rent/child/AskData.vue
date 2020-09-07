<template>
  <div>
    <div class="mc ask">
      <ul>
        <li v-for="(item,index) in askData" :key="index">
          <askItem :askData="item"></askItem>
        </li>
      </ul>
    </div>
    <div class="mb">
      <a-pagination :default-current="1" :total="200" :default-page-size="12" :item-render="itemRender" />
    </div>
  </div>
</template>

<script>
import askItem from "./AskItem";
export default {
  name: "AskData",
  data() {
    return {
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
    askItem,
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
  },
};
</script>

<style lang="scss" scoped>
.mc {
  width: 850px;
  overflow: hidden;
  margin-bottom: 82px;
  ul {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
}
.mb {
  text-align: center;
  .page {
    padding: 0 10px;
  }
}
</style>