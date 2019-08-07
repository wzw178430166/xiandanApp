<template>
 <div>
    <headstd msg="个人中心" class="myhead"></headstd>
    <div class="person_msg"> 
      <div></div>
      <div><span>{{$store.getters.getphone}}</span></div>
    </div>
   <div class="myritct">
    <mt-swipe :auto="3000">
      <mt-swipe-item>
         1111111
          <!-- <div style="width:200px;height:100px;background:blue;"></div> -->
      </mt-swipe-item>
      <mt-swipe-item>
        2222222
         <!-- <div style="width:200px;height:100px;background:blue;"></div> -->
     </mt-swipe-item>
     <mt-swipe-item>
      33333333
       <!-- <div style="width:200px;height:100px;background:blue;"></div> -->
   </mt-swipe-item>
    </mt-swipe>

   </div>

 </div>
</template>
<script>
import Headstd from "../../components/header/Headstd"
export default {
    data(){
        return {
           host:this.host
        }
    },
    methods:{
   
    },
    components:{
        "headstd":Headstd
    },
}


</script>

<style lang="scss" scoped>
  @import "./Personal.scss"
</style>