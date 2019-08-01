<template>
    <div class="carousel_out">
             <!-- 轮播图-->
     <div id="content">
<mt-swipe :auto="3000" @change="hangeder">
  <mt-swipe-item v-for="(elem,i) of list" :key="i">
      <img :src="elem.sm" alt="" class="imgs">
      <!-- <div style="width:200px;height:100px;background:blue;"></div> -->
  </mt-swipe-item>
</mt-swipe>
        </div>
        <!-- 结束轮播图 -->  
    
    </div>
</template>

<script>
export default {
    props:{  
           list:{default:""},  
    },
     data(){   
          return {  
          }
     },
     methods: {
          hangeder(index){
              //console.log(index)
          }
},
  created:function(){
    
  }
   
}
</script>

 <style scoped>
     #content {
  height:162px;
  position: relative;
  top: 0px;
  overflow: hidden;
  width: 100%;
  margin: 0 auto; }
   #content .imgs{width:100%;height:162px;}
 .mint-swipe-indicator .is-active{background-color: #C4466C!important;color:#C4466C;}
.mint-swipe-indicator{background-color: #C4466C!important;}
.carousel_out{width:100%;height: 162px;position: relative;z-index: -1;}




 </style>