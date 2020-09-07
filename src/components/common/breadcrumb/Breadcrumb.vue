<template>
  <div class="Breadcrumb">
    <div class="w">
      <router-link :to="`/index`">首页</router-link>
      <template v-for="item in routes.meta.itemRender">
        ><router-link v-if="item.path" :to="item.path">
          {{ item.name }}
        </router-link>
        <span v-else>
          {{ item.name }}
        </span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      routes: [],
    };
  },
  created() {
    this.routes = this.$route;
  },
};
</script>

<style lang="scss" scoped>
.Breadcrumb {
  line-height: 48px;
  color: #333333;
  a {
    color: #333333;
    &:hover {
      color: #0f46b5;
    }
  }
  span {
    color: #0f46b5;
  }
}
</style>
