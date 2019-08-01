<template>
 <div>
    <headstd></headstd>
    <carousel :list=pics class="carouset"></carousel>
    <p class="markingts"></p>
     <div class="information">
       <div class="int-top">
           <div class="ht-int">¥ 99.00</div>
           <div class="ht-nte">
               <span><img :src="`${host}img/details/collection.jpg`" alt=""></span>
               <span><img :src="`${host}img/details/share.jpg`" alt=""></span>
           </div>
       </div>
       <div class="int-bottom">
           <h2>GUESS美国盖尔斯 新款时尚欧美字母印花女士手包小号手拿包手抓包晚宴包化妆包多功能包 白色</h2>
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
          <div class="port">
              <span>端口：</span>
              <div class="port_item">
                  <span class="port_active">16口</span>
                  <span>17口</span>
                  <span>19口</span>
              </div>
          </div>
            <div class="port">
              <span>速度：</span>
              <div class="port_item speed">
                  <span class="speed_active">全千兆</span>
                  <span>百兆</span>
              </div>
          </div> 
           <div class="port">
              <span>数量：</span>
              <div class="port_item quantity">
                  <span>-</span>
                  <span class="qu_num">5</span>
                  <span>+</span>
              </div>
          </div> 
            <div class="port">
              <span>库存：</span>
              <div class="port_item inventory">
                  <span>接受预定(备货时间依据当前货源情况而定)</span>
              </div>
          </div> 
        </div>
 </div>
</template>
<script>
 import Headstd from "../../components/header/Headstd";  //引入头部组件
 import Carousel from '../../components/lunbo/Carousel' 
export default {
    data(){
        return {
            host:this.host,
          pics:[//轮播图片
                {sm:'http://127.0.0.1:5050/img/lunbotu/01.jpg'},
                {sm:'http://127.0.0.1:5050/img/lunbotu/02.jpg'}
            ],    
        }
    },
    methods:{
   
    },
    components:{
     "headstd":Headstd,
      "carousel":Carousel
    },
    mounted:function(){
        console.log(this.$route.path);
    }
}


</script>

 <style lang="scss" scoped>
  @import "./details.scss"
 </style>
 