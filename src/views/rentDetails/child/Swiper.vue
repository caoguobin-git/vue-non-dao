<template>
  <div class="Swiper">
    <div class="swiper-container gallery-top">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in swiperList">
          <img :src="getPicUrl(item)" alt="" />
        </div>
      </div>
    </div>
    <div class="swiper-button-next swiperButton"></div>
    <div class="swiper-button-prev swiperButton"></div>
    <div class="swiper-container gallery-thumbs">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in swiperList">
          <img :src="getPicUrl(item)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

export default {
  name: "Swiper",
  props: {
    swiperList: Array,
  },
  methods: {
    getPicUrl(item) {
      return this.$store.state.imgUrl + item;
    },
  },
  mounted() {
    let galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 7,
      slidesPerView: 4,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      observer: true,
      observeParents: true,
    });
    let galleryTop = new Swiper(".gallery-top", {
      spaceBetween: 10,
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: galleryThumbs,
      },
      observer: true,
      observeParents: true,
    });
  },
};
</script>
<style lang="scss" scoped>
.Swiper {
  position: relative;
  .gallery-top {
    width: 450px;
    height: 250px;
    margin-bottom: 11px;
  }
  .gallery-thumbs {
    width: 381px;
    height: 80px;
  }
  .swiperButton {
    position: absolute;
    margin: 0;
    top: 261px;
    width: 27px;
    height: 80px;
    outline: none;
  }
  .swiper-button-prev {
    left: 0;
    background: url("~assets/img/prev.jpg");
    &:after {
      content: "";
    }
  }
  .swiper-button-next {
    right: 0;
    background: url("~assets/img/next.jpg");
    &:after {
      content: "";
    }
  }
  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 1;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
