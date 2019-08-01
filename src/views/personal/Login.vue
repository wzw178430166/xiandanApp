<template>
    <div>
        <headstd msg="注册中心"></headstd>
        <div class="login_conte">
        <img :src="`${host}img/login/timg.jpg`" alt="" class="img_login">
        </div>
        <div class="logn_user">
                 <mt-field label="手机号:" placeholder="请输入用户名" :attr="{maxlength:10}" v-model="uname"></mt-field>
       <mt-field label="密码:" placeholder="请输入密码" :attr="{maxlength:20}" v-model="upwd" type="password"></mt-field>
       <mt-field label="生日:" type="date" v-model="bolr"></mt-field>
        <p class="checkbosx"><input type="checkbox" checked>同意<a>《新蛋用户注册协议》</a></p>
        <p class="dianf"><router-link to="/denglu">会员登录</router-link></p>
        </div>
      <p class="login_usr">
        <mt-button type="primary" size="large">注册</mt-button>
        </p>
    </div>
</template>
<script>
import Headstd from "../../components/header/Headstd"
export default {
    data(){
        return {
            host:this.host,
             uname:"tom",
            upwd:"",
            bolr:""
        }
    },
    components:{
        "headstd":Headstd
    }
}
</script>
<style lang="scss" scoped>
@import "./Login.scss"
</style>
