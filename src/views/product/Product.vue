<template>
 <div>
      <index_head></index_head> 
        <div class="article_nav">
           <ul class="article_ul">
             <li v-for="(elem,i) of list" :key="i" @click="fun(i,elem)" :class='i==active?"list_active":""'>{{elem}}</li>
           </ul>
            <div class="article_conter">
             <mt-tab-container v-model="content">
              <mt-tab-container-item id="手机">
                1117711111
               </mt-tab-container-item>
                <mt-tab-container-item id="摄影">
                22277722222
               </mt-tab-container-item>
                <mt-tab-container-item id="苹果">
                11115551111
               </mt-tab-container-item>
                <mt-tab-container-item id="电脑">
                111111114441111
               </mt-tab-container-item>
                <mt-tab-container-item id="外设">
                111122221111
               </mt-tab-container-item>
                <mt-tab-container-item id="家用电器">
                11177711111
               </mt-tab-container-item>
                <mt-tab-container-item id="家居">
                1111761111
               </mt-tab-container-item>
                <mt-tab-container-item id="汽车用品">
                1111551111
               </mt-tab-container-item>
                <mt-tab-container-item id="办公">
                11111444111
               </mt-tab-container-item>
                <mt-tab-container-item id="箱包">
                111122221111
               </mt-tab-container-item>
                <mt-tab-container-item id="厨用">
                11116661111
               </mt-tab-container-item>
                <mt-tab-container-item id="运动">
                222222
               </mt-tab-container-item>
                <mt-tab-container-item id="礼品">
                333333
               </mt-tab-container-item>
                <mt-tab-container-item id="玩具">
                3333333
               </mt-tab-container-item>
                <mt-tab-container-item id="个护清洁">
                666666
               </mt-tab-container-item>
                <mt-tab-container-item id="食品">
                11111111
               </mt-tab-container-item>
                <mt-tab-container-item id="酒饮">
                4444444
               </mt-tab-container-item>
             </mt-tab-container>
            </div>
         </div> 
         <p class="hengxina"></p>
 </div>
</template>
<script>
import index_head from '../../components/index_head/Index_head'
export default {
    data(){
        return {
          list:['手机','摄影','苹果','电脑','外设','家用电器','家居','汽车用品','办公','箱包','厨用','运动','礼品','玩具','个护清洁','食品','酒饮'],
          active:"手机",
          content:""
        }
    },
    methods:{
      fun(n,c){
        console.log(123);
        this.active=n;
        this.content=c;
      }
    },
   components:{
     "index_head":index_head,
    },
}


</script>

<style lang="scss" scoped>
 @import "./Product.scss"
</style>
