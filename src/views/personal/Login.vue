<template>
	<div>
		<headstd msg="注册中心"></headstd>
		 		<div class="login_conte">
			<img :src="`${host}img/login/timg.jpg`" alt="" class="img_login">
		</div>
		<div class="logn_user">
			<mt-field label="手机号:" placeholder="请输入用户名" :attr="{maxlength:11}" v-model="phone" @blur.native="phones" type="tel">
			</mt-field>
			<mt-field label="密码:" placeholder="请输入密码" :attr="{maxlength:16}" v-model="upwd" type="password">
			</mt-field>
			<mt-field label="生日:" type="date" v-model="bolr"></mt-field>
			<mt-radio title="性别" v-model="sex" :options="['男', '女']">
			</mt-radio>
			<div class="yanzhengma">
				<div>验证码：</div>
				<div><input type="text" placeholder="请输入验证码" v-model="inputCode"></div>
				<div>
				    <span @click="refreshCode">
					  <random-code :identifyCode="identifyCode"></random-code>
				    </span>
				</div>
			  </div>
			<p class="checkbosx"><input type="checkbox" checked>同意<a>《咸蛋用户注册协议》</a></p>
			<p class="dianf">
				<router-link to="/denglu">会员登录</router-link>
			</p>
		</div>
		<p class="login_usr">
			<mt-button type="primary" size="large" @click.native="register">注册</mt-button>
		</p>
		
	</div>
</template>
<script>
	import Headstd from "../../components/header/Headstd"
	import Randomcode from "./Random_code.vue"
	export default {
		data() {
			return {
				host: this.host,
				phone: "", //手机号
				upwd: "", //密码
				bolr: "", //出生
				sex: '', //性别
				inputCode: '', //验证码
				identifyCodes: "1234567890", //请求过来的验证码格式
             	      identifyCode:""   //初始化验证码
			}
		},
		components: {
			"headstd": Headstd,
			"random-code":Randomcode
		},
		props:{},
		
		methods: {             
			phones() {
				console.log(111)
			},
			aa() {
				console.log(222);
			},
			register(){
            var phone=this.phone;
            var upwd=this.upwd;
		var inputCode=this.inputCode;
		var bolr=this.bolr;
		var sex=this.sex;
            var phonereg=/^[1]([3-9])[0-9]{9}$/;
            var upwdreg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
           localStorage.setItem("phone",phone);  //永久保存用户名
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
            var urls = "user/add";
		//var obj = "phone="+this.phone;
	   var obj={"phone":this.phone,"upwd":this.upwd,"bolr":this.bolr,"sex":this.sex}
	   // var obj=  {"phone":phone},{"upwd":upwd},{"bolr":bolr},{"sex":sex}
	//   var obj1={phone:this.phone};
		//console.log(obj);   //{headers:{ 'Content-Type':'application/x-www-form-urlencoded' }},
		//this.axios.get(url,{params:obj})
		//this.axios.post(url,{params:this.qs.stringify(obj)})
		this.axios.post(urls,this.qs.stringify(obj))
		.then(result=>{
			console.log(result);
			console.log(result.data.code);
                if(result.data.code<1){
                    this.$toast("用户已存在");
                }else{
			  // this.$router.go(-1);
			  this.$toast({
                    message:"注册成功",//内容
                    position:"middle",   //位置
                    duration:3000,     //时间
                    iconClass:"iconfont icon-xiaolian"
                    }); 
                    this.$router.push("/denglu");
                }
            })
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
		}
		,
		props:{
			
		},
		mounted() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
	}
</script>
<style lang="scss" scoped>
	@import "./Login.scss"
</style>