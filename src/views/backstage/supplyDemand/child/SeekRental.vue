<template>
  <div class="SeekRental">
    <a-form-model ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol" class="cForm">
      <a-form-model-item ref="title" label="求租标题" prop="title">
        <a-input v-model="form.title" placeholder="请输入求租标题" />
      </a-form-model-item>
      <a-form-model-item label="车辆类型" prop="type">
        <a-select v-model="form.type" placeholder="请选择车辆类型">
          <a-select-option value="1">1</a-select-option>
          <a-select-option value="2">2</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item ref="carNum" label="车辆数量" prop="carNum">
        <a-input-number :min="1" v-model="form.carNum" placeholder="请输入车辆数量" />
        <span class="ant-form-text">辆</span>
      </a-form-model-item>
      <a-form-model-item ref="expectedHour" label="预计工时" prop="expectedHour">
        <a-input-number :min="1" v-model="form.expectedHour" placeholder="请输入预计工时" />
        <span class="ant-form-text">小时</span>
      </a-form-model-item>
      <a-form-model-item ref="price" label="单价" prop="price">
        <a-input-number :min="1" v-model="form.price" placeholder="请输入单价" />
        <span class="ant-form-text">元/小时</span>
      </a-form-model-item>
      <a-form-model-item ref="name" label="联系人" prop="name">
        <a-input v-model="form.name" placeholder="请输入联系人" />
      </a-form-model-item>
      <a-form-model-item ref="phone" label="联系电话" prop="phone">
        <a-input v-model="form.phone" placeholder="请输入联系电话" />
      </a-form-model-item>
      <a-form-model-item ref="address" label="施工地点" prop="address">
        <a-cascader v-model="form.address" :options="options" placeholder="请选择地址" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="danger" @click="onSubmit">提交信息</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import options from "utils/city.js";
import { Rental } from "network/accountManagement.js";

import {saveSeek} from "@/network/back/seek";

export default {
  name: "SeekRental",
  data() {
    return {
      options: options,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        title: "",
        type: undefined,
        carNum: "",
        expectedHour: "",
        price: "",
        name: "",
        phone: "",
        address: [],
      },
      rules: {
        title: [
          {
            required: true,
            message: "请输入求租标题",
            trigger: "change",
          },
        ],
        type: [
          {
            required: true,
            message: "请选择一种车辆类型",
            trigger: "change",
          },
        ],
        carNum: [
          {
            required: true,
            message: "请输入车辆功率",
            trigger: "change",
          },
        ],
        expectedHour: [
          {
            required: true,
            message: "请输入预计工时",
            trigger: "change",
          },
        ],
        price: [
          {
            required: true,
            message: "请输入单价",
            trigger: "change",
          },
        ],
        name: [
          {
            required: true,
            message: "请输入联系人",
            trigger: "change",
          },
        ],
        phone: [
          {
            required: true,
            message: "请输入联系电话",
            trigger: "change",
          },
        ],
        address: [
          {
            required: true,
            message: "请选择施工地点",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      let data = {
        area: this.form.address,
        linkman: this.form.name,
        linkphone: this.form.phone,
        mechanics: this.form.type,
        num: this.form.carNum,
        price: this.form.price,
        rlsid: this.$store.state.app.user.user_id,
        works: this.form.expectedHour,
      };

      this.saveSeekData(data);
      // this.$refs.ruleForm.validate((valid) => {
      //   if (valid) {
      //     Rental(data)
      //       .then((res) => {
      //         console.log(res);
      //       })
      //       .catch((err) => {
      //         console.log(err);
      //       });
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    },
    onChange(value) {
      console.log(value);
    },
    saveSeekData(data){
      saveSeek(data).then(res=>{
        console.log(res)
      })
    }
  },
  mounted() {
    console.log(this.$route.query.editData)
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
</style>
