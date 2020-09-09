<template>
  <div class="Login">
    <div class="w">
      <div class="login">
        <h2>会员登录</h2>
        <p class="title">一站式非道路移动机械服务平台</p>
        <a-form-model
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            v-bind="layout"
        >
          <a-form-model-item has-feedback prop="username">
            <a-input
                v-model="ruleForm.username"
                type="text"
                autocomplete="off"
                placeholder="请输入手机号或用户名"
            >
              <a-icon slot="prefix" type="user"/>
            </a-input>
          </a-form-model-item>
          <a-form-model-item has-feedback prop="password">
            <a-input-password
                v-model="ruleForm.password"
                type="password"
                autocomplete="off"
                placeholder="请输入密码"
            >
              <a-icon slot="prefix" type="lock"/>
            </a-input-password>
          </a-form-model-item>
          <a-row>
            <a-col :span="14">
              <a-form-model-item has-feedback prop="yanzm">
                <a-input
                    v-model="ruleForm.yanzm"
                    type="text"
                    autocomplete="off"
                    placeholder="请输入验证码"
                >
                  <a-icon slot="prefix" type="key"/>
                </a-input>
              </a-form-model-item>
            </a-col>
            <a-col :span="9" :offset="1">
              <img @click="getYzm" v-lazy="yanimg.img" src="" alt=""/>
            </a-col>
          </a-row>
          <a-button type="primary" @click="submitForm('ruleForm')" block
          >登录
          </a-button
          >
          <p class="registered">
            还没有账号？
            <router-link to="/registered">去注册>></router-link>
            <span class="line"></span>
          </p>
          <a-form-model-item class="bottom">
            <a-checkbox
                @change="rememberMe"
                :defaultChecked="automaticLogin"
                v-model="ruleForm.checked"
            >
              下次自动登录
            </a-checkbox>
            <router-link to="/findPassword">忘记密码?</router-link>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
  </div>
</template>

<script>
import {getyanzPicture, trueLogin, userLogin,checkToken} from "network/login.js";
import {setToKen, setUser,getUserInfo} from "utils/app.js";
import {
  //验证用户名的规则
  vUsername,
  //验证密码的规则
  vPassword,
  //验证手机号的规则
  vPhone,
} from "utils/validate.js";
import {refreshToken} from "@/network/login";

export default {
  name: "Login",
  data() {
    let validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入帐号"));
      } else {
        if (vUsername(value)) {
          callback();
        } else {
          callback(new Error("帐号格式不正确"));
        }
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (vPassword(value)) {
          callback();
        } else {
          callback(new Error("密码格式不正确"));
        }
        callback();
      }
    };
    let validateYan = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    return {
      yanimg: {
        img: "",
        uuid: "",
      },
      automaticLogin: true,
      ruleForm: {
        username: "",
        password: "",
        yanzm: "",
        checked: true,
      },
      rules: {
        username: [{validator: validateUser, trigger: "change"}],
        password: [{validator: validatePass, trigger: "change"}],
        yanzm: [{validator: validateYan, trigger: "change"}],
      },
      layout: {
        wrapperCol: {span: 24},
      },
    };
  },
  methods: {
    rememberMe(e){
      let val = e.target.checked;
      this.$store.commit('setRememberMe',val)
    },
    //单选框
    onChange(e) {
      this.automaticLogin = e.target.checked;
    },
    //提交
    submitForm(formName) {
      let that = this;
      let data = {
        username: this.ruleForm.username,
        password: this.ruleForm.password,
      };
      that.$refs[formName].validate((valid) => {
        if (valid) {
          //发送请求
          userLogin(data)
              .then((res) => {
                console.log(res)
                //成功设置数据
                if (typeof res.access_token != 'undefined') {
                  console.log(res)
                  setToKen(res.access_token);
                  setUser(res);
                  that.$store.dispatch("app/setToKenActions", res.access_token);
                  that.$store.dispatch("app/setUserActions", res);
                  that.$store.dispatch('setUserInfo', res)
                  //成功跳转
                  that.$router.push("/index");
                } else if (res.code === 500) {
                  this.$message.error("帐号或密码错误");
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
    //重新获取验证码
    getYzm() {
      getyanzPicture()
          .then((res) => {
            this.yanimg.img = "data:image/gif;base64," + res.img;
            this.yanimg.uuid = res.uuid;
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
  created() {
    // 获取验证码
    getyanzPicture()
        .then((res) => {
          this.yanimg.img = "data:image/gif;base64," + res.img;
          this.yanimg.uuid = res.uuid;
        })
        .catch((err) => {
          console.log(err);
        });
  },
  mounted() {
    let user = getUserInfo()
    if (typeof user!='undefined'){
      console.log(user)
      let userJson = JSON.parse(user)
      if (userJson.username!=''){
        //this.$router.push('/index')
        //检测token有效性
        console.log(userJson['access_token'])
        console.log(userJson['username'])
        checkToken(userJson['access_token'])
        .then(res=>{
          console.log(res)
          //根据res判断token有效性
          if (res.active){
            console.log('token有效')
            this.$store.dispatch("app/setToKenActions", userJson.access_token);
            this.$store.dispatch("app/setUserActions", userJson);
            this.$store.dispatch('setUserInfo', userJson)
          }
          if (res.code===500){
            let params = {
              client_id:'webapi',
              client_secret:'123456',
              refresh_token:userJson['refresh_token'],
              grant_type:'refresh_token',
              userType:'webapi',
            }
            refreshToken(params).then(res=>{
              setToKen(res.access_token);
              setUser(res);
              this.$store.dispatch("app/setToKenActions", res.access_token);
              this.$store.dispatch("app/setUserActions", res);
              this.$store.dispatch('setUserInfo', res)
              //成功跳转
              this.$router.push("/index");
            })
          }
        })
        //刷新token&设置信息
        this.$store.dispatch("app/setToKenActions", user.access_token);
        this.$store.dispatch("app/setUserActions", user);
        this.$store.dispatch('setUserInfo', user)
      }
    }else {
      console.log(user)
    }
  }
};
</script>

<style lang="scss" scoped>
.Login {
  height: 600px;
  background: url(~assets/img/bg.jpg) center top;
}

.login {
  background: #fff;
  float: right;
  padding: 0 65px;
  margin-top: 60px;
  border-radius: 10px;
  width: 455px;
  
  h2 {
    color: #101936;
    margin-top: 26px;
    font-size: 26px;
    margin-bottom: 10px;
  }
  
  .title {
    color: #7f7f7f;
    margin-bottom: 20px;
  }
  
  img {
    width: 100%;
    height: 32px;
  }
  
  .registered {
    position: relative;
    text-align: center;
    line-height: 60px;
    margin: 0;
    color: #7f7f7f;
    
    a {
      color: #f97b03;
    }
    
    .line {
      position: absolute;
      display: block;
      width: 455px;
      height: 1px;
      background: #e9e9e9;
      left: -65px;
      bottom: 0;
    }
  }
  
  .bottom {
    margin: 0;
    padding: 15px 0;
    
    a {
      float: right;
      color: #333333;
      text-decoration: underline;
    }
  }
}
</style>
