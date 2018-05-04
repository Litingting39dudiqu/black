<template>
  <div class="news">
    <h4>{{newsDetail.title}}</h4>
    <p>
      <span>发表时间: {{newsDetail.add_time | dateformate('YYYY年MM月DD日 HH:mm:ss')}}</span>
      <span>点击：{{newsDetail.click}}次</span>
    </p>
    <hr>
    <p v-html="newsDetail.content"></p>
    <common :id="this.$route.params.id"></common>    
  </div>
  
</template>
<script>
import axios from "axios"
import dateformate from "../../filter/dateformate";
import common from "../common/common.vue"
export default {
  data(){
    return{
      newsDetail:{}
    }
  },
  created(){
    axios({
      url:'http://www.escook.cn:3000/api/getnew/' + this.$route.params.id
    }).then(res=>{
      if(res.data.status ==0 ){
        this.newsDetail= res.data.message[0]
      }
    })
  },
  filters:{
    dateformate
  },
  components:{
    common
  }

}
</script>
<style>
.news{
  padding: 0 5px 100px 5px;
}
p img{
  width:100%;
}
</style>