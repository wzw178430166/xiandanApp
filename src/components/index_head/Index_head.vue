<template>
    <div class="myhead">
         <div class="head_logo"></div>  
         <div>
         <mt-search v-model="searchs" cancel-text="取消" placeholder="搜索">
           </mt-search>
           </div>
         <div class="nav-itmes" @click.stop="action='in'">
          <div class="nav_lists"></div>
         </div>
          <!-- 弹框 -->
         <div class="alert fade" :class="action">
		<ul class="alert_conter">
            <li><router-link to="/Index"><p></p></router-link></li>
            <li><router-link to="/denglu"><p v-if="islogints==$store.getters.logging"></p><p class="not_login" v-else></p></router-link></li>
            <li><router-link to="/cart"><p><b>{{$store.getters.getCartCount}}</b></p></router-link></li>
            <li @click="action=''"><span class="close"></span></li>
        </ul>
	</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            searchs:'',
            action:"",
            islogints:true,
            islogin:sessionStorage.getItem("user") ? true :false  //登录状态
        }
    },
    methods:{
      
    },
    created() {
        /*
        if(this.islogin){
            this.$store.commit("LOGIN");
        }else{
            this.$store.commit("LOGOUT"); 
        }
        */
    },
}
</script>

<style scoped lang="scss">
@import "./Index_head.scss"; /*引用外部的scss文件*/
   
</style>
     
