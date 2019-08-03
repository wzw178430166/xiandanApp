<template>
    <div>
        <headstd msg="订单列表"></headstd>
        <p class="henxina"></p>
        <div class="title_order">
            <span>欢迎您：1**20006057</span>
             <span>退出</span>
        </div>
        <div class="order_code">
          <div class="code">
              <p>订单编号：{{codenum}}</p>
              <span>待支付</span>
          </div>
            
        <div class="alert fade"> 
            <!-- 请求回来的商品 遍历 长度给cartlength-->
	       <div class="cart_detaio">
               <div></div>
               <div></div>
               <div></div>
           </div>   
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
    }
}
</script>

<style lang="scss" scoped>
@import "./Order.scss"
</style>
