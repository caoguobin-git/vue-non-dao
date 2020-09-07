<template>
  <div class="Swiper gallerySwiper">
    <div class="swiper-container gallery-top">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in swiperList">
          <img :src="getPicUrl(item.picpath)" alt="" />
          <div class="title">
            <h2>{{ item.picname }}</h2>
            <p>{{ item.picdetail }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-container gallery-thumbs">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in swiperList">
          <img :src="getPicUrl(item.picpath)" alt="" />
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next swiper-b swiperBTutton next1"></div>
    <div class="swiper-button-prev swiper-b swiperBTutton prev1"></div>
    <div class="swiper-button-next swiper-b swiperBButton next2"></div>
    <div class="swiper-button-prev swiper-b swiperBButton prev2"></div>
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
    getPicUrl(picpath) {
      return this.$store.state.imgUrl + picpath.split(",")[0];
    },
    initSwaper() {
      setTimeout(() => {
        let galleryThumbs = new Swiper(".gallery-thumbs", {
          spaceBetween: 7,
          slidesPerView: 6,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          navigation: {
            nextEl: ".next2",
            prevEl: ".prev2",
          },
        });
        let galleryTop = new Swiper(".gallery-top", {
          spaceBetween: 10,
          navigation: {
            nextEl: ".next1",
            prevEl: ".prev1",
          },
          pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            renderFraction: function (currentClass, totalClass) {
              return (
                '<span class="' +
                currentClass +
                '"></span>' +
                " / " +
                '<span class="' +
                totalClass +
                '"></span>'
              );
            },
          },
          thumbs: {
            swiper: galleryThumbs,
          },
        });
      }, 500);
    },
  },
  mounted() {
    this.initSwaper();
  },
};
</script>
<style lang="scss" scoped>
.Swiper {
  position: relative;
  .gallery-top {
    width: 926px;
    overflow: hidden;
    img {
      width: 100%;
      height: 450px;
    }
  }
  .gallery-thumbs {
    width: 1130px;
    height: 94px;
    img {
      width: 100%;
      height: 100%;
    }
    .swiper-slide-thumb-active {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 4px solid #e4393c;
      }
    }
  }
  .title {
    padding: 32px 0;
    padding-left: 115px;
    h2 {
      font-size: 16px;
      color: #000000;
      margin-bottom: 8px;
    }
    p {
      line-height: 24px;
      color: #666666;
      margin: 0;
    }
  }
  .swiper-b {
    position: absolute;
    margin: 0;
    outline: none;
  }
  .swiperTButton {
    top: 0;
    width: 23px;
    height: 42px;
  }
  .swiperBButton {
    top: auto;
    bottom: 0;
    width: 27px;
    height: 94px;
  }
  .prev1 {
    left: 0;
    background: url("~assets/img/prev3.png") no-repeat;
    &:after {
      content: "";
    }
  }
  .next1 {
    right: 0;
    background: url("~assets/img/next3.png") no-repeat;
    &:after {
      content: "";
    }
  }
  .prev2 {
    left: 0;
    background: url("~assets/img/prev2.jpg") no-repeat;
    &:after {
      content: "";
    }
  }
  .next2 {
    right: 0;
    background: url("~assets/img/next2.jpg") no-repeat;
    &:after {
      content: "";
    }
  }
  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 1;
  }
}
</style>
