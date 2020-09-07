<template>
  <div class="ChangePassword">
    <a-form-model ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol" class="cForm">
      <a-form-model-item ref="newPass" label="新密码" prop="newPass">
        <a-input-password v-model="form.newPass" placeholder="请输入新密码" />
        <p slot="extra">密码由6-16位数字、字母、下划线组成</p>
      </a-form-model-item>

      <a-form-model-item ref="repeat" label="重复密码" prop="repeat">
        <a-input-password v-model="form.repeat" placeholder="请重复输入新密码" />
        <p slot="extra">密码由6-16位数字、字母、下划线组成</p>
      </a-form-model-item>

      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button class="orange" type="danger" @click="onSubmit">提交信息</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import options from "utils/city.js";
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  name: "ChangePassword",
  data() {
    return {
      loading: false,
      imageUrl: "",
      options: options,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        newPass: "",
        repeat: "",
      },
      rules: {
        newPass: [
          {
            required: true,
            message: "请输入新密码",
            trigger: "change",
          },
        ],
        repeat: [
          {
            required: true,
            message: "请重复输入新密码",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.$message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJpgOrPng && isLt2M;
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
</style>