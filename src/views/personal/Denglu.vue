<template>
    <div>
         <headstd msg="登录"></headstd>
            <div class="login_conte">
        <img :src="`${host}img/login/dongte.gif`" alt="" class="img_login">
        </div>
             <div class="logn_user">
                 <mt-field label="手机号:" placeholder="请输入用户名" :attr="{maxlength:11}" v-model="phone"></mt-field>
       <mt-field label="密码:" placeholder="6-16位包含数字字母" :attr="{maxlength:16}" v-model="upwd" type="password">
       </mt-field>
        <div class="yanzhengma">
            <div>验证码：</div>
            <div><input type="text" placeholder="请输入验证码" v-model="inputCode"></div>
            <div>
                <span @click="refreshCode">
                    <random-code :identifyCode="identifyCode"></random-code>
                </span>
            </div>
        </div>
        <p class="dianf" @click.prevent="addd"><router-link to="/login">免费注册</router-link><router-link to="#">找回密码</router-link></p>
        </div>
         <div class="dianf_gou">
        <mt-button size="large" plain @click="denglu">登录</mt-button>
        </div>
    </div>
</template>

<script>
import Headstd from "../../components/header/Headstd"
import Randomcode from "./Random_code.vue"
export default {
    data(){
        return {
             host:this.host,
             phone:"18320006077",
            upwd:"w1111111111",
            inputCode:'',
            identifyCodes: "1234567wqw", //请求过来的验证码格式
            identifyCode:""   //初始化验证码
        }
    },
     components:{
        "headstd":Headstd,
        "random-code":Randomcode
    },
    methods:{
        addd(){
            console.log(111);
            var phone=localStorage.getItem("phone");
            console.log(phone);
        },
        denglu(){
            var phone=this.phone;
            var upwd=this.upwd;
            var inputCode=this.inputCode;
            var phonereg=/^[1]([3-9])[0-9]{9}$/;
            var upwdreg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
        //   localStorage.setItem("phone",phone);  //永久保存用户名
            console.log(inputCode);
            console.log(this.identifyCode);
            if(!phonereg.test(phone)){  
                this.$toast("用户名格式不正确");
                return;
            }
            if(!upwdreg.test(upwd)){
                this.$toast("密码格式不正确");
                return;
            }
            if(inputCode!=this.identifyCode){
                this.$toast("验证码不正确");
                return;
            }
            var url = "user/login";
            var obj = {phone:phone,upwd:upwd};
            this.axios.post(url,this.qs.stringify(obj))
           // this.axios.get(url,{params:obj})
            .then(result=>{
                console.log(result);
                if(result.data.code<0){
                    this.$toast("用户名或密码错误");
                }else{
                    var user=result.data;
                    //sessionStorage.setItem("phone",phone);  //永久保存用户名
                    sessionStorage.setItem('user', JSON.stringify(user));   //登录了把用户信息存在sessionStorage里面
                //    this.$store.dispatch('login');
                    // this.$router.go(-1);
                   this.$store.commit("LOGIN");  //登录了，把用户信息派发下去，再在其他组件使用
                     this.$router.push("Cart");
                }
            });
        },
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        refreshCode() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
            },
            makeCode(o, l) {
            for (let i = 0; i < l; i++) {
                this.identifyCode += this.identifyCodes[
                this.randomNum(0, this.identifyCodes.length)
                ];
            }
            // console.log(this.identifyCode);
            }
        
    },
    mounted() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
}
</script>
<style lang="scss" scoped>
   @import "./denglu.scss"
</style>
