<template>
  <div class="GalleryItem">
    <div @click="toOtherPage(galleryItem)">
      <img v-lazy="getPicUrl(galleryItem)" src="" alt="">
      <div class="title">
        <div class="mt"><span>{{galleryItem.pictype}}</span>{{galleryItem.title}}</div>
        <div class="mb">
          <div class="time">{{galleryItem.uptime.substr(0,10)}}</div>
          <div class="num">{{galleryItem.piccnt}}张 {{galleryItem.times}}浏览</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryItem",
  props: {
    galleryItem: Object,
  },
  methods: {
    getPicUrl(item) {
      return this.$store.state.imgUrl + item.firstpic.split(",")[0];
    },
    toOtherPage(val) {
      if (this.$route.path.indexOf("galleryDetails") != -1) {
        this.$emit("changeItem", val);
      } else {
        this.$router.push("/galleryDetails/" + val.id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.GalleryItem {
  width: 284px;
  box-shadow: 0 0 13px 3px rgba(162, 162, 162, 0.17);
  img {
    width: 284px;
    height: 172px;
  }
  .title {
    padding: 0 11px;
    .mt {
      color: #333333;
      line-height: 26px;
      height: 52px;
      overflow: hidden;
      margin: 10px 0 15px 0;
      span {
        //height: 22px;
        //width: 45px;
        padding: 2px 5px;
        display: inline-block;
        line-height: 20px;
        text-align: center;
        border: 1px solid #e4393c;
        color: #e4393c;
        border-radius: 4px;
        margin-right: 12px;
      }
    }
    .mb {
      overflow: hidden;
      color: #666666;
      padding-bottom: 15px;
      .time {
        float: left;
      }
      .num {
        float: right;
      }
    }
  }
}
</style>