<template>
  <div class="H2Head">
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name: "H2Head",
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.H2Head {
  border-bottom: 1px solid #e6e6e6;
  overflow: hidden;
  p {
    line-height: 36px;
    font-size: 16px;
    color: #050505;
    margin: 0;
    position: relative;
    float: left;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      background: #0152f5;
    }
  }
}
</style>