<template>
  <div class="Success">
    <a-result status="success">
      <div class="desc">
        <p>重置密码成功，马上<router-link to="/login">去登录</router-link>
        </p>
      </div>
    </a-result>
  </div>
</template>

<script>
export default {
  name: "Success",
};
</script>

<style lang="scss" scoped>
p {
  text-align: center;
  a {
    color: #feab36;
    text-decoration: underline;
  }
  a:hover {
    color: #feab36;
    text-decoration: underline;
  }
}
</style>