<template>
    <div>
        <headstd msg="小米"></headstd>   
        <ul class="arrange">
            <li><router-link to="#">价格<i id="arrange_up"></i></router-link></li>
             <li><router-link to="#">价格<i class="arrange_down"></i></router-link></li>
              <li><router-link to="#">评论<i class="arrange_discuss"></i></router-link></li>
               <li><router-link to="#">销量<i class="arrange_sales"></i></router-link></li>
        </ul>
        <div class="content_div">
            <div class="pro_box">     
                <div class="clearfix">
                <router-link to="/details?lid=1">
		        <img class="fl" :src="`${host}img/details/xiaomi/01.jpg`" alt="Breo 倍轻松 颈椎按摩披肩">
                </router-link>
                </div>
                <div class="pro_brief">
                    <router-link to="/details?lid=1">
                <p>Breo 倍轻松 颈椎按摩披肩情人节特价...</p>
		        <p><span>¥ 139.00</span></p>
		        <p>库存：有货</p>
            </router-link>		        
	            </div>
            </div>

             <div class="pro_box">     
                <div class="clearfix">
                    <router-link to="/details?lid=1">
		        <img class="fl" :src="`${host}img/details/xiaomi/01.jpg`" alt="Breo 倍轻松 颈椎按摩披肩">
            </router-link>
                </div>
                <div class="pro_brief">
                    <router-link to="/details?lid=1">
                <p>Breo 倍轻松 颈椎按摩披肩情人节特价...</p>
		        <p><span>¥ 139.00</span></p>
		        <p>库存：有货</p>
            </router-link>		        
	            </div>
            </div>

             <div class="pro_box">     
                <div class="clearfix">
                    <router-link to="/details?lid=1">
		        <img class="fl" :src="`${host}img/details/xiaomi/01.jpg`" alt="Breo 倍轻松 颈椎按摩披肩">
		         </router-link>
                </div>
                <div class="pro_brief">
                    <router-link to="/details?lid=1">
                <p>Breo 倍轻松 颈椎按摩披肩情人节特价...</p>
		        <p><span>¥ 139.00</span></p>
		        <p>库存：有货</p>
            </router-link>		        
	            </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import Headstd from "../../components/header/Headstd";  //引入头部组件
export default {
    data(){
        return {
            host:this.host
        }
    },
     components:{
     "headstd":Headstd,
    },
}
</script>

<style lang="scss" scoped>
@import './Ordering.scss'
</style>
