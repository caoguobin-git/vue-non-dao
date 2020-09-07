<template>
  <div class="Header">
    <div class="HeaderTop">
      <div class="w">
        <div class="title fl">您好！欢迎来到{{ indexData.title }}！</div>
        <div class="rightBtn fr">
          <ul class="btn fl">
            <li>
              <router-link to="/index"
                ><i class="iconfont icon-shouye"></i>首页</router-link
              >
            </li>
            <li>
              <router-link to="/login"
                ><i class="iconfont icon-kefu"></i>联系客服</router-link
              >
            </li>
          </ul>
          <div class="detail fl">
            <div class="login fl" v-if="!user.username">
              <router-link to="/login">登录</router-link>
              <span>|</span>
              <router-link to="/registered">注册</router-link>
            </div>
            <div class="isLogin fl" v-if="!!user.username">
              <a-avatar
                class="user"
                size="small"
                :src="user.src"
                :srcSet="user.src"
              />
              <a-icon type="down" />
              <dl>
                <dt>
                  <router-link to="">
                    <div class="fl">
                      <h2>{{ user.username }}</h2>
                      <p>{{ user.phone }}</p>
                    </div>
                    <a-icon
                      class="fr icon"
                      type="right"
                      style="fontSize:16px"
                    />
                  </router-link>
                </dt>
                <dd v-for="item in list" @click="pushClick(item.redirect)">
                  {{ item.meta.name }}
                </dd>
                <dd class="quit" @click="quit">退出登录</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="HeaderSearch" v-if="headerData.meta.headerType == 'search'">
      <div class="w">
        <div class="logo">
          <router-link to="/index"
            ><img src="~assets/img/logo1.png" alt=""
          /></router-link>
        </div>
        <div class="searchbox">
          <div class="search">
            <label for="search">
              <i class="iconfont icon-sousuo"></i>
            </label>
            <input id="search" type="text" placeholder="搜索你想要的的" />
            <button>搜索</button>
          </div>
          <button class="free">免费发布信息</button>
        </div>
      </div>
    </div>
    <div class="HeaderPhone" v-if="headerData.meta.headerType == 'phone'">
      <div class="w">
        <div class="logo">
          <router-link to="/index"
            ><img src="~assets/img/logo1.png" alt=""
          /></router-link>
        </div>
        <div class="title">
          {{ headerData.meta.name }}
        </div>
        <div class="phone">
          <i class="iconfont icon-lianxidianhua"></i>
          <span>{{ indexData.phone }}</span>
        </div>
      </div>
    </div>
    <div class="HeaderNav" v-if="headerData.meta.headerType == 'nav'">
      <div class="w clearfix">
        <div class="logo">
          <router-link to="/index"
            ><img src="~assets/img/logo2.png" alt=""
          /></router-link>
        </div>
        <ul>
          <li>
            <router-link to="/supplyDemand">供求管理</router-link>
          </li>
          <li>
            <router-link to="editInfo">账号管理</router-link>
          </li>
          <li>
            <router-link :to="headerData.path">{{
              headerData.meta.name
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      list: this.$router.options.routes[1].children[7].children,
    };
  },
  computed: {
    //头部信息
    headerData() {
      return this.$route;
    },
    //登录后信息
    user() {
      return this.$store.state.app.user;
    },
    //首页信息
    indexData() {
      return this.$store.state.indexData;
    },
  },
  methods: {
    pushClick(path) {
      this.$router.push(path);
    },
    quit() {
      let that = this;
      that.$confirm({
        title: "确认退出?",
        okText: "确认",
        okType: "danger",
        cancelText: "取消",
        onOk() {
          that.$store.dispatch("app/exitActions").then(() => {
            //路由跳转
            that.$router.push("/login");
            //提示成功
            this.$message.success("退出成功");
          });
        },
        onCancel() {},
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Header.scss";
</style>
