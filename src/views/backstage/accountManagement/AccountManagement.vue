<template>
  <div class="AccountManagement">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "AccountManagement",
  data() {
    return {
      activeKey: "1",
    };
  },
  methods: {
    callback(key) {
      this.activeKey = key;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>