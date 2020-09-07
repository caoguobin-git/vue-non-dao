<template>
  <div class="Nav">
    <div class="w">
      <ul>
        <template v-for="(item,index) in indexData.nav.slice(0,8)">
          <li :class="{active: current == index}" @click="itemClick(index)" :key="item.href + index">
            <router-link :to="item.href">{{item.name}}</router-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      //当前选中项
      current: 0,
    };
  },
  computed: {
    //获取导航数据
    indexData() {
      return this.$store.state.indexData;
    },
  },
  methods: {
    //点击切换
    itemClick(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.Nav {
  background: #0152f5;
  text-align: center;
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    li {
      flex: 1;
      @include webkit(transition, all 0.3s ease 0s);
      a {
        display: block;
        height: 50px;
        line-height: 50px;
        color: #fff;
        font-size: 16px;
      }
      &.active {
        background: #0f46b5;
      }
      &:hover {
        background: #0f46b5;
      }
    }
  }
}
</style>