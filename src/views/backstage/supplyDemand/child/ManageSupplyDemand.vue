<template>
  <div
      class="ManageSupplyDemand">
    <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        class="cForm">
      <a-row
          :gutter="14">
        <a-col
            :span="5">
          <a-form-model-item
              prop="type">
            <a-select
                v-model="form.type"
                placeholder="信息类型">
              <a-select-option
                  value="1">
                1
              </a-select-option>
              <a-select-option
                  value="2">
                2
              </a-select-option>
            </a-select>
          </a-form-model-item>
        </a-col>
        <a-col
            :span="9">
          <a-form-model-item
              ref="title"
              prop="title">
            <a-input
                v-model="form.title" />
          </a-form-model-item>
        </a-col>
        <a-col
            :span="2">
          <a-form-model-item>
            <a-button
                class="nopadd orange"
                block
                type="primary"
                @click="onSubmit">
              搜索
            </a-button>
          </a-form-model-item>
        </a-col>
        <a-col
            :span="2">
          <a-form-model-item>
            <a-button
                class="nopadd default"
                block
                @click="resetForm">
              重置
            </a-button>
          </a-form-model-item>
        </a-col>
      </a-row>
    </a-form-model>

    <div
        class="cTable">
      <a-table
          :columns="columns"
          :data-source="displayManageList"
          :row-selection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange,
        }">
        <template
            v-for="col in ['type', 'main', 'time']"
            :slot="col"
            slot-scope="text, record, index">
          <div
              :key="col">
            <a-input
                v-if="record.editable"
                style="margin: -5px 0"
                :value="text"
                @change="(e) => handleChange(e.target.value, record.key, col)" />
            <template
                v-else>
              {{text
              }}
            </template>
          </div>
        </template>
        <template
            slot="operation"
            slot-scope="text, record, index">
          <div
              class="editable-row-operations">
            <span
                v-if="record.editable">
              <a @click="() => save(record.key)">保存</a>
              <a-popconfirm
                  title="确定取消?"
                  @confirm="() => cancel(record.key)">
                <a>取消</a>
              </a-popconfirm>
            </span>
            <span
                v-else>
              <a :disabled="editingKey !== ''"
                 @click="edit(record.key)">编辑</a>
            </span>
            <a-popconfirm
                v-if="data.length"
                title="确定删除?"
                @confirm="() => onDelete(record.key)">
              <a href="javascript:;">删除</a>
            </a-popconfirm>
          </div>
        </template>
      </a-table>
      <a-button
          class="AllDelete"
          type="primary"
          @click="AllDelete">
        全部删除
      </a-button>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "车辆类型",
    dataIndex: "type",
    width: "15%",
    scopedSlots: {customRender: "type"},
  },
  {
    title: "产品详情",
    dataIndex: "main",
    width: "40%",
    scopedSlots: {customRender: "main"},
  },
  {
    title: "发布时间",
    dataIndex: "time",
    width: "20%",
    scopedSlots: {customRender: "time"},
  },
  {
    title: "操作",
    dataIndex: "operation",
    width: "20%",
    scopedSlots: {customRender: "operation"},
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    type: `Edrward ${i}`,
    main: 32,
    time: `London Park no. ${i}`,
  });
}
import {sendDelete} from "network/accountManagement.js";

import {getManageList} from "@/network/back/manage";

export default {
  name: "ManageSupplyDemand",
  data() {
    this.cacheData = data.map((item) => ({...item}));
    return {
      data,
      deleteId: "1",
      columns,
      editingKey: "",
      selectedRowKeys: [],
      form: {
        type: undefined,
        title: "",
      },
      rules: {
        type: [
          {
            required: true,
            message: "请选择一种车辆类型",
            trigger: "change",
          },
        ],
        title: [
          {
            required: true,
            message: "请输入车辆功率",
            trigger: "change",
          },
        ],
      },
      manageList:[],
      manageTotal:0
    };
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },
    displayManageList(){

      let arr = [];
      for (let i = 0; i < this.manageList.length; i++) {
        arr.push({
          key:this.manageList[i].id,
          type:this.manageList[i].remark || 'null',
          main:this.manageList[i].title,
          time:this.manageList[i].createTime||'null'
        })
      }
      return arr;
    }
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
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    onCellChange(key, dataIndex, value) {
      const data = [...this.data];
      const target = data.find((item) => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.data = data;
      }
    },
    onDelete(key) {
      //const data = [...this.data];
      //this.data = data.filter((item) => item.key !== key);
      //console.log(key)
      let deleteKeys= []
      deleteKeys.push(key)
      this.send(deleteKeys);
      //this.$message.error("删除成功");
    },
    AllDelete() {
      const that = this;
      this.$confirm({
        title: "删除发布内容?",
        okText: "删除",
        okType: "danger",
        confirmLoading: true,
        onOk() {
          //that.selectedRowKeys.forEach((item) => {
          //  that.data = that.data.filter((item2) => item2.key !== item);
          //});
          //that.selectedRowKeys = [];
          //that.$options.methods.send();
          //that.$message.error("删除成功");
          that.send(that.selectedRowKeys)
        },
        onCancel() {
          //that.$message.error("删除失败");
        },
      });
    },
    send(ids) {
      //let data = [1, 2];
      sendDelete(ids)
          .then((res) => {
            this.$message.error("删除成功");
            this.getList();
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
    },
    onSelectChange(selectedRowKeys) {
      console.log(selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      console.log(key)
      let target ={}
      this.manageList.forEach(item=>{
        if (item.id===key){
          target=item;
        }
      })
      console.log(target)
      //根据类型判断跳转页面
        this.$router.push({
          path:target.type===2?'/seekRental':'releaseRental',
          query:{
            editData:target
          }
        })


      // const newData = [...this.data];
      // const target = newData.filter((item) => key === item.key)[0];
      // console.log(target)
      // return
      // this.editingKey = key;
      // if (target) {
      //   target.editable = true;
      //   this.data = newData;
      // }
    },
    save(key) {
      const newData = [...this.data];
      const newCacheData = [...this.cacheData];
      const target = newData.filter((item) => key === item.key)[0];
      const targetCache = newCacheData.filter((item) => key === item.key)[0];
      if (target && targetCache) {
        delete target.editable;
        this.data = newData;
        Object.assign(targetCache, target);
        this.cacheData = newCacheData;
      }
      this.editingKey = "";
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      this.editingKey = "";
      if (target) {
        Object.assign(
            target,
            this.cacheData.filter((item) => key === item.key)[0]
        );
        delete target.editable;
        this.data = newData;
      }
    },
    getList() {
      console.log("请求数据")
      let id = this.$store.state.app.user.user_id
      getManageList(id).then(res => {
        console.log(res)
        this.manageList.splice(0,100)
        this.manageList.push(...res.rows)
        this.manageTotal=res.total
      })
    }
  },
  activated() {
    this.getList()
  }
};
</script>
<style
    scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
