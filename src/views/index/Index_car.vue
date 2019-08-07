<template>
      <div class="index_car">
            <mt-swipe :auto="3000">
                  <mt-swipe-item>
                   <div class="detail-container" :style="`background:url(${host}img/index/carousel/01.jpg) no-repeat top`"></div>
                   <div class='detail-mask'></div>
                  <div class="car_item">
                  <div>
                   <img :src="`${host}img/index/carousel/01.jpg`" alt="" class="carou_img">
                  </div>
                  <div>
                    <router-link to="/details">
                    <p>Morphy richards/英国摩飞</p>
                    <p>MR9088多功能锅料理锅 电烧烤锅电火锅烧烤炉家用电蒸锅 钴英石红</p>   
                    <p class="pice">¥ 1999.00</p>     
                    </router-link>        
                  </div>
                  </div>
                  </mt-swipe-item>
                  <mt-swipe-item>
                              <div class="detail-container" :style="`background:url(${host}img/index/carousel/02.jpg) no-repeat top`"></div>
                              <div class='detail-mask'></div>
                             <div class="car_item">
                             <div>
                              <img :src="`${host}img/index/carousel/02.jpg`" alt="" class="carou_img">
                             </div>
                             <div>
                                    <router-link to="/details">
                               <p>索尼(SONY) KD-85X9500G</p>
                               <p>85英寸4K HDR*清安卓智能电视 新品大屏巨屏幕电视机</p>   
                               <p class="pice">¥ 34999.00</p>       
                              </router-link>          
                             </div>
                             </div>
                             </mt-swipe-item>
                             <mt-swipe-item>
                                    <div class="detail-container" :style="`background:url(${host}img/index/carousel/03.jpg) no-repeat top`"></div>
                                    <div class='detail-mask'></div>
                                   <div class="car_item">
                                   <div>
                                    <img :src="`${host}img/index/carousel/03.jpg`" alt="" class="carou_img">
                                   </div>
                                   <div>
                                          <router-link to="/details">
                                     <p>pierre cardin 皮尔卡丹</p>
                                     <p>男士牛皮整皮折叠自动扣皮带礼盒 P5B810105-DYA 黑色</p>   
                                     <p class="pice">¥ 168.00</p> 
                                    </router-link>                
                                   </div>
                                   </div>
                                   </mt-swipe-item>
                                   <mt-swipe-item>
                                          <div class="detail-container" :style="`background:url(${host}img/index/carousel/04.jpg) no-repeat top`"></div>
                                          <div class='detail-mask'></div>
                                         <div class="car_item">
                                         <div>
                                          <img :src="`${host}img/index/carousel/04.jpg`" alt="" class="carou_img">
                                         </div>
                                         <div>
                                                <router-link to="/details">
                                           <p>GUESS美国盖尔斯</p>
                                           <p> 新款时尚欧美字母印花女士手包小号手拿包手抓包晚宴包化妆包多功能包 粉色</p>   
                                           <p class="pice">¥ 99.00</p>   
                                          </router-link>              
                                         </div>
                                         </div>
                                         </mt-swipe-item>
                                         <mt-swipe-item>
                                                <div class="detail-container" :style="`background:url(${host}img/index/carousel/05.jpg) no-repeat top`"></div>
                                                <div class='detail-mask'></div>
                                               <div class="car_item">
                                               <div>
                                                <img :src="`${host}img/index/carousel/05.jpg`" alt="" class="carou_img">
                                               </div>
                                               <div>
                                                      <router-link to="/details">
                                                 <p>Edifier 漫步者 </p>
                                                 <p>E225 新一代电视/客厅音响 红色</p>   
                                                 <p class="pice">¥ 899.00</p>    
                                                </router-link>             
                                               </div>
                                               </div>
                                               </mt-swipe-item>
                </mt-swipe>
      </div>
</template>
<script>
 export default {
       data(){
             return {
                   host:this.host
             }
       }
 }
</script>
<style lang="scss" scoped>
 @import "./index_car.scss"
</style>