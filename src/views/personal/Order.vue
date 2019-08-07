<template>
    <div>
        <headstd msg="订单列表"></headstd>
        <p class="henxina"></p>
        <div class="title_order">
            <span>欢迎您：{{$store.getters.getphone}}</span>
             <span @click="loginout">退出</span>
        </div>
        <div class="order_code">
        <!-- 第一件商品  -->
        <div class="alert fade"> 
              <div class="code">
              <p>订单编号：{{codenum}}</p>
              <span>待支付</span>
          </div>
            <!-- 请求回来的商品 遍历 长度给cartlength-->
	       <div class="cart_detaio">
               <div></div>
               <div></div>
               <div></div>
           </div>       
	</div>
           <!-- 第一件商品结束  -->

          <div class="alert fade"> 
              <div class="code">
              <p>订单编号：{{codenum}}</p>
              <span>待支付</span>
          </div>
            <!-- 请求回来的商品 遍历 长度给cartlength-->
	       <div class="cart_detaio">
               <div></div>
               <div></div>
               <div></div>
           </div>       
	</div>

           <div class="alert fade"> 
              <div class="code">
              <p>订单编号：{{codenum}}</p>
              <span>待支付</span>
          </div>
            <!-- 请求回来的商品 遍历 长度给cartlength-->
	       <div class="cart_detaio">
               <div></div>
               <div></div>
               <div></div>
           </div>       
	</div>
    </div>
     <div class="shangpin">
       <p class="shangmsg">
           <span>共3件商品 合计：</span>
           <span>￥387.00</span>
           <span>(含运费:￥0.00)</span>
       </p>
       <div class="btnshnga">
         <button>作废订单</button>
          <button>立即支付</button>
           <button>订单详情</button>
       </div>
       </div>
        </div>
</template>
<script>
 import Headstd from "../../components/header/Headstd";  //引入头部组件
export default {
    data(){
        return {
            codenum:35155671,
        }
    },
    components:{
        "headstd":Headstd,    
    },
    methods: {
        loginout(){
            this.$messagebox.confirm("确定退出登录吗").then(action=>{
                this.$store.commit('LOGOUT');   //点击确认返回
               this.$router.push("/Index");
             }).catch(err=>{
                 console.log(err); //点取消返回的信息  点取消会报错，要用catch()
             });
           
        }
    },
}
</script>

<style lang="scss" scoped>
@import "./Order.scss"
</style>
