<template>
  <div class="EditInfo">
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      class="cForm"
    >
      <a-form-model-item ref="name" label="用户名" prop="name">
        <a-input v-model="form.name" placeholder="请输入用户名" />
      </a-form-model-item>
      <a-form-model-item label="头像" prop="picture">
        <a-upload
          name="avatar"
          list-type="picture-card"
          class="avatar-uploader"
          :show-upload-list="false"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :before-upload="beforeUpload"
          @change="handleChange"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <a-icon :type="loading ? 'loading' : 'plus'" />
            <div class="ant-upload-text">
              Upload
            </div>
          </div>
        </a-upload>
      </a-form-model-item>
      <a-form-model-item ref="phone" label="手机号码" prop="phone">
        <a-input v-model="form.phone" placeholder="请输入手机号码" />
      </a-form-model-item>
      <a-form-model-item ref="email" label="邮箱" prop="email">
        <a-input v-model="form.email" placeholder="请输入邮箱" />
      </a-form-model-item>
      <a-form-model-item ref="address" label="详细地址" prop="address">
        <a-cascader
          v-model="form.address[0]"
          :options="options"
          placeholder="请选择地址"
          @change="onChange"
        />
        <a-input v-model="form.address[1]" type="textarea" :rows="6" />
        <p slot="extra">请输入具体的街道名称等</p>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button class="orange" type="danger" @click="onSubmit"
          >提交信息</a-button
        >
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
  name: "EditInfo",
  data() {
    return {
      loading: false,
      imageUrl: "",
      options: options,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: "",
        phone: "",
        email: "",
        address: [[], ""],
      },
      rules: {
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
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "change",
          },
        ],
        address: [
          {
            required: true,
            message: "请输入地址",
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
    onChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
</style>
