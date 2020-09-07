<template>
  <div class="Prcture">
    <div class="w">
      <div class="mt">
        <p>产品图库</p>
        <!-- <ul class="fr change red" slot="item-tab">
          <li
            v-for="(item, index) in headerName"
            :key="index"
            :class="{ active: index === currentIndex }"
            @click="navClick(index)"
          >
            {{ item }}
          </li>
        </ul> -->
      </div>
      <div class="mb">
        <div class="img" :class="'img' + index" v-for="(item, index) in PicMain.slice(0, 10)" :key="index" @click="itemClick(item)">
          <img v-lazy="getPicUrl(item)" src="" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prcture",
  props: {
    PicMain: Array,
  },
  data() {
    return {
      headerName: ["产品图片", "展会图片", "活动图片", "人物图片", "施工图片"],
      currentIndex: 0,
    };
  },
  methods: {
    //状态切换
    navClick(index) {
      this.currentIndex = index;
    },
    itemClick(item) {
      this.$router.push("/galleryDetails/" + item.id);
    },
    getPicUrl(item) {
      return this.$store.state.imgUrl + item.firstpic.split(",")[0];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
.mb {
  width: 1200px;
  height: 518px;
  position: relative;
  .img {
    position: absolute;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .img0 {
    top: 0;
    left: 0;
    width: 248px;
    height: 150px;
  }
  .img1 {
    top: 157px;
    left: 0;
    width: 248px;
    height: 200px;
  }
  .img2 {
    bottom: 0;
    left: 0;
    width: 248px;
    height: 155px;
  }
  .img3 {
    top: 0;
    left: 256px;
    width: 574px;
    height: 234px;
  }
  .img4 {
    bottom: 0;
    left: 256px;
    width: 275px;
    height: 278px;
  }
  .img5 {
    top: 240px;
    left: 539px;
    width: 291px;
    height: 140px;
  }
  .img6 {
    bottom: 0;
    left: 539px;
    width: 291px;
    height: 133px;
  }
  .img7 {
    top: 0;
    right: 0;
    width: 361px;
    height: 180px;
  }
  .img8 {
    top: 187px;
    right: 0;
    width: 361px;
    height: 193px;
  }
  .img9 {
    bottom: 0;
    right: 0;
    width: 361px;
    height: 133px;
  }
}
</style>
