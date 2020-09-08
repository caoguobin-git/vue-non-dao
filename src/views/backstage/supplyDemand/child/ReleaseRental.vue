<template>
  <div class="ReleaseRental">
    <a-form-model ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol" class="cForm">
      <a-form-model-item ref="title" label="出租标题" prop="title">
        <a-input v-model="form.title" placeholder="请输入出租标题" />
      </a-form-model-item>
      <a-form-model-item label="车辆类型" prop="type">
        <a-select v-model="form.type" placeholder="请选择车辆类型">
          <a-select-option value="1">1</a-select-option>
          <a-select-option value="2">2</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="车辆品牌" prop="brand">
        <a-select v-model="form.brand" placeholder="请选择车辆品牌">
          <a-select-option value="1">1</a-select-option>
          <a-select-option value="2">2</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="出厂时间" required prop="date">
        <a-date-picker format="YYYY-MM-DD" @change="hello" v-model="form.date" placeholder="请选择出场时间" style="width: 100%;" />
      </a-form-model-item>
      <a-form-model-item ref="power" label="车辆功率" prop="power">
        <a-input-number :min="1" v-model="form.power" placeholder="请输入车辆功率" />
        <span class="ant-form-text">KW</span>
      </a-form-model-item>
      <a-form-model-item ref="size" label="车辆尺寸" prop="size">
        <a-input-number :min="1" v-model="form.size[0]" placeholder="请输入车辆尺寸" />
        <span class="ant-form-text">长(m)</span>
        <a-input-number :min="1" v-model="form.size[1]" placeholder="请输入车辆尺寸" />
        <span class="ant-form-text">宽(m)</span>
        <a-input-number :min="1" v-model="form.size[2]" placeholder="请输入车辆尺寸" />
        <span class="ant-form-text">高(m)</span>
      </a-form-model-item>
      <a-form-model-item label="环保等级" prop="level">
        <a-radio-group v-model="form.level">
          <a-radio value="1">国Ⅰ</a-radio>
          <a-radio value="2">国Ⅱ</a-radio>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item label="燃料类型" prop="fuel">
        <a-radio-group v-model="form.fuel">
          <a-radio value="1">汽油</a-radio>
          <a-radio value="2">柴油</a-radio>
          <a-radio value="3">液化石油气</a-radio>
          <a-radio value="4">乙醇</a-radio>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item label="车辆简介" prop="desc">
        <a-input v-model="form.desc" type="textarea" :rows="6" />
      </a-form-model-item>
      <a-form-model-item label="车辆图片" prop="picture">
<!--        <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" list-type="picture-card" :file-list="fileList" @preview="handlePreview" @change="handleChange">-->
        <a-upload action="/system/webapi/mechanicl/upload" name="file" :headers="{'Authorization':'Bearer '+$store.state.userInfo.access_token}" list-type="picture-card" :file-list="fileList" @preview="handlePreview" @change="handleChange">
