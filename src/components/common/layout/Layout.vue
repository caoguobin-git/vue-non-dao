<template>
  <div class="Layout">
    <headerCom></headerCom>
    <mainCom></mainCom>
    <footerCom></footerCom>
  </div>
</template>

<script>
import headerCom from "components/common/header/Header.vue";
import footerCom from "components/common/footer/Footer.vue";
import mainCom from "components/common/main/Main.vue";
export default {
  name: "Layout",
  components: {
    headerCom,
    footerCom,
    mainCom,
  },
};
</script>

<style lang="scss" scoped>
</style>