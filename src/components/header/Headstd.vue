<template>
    <div class="heads">
       <span @click="goback"></span>
       <span>{{msg}}</span>
       <span @click.stop="action='in'" class="head_dian"></span>
    <div class="alert fade" :class="action">
		<ul class="alert_conter">
            <li><router-link to="/Index"><p></p></router-link></li>
            <li><router-link to="/denglu"><p v-if="islogin==$store.getters.logging"></p><p class="not_login" v-else></p></router-link></li>
            <li><router-link to="/cart"><p><b>1</b></p></router-link></li>
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
            islogin:true
        }
    }
    ,
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
