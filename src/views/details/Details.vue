<template>
 <div>
    <headstd :msg="products.title"></headstd>
    <carousel :list='pics' class="carouset"></carousel>
    <p class="markingts"></p>
    <div class="announcement">
        <div class="announcement_div"><img :src="`${host}img/details/announcement.gif`" alt="" class="announcement_img"/></div>
        <p class="announcement_msg" v-text="products.announcement">GUESS美国盖尔斯 新款时尚欧美字母印花女士手包小号手拿包手抓包晚宴包化妆包多功能包 白色</p>
    </div>
     <div class="information">
       <div class="int-top">
           <div class="ht-int" v-text="`￥${parseInt(products.price).toFixed(2)}`"></div>
           <div class="ht-nte">
               <span><router-link to="#"><img :src="`${host}img/details/collection.jpg`" alt=""/></router-link></span>
               <span><router-link to="#"><img :src="`${host}img/details/share.jpg`" alt=""/></router-link></span>
           </div>
       </div>
       <div class="int-bottom">
           <h2 v-text="products.subtitle"></h2>
           <p><img :src="`${host}img/details/noSevenDay.png`" alt=""></p>
       </div>
     </div>     
       <p class="markingts"></p>
       <div class="particulars">
          <p><router-link to="#">商品详情<span>></span></router-link></p>
         <p><router-link to="#">商品评论<span>></span></router-link></p>
      </div>
        <p class="markingts"></p>
        <div class="specification">
          <div class="port" v-if="sizes[0]!==null">
              <span v-text="products.model">端口：</span>
              <div class="port_item">
                  <span v-for="(elem,i) of sizes" :key="i" v-if="elem!=null" :class="action==i?'port_active':''" @click="changestyle(i)">
                      {{elem}}
                  </span>
              </div>
          </div>
            <div class="port" v-if="velocity[0]!==null">
              <span v-text="products.model2">速度</span>
              <div class="port_item speed">
                  <span v-for="(elem,i) of velocity" :key="i" v-if="elem!=null" @click="changVe(i)" :class="avite==i?'speed_active':''">
                      {{elem}}
                  </span>
              </div>
          </div> 
           <div class="port">
              <span>数量：</span>
              <div class="act_wrap" @click="zengjia">
                    <span ref="span1">-</span><input class="num" value="1" id="buyQty" readonly="" v-model="nums"><span>+</span>
                </div>
          </div> 
            <div class="port">
              <span>库存：</span>
              <div class="port_item inventory">
                  <span v-text="products.inventory_msg">接受预定(备货时间依据当前货源情况而定)</span>
              </div>
          </div> 
        </div>
         <p class="markingts"></p>
          <p class="merchant">归属商家：中国咸蛋网</p>
           <p class="markingts"></p>
         <div class="tabarr">
              <span><router-link to="/Index">首页</router-link></span>
              <span><router-link to="/cart">购物车</router-link></span>
              <span><router-link to="#">加入购物车</router-link></span>
          </div>
 </div>
</template>
<script>
 import Headstd from "../../components/header/Headstd";  //引入头部组件
 import Carousel from './Carousel' 
export default {
    data(){
        return {
            host:this.host,
          pics:[                  //轮播图片   
             /*  {sm:'http://127.0.0.1:5050/img/lunbotu/01.jpg'},
                {sm:'http://127.0.0.1:5050/img/lunbotu/02.jpg'}*/
            ], 
            sizes:[],            //端口类型 
            action:"",    // 端口样式
            velocity:[],   //速度
            avite:0,       //速度样式
            nums:3,        //商品数量
            products:[],   //商品信息

        }
    },
    methods:{
        zengjia(e){ //点击增加减少数量
          var tar=e.target;
          var zheng=-1;
          var jia=1;
              if(tar.nodeName==="SPAN"){
                if(this.nums==1){
                    this.$toast('最少一件商品')
                    this.$refs.span1.style.background="#0000";  
                    console.log(this.$refs.span1);
                    zheng=0;
                  }else{
                      zheng=-1;
                      this.$refs.span1.style.background='#ededed';
                  }  
                  this.nums+=tar.innerHTML=="-"?zheng:jia;
                 
              }
      },
        changVe(n){   //改变速度类型样式 
            for(var i=0;i<this.velocity.length;i++){
                if(n==i){
                    this.avite=n;
                }
            }
        },
        changestyle(n){  //改变端口类型样式
                for(var i=0;i<this.sizes.length;i++){
                    if(n==i){
                        this.action=n;
                    }
                }
        },
        getdetails(type){
            //发送请求商品的详情信息
    this.axios.get('details/',{params:{lid:this.$route.query.lid}}).then(res=>{
        console.log(res.data)
         this.products=res.data.products;
         this.specs=res.data.specs;
       // this.size=res.data.size;
        this.dibu=res.data.dibu;
        this.lidss=this.$route.query.lid;
         var sizes=res.data.size; //把对象转为数组
         var velocitys=res.data.velocity;
        // console.log(velocitys);
         var img=res.data.img;  //把图片对象转为数组
        var arr=[];
        var arr1=[];
        this.img=img;
        //端口
        for(var i in sizes[0]){
            arr.push(sizes[0][i]);
        }
        this.sizes=arr;
        //速度
        for(var i in velocitys[0]){
            arr1.push(velocitys[0][i]);
        }
        this.velocity=arr1;
         });
       },
       //请求商品详情轮播
       getlunbo(){
        this.axios.get('details/lunbo',{params:{lid:this.$route.query.lid}}).then(res=>{
        console.log(res.data)
         this.pics=res.data;
         });
       }
    },
    created:function(){
        this.getdetails();      
    },
    components:{
     "headstd":Headstd,
      "carousel":Carousel
    },
    mounted:function(){
        this.getlunbo();
        console.log(this.$route.path);
    }
}


</script>

 <style lang="scss" scoped>
  @import "./details.scss"
 </style>
 