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
                <div class="title_arctle">
                 <h3>手机</h3>
                 <div class="sign_arctle">
                  <span><router-link to="#">小米</router-link></span>
                  <span><router-link to="#">vivo</router-link></span>
                </div>
                </div>
                <div class="title_arctle">
                 <h3>手机配件</h3>
                 <div class="sign_arctle">
                  <span><router-link to="#">移动电源</router-link></span>
                  <span><router-link to="#">蓝牙耳机</router-link></span>
                   <span class="span_text"><router-link to="#">手机通用配件</router-link></span>
                  <span class="span_text"><router-link to="#">手机数据线</router-link></span>
                  <span class="span_text"><router-link to="#">手机镜头/拍摄器材</router-link></span>
                </div>
                </div>
                    <div class="title_arctle">
                 <h3>智能硬件</h3>
                 <div class="sign_arctle">
                  <span class="span_text"><router-link to="#">智能穿戴/设备</router-link></span>
                  <span class="span_text"><router-link to="#">无人机</router-link></span>
                   <span><router-link to="#">平衡车</router-link></span>
                  <span><router-link to="#">游戏机</router-link></span>
                    <span><router-link to="#">游戏周边</router-link></span>
                  <span><router-link to="#">游戏手柄</router-link></span>
                </div>
                </div>
               </mt-tab-container-item>
                <mt-tab-container-item id="摄影">
                <div class="title_arctle">
                 <h3>数码摄影</h3>
                 <div class="sign_arctle">
                  <span><router-link to="#">单电/微单</router-link></span>
                  <span><router-link to="#">镜头</router-link></span>
                   <span><router-link to="#">数码相机</router-link></span>
                  <span><router-link to="#">数码摄像机</router-link></span>
                  <span><router-link to="#">特殊相机</router-link></span>
                   <span><router-link to="#">照片打印机</router-link></span>
                </div>
                </div>
                 <div class="title_arctle">
                 <h3>数码附件</h3>
                 <div class="sign_arctle">
                  <span class="span_text"><router-link to="#">镜头滤镜</router-link></span>
                  <span><router-link to="#">数码贴膜/清洁</router-link></span>
                   <span class="span_text"><router-link to="#">数码包</router-link></span>
                  <span><router-link to="#">三脚架/云台</router-link></span>
                  <span><router-link to="#">存储卡</router-link></span>
                </div>
                </div>
               </mt-tab-container-item>
                <mt-tab-container-item id="苹果">
                  <div class="title_arctle">
                 <h3>苹果专区</h3>
                 <div class="sign_arctle">
                  <span><router-link to="#">iPhone</router-link></span>
                  <span><router-link to="#">iPad</router-link></span>
                   <span><router-link to="#">iMac</router-link></span>
                  <span><router-link to="#">MacBook</router-link></span>
                  <span class="span_text"><router-link to="#">苹果通用附件</router-link></span>
                   <span class="span_text"><router-link to="#">苹果原装配件</router-link></span>
                </div>
                </div>
               </mt-tab-container-item>
                <mt-tab-container-item id="电脑">
                 <div class="title_arctle">
                 <h3>电脑整机</h3>
                 <div class="sign_arctle">
                  <span><router-link to="#">笔记本</router-link></span>
                  <span><router-link to="#">平板配件</router-link></span>
                   <span><router-link to="#">平板</router-link></span>
                </div>
                </div>
                  <div class="title_arctle">
                 <h3>电脑配件</h3>
                 <div class="sign_arctle">
                  <span><router-link to="#">主板</router-link></span>
                  <span><router-link to="#">硬盘</router-link></span>
                   <span class="span_text"><router-link to="#">SSD固态硬盘</router-link></span>
                  <span class="span_text"><router-link to="#">内存</router-link></span>
                  <span><router-link to="#">机箱</router-link></span>
                   <span><router-link to="#">电源</router-link></span>
                     <span><router-link to="#">显示器</router-link></span>
                   <span><router-link to="#">散热器</router-link></span>
                </div>
                </div>
               </mt-tab-container-item>
                <mt-tab-container-item id="外设">
                   <div class="title_arctle">
                 <h3>电脑外设</h3>
                 <div class="sign_arctle">
                  <span><router-link to="#">键盘</router-link></span>
                  <span><router-link to="#">鼠标</router-link></span>
                   <span><router-link to="#">U盘</router-link></span>
                  <span><router-link to="#">移动硬盘</router-link></span>
                  <span><router-link to="#">存储卡</router-link></span>
                   <span><router-link to="#">读卡器</router-link></span>
                </div>
                </div>
                  <div class="title_arctle">
                 <h3>网络设备</h3>
                 <div class="sign_arctle">
                  <span><router-link to="#">路由器</router-link></span>
                  <span><router-link to="#">网卡</router-link></span>
                   <span><router-link to="#">无线AP</router-link></span>
                  <span><router-link to="#">交换机</router-link></span>
                  <span><router-link to="#">网络配件</router-link></span>
                </div>
                </div>
                  <div class="title_arctle">
                 <h3>音频设备</h3>
                 <div class="sign_arctle">
                  <span><router-link to="#">耳机/耳麦</router-link></span>
                  <span><router-link to="#">音箱</router-link></span>
                   <span><router-link to="#">蓝牙耳机</router-link></span>
                </div>
                </div>
                  <div class="title_arctle">
                 <h3>智能硬件</h3>
                 <div class="sign_arctle">
                  <span class="span_text"><router-link to="#">智能穿戴/设备</router-link></span>
                  <span class="span_text"><router-link to="#">无人机</router-link></span>
                   <span><router-link to="#">平衡车</router-link></span>
                  <span><router-link to="#">游戏机</router-link></span>
                  <span><router-link to="#">游戏周边</router-link></span>
                </div>
                </div>
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
          active:"小米",
          content:"小米"
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
