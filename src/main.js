import Vue from 'vue'
import App from './App.vue'
import router from './router'
//以上三行不要动原来位置，原因：引入要按顺序
import axios from "./axios"
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
Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded

Vue.prototype.host="http://127.0.0.1:5050/"  //域名
//import Myfooter from './components/footer/Footert'
//Vue.component("my-footer",Myfooter); //放在App.vue容器里，引用对象，加上标签名

new Vue({
  router,
  store:mystore, 
  render: h => h(App)
}).$mount('#app')
