//router.js 引入路由
import Vue from 'vue'
import Router from 'vue-router'
import Test from "./components/test/Test.vue"   //测试
import children from "./components/test/children.vue"
import parsent from "./components/test/parsent.vue"
import Index from "./views/index/Index.vue"  //首页
import Details from "./views/details/Details.vue"  //详情

import Product from "./views/product/Product.vue"  //商品列表

import Personal from "./views/personal/Personal.vue"  //个人中心
import Login from "./views/personal/Login.vue"  //用户注册
import Denglu from "./views/personal/Denglu.vue"  //用户登录
Vue.use(Router)
//2.为Exam01.vue 配置路径

export default new Router({
  routes: [
    {path:'/test',component:Test}, //test测试 
    {path:'/parsent',component:parsent}, //test测试  父组件
     {path:'/children',component:children},  // test测试 子组件 

    {path:'/',redirect:'/Index'},   //首页
    {path:'/Index',component:Index},
    {path:'/details',component:Details},  //详情
    {path:'/personal',component:Personal},  //个人

    {path:'/list',component:Product,    //商品列表 
     children:[
       {path:'/basketball'},  //篮球

     ]
  },      
    {path:'/login',component:Login}, //个人注册
    {path:'/denglu',component:Denglu} //个人注册
  ]
})
