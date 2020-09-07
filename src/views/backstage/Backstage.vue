<template>
  <div
      class="Backstage">
    <div
        class="w">
      <div
          class="leftNav">
        <div
            class="box">
          <div
              class="img">
            <img
                v-lazy="user.src"
                src=""
                alt="">
          </div>
          <h2>{{user.username}}</h2>
          <p>会员ID:{{user.id}}</p>
        </div>
        <a-menu
            class="menu"
            mode="inline"
            :selected-keys="selectedKeys"
            :open-keys="openKeys"
            @openChange="onOpenChange">
          <template
              v-for="(item,index) in menu">
            <a-sub-menu
                :key="item.redirect">
              <span
                  slot="title"><i
                  :class="'icon iconfont ' + item.meta.icon"></i><span>{{item.meta.name}}</span></span>
              <template
                  v-for="(item,sindex) in item.children">
                <a-menu-item
                    :key="item.path"
                    @click="itemClick(item)">
                  {{item.meta.name}}
                </a-menu-item>
              </template>
            </a-sub-menu>
          </template>
        </a-menu>
      </div>
      <div
          class="rightBox">
        <a-tabs
            @change="pathClick"
            v-model="activeKey">
          <a-tab-pane
              v-for="(item,index) in left[currentPage].children"
              :key="index +1"
              :tab="item.meta.name">
          </a-tab-pane>
        </a-tabs>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Backstage",
  props: {
    datax: String,
  },
  data() {
    return {
      activeKey: 0,
      route: this.$route,
      menu: [],
      rootSubmenuKeys: [],
      user: {},
      defaultOpenKeys: ["/releaseRental"],
      defaultSelectedKeys: [],
      openKeys: ["/releaseRental"],
      selectedKeys: [],
      left: [
        {
          path: "/supplyDemand",
          redirect: "/releaseRental",
          children: [
            {
              path: "/releaseRental",
              meta: {
                name: "发布出租信息",
              },
            },
            {
              path: "/seekRental",
              meta: {
                name: "发布求租信息",
              },
            },
            {
              path: "/manageSupplyDemand",
              meta: {
                name: "管理供求信息",
              },
            },
          ],
        },
      ],
      currentPage:0
    };
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
          (key) => this.openKeys.indexOf(key) === -1
      );
      console.log(openKeys);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    itemClick(item) {
      console.log(item)
      switch (item.name) {
        case "ReleaseRental":
          this.activeKey = 1;
          break;
        case "SeekRental":
          this.activeKey = 2;
          break;
        case "ManageSupplyDemand":
          this.activeKey = 3;
          break;
      }
      this.$router.push(item.path);
    },
    pathClick(activeKey) {
      console.log(activeKey)
      console.log('hello')
      this.$router.push(this.left[0].children[activeKey - 1].path);
    },
  },
  computed: {
    item() {
      this.openKeys[0] = this.$route.matched[
      this.$route.matched.length - 2
          ].redirect;
      this.selectedKeys[0] = this.$route.path;
      this.left = this.menu.filter((item) => {
        return item.children.some((item2) => {
          return item2.path == this.openKeys[0];
        });
      });
      this.activeKey =
          this.left[0].children.findIndex((obj, objIndex, objs) => {
            return obj.path == this.selectedKeys[0];
          }) + 1;
    },
  },
  created() {
    //获取用户信息
    this.user = this.$store.state.app.user;
    //获取菜单
    let menuData = this.$router.options.routes[1].children.filter(
        (item) => item.name == "Backstage"
    )[0].children;
    this.menu = menuData;
    menuData.forEach((item) => {
      this.rootSubmenuKeys.push(item.redirect);
    });
  },
  updated() {
    this.route = this.$route;
  },
};
</script>

<style
    lang="scss"
    scoped>
.Backstage {
  padding: 25px 0;
  overflow: hidden;

  .leftNav {
    width: 200px;
    float: left;
    background: #f8fafc;

    .box {
      padding-top: 35px;
      text-align: center;

      .img {
        width: 112px;
        height: 112px;
        border: 3px solid #d3dce4;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
        background: #fff;

        img {
          width: 100%;
          height: 100%;
        }
      }

      h2 {
        margin: 0;
        font-size: 14px;
        color: #141414;
        margin-top: 10px;
      }

      p {
        color: #666666;
        margin-top: 10px;
      }
    }
  }

  .rightBox {
    width: 950px;
    float: right;
  }
}
</style>