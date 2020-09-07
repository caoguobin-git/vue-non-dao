<template>
  <div class="VerifyPhone">
    <a-form-model
      class="cForm"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      v-bind="layout"
    >
      <a-form-model-item has-feedback prop="phone">
        <a-input
          size="large"
          v-model="ruleForm.phone"
          type="text"
          autocomplete="off"
          placeholder="请输入手机号码"
        >
          <a-icon slot="prefix" type="mobile" />
        </a-input>
      </a-form-model-item>
      <a-row :gutter="8">
        <a-col :span="14">
          <a-form-model-item has-feedback prop="yanzm">
            <a-input
              size="large"
              v-model="ruleForm.yanzm"
              type="text"
              autocomplete="off"
              placeholder="请输入验证码"
            >
              <a-icon slot="prefix" type="safety" />
            </a-input>
          </a-form-model-item>
        </a-col>
        <a-col :span="10">
          <a-form-model-item>
            <a-button size="large" type="primary" @click="phoneCode" block
              >获取短信验证码</a-button
            >
          </a-form-model-item>
        </a-col>
      </a-row>
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
import { RegisteredPhoneCode } from "network/app.js";
import { sendCheckPhone } from "network/findPassword.js";
import { setPhoneCodeId, getPhoneCodeId } from "utils/app.js";
export default {
  name: "VerifyPhone",
  data() {
    let validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入帐号"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validateYan = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        phone: "",
        password: "",
        yanzm: "527541",
        checked: true,
      },
      rules: {
        phone: [{ validator: validateUser, trigger: "change" }],
        password: [{ validator: validatePass, trigger: "change" }],
        yanzm: [{ validator: validateYan, trigger: "change" }],
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
    //获取短信验证码
    phoneCode() {
      let phoneNum = this.ruleForm.phone;
      //发送请求
      RegisteredPhoneCode(phoneNum)
        .then((res) => {
          //设置验证码id
          setPhoneCodeId("444714d7c5fe4e50aa8aa7259c1e3dcc");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //提交
    submitForm(formName) {
      let phone = this.ruleForm.phone;
      let key = getPhoneCodeId();
      let value = "527541";
      let that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //发送请求
          sendCheckPhone(key, phone, value)
            .then((res) => {
              //成功跳转
              if (res.code == 500) {
                that.$emit("setSuccessState", 1);
                that.$emit("setPhone", that.ruleForm.phone);
                that.$router.push("/newPassword");
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
