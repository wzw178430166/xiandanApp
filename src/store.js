//6.引入vuex  注册vuex组件  创建store   将store保存vue实例中
import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
var mystore = new Vuex.Store({
  state:{  //保存全局共享数据       
     // 登录状态为没登录
  islogin: false,
  // 用户信息数据,目前只需要avatar和name,还是把username也加上吧
  LoginedUser: {
   phone: '',              //把仓库的用户状态：用户名，用户id，或者用户状态 返回。全局使用。
   code: '',
   id: ''
  },
    //购物车商品数量
    cartCount:0
    },
  mutations:{ //修改全局共享数据函数
    // 改变状态的方法也需要2个，一个是登录或注册了，一个是登出了
  // 这里不能写箭头函数???
  // 登录
  LOGIN (state) {
    // 先让登录状态变为登录了
    state.islogin = true
    // 然后去sessionStorage取用户数据
    let user = JSON.parse(sessionStorage.getItem('user'))
    // 再把用户数据发下去
    state.LoginedUser.phone = user.phone
    state.LoginedUser.code = user.code
    state.LoginedUser.id = user.id
   },
   // 登出
   LOGOUT (state) {            //注销就全部组件取消，把变量改为空
    // 这个同理
    state.islogin = false
    state.LoginedUser.phone = ''
    state.LoginedUser.code = ''
    state.LoginedUser.id = ''
   },
   //购物车数量加 1
   increment(state){
    state.cartCount++;
   },
   clear(state){
    state.cartCount--;
   },
  updateCount(state,c){
    let num =sessionStorage.getItem('counts')
    state.cartCount+=parseInt(num);
  }
  //购物车数量增加指定值  5

  },
  getters:{  //获取全局共享的数据             把仓库的用户状态：用户名，用户id，或者用户状态 返回。全局使用。
      logging:function(state){  //登录状态       //获取仓库的东西       
        return state.islogin;        
      },
      getphone:function(state){  //       //获取仓库的东西       
        return state.LoginedUser.phone;        
      }, 
      getuid:function(state){
        return state.LoginedUser.id;
      },
      getCartCount:function(state){        //获取购物车商品数量      
        return state.cartCount;        
      }
  },
  //以异步的方式操作数据
  actions:{  //发请求  //  还要靠mutations:{ //修改全局共享数据函数
     
  },
  modules:{  //子模块 例如用户用的，购物车用的
    
  }
})
export default (mystore)