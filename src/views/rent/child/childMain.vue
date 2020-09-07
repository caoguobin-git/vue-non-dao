<template>
  <div>
    <!-- 搜索条件 -->
    <searchMenu></searchMenu>
    <!-- 出租求租 -->
    <div class="bottomBox">
      <div class="w">
        <div class="leftBox">
          <div class="RentMain">
            <div class="mt">
              <a-popover placement="bottom">
                <template slot="content">
                  <ul class="popover">
                    <li v-for="(item,index) in rent" :class="{active: index === currentIndex1 }" :key="index" @click="rentConClick(index)">{{item}}
                      <a-icon class="icon" type="check" />
                    </li>
                  </ul>
                </template>
                <span class="span" :class="{active:rentClass}" @click="rentClick">
                  出租
                  <a-icon type="down" />
                </span>
              </a-popover>
              <a-popover placement="bottom">
                <template slot="content">
                  <ul class="popover">
                    <li v-for="(item,index) in rent" :class="{active: index === currentIndex2 }" :key="index" @click="askConClick(index)">{{item}}
                      <a-icon class="icon" type="check" />
                    </li>
                  </ul>
                </template>
                <span class="span" :class="{active:askClass}" @click="askClick">
                  求租
                  <a-icon type="down" />
                </span>
              </a-popover>
            </div>
            <div>
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
            </div>
          </div>
        </div>
        <div class="rightBox">
          <!-- 右侧信息 -->
          <right></right>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchMenu from "./SearchMenu";
import right from "./Right";
export default {
  name: "RentMain",
  data() {
    return {
      currentIndex1: 0,
      currentIndex2: 0,
      rentClass: true,
      askClass: false,
      rent: ["综合", "人气", "价格升序", "价格降序"],
    };
  },
  components: {
    searchMenu,
    right,
  },
  methods: {
    //点击出租
    rentClick() {
      this.$options.methods.rentHigh(this);
      this.$router.push("/rentMain");
    },
    //点击出租条件
    rentConClick(index) {
      this.$options.methods.rentHigh(this);
      //气泡高亮
      this.currentIndex1 = index;
      this.currentIndex2 = 0;
      this.$router.push("/rentMain");
    },
    //点击求租
    askClick() {
      this.$options.methods.sakHigh(this);
      this.$router.push("/askMain");
    },
    //点击求租条件
    askConClick(index) {
      this.$options.methods.sakHigh(this);
      //气泡高亮
      this.currentIndex1 = 0;
      this.currentIndex2 = index;
      this.$router.push("/askMain");
    },
    //出租高亮
    rentHigh(that) {
      //高亮
      that.rentClass = true;
      that.askClass = false;
    },
    //求租高亮
    sakHigh(that) {
      //高亮
      that.rentClass = false;
      that.askClass = true;
    },
  },
  created() {
    if (this.$route.meta.name === "求租") {
      this.rentClass = false;
      this.askClass = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.bottomBox {
  overflow: hidden;
  padding-bottom: 60px;
}
.leftBox {
  width: 850px;
  float: left;
}
.rightBox {
  width: 310px;
  float: right;
}
.RentMain {
  float: left;
  width: 850px;
  overflow: hidden;
}
.mt {
  height: 38px;
  border-bottom: 1px solid #e6e6e6;
  line-height: 38px;
  font-size: 16px;
  color: #333333;
  .span {
    float: left;
    margin-right: 70px;
    cursor: pointer;
    &.active {
      color: #0152f5;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 30px;
        height: 3px;
        background: #0152f5;
      }
    }
  }
}
.popover {
  margin: 0;
  padding: 0;
  li {
    width: 150px;
    cursor: pointer;
    @include webkit(transition, all 0.3s ease 0s);
    .icon {
      float: right;
      display: none;
    }
    &:hover {
      color: #ff6600;
    }
    &.active {
      color: #ff6600;
      .icon {
        display: block;
      }
    }
  }
}
</style>