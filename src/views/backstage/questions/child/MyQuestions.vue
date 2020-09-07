<template>
  <div
      class="myQuestions">
    <div
        class="cTable">
      <a-table
          :columns="columns"
          :data-source="displayQuestions" />
<!--          :data-source="data" />-->
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "编号",
    dataIndex: "id",
    width: "10%",
    scopedSlots: {customRender: "id"},
  },
  {
    title: "工单题目",
    dataIndex: "name",
    width: "40%",
    scopedSlots: {customRender: "name"},
  },
  {
    title: "类型",
    dataIndex: "type",
    width: "15%",
    scopedSlots: {customRender: "type"},
  },
  {
    title: "状态",
    dataIndex: "state",
    width: "15%",
    scopedSlots: {customRender: "state"},
  },
  {
    title: "发布时间",
    dataIndex: "time",
    width: "20%",
    scopedSlots: {customRender: "time"},
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    id: i.toString(),
    type: `Edrward ${i}`,
    state: 32,
    name: `London Park no. ${i}`,
    time: "2020-08-20",
  });
}
import {getQuestions} from "network/questions.js";

export default {
  name: "myQuestions",
  data() {
    return {
      columns,
      data,
      questions: []
    };
  },
  methods: {
    getMyQuestions() {
      getQuestions(this.$store.state.app.user.user_id)
          .then((res) => {
            console.log(res.data);
            this.questions.splice(0, 100)
            this.questions.push(...res.data)
          })
          .catch((err) => {
            console.log(err);
          });
    }
  },
  computed:{
    displayQuestions(){
      let arr = [];
      this.questions.forEach(item=>{
        arr.push({
          key: item.id,
          id: item.id,
          type: item.type,
          state: item.status||'null',
          name: item.title,
          time: item.createTime||'null',
        })
      })
      return arr;
    }
  },
  activated() {
    this.getMyQuestions()
  },
  created() {

  },
};
</script>

<style
    lang="scss"
    scoped>
</style>