<template>
  <div class="VerifyPhone">
    <a-form-model
      class="cForm"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      v-bind="layout"
    >
      <a-form-model-item has-feedback prop="newPassword">
        <a-input-password
          size="large"
          v-model="ruleForm.newPassword"
          type="text"
          autocomplete="off"
          placeholder="请输入新密码"
        >
          <a-icon slot="prefix" type="lock" />
        </a-input-password>
      </a-form-model-item>
      <a-form-model-item has-feedback prop="password">
        <a-input-password
          size="large"
          v-model="ruleForm.password"
          type="text"
          autocomplete="off"
          placeholder="确认密码"
        >
          <a-icon slot="prefix" type="lock" />
        </a-input-password>
      </a-form-model-item>
      <a-button
        class="orange"
        size="large"
        type="primary"
        @click="submitForm('ruleForm')"
        >下一步</a-button
      >
      <p class="login">
        已有账号？<router-link to="/login">去登录>></router-link>
        <span class="line"></span>
      </p>
    </a-form-model>
  </div>
</template>

<script>
import { updatePass } from "network/findPassword.js";
export default {
  name: "VerifyPhone",
  props: {
    phone: String,
  },
  data() {
    let validateNewPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        if (this.ruleForm.newPassword !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入确认密码"));
      } else {
        if (this.ruleForm.password !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        newPassword: "",
        password: "",
      },
      rules: {
        newPassword: [{ validator: validateNewPassword, trigger: "change" }],
        password: [{ validator: validatePass, trigger: "change" }],
      },
      layout: {
        wrapperCol: { span: 24 },
      },
    };
  },
  methods: {
    //单选框
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    //提交
    submitForm(formName) {
      console.log(1);
      let phone = this.phone;
      let password = this.ruleForm.password;
      let that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          updatePass(password, phone)
            .then((res) => {
              //成功跳转
              if (res.code == 500) {
                that.$emit("setSuccessState", 2);
                that.$router.push("/findPasswordSuccess");
              }
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
.VerifyPhone {
  width: 460px;
  margin: 0 auto;
  .orange {
    display: block;
    width: 330px;
    margin: 30px auto 0 auto;
  }
  .login {
    text-align: center;
    padding: 20px 0;
  }
}
</style>
