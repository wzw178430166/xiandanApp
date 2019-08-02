<template>
    <div>
         <headstd msg="登录"></headstd>
            <div class="login_conte">
        <img :src="`${host}img/login/dongte.gif`" alt="" class="img_login">
        </div>
             <div class="logn_user">
                 <mt-field label="手机号:" placeholder="请输入用户名" :attr="{maxlength:10}" v-model="uname"></mt-field>
       <mt-field label="密码:" placeholder="请输入密码" :attr="{maxlength:20}" v-model="upwd" type="password"></mt-field>
        <p class="checkbosx"><input type="checkbox" checked>同意<a>《新蛋用户注册协议》</a></p>
        <p class="dianf"><router-link to="/login">免费注册</router-link><router-link to="/denglu">找回密码</router-link></p>
        </div>
         <div class="dianf_gou">
        <mt-button size="large" plain>登录</mt-button>
        </div>
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
        }
    },
     components:{
        "headstd":Headstd
    }
}
</script>
<style lang="scss" scoped>
   @import "./denglu.scss"
</style>
