<template>
  <div class="MyMessage">
    <a-collapse v-model="activeKey" :accordion="true" :bordered="false">
      <template #expandIcon="props">
        <a-badge :offset="[0,5]" :dot="true"></a-badge>
      </template>
      <template v-for="item in messages">
        <a-collapse-panel :showArrow="item.status==0" :key="item.noticeId" :header="item.noticeTitle">
          <p v-html="item.noticeContent"></p>
        </a-collapse-panel>
      </template>
    </a-collapse>
  </div>
</template>
<script>
const title = [];
for (let i = 0; i < 10; i++) {
  title.push({
    id: i.toString(),
    title: `第${i}行`,
    look: true,
    main: `London Park no. ${i}`,
  });
}
import {getSystemMessage} from "@/network/back/message";

export default {
  name: "MyFavorites",
  data() {
    return {
      title,
      activeKey: [],
      messages:[]
    };
  },
  watch: {
    activeKey(key) {
      this.title[key].look = false;
      console.log(key);
    },
  },
  methods:{
    getSystemMessage(){
      console.log('获取message')
      getSystemMessage().then(res=>{
        console.log(res)
        this.messages.splice(0,100)
        this.messages.push(...res.list)

      })
    }
  },
  activated() {
    console.log('hello get message ')
    this.getSystemMessage()
  }
};
</script>
<style lang="scss" scoped>
p {
  margin: 0;
  padding-left: 20px;
}
</style>
