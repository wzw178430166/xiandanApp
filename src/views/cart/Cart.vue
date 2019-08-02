<template>
    <div>
        <headstd msg="购物车" class="myhead"></headstd>
        <div class="titele_cart">
           <span class="xiandan">中国咸蛋网</span>
           <span class="titele_ms" v-if="islogin==false">亲爱的，<router-link to="/denglu" @click.prevent="logins">请先登录</router-link> 
           </span>
           <span v-else class="welcomeuy">欢迎：{{uname}},<router-link to="#" @click="zhuxiao">注销</router-link></span>
           <span class="inter" @click="action='in'">{{conter}}</span>
        </div>
        <div class="cart_conter" v-if="shopping.length==0">
            <div class="cart_url"></div>
            <p class="cart_msget">购物车都空啦，快去逛逛吧</p>
            <p class="cart_int">
                <router-link to="#" class="cart_btn">去逛逛</router-link>
            </p>
        </div>
        <div class="carts">
        <div class="alert fade" :class="action" :style="{'height':'calc('+cartWidth*cartlength+'rem)'}"> 
            <!-- 请求回来的商品 遍历 长度给cartlength-->
	       <div class="cart_detaio">
               <div></div>
               <div></div>
               <div></div>
           </div>  
    
	</div>
    </div>
        <!-- 今日推荐 -->
                  <div class="title_msright title_two"><!--2019/8/14 23:59 -->
                <!-- <span>距结束</span><span class="jieshuee" id="reverse" :data-time="new Date(products.shelf_time).toLocaleString()"> -->
                   <span class="nav_group">今日推荐</span>
                <span class="title_router"><a href="#">更多></a></span>
            </div>
            <div class="nav_content">
             <div class="nav_article">
                  <router-link to="/details">
                 <img :src="`${host}img/index/content/01.jpg`" alt="">
                 <h2 class="h2conm">荣耀V20  8GB+128GB 幻夜黑 移动联通电信4G全面屏手机 双卡双待</h2>
                 <p class="com_width97">输入蛋券sj07,满1000-30元,满3000-100元,数量有限,先到先得!</p>
                 <p class="com_width98">￥259.00</p>
                 </router-link>
             </div>
            </div>
    </div>
</template>

<script>
import Headstd from "../../components/header/Headstd"
export default {
    data(){
        //登录的时候判断是否登录， 然后服务器把session用户的编号res.send()回去客户端，客户端把编号存着sessionStorage里面。
        return {
             host:this.host, //域名
            conter:'[-]',
            action:"",
            cartWidth:8.8,    //一件商品元素的高度与scss样式对应适调
            cartlength:1,      //默认一件商品元素的个数
            islogin:false,
            uname:"ddingding",   //用户名字
            shopping:['1'] ,       //购物车
        }
    },
    components:{
        "headstd":Headstd
    },
    methods:{
         zhuxiao(){   //注销 ief
                  this.islogin=false
              },
        logins(){   //登录
              this.islogin=true;
        },
        add(conter){
           if(this.conter!='[-]'){
               this.conter='[+]';
           }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./cart.scss"
</style>

