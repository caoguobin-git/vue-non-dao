<template>
  <div class="FindPassword">
    <div class="wpass">
      <a-steps class="steps" :current="current">
        <a-popover slot="progressDot" slot-scope="{ index, status, prefixCls }">
          <template slot="content">
            <span>第 {{ index+1 }} 步</span>
          </template>
          <span :class="`${prefixCls}-icon-dot`" />
        </a-popover>
        <a-step title="注册账号" />
        <a-step title="注册成功" />
      </a-steps>
      <router-view @setSuccessState="setState"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "FindPassword",
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    setState(data) {
      this.current = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.wpass {
  width: 800px;
  margin: 0 auto;
  .steps {
    padding: 30px 0;
  }
}
</style>