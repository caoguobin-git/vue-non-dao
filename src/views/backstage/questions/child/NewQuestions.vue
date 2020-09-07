<template>
  <div class="ReleaseRental">
    <a-form-model ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol" class="cForm">
      <a-form-model-item label="问题类别" prop="type">
        <a-select v-model="form.type" placeholder="请选择问题类别">
          <a-select-option value="1">1</a-select-option>
          <a-select-option value="2">2</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item ref="title" label="工单题目" prop="title">
        <a-input v-model="form.title" placeholder="请输入工单题目" />
      </a-form-model-item>
      <a-form-model-item label="问题描述" prop="desc">
        <a-input v-model="form.desc" type="textarea" :rows="6" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button class="orange" type="danger" @click="onSubmit">提交问题</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import { setQuestions } from "network/questions.js";
export default {
  name: "ReleaseRental",
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        type: undefined,
        title: "",
        desc: "",
      },
      rules: {
        type: [
          {
            required: true,
            message: "请选择一种问题类别",
            trigger: "change",
          },
        ],
        title: [
          {
            required: true,
            message: "请输入工单题目",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "请输入问题描述",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          let type = this.form.type;
          let title = this.form.title;
          let content = this.form.desc;
          setQuestions(type, title, content)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
</style>