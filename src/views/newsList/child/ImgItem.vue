<template>
  <div class="imgItem">
    <!--    跳转-->
    <router-link :to="'/galleryDetails/'+this.imgData.id">
      <!--      <img v-lazy="getPic" @error="picErr" src="" alt="">-->
      <!--      图片可能404-->
      <img @error="picErr" :src="getPic" alt="">
    </router-link>
  </div>
</template>

<script>
export default {
  name: "imgItem",
  props: {
    imgData: Object,
  },
  methods: {
    picErr(e) {
      console.log(e);
    },
  },
  computed: {
    getPic() {
      return (
        this.$store.state.imgUrl + (this.imgData.firstpic || this.imgData.img)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  margin-bottom: 12px;
}
</style>