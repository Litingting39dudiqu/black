import Vue from 'vue'
import Router from 'vue-router'
//商品
import GoodsList from "../components/goods/list.vue"
import GoodsDetail from "../components/goods/detail.vue"

//新闻
import NewsList from "../components/news/list.vue"
import NewsDetail from "../components/news/detail.vue"

//图片
import PicList from "../components/pics/list.vue"
import PicDetail from "../components/pics/detail.vue"

//tabbar
import Home from '../components/tabbar/home.vue'
import Cart from '../components/tabbar/cart.vue'
import Member from '../components/tabbar/member.vue'
import Search from '../components/tabbar/search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/goods/list',
      component:GoodsList
    },
    {
      path:'/goods/detail',
      component:GoodsDetail 
    },
    {
      path:'/news/list',
      component:NewsList
    },
    {
      path:'/news/detail',
      component:NewsDetail 
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home 
    },
    {
      path:'/cart',
      component:Cart 
    },
    {
      path:'/search',
      component:Search 
    },
    {
      path:'/member',
      component:Member 
    },
    {
      path:'/pics/list',
      component:PicList 
    },
    {
      path:'/pics/detail',
      component:PicDetail
    },
  ]
})
