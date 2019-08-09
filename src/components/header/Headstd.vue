<template>
    <div class="heads">
       <span @click="goback"></span>
       <span>{{msg}}</span>
       <span @click.stop="action='in'" class="head_dian"></span>
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
            action:"",
            host:this.host,
            islogints:true,
            islogin:sessionStorage.getItem("user") ? true :false
        }
    }
    ,
    created() {
        /*
        if(this.islogin){
            this.$store.commit("LOGIN");
        }else{
            this.$store.commit("LOGOUT"); 
        }
        */
    },
    props:{
      msg:{default:""}
    }
    ,
    methods:{
        goback(){
       this.$router.go(-2)
        },

    }
}
</script>

<style lang="scss" scoped>
 @import './headst'
</style>
