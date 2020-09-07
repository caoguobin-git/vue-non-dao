<template>
  <div class="Footer">
    <div class="FooterMessage" v-if="footerType === 'message'">
      <div class="w">
        <dl>
          <template v-for="(item,index) in indexData.nav.slice(0,4)">
            <dd><a :href="item.href">{{item.name}}</a></dd>
            <dt>|</dt>
          </template>
          <dd><a href="">更多</a></dd>
        </dl>
        <p><span>联系电话：{{indexData.phone}}</span><span>地址：{{indexData.address}}</span></p>
        <p>友情链接：
          <template v-for="(item,index) in indexData.link">
            <a :key="item.href + index" class="link" :href="item.href">{{item.name}}</a>
          </template>
        </p>
        <p><a :href="indexData.record.href">{{indexData.record.name}}</a><span>{{indexData.littleName}}</span><span>{{indexData.copy}}</span></p>
        <div class="erweima">
          <img src="~assets/img/erweima.jpg" alt="">
          <span>扫码关注我们</span>
        </div>
      </div>
    </div>
    <div class="FooterCopy" v-if="footerType === 'copy'">
      <div class="w">
        <p>{{indexData.title}}{{indexData.copy}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    indexData() {
      return this.$store.state.indexData;
    },
    footerType() {
      return this.$route.meta.footerType;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Footer.scss";
</style>