<!--        <a-upload :customRequest="fileUpload" list-type="picture-card" :file-list="fileList" @preview="handlePreview" @change="handleChange">-->
          <div v-if="fileList.length < 8">
            <a-icon type="plus" />
            <div class="ant-upload-text">
              Upload
            </div>
          </div>
        </a-upload>
        <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
          <img alt="example" style="width: 100%" :src="previewImage" />
        </a-modal>
        <p slot="extra">1.图片最大10M</p>
        <p slot="extra">2.图片保持清爽整洁，不要添加 文字、电话号码、水印等.</p>
        <p slot="extra">3.为避免不必要的纠纷，请使用本企业图片；</p>
      </a-form-model-item>
      <a-form-model-item ref="name" label="联系人" prop="name">
        <a-input v-model="form.name" placeholder="请输入联系人" />
      </a-form-model-item>
      <a-form-model-item ref="phone" label="联系电话" prop="phone">
        <a-input v-model="form.phone" placeholder="请输入联系电话" />
      </a-form-model-item>
      <a-form-model-item ref="area" label="具体地址" prop="area">
        <a-cascader v-model="form.area" :fieldNames="{label:'label',value:'code',code:'code',children:'children'}" :options="options" placeholder="请选择地址" @change="onChange" />
      </a-form-model-item>
      <a-form-model-item class="none" ref="address" label="具体地址" prop="address">
        <a-input v-model="form.address" type="textarea" :rows="6" />
        <p slot="extra">请输入具体的街道名称等</p>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="danger" @click="onSubmit">提交信息</a-button>
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
import { releaseRental } from "network/accountManagement.js";
export default {
  name: "ReleaseRental",
  data() {
    return {
      pics:{},
      previewVisible: false,
      previewImage: "",
      fileList: [],
      options: options,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: "",
      form: {
        title: "",
        type: undefined,
        brand: undefined,
        date: undefined,
        power: "",
        size: [],
        picture: [],
        level: "1",
        fuel: "1",
        desc: "",
        name: "",
        phone: "",
        area: "" || [],
        address: "",
      },
      rules: {
        title: [
          {
            required: true,
            message: "请输入出租标题",
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
        brand: [
          {
            required: true,
            message: "请选择一种车辆品牌",
            trigger: "change",
          },
        ],
        date: [
          { required: true, message: "请选择出厂时间", trigger: "change" },
        ],
        power: [
          {
            required: true,
            message: "请输入车辆功率",
            trigger: "change",
          },
        ],
        size: [
          {
            required: true,
            message: "请输入车辆尺寸",
            trigger: "change",
          },
        ],
        level: [
          {
            required: true,
            trigger: "change",
          },
        ],
        fuel: [
          {
            required: true,
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "请输入车辆简介",
            trigger: "blur",
          },
        ],
        pic: [
          {
            required: true,
            message: "请上传至少一张图片",
            trigger: "blur",
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
        area: [
          {
            required: true,
            message: "请选择地址",
            trigger: "change",
          },
        ],
        address: [
          {
            required: true,
            message: "请输入详细地址",
            trigger: "change",
          },
        ],
      },
    }
  },
  methods: {
    hello(){
      console.log(this.form.date.format('YYYY-MM-DD hh:mm:ss'))
    },
    onSubmit() {
      let data = {
        title:this.form.title,
        type:this.form.type,
        addr: this.form.address,
        area: this.form.area[this.form.area.length-1],
        brand: this.form.brand,
        fuel: this.form.fuel,
        mdate: this.form.date.format('YYYY-MM-DD hh:mm:ss'),
        linkman: this.form.name,
        linkphone: this.form.phone,
        mechanics: this.form.type,
        power: this.form.power,
        pic: this.getPics,
        detail: this.form.desc,
        rlsid: this.$store.state.userInfo.user_id,
        sizel: this.form.size[0],
      };
      console.log(data)
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          releaseRental(data)
            .then((res) => {
              console.log(res);
              //清空并跳转
             this.$set(this,'form', {
                title: "",
                    type: undefined,
                    brand: undefined,
                    date: undefined,
                    power: "",
                    size: [],
                    picture: [],
                    level: "1",
                    fuel: "1",
                    desc: "",
                    name: "",
                    phone: "",
                    area: "" || [],
                    address: "",
              },)
              this.$router.push('/manageSupplyDemand')
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
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ file,fileList,event }) {
      console.log('file')
      if (typeof file.response != 'undefined'){
        let res = file.response
        //console.log(res)
        
        this.$set(this.pics,res.fileName,res)
        console.log(this.pics)
      }
      console.log('fileend')
      this.fileList = fileList;
    },
    onChange(value, selectedOptions) {
      this.area = selectedOptions.pop().code;
    },
    fileUpload(file){
      console.log(file)
    }
  },
  computed:{
    getPics(){
      //遍历生成图片地址
      let picUrls = []
      for (let picsKey in this.pics) {
        if (this.pics[picsKey]!=''){
          picUrls.push(this.pics[picsKey].fileName)
        }
      }
      return picUrls.join(',')
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
