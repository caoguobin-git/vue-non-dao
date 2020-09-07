<template>
  <div class="FindPassword">
    <div class="wpass">
      <a-steps class="steps" :current="current">
        <a-popover slot="progressDot" slot-scope="{ index, status, prefixCls }">
          <template slot="content">
            <span>第 {{ index + 1 }} 步</span>
          </template>
          <span :class="`${prefixCls}-icon-dot`" />
        </a-popover>
        <a-step title="手机号码验证" />
        <a-step title="设置新密码" />
        <a-step title="找回密码成功" />
      </a-steps>
      <router-view
        @setSuccessState="setState"
        @setPhone="setPhoneNum"
        :phone="phone"
      ></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "FindPassword",
  data() {
    return {
      current: 0,
      phone: "",
    };
  },
  methods: {
    setState(data) {
      this.current = data;
    },
    setPhoneNum(data) {
      this.phone = data;
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
