<template>
  <div class="like">
    <div class="mt">
      <p>{{ Rec.title }}</p>
      <!-- <a class="more"><i class="iconfont icon-shuaxin"></i>换一批</a> -->
    </div>
    <ul class="img">
      <li v-for="(item, index) in Rec.list" :key="index">
        <a :href="item.link">
          <img v-lazy="getPicUrl(item)" src="" alt="" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Like",
  props: {
    Rec: Object,
  },
  methods: {
    getPicUrl(item) {
      return this.$store.state.imgUrl + item.img;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
.like {
  width: 245px;
  ul {
    margin: 0;
    padding: 0;
    li {
      width: 245px;
      height: 125px;
      margin-bottom: 10px;
      img {
        width: 245px;
        height: 125px;
      }
    }
  }
}
</style>
