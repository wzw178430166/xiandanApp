//6.引入vuex  注册vuex组件  创建store   将store保存vue实例中
import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
//购物车的共享数据
var mystore = new Vuex.Store({
  state:{  //保存全局共享数据  
      cartCount:0
  },
  mutations:{ //修改全局共享数据函数
      //购物车数量加 1
      increment(state){
        state.cartCount++;
      },
      clear(state){
        state.cartCount=0;
      },
      updateCount(state,c){
        state.cartCount+=c;
      }
      //购物车数量增加指定值  5
  },
  getters:{  //获取全局共享的数据
      getCartCount:function(state){
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