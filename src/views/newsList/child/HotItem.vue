<template>
  <div class="HotItem">
    <div @click="itemClick(hot)">
      <span :class="{top3:index < 4}">{{index}}</span>
      <p class="nowrap">{{hot.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotItem",
  props: {
    hot: Object,
    index: Number,
  },
  methods:{
    itemClick(item) {
      //todo 点击改变新闻信息
      console.log('hello')
      this.$emit("changeNews",item)
    },
  }
};
</script>

<style lang="scss" scoped>
.HotItem {
  padding: 13px 5px;
  height: 46px;
  border-bottom: 1px solid #e9e9e9;
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    color: #fff;
    background: #cbcbcc;
    vertical-align: top;
    &.top3 {
      background: #3d94fc;
    }
  }
  p {
    display: inline-block;
    width: calc(100% - 35px);
    margin: 0 0 0 15px;
    line-height: 20px;
    vertical-align: top;
  }
}
</style>