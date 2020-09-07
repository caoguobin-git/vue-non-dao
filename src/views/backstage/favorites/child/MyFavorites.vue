<template>
  <div class="MyFavorites">
    <div class="cTable">
      <a-table :columns="columns" :data-source="data">
        <template slot="goods" slot-scope="text, record, index">
          <div class="goods">
            <img :src="record.goods.img" alt="">
            <div class="title">
              <h2 class="nowrap">{{record.goods.name}}</h2>
              <span>库存：{{record.goods.num}}辆</span>
              <p>￥{{record.goods.price}}</p>
            </div>
          </div>
        </template>
        <template slot="operation" slot-scope="text, record, index">
          <div class="editable-row-operations">
            <router-link to="">查看</router-link>
            <a-popconfirm v-if="data.length" title="确定删除?" @confirm="() => onDelete(record.key,record.id)">
              <a href="javascript:;">删除</a>
            </a-popconfirm>
          </div>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "商品",
    dataIndex: "goods",
    width: "40%",
    scopedSlots: { customRender: "goods" },
  },
  {
    title: "发布时间",
    dataIndex: "time",
    width: "20%",
    scopedSlots: { customRender: "time" },
  },
  {
    title: "联系方式",
    dataIndex: "phone",
    width: "20%",
    scopedSlots: { customRender: "phone" },
  },
  {
    title: "操作",
    dataIndex: "operation",
    width: "20%",
    scopedSlots: { customRender: "operation" },
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    goods: {
      img:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
      name: `卡特彼勒336D2卡特彼勒336D2 GC液压挖掘机${i}`,
      num: 8,
      price: 20000,
      url: "",
    },
    phone: 32,
    time: `2020-8-20 ${i}`,
  });
}
import { getFavorites, deleteFavorites } from "network/favorites.js";
export default {
  name: "MyFavorites",
  data() {
    this.cacheData = data.map((item) => ({ ...item }));
    return {
      data,
      columns,
      editingKey: "",
    };
  },
  created() {
    //获取我的收藏
    let mid = this.$store.state.app.user.user_id;
    getFavorites(mid)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
    onDelete(key, id) {
      const data = [...this.data];
      this.data = data.filter((item) => item.key !== key);
      getFavorites()
        .then((res) => {
          console.log(res);
          this.$message.error("删除成功");
        })
        .catch((err) => {
          console.log(err);
        });
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
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.editable-row-operations a {
  margin-right: 8px;
}
.goods {
  img {
    width: 135px;
    height: 80px;
    display: block;
    float: left;
  }
  .title {
    width: calc(100% - 145px);
    float: right;
    text-align: left;
    h2 {
      margin: 0;
      font-size: 14px;
      color: #333333;
      margin: 5px 0 8px 0;
    }
    span {
      display: block;
      font-size: 12px;
      color: #666666;
      margin-bottom: 4px;
    }
    p {
      margin: 0;
      font-size: 16px;
      color: #ff7a00;
    }
  }
}
</style>
