<template>
    <div class="heads">
       <span @click="goback"></span>
       <span>{{msg}}</span>
       <span @click.stop="action='in'"></span>
    <div class="alert fade" :class="action">
		<ul class="alert_conter">
            <li><router-link to="/Index"><p></p></router-link></li>
            <li><router-link to="/login"><p></p></router-link></li>
            <li><router-link to="/Index"><p><b>1</b></p></router-link></li>
            <li @click="action=''"><span class="close"></span></li>
        </ul>
	</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            action:""
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
