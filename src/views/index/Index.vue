<template>
 <div>
    <title_head></title_head>
    <div class="nav_index">
          <router-link to="#" class="wid">
         <div class="img_pice"><img :src="`${host}img/index/nav/product_sec.png`" alt=''></div>
          <p>商品分类</p>
          </router-link>
       
          <router-link to="#" class="wid">
         <div class="img_pice"><img :src="`${host}img/index/nav/product_sec.png`" alt=''></div>
          <p>商品分类</p>
          </router-link>
           <router-link to="#" class="wid">
         <div class="img_pice"><img :src="`${host}img/index/nav/product_sec.png`" alt=''></div>
          <p>商品分类</p>
          </router-link>
           <router-link to="#" class="wid">
         <div class="img_pice"><img :src="`${host}img/index/nav/product_sec.png`" alt=''></div>
          <p>商品分类</p>
          </router-link>
        
    </div>
    <div class="nav_index nav-itme">
          <router-link to="#" class="wid">
         <div class="img_pice"><img :src="`${host}img/index/nav/product_sec.png`" alt=''></div>
          <p>商品分类</p>
          </router-link>
       
          <router-link to="#" class="wid">
         <div class="img_pice"><img :src="`${host}img/index/nav/product_sec.png`" alt=''></div>
          <p>商品分类</p>
          </router-link>
           <router-link to="#" class="wid">
         <div class="img_pice"><img :src="`${host}img/index/nav/product_sec.png`" alt=''></div>
          <p>商品分类</p>
          </router-link>
           <router-link to="#" class="wid">
         <div class="img_pice"><img :src="`${host}img/index/nav/product_sec.png`" alt=''></div>
          <p>商品分类</p>
          </router-link>
    </div>
    <div class="title_msright"><!--2019/8/14 23:59 -->
                <!-- <span>距结束</span><span class="jieshuee" id="reverse" :data-time="new Date(products.shelf_time).toLocaleString()"> -->
                   <span>今日咸鸭蛋</span><span class="jieshuee" id="reverse" data-time="2019/9/14 23:59">
                <em>00</em> <span>:</span>
                <em>00</em> <span>:</span>
                <em>00</em> 
                </span>
                <span class="title_router"><a href="#">更多></a></span>
            </div>

            <div class="nav_content">
             <div></div>
             <div></div>
            </div>
 </div>
</template>
<script>
import Title_head from '../../components/title_ah/Title_head'
export default {
    data(){
        return {
           host:this.host
        }
    },
    methods:{
        	//今日好蛋
			 brinobj(id){
  var timer = null;//这里设置time为null，用于下面来清除计时器
        var obj = document.getElementById(id)//获取到放置时间数据的span的id
        timer = setInterval(function(){//设置定时器，来更新时间
                var a = new Date((obj.getAttribute("data-time"))).getTime();
                var b = new Date().getTime();//这是获取当前时间，是一个不固定的数值
                var d = 0,s=0,h=0,m=0;//定义变量
                var ee = obj.getElementsByTagName("em")//获取布局中的em标签用于存取数据
                d = Math.floor((a - b)/1000/60/60/24);//获取剩余天数
                h = Math.floor((a - b)/1000/60/60%24);//获取剩余小时
                m = Math.floor((a - b)/1000/60%60);//获取剩余分钟
                s = Math.floor((a - b)/1000%60);//获取剩余秒数
                if(d < 10){
                    d = "0" + d
                }else if(d < 0){
                    d = 0
                }
                if(h < 10){
                    h = "0" + h
                }else if(h < 0){
                    h = 0
                }
                if(m < 10){
                    m = "0" + m;
                }else if(m < 0){
                    m = 0;
                }
                if(s < 10){
                    s = "0" + s;
                }else if(s < 0){
                    s = 0;
                }
               // ee[0].innerHTML = d; 天数
                ee[0].innerHTML = h;
                ee[1].innerHTML = m;
                ee[2].innerHTML = s;
                if(a <= b){//当我们的时间到期的时候，清除计时器，然后把当前标签的内容设置为0；
                    clearInterval(timer);
                    obj.innerHTML="";
                }
            },1000)
            },
        addw(){
          console.log(111);
          axios.get('./sss.html'
          ).then(res=>{console.log(res)});
        }
    },
    mounted() {
       this.brinobj('reverse'); //今日好蛋倒计时
    },
    created:function(){
   
    },
 //注册轮播子组件
  components:{
    "title_head":Title_head
  }
}


</script>

<style scoped lang="scss">
@import "./index.scss"; //引用外部的scss文件  使用@import 就算样式写在后面也会被覆盖样式
   
</style>