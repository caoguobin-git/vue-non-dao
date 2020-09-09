<template>
  <div
      class="box"
      :class="{active: overflow}">
    <ul ref="ul">
      <li :class="{active: -1 === currentIndex }" @click="itemClick(-1)">不限</li>
      <li v-for="(item,index) in bItem"
          :class="{active: index === currentIndex }"
          :key="index"
          @click="itemClick(index)">
        {{item.dictLabel}}
      </li>
    </ul>
    <div
        class="more"
        @click="moreClick">
      更多+
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchItme",
  props: {
    bItem: {
      type: Array,
      default() {
        return []
      }
    },
    activeTagContent: {
      type: String,
      default() {
        return ''
      }
    },
    type:{
      type:String,
      default(){
        return ''
      }
    }
  },
  data() {
    return {
      currentIndex: -1,
      overflow: false,
    };
  },
  methods: {
    //点击条件
    itemClick(index) {
      //高亮
      this.currentIndex = index;
      console.log(index)
      console.log(this.bItem[index])
      let payload={
        type:this.type,
        value:index ===-1?'':this.bItem[index].dictLabel
      }
      console.log(this.type);
      this.$store.commit('setRentRequestParams',payload)
      console.log(this.$store.state.rentRequestParams)
    },
    //点击更多
    moreClick(index) {
      //多余隐藏内容显示
      this.overflow = false;
    },
    // setActiveTag(){
    //   console.log(this.bItem)
    //   for (let i = 0; i < this.bItem.length; i++) {
    //     if (this.bItem[i].dictLabel===this.activeTagContent){
    //       console.log(this.bItem[i].dictLabel);
    //       console.log(this.activeTagContent);
    //       this.currentIndex=i;
    //       break;
    //     }
    //   }
    // }
  },
  mounted: function () {
    //元素挂载完成判断是否有多余内容
    if (this.$refs.ul.offsetHeight > 60) {
      this.overflow = true;
    }
    for (let i = 0; i < this.bItem.length; i++) {
      if (this.bItem[i].dictLabel === this.activeTagContent && this.type===this.bItem[i].dictType) {
        this.currentIndex = i;
        let payload={
          type:this.type,
          value:this.activeTagContent
        }
        this.$store.commit('setRentRequestParams',payload)
  
        break;
      }
    }
  },
  watch: {
    bItem(val) {
      for (let i = 0; i < val.length; i++) {
        if (val[i].dictLabel === this.activeTagContent && this.type===val[i].dictType) {
          this.currentIndex = i;
          let payload={
            type:this.type,
            value:this.activeTagContent
          }
          this.$store.commit('setRentRequestParams',payload)
          break;
        }
      }
    }
  },
  deactivated() {
    this.$store.commit('clearRentRequestParams')
  }
};
</script>

<style
    lang="scss"
    scoped>
.box {
  overflow: hidden;
  border-left: 1px solid #e6e6e6;
  padding: 0;
  padding-left: 15px;
  position: relative;

  ul {
    padding: 0;
    padding-top: 16px;
    margin: 0;
    overflow: hidden;

    li {
      float: left;
      padding: 0 14px;
      cursor: pointer;
      height: 26px;
      color: #333333;
      font-size: 14px;
      margin: 0 16px 16px 0;
      line-height: 26px;

      &.active {
        color: #fff;
        background: #ff9600;
      }
    }
  }

  .more {
    position: absolute;
    right: 30px;
    top: 18px;
    display: none;
    color: #0152f5;
    cursor: pointer;
  }

  &.active {
    overflow: visible;
    height: 42px;
    padding-right: 75px;

    .more {
      display: block;
    }
  }
}
</style>