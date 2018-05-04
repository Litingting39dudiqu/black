<template>
  <div class="com">
      <h4>发表评论</h4>
       <hr>
      <textarea name="" id="" cols="30" rows="3" v-model="content"></textarea>
     
    <mt-button type="primary" size="large"  @click="postcommon">发表评论</mt-button>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="(v,i) in commonList" :key="i">
            <a href="#">
                <p class="comment-tilte">
                    <span>第{{i+1}}楼</span>
                    <span>发表时间：{{v.add_time | dateformate('YYYY-MM-DD hh:mm:ss')}}</span>
                    <span class="mui-pull-right">{{v.user_name}}</span>
                </p>
                <img src="../../assets/images/menu1.png" alt="" class="mui-pull-right">
                <p class="mui-media-body mui-ellipsis">
                   {{v.content}}
                </p>
            </a>
        </li>
    </ul>
    <mt-button type="danger" class="mint-button" size="large" plain @click="more" v-if="showBtn">加载更多</mt-button>
  </div>
</template>
<script>
import axios from "axios";
import dateformate from "../../filter/dateformate"
import { Toast } from 'mint-ui';
export default {
  data(){
      return{
          commonList:[],        
          currentPage:1,
          showBtn:true,
          content:''
      }     
  },
    props:['id'],
  created(){
    this.getDate()
  },
  filters:{
      dateformate
  },
  methods:{
      getDate(){
        axios({
            url:'http://www.escook.cn:3000/api/getcomments/'
            + this.id + '?pageindex='+ this.currentPage
            }).then(res=>{
                if(res.data.status ==0 ){
                    this.commonList.push(...res.data.message)
                    if(res.data.message.length == 0){
                        Toast("没有更多信息了")
                        this.showBtn=false;
                    }
                }
            })
      },
      more(){
          this.currentPage++;
          this.getDate()
      },
      postcommon(){
         if(this.content.trim()){
              axios({
              url:'http://www.escook.cn:3000/api/postcomment/'+this.id,
              method:'post',
              data:'content='+this.content
          }).then(res=>{
              if(res.data.status==0){
                 this.commonList.unshift({
                     add_time:new Date(),
                     user_name:'匿名用户',
                     content:this.content
                 })
                 this.content=''
              }
          })
         }
      }
  }
}
</script>

<style>
textarea{
    margin-top: 10px;
}
.mui-table-view{
    margin-top: 10px;
}
.mui-media img{
    width:15%;
}
</style>

