<template>
    <div>
        <headstd msg="购物车" class="myhead"></headstd>
        <div class="titele_cart">
           <span class="xiandan">中国咸蛋网</span>
           <span class="titele_ms" v-if="islogin==$store.getters.logging">亲爱的，<router-link to="/denglu" @click.prevent="logins">请先登录</router-link> 
           </span>
           <span v-else class="welcomeuy">欢迎：{{$store.getters.getphone}},<i @click="zhuxiao" class="welcolor">注销</i></i></span>
           <span class="inter" @click="action='in'">{{conter}}</span>
        </div>
        <div class="cart_conter" v-if="shopping.length==0">
            <div class="cart_url"></div>
            <p class="cart_msget">购物车都空啦，快去逛逛吧</p>
            <p class="cart_int">
                <router-link to="/Index" class="cart_btn">去逛逛</router-link>
            </p>
        </div>
        <div class="carts">
        <div class="alert fade" :class="action" :style="{'height':'calc('+cartWidth*cartlength+'rem)'}"> 
            <!-- 请求回来的商品 遍历 长度给cartlength-->
	       <div class="cart_detaio" v-for="(elem,i) of shopping" :key="i">
               <div>
                   <input type="radio" class="radiost">
               </div>
               <div>
                   <router-link :to="elem.details">
                   <img :src="elem.details_img" alt="">
                  </router-link>
               </div>
               <div>
                   <div class="div_tit">
                   <p><router-link :to="elem.details">{{elem.title}}</router-link></p>
                   <span @click="delItem" :data-lid="elem.lid">删除</span>
                </div>
               <div class="div_tit2">
                   <p><span v-text="elem.model_title1"></span>{{elem.model}}</p>
                   <p><span v-text="elem.model_title2"></span>{{elem.model2}}</p>
               </div>
               <p class="div_tit3">价格：<span class="div_titigm" v-text="elem.price">125</span><span v-text="`x${elem.numcart}`"></span></p>
               <p class="div_tit4"><button>移入收藏夹</button></p>
               </div>
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
            <div class="cartsts">
            <p>商品总金额：<span v-text="`￥${total}`"></span></p>
            <p>共{{$store.getters.getCartCount}}件商品</p>
            <router-link to="/order">
             <img :src="`${this.host}img/cart/btm_cart.png`" class="cart_imgurl" @click="www"/>
            </router-link>
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
            cartlength:0,      //默认一件商品元素的个数
            islogin:false,
            uname:"ddingding",   //用户名字
            shopping:[] ,       //购物车
            uid:this.$store.getters.getuid,  //当前登录的用户
            total:0      //总价
        }
    },
    components:{
        "headstd":Headstd
    },
    methods:{
         zhuxiao(){   //注销 ief
            this.$messagebox.confirm("确定退出登录吗").then(action=>{
                this.$store.commit("LOGOUT");
               this.$router.push("/Index");
                 // this.islogin=false
             }).catch(err=>{
                 console.log(err); //点取消返回的信息  点取消会报错，要用catch()
             });
              },
        logins(){   //登录
              this.islogin=true;
        },
        add(conter){
           if(this.conter!='[-]'){
               this.conter='[+]';
           }
        }
        ,
        www(){  //测试
            this.axios.get('details/',{params:{lid:1}}).then(res=>{
                console.log(res);
            });
        },
        getcart(){  //获取购物车商品
          //var id=this.$store.getters.getCartCount;
             this.axios.get('shopping/cart',{params:{'id':this.uid}}).then(res=>{
                 this.shopping=res.data.data; 
                 this.cartlength=res.data.data.length;  //购物车高度
                 sessionStorage.setItem('counts',this.cartlength);
                 var obj=res.data.data;//res.data.data;
                 console.log(obj.length);
               //  console.log(Object.prototype.toString.call(obj)==="[object Aarry]");
               //  console.log({}.toString.call(obj)==="[object Aarry]");
                 for(var i=0,num=0;i<obj.length;i++){
                  num+=obj[i].price*obj[i].numcart;
                 }
               this.total=num;
                 /*
              var  row=res.data.data;
                 for(var item of row){
                    //添加cb属性 ，用在按钮的checked
                    item.cb=false;
                }
                 this.open=row;
                 this.code=res.data.code;
                console.log(res);*/
             }).catch(err=>{console.log(err)})
        },
        delItem(e){    //删除当前的商品
             //1.获取当前商品id
            var lid=e.target.dataset.lid;
             //2.显示交互确认框
     this.$messagebox.confirm("是否删除指定数据").then(action=>{
          //4.发送ajax删除数据
          var url="shopping/delItem";
          var obj={lid:lid};
           this.axios.get(url,{params:obj}).then(result=>{
           //    console.log(result);
               this.getcart();
               this.$store.commit("clear"); 
               if(result.data.code==1){
                this.shopping=this.shopping.slice(1);
               }
           });
                       }).catch(err=>{
              // console.log(err);
           });
             //3.如果用户选择“确认"
            
             //5.如果用户选择 “取消”
         }
    },
    mounted() {
       
    },
    created() {
        this.getcart();
        //this.$store.commit("updateCount"); 

    },
}
</script>

<style lang="scss" scoped>
@import "./cart.scss"
</style>

