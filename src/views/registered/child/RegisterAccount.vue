<template>
  <div class="VerifyPhone">
    <a-form-model
      class="cForm"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      v-bind="layout"
    >
      <a-form-model-item has-feedback prop="username">
        <a-input
          size="large"
          v-model="ruleForm.username"
          type="text"
          autocomplete="off"
          placeholder="请输入用户名"
        >
          <a-icon slot="prefix" type="user" />
        </a-input>
        <p slot="extra">支持中文、字母、数字、“-”“_”的组合，4-20个字符</p>
      </a-form-model-item>
      <a-form-model-item has-feedback prop="password">
        <a-input-password
          size="large"
          v-model="ruleForm.password"
          type="text"
          autocomplete="off"
          placeholder="请输入密码"
        >
          <a-icon slot="prefix" type="lock" />
        </a-input-password>
      </a-form-model-item>
      <a-form-model-item has-feedback prop="repeat">
        <a-input-password
          size="large"
          v-model="ruleForm.repeat"
          type="text"
          autocomplete="off"
          placeholder="确认密码"
        >
          <a-icon slot="prefix" type="lock" />
        </a-input-password>
      </a-form-model-item>
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
        <p slot="extra">手机号码将用于接收验证码、找回密码</p>
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
import {
  RegisteredPhoneCode,
  Registered,
  RegisteredUserName,
  RegisteredPhoneNum,
} from "network/app.js";
import { setPhoneCodeId, getPhoneCodeId } from "utils/app.js";
import {
  //验证用户名的规则
  vUsername,
  //验证密码的规则
  vPassword,
  //验证手机号的规则
  vPhone,
} from "utils/validate.js";
export default {
  name: "VerifyPhone",
  data() {
    //用户名的验证规则
    let validateUser = (rule, value, callback) => {
      //是否为空
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        //是否通过用户名规则
        if (vUsername(value)) {
          this.$refs.ruleForm.validateField("checkPass");
        } else {
          callback(new Error("帐号格式不正确"));
        }
        callback();
      }
    };
    //密码的验证规则
    let validatePass = (rule, value, callback) => {
      //是否为空
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (vPassword(value)) {
          //是否通过密码规则
          this.$refs.ruleForm.validateField("checkPass");
        } else {
          callback(new Error("密码格式不正确"));
        }
        callback();
      }
    };
    //确认密码的验证规则
    let validateRepeat = (rule, value, callback) => {
      //是否为空
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (vPassword(value) && this.ruleForm.password == value) {
          //是否通过密码规则且与密码相同
          this.$refs.ruleForm.validateField("checkPass");
        } else {
          callback(new Error("两次密码不相同"));
        }
        callback();
      }
    };
    //手机的验证规则
    let validatePhone = (rule, value, callback) => {
      //是否为空
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        //是否通过手机号规则
        if (vPhone(value)) {
          this.$refs.ruleForm.validateField("checkPass");
        } else {
          callback(new Error("手机号不合法"));
        }
        callback();
      }
    };
    //验证码的验证规则
    let validateYan = (rule, value, callback) => {
      //是否为空
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        //验证码的验证规则
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      registeredUserName: false,
      registeredPhoneNum: false,
      ruleForm: {
        phone: "",
        password: "",
        repeat: "",
        username: "",
        yanzm: "",
      },
      rules: {
        phone: [{ validator: validatePhone, trigger: "change" }],
        password: [{ validator: validatePass, trigger: "change" }],
        repeat: [{ validator: validateRepeat, trigger: "change" }],
        username: [{ validator: validateUser, trigger: "change" }],
        yanzm: [{ validator: validateYan, trigger: "change" }],
      },
      layout: {
        wrapperCol: { span: 24 },
      },
    };
  },
  methods: {
    //获取短信验证码
    phoneCode() {
      let phoneNum = this.ruleForm.phone;
      //发送请求
      RegisteredPhoneCode(phoneNum)
        .then((res) => {
          //设置验证码id
          setPhoneCodeId(res.uuid);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //提交表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return false;
        }
        let phone = this.ruleForm.phone;
        let username = this.ruleForm.username;
        let that = this;
        let data = {
          key: getPhoneCodeId(),
          mname: username,
          mpassword: this.ruleForm.repeat,
          mphone: phone,
          value: this.ruleForm.yanzm,
        };
        //验证用户名是否重复
        RegisteredUserName(username)
          .then((res) => {
            that.registeredUserName = false;
            if (res.code == 200) {
              that.registeredUserName = true;
            } else {
              console.log(res);
              this.$message.error("帐号已被注册");
              this.$refs.ruleForm.resetFields();
              return false;
            }
            //验证手机号是否重复
            RegisteredPhoneNum(phone)
              .then((res) => {
                that.registeredPhoneNum = false;
                if (res.code == 200) {
                  that.registeredPhoneNum = true;
                } else {
                  this.$message.error("手机号已被注册");
                  this.$refs.ruleForm.resetFields();
                  return false;
                }
                if (
                  valid &&
                  that.registeredUserName &&
                  that.registeredPhoneNum
                ) {
                  //发送请求
                  Registered(data)
                    .then((res) => {
                      //成功跳转
                      if (res.code == 200) {
                        that.$emit("setSuccessState", 1);
                        that.$router.push("/registerSuccess");
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                } else {
                  return false;
                }
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });

        //通过验证
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
p {
  margin: 0;
  line-height: 20px;
}
</style>
