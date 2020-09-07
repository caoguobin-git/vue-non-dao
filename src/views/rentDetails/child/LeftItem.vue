<template>
  <div class="LeftItem">
    <a :href="itemData.link">
      <img v-lazy="getPicUrl(itemData)" src="" alt="" />
      <div class="title">
        <h2 class="nowrap">{{ itemData.title }}</h2>
        <p v-if="itemData.remark">{{ itemData.remark }}</p>
        <router-link class="link" to="">了解更多</router-link>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "LeftItem",
  props: {
    itemData: Object,
  },
  methods: {
    getPicUrl(item) {
      return this.$store.state.imgUrl + item.img;
    },
  },
};
</script>

<style lang="scss" scoped>
.LeftItem {
  width: 264px;
  height: 410px;
  cursor: pointer;
  margin-bottom: 24px;
  img {
    width: 264px;
    height: 206px;
  }
  .title {
    border: 1px solid #e9e9e9;
    border-top: 0;
    padding: 0 8px;
    padding-bottom: 25px;
    text-align: center;
    overflow: hidden;
    h2 {
      color: #333333;
      font-size: 16px;
      margin: 13px 0;
    }
    p {
      font-size: 12px;
      color: #666666;
      line-height: 18px;
      height: 54px;
      overflow: hidden;
      margin: 0;
    }
    .link {
      border: 1px solid #d48844;
      width: 130px;
      height: 44px;
      line-height: 42px;
      color: #d48844;
      display: block;
      margin: 30px auto 0 auto;
      &:hover {
        background: #d48844;
        color: #fff;
      }
    }
  }
}
</style>
