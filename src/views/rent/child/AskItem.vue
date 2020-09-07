<template>
  <div class="AskItem">
    <div class="title">
      <h2 class="nowrap">{{askData.name}}</h2>
      <p>{{askData.people}}<span>|</span>{{askData.time}}</p>
    </div>
    <div class="phone" @click="showModal">获取电话</div>
    <a-modal v-model="visible" title="联系方式" @ok="handleOk" :footer="null" dialogClass="dialog">
      <p v-show="askData.company">公司名称:{{askData.company}}</p>
      <p>联系人:{{askData.people}}</p>
      <p>手机号码：{{askData.phone}}</p>
      <p v-show="askData.email">电子邮箱：{{askData.email}}</p>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "AskItem",
  props: {
    askData: Object,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.AskItem {
  overflow: hidden;
  border-bottom: 1px solid #e6e6e6;
  padding: 36px 0 24px 0;
  .title {
    float: left;
    width: 720px;
    h2 {
      font-size: 18px;
      color: #333333;
      margin-bottom: 6px;
    }
    p {
      color: #666666;
      margin: 0;
      span {
        font-size: 12px;
        color: #e9e9e9;
        padding: 0 20px;
      }
    }
  }
  .phone {
    float: right;
    width: 120px;
    height: 36px;
    text-align: center;
    line-height: 34px;
    font-size: 16px;
    border: 1px solid #2651a8;
    color: #2651a8;
    margin-top: 10px;
    cursor: pointer;
    @include webkit(transition, all 0.3s ease 0s);
    &:hover {
      background: #2651a8;
      color: #fff;
    }
  }
}
</style>