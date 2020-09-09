<template>
  <div>
    <div class="mc rent">
      <ul>
<!--        <li v-for="(item,index) in rentData" :key="index">-->
<!--          <rentItem :rentData="item"></rentItem>-->
<!--        </li>-->
        <li v-for="(item,index) in rentList" :key="index">
          <rentItem :rentData="item"></rentItem>
        </li>
      </ul>
    </div>
    <div class="mb">
      <a-pagination :default-current="1" :total="total" @change="changePage" :default-page-size="rentRequestParams.pageSize" :item-render="itemRender" />
    </div>
  </div>
</template>

<script>
import rentItem from "./RentItem";
import {getRentList} from "@/network/rent";

export default {
  name: "component_name",
  data() {
    return {
      rentData: [
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597608185889&di=640e1a4f43bd8f783bbf30066604c976&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
          num: "22000",
          continued: "月",
          address: "南京",
          time: "07-20",
          name: "毕节挖机出租",
          company: "昊远工程机械租赁",
          href: "/rentDetails",
        },
      ],
      //获取出租信息的参数列表
      rentRequestParams:{
        page:1,
        pageSize:2,
        type:1
      },
      rentList:[],
      total:0
    };
  },

  components: {
    rentItem,
  },
  methods: {
    //分页器文字改变
    itemRender(current, type, originalElement) {
      if (type === "prev") {
        return <a class="ant-pagination-item-link page">上一页</a>;
      } else if (type === "next") {
        return <a class="ant-pagination-item-link page">下一页</a>;
      }
      return originalElement;
    },

    getRentList(){
      //设置请求参数
      let params = {}
      params.page=this.rentRequestParams.page;
      params.pageSize=this.rentRequestParams.pageSize;
      params.type=this.rentRequestParams.type;
      for (let rentKey in this.$store.state.rentRequestParams) {
        if ('api_belong_type'===rentKey){
          params.owner=this.$store.state.rentRequestParams[rentKey]
        }else         if ('api_fuel_type'===rentKey){
          params.fuel=this.$store.state.rentRequestParams[rentKey]
        }else         if ('api_level_type'===rentKey){
          params.level=this.$store.state.rentRequestParams[rentKey]
        }else         if ('api_mechanics_type'===rentKey){
          params.mechanics=this.$store.state.rentRequestParams[rentKey]
        }else         if ('api_out_pice'===rentKey){
          params.priceRange=this.$store.state.rentRequestParams[rentKey]
        }else         if ('api_uptime_type'===rentKey){
          params.timeRange=this.$store.state.rentRequestParams[rentKey]
        }else {
          params[rentKey]=this.$store.state.rentRequestParams[rentKey]
        }
      }
      getRentList(params)
      .then(res=>{
        console.log(res)
        //清空数据
        this.rentList.splice(0,1000)
        for (let i = 0;i<res.list.length;i++){
          this.rentList.push(res.list[i])
        }
      console.log(this.rentList)
        //for (let listElement of res.list) {
        //  this.rentList.push(listElement)
        //}
        //this.rentList.push(...)
        this.total=res.rows
      })
    },
    changePage(val){
      console.log('hello get rent')
      this.$set(this.rentRequestParams,'page',val)
      this.getRentList();
    },
    resetParams(){
      this.$set(this.rentRequestParams,'page',1)
      this.$set(this.rentRequestParams,'pageSize',2)
  
    }
  },
  mounted() {
    this.getRentList()
  },
  computed:{
  },
  watch:{
    '$store.state.rentRequestParams':{
      handler(newVal){
        console.log(newVal)
        this.resetParams()
        this.getRentList()
      },
      deep:true
    }
  }
};
</script>

<style lang="scss" scoped>
.mc {
  width: 850px;
  overflow: hidden;
  margin-top: 42px;
  ul {
    margin: 0;
    padding: 0;
    width: 885px;
    overflow: hidden;
    li {
      width: 260px;
      float: left;
      margin-right: 35px;
    }
  }
}
.mb {
  text-align: center;
  .page {
    padding: 0 10px;
  }
}
</style>