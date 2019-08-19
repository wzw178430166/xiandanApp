import Vue from 'vue'
import App from './App.vue'
import router from './router'
//以上三行不要动原来位置，原因：引入要按顺序
import axios from "./axios"
import qs from "qs"     //引入qs
Vue.prototype.qs=qs
import mystore from "./store"  //引入共享数据仓库
//第三方组件库在下面引入
//1.完整引入mint-ui             //按需引入  import{}
import MintUI from 'mint-ui'
//2.单引引入mint-ui样式
import'mint-ui/lib/style.css'  //mint-ui样式库
//3.将mint-ui注册vue
Vue.use(MintUI);
//4.引入图片字体样式文件（第三方阿里巴巴图库下载）
import'./font/iconfont.css';
import'./assets/n.css';
//import'./assets/commst.scss'; //全局引入mint-ui默认scss
Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1:5050/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
Vue.prototype.host="/"  //域名   http://127.0.0.1:5050/
   // 定义全局过滤器（任意组件都可以使用）
Vue.filter('sexFilter', function (oldVal, formatStr) {  //通过后台传回来的值可以一层一层过滤
     if(oldVal==1){
      return oldVal="男";
     }else if(oldVal==0){
      return oldVal="女";
     }else{
      return oldVal="男女通用";
     }   
});
//import Myfooter from './components/footer/Footert'
//Vue.component("my-footer",Myfooter); //放在App.vue容器里，引用对象，加上标签名
// 这个官方名字叫导航守卫，挺形象的
router.beforeEach((to, from, next) => {
  // 如果是去登录或注册，那就先把user移除
  if (to.path === '/login' || to.path === '/denglu') {
   sessionStorage.removeItem('user')
  }
  if (to.path === '/details') {
    sessionStorage.removeItem('model')
    sessionStorage.removeItem('model2')
   }
  let user = JSON.parse(sessionStorage.getItem('user'))
  if (!user && (to.path === '/manger/my' || to.path === '/manger/send' || to.path === '/manger/history')) {
   next({ path: '/login' })
  } else {
   next()
  }
 })
 
new Vue({
  router,
  store:mystore, 

  render: h => h(App)
}).$mount('#app')
