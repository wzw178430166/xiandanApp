<template>
  <div>
    <index_head></index_head>
    <div class="nav_index">
      <router-link to="/list" class="wid">
        <div class="img_pice"><img :src="`${host}img/index/nav/product_sec.png`" alt=''></div>
        <p>商品分类</p>
      </router-link>

      <router-link to="/ordering" class="wid">
        <div class="img_pice"><img :src="`${host}img/index/nav/aboard.png`" alt=''></div>
        <p>海外直购</p>
      </router-link>
      <router-link to="#" class="wid">
        <div class="img_pice"><img :src="`${host}img/index/nav/shopping_first.png`" alt=''></div>
        <p>限时抢购</p>
      </router-link>
      <router-link to="#" class="wid">
        <div class="img_pice"><img :src="`${host}img/index/nav/group.png`" alt=''></div>
        <p>团团赚</p>
      </router-link>

    </div>
    <div class="nav_index nav-itme">
      <router-link to="#" class="wid">
        <div class="img_pice"><img :src="`${host}img/index/nav/tip.png`" alt=''></div>
        <p>咸蛋公告</p>
      </router-link>
      <router-link to="/personal" class="wid">
        <div class="img_pice"><img :src="`${host}img/index/nav/help.png`" alt=''></div>
        <p>个人中心</p>
      </router-link>
      <router-link to="#" class="wid">
        <div class="img_pice"><img :src="`${host}img/index/nav/collection.png`" alt=''></div>
        <p>我的收藏</p>
      </router-link>
      <router-link to="/order" class="wid">
        <div class="img_pice"><img :src="`${host}img/index/nav/order.png`" alt=''></div>
        <p>我的订单</p>
      </router-link>
    </div>
    <div class="title_msright">
      <!--2019/8/14 23:59 -->
      <!-- <span>距结束</span><span class="jieshuee" id="reverse" :data-time="new Date(products.shelf_time).toLocaleString()"> -->
      <span class="nav_today">今日咸鸭蛋</span><span class="jieshuee" id="reverse" data-time="2019/8/14 23:59">
        <em style="display:none">00</em> <span class="spandou" style="display:none">:</span>
        <em class="spannode">00</em> <span class="spandou">:</span>
        <em>00</em> <span class="spandou">:</span>
        <em>00</em>
      </span>
      <span class="title_router"><a href="#">更多></a></span>
    </div>
    <!-- 首页轮播图  -->
    <!-- <carousel :list=pics></carousel> -->
    <div class="index_car">
      <index_cars></index_cars>
    </div>
    <!-- 结束首页轮播图 -->
    <!-- 闪购.团购开始 -->
    <div class="title_msright title_two">
      <!--2019/8/14 23:59 -->
      <!-- <span>距结束</span><span class="jieshuee" id="reverse" :data-time="new Date(products.shelf_time).toLocaleString()"> -->
      <span class="nav_group">闪购.团购</span>
      <span class="title_router"><a href="#">更多></a></span>
    </div>
    <div class="nav_content">
      <div class="nav_article" v-for="(elem,i) of index1" :key="i">
        <router-link :to="elem.details">
          <img v-lazy.container="elem.details_img" alt="" />
          <h2 class="h2conm" v-text="elem.subtitle">荣耀V20 8GB+128GB 幻夜黑 移动联通电信4G全面屏手机 双卡双待</h2>
          <p class="com_width97" v-text="elem.coupons">输入蛋券sj07,满1000-30元,满3000-100元,数量有限,先到先得!</p>
          <p class="com_width98" v-text="`￥${parseInt(elem.price).toFixed(2)}`">￥259.00</p>
        </router-link>
      </div>
    </div>
    <!-- 闪购.团购结束 -->
    <!-- 开始抢购 -->
    <div class="title_msright title_two">
      <!--2019/8/14 23:59 -->
      <!-- <span>距结束</span><span class="jieshuee" id="reverse" :data-time="new Date(products.shelf_time).toLocaleString()"> -->
      <span class="nav_limit">限时抢购</span>
      <span class="title_router"><a href="#">更多></a></span>
    </div>
    <div class="nav_content" id="nactive_two">
      <div class="nav_article" v-for="(elem,i) of index2" :key="i">
        <router-link :to="elem.details">
          <img v-lazy.container="elem.details_img" alt="" />
          <h2 class="h2conm" v-text="elem.subtitle">荣耀V20 8GB+128GB 幻夜黑 移动联通电信4G全面屏手机 双卡双待</h2>
          <p class="com_width98">￥{{parseInt(elem.price).toFixed(2)}}<del>￥{{parseInt(elem.original).toFixed(2)}}</del>
          </p>
          <!-- 定时器 new Date(elem.shelf_time).toLocaleString()-->
          <p class="com_width97">
            <span>还剩</span>     <!--:id="`reverse${i+1}`"-->
            <span class="jieshuee"  :data-time="elem.shelf_time" ref="reverse">
              <em>00</em> <span class="spandou">天</span>
              <em>00</em> <span class="spandou">时</span>
              <em>00</em> <span class="spandou">分</span>
              <em>00</em> <span class="spandou">秒</span>
            </span></p>
        </router-link>
        <!-- 结束定时器 -->
      </div>
    </div>
    <!-- 结束抢购 -->
    <!-- 猜你喜欢开始 -->
    <div class="title_msright title_two">
      <span class="nav_like">猜你喜欢</span>
      <span class="title_router"><a href="#">更多></a></span>
    </div>
    <div class="nav_content">
      <div class="nav_article" v-for="(elem,i) of index3" :key="i">
        <router-link :to="elem.details">
          <img v-lazy.container="elem.details_img" alt="" />
          <h2 class="h2conm" v-text="elem.subtitle">荣耀V20 8GB+128GB 幻夜黑 移动联通电信4G全面屏手机 双卡双待</h2>
          <p class="com_width97" v-text="elem.coupons">输入蛋券sj07,满1000-30元,满3000-100元,数量有限,先到先得!</p>
          <p class="com_width98" v-text="`￥${elem.price}`">￥259.00</p>
        </router-link>
      </div>
    </div>
    <!-- 结束猜你喜欢 -->

    <!-- 特惠特价开始 -->
    <div class="title_msright title_two">
      <span class="nav_price">特惠特价</span>
      <span class="title_router"><a href="#">更多></a></span>
    </div>
    <div class="nav_content">
      <div class="nav_article" v-for="(elem,i) of index4" :key="i">
        <router-link :to="elem.details">
          <img v-lazy.container="elem.details_img" alt="" />
          <h2 class="h2conm" v-text="elem.subtitle">荣耀V20 8GB+128GB 幻夜黑 移动联通电信4G全面屏手机 双卡双待</h2>
          <p class="com_width97" v-text="elem.coupons">输入蛋券sj07,满1000-30元,满3000-100元,数量有限,先到先得!</p>
          <p class="com_width98" v-text="`￥${elem.price}`">￥259.00</p>
        </router-link>
      </div>
    </div>
    <!-- 特惠特价介绍 -->
  </div>
</template>
<script>
  import index_head from '../../components/index_head/Index_head'
  import Carousel from '../../components/lunbo/Carousel'
  import index_car from './Index_car'
  export default {
    data() {
      return {
        host: this.host, //域名
        pics: [//轮播图片
          { sm: 'http://wwwhui.applinzi.com/img/lunbotu/01.jpg' },
          { sm: 'http://wwwhui.applinzi.com/img/lunbotu/02.jpg' }
        ],
        index1: [], //团购
        index2: [],   //抢购
        index3: [],    //猜你喜欢
        index4: [],    //特惠特价 
        dingshiqi:0    //抢购  定时器的个数
      }
    },
    methods: {
      //今日好蛋
      brinobj(index) {
        var timer = null;//这里设置time为null，用于下面来清除计时器
        var obj = this.$refs.reverse[index];
       // console.log(obj);
        timer = setInterval(() => {//设置定时器，来更新时间 
          var a = obj.getAttribute("data-time");
          var b = new Date().getTime();//这是获取当前时间，是一个不固定的数值
          var d = 0, s = 0, h = 0, m = 0;//定义变量
          var ee = obj.getElementsByTagName("em")//获取布局中的em标签用于存取数据
          d = Math.floor((a - b) / 1000 / 60 / 60 / 24);//获取剩余天数
          h = Math.floor((a - b) / 1000 / 60 / 60 % 24);//获取剩余小时
          m = Math.floor((a - b) / 1000 / 60 % 60);//获取剩余分钟
          s = Math.floor((a - b) / 1000 % 60);//获取剩余秒数
          if (d < 10) {
            d = "0" + d
          } else if (d < 0) {
            d = 0
          }
          if (h < 10) {
            h = "0" + h
          } else if (h < 0) {
            h = 0
          }
          if (m < 10) {
            m = "0" + m;
          } else if (m < 0) {
            m = 0;
          }
          if (s < 10) {
            s = "0" + s;
          } else if (s < 0) {
            s = 0;
          }
          ee[0].innerHTML = d;
          ee[1].innerHTML = h;
          ee[2].innerHTML = m;
          ee[3].innerHTML = s;
          if (a <= b) {
            clearInterval(timer);
            obj.innerHTML = "";
          }
        }, 1000)
      },

      addw() {  //请求文件
        //    console.log(111);
        axios.get('./sss.html'
        ).then(res => { console.log(res) });
      },
      //获取团购数据 
      getindex_item1() {
        return new Promise((open, err) => {
          var url = 'index/indexTuan';
          this.axios.get(url).then(res => {
            //    console.log(res);
            this.index1 = res.data;
            //     console.log(res.data);
            //     console.log(1);
            open();
          })
        });
      },
      //获取抢购数据 
      getindex_item2() {
        return new Promise((open, err) => {
          var url = 'index/indexQiang';
          this.axios.get(url).then(res => {
           // console.log(res.data);
            this.index2 = res.data;
            this.dingshiqi=res.data.length;
            open();
          })
        });
      },
      //获取猜你喜欢数据
      getindex_item3() {
        return new Promise((open, err) => {
          var url = 'index/indexLove';
          this.axios.get(url).then(res => {
            //    console.log(res.data);
            //  console.log(2);
            this.index3 = res.data;
            open();
          })
        });
      },
      //获取特惠特价数据
      getindex_item4() {
        return new Promise((open, err) => {
          var url = 'index/indexprice';
          this.axios.get(url).then(res => {
            //    console.log(res.data);
            //    console.log(3);
            this.index4 = res.data;
            open();
          })
        });
      },
      goindex() {
    this.getindex_item1().then(() => {
   this.getindex_item2().then(() => {
   this.getindex_item3().then(() => {
  this.getindex_item4().then(() => {  //数据加载完再执行定时器，渲染问题。在updated()执行数据会不断更新，所以会执行多次调用多次。           
              for(var i=0;i<this.dingshiqi;i++){
                this.brinobj(i); //今日好蛋倒计时     
                this.brinobj(i); //今日好蛋倒计时
                this.brinobj(i); //今日好蛋倒计时 
                this.brinobj(i);
              }     
              })
            })
          })
        })
      },
      //首页定时器
      //今日咸鸭蛋
      brinobjindex(id) {
        var timer = null;//这里设置time为null，用于下面来清除计时器
        var obj = document.getElementById(id)//获取到放置时间数据的span的id
        timer = setInterval(function () {//设置定时器，来更新时间
          var a = new Date((obj.getAttribute("data-time"))).getTime();
          //上面这一步可能比较复杂，我们首先来看obj.getAttribute("data-time")这一句。这个是用来获取指定标签的data-time属性，
          //即我们要使用的到期时间，然后来看new Date().getTime(),这一句是用来获取我们所设置到期时间的时间戳，用于下面的计算，这个获取的是固定的数值
          var b = new Date().getTime();//这是获取当前时间，是一个不固定的数值
          var d = 0, s = 0, h = 0, m = 0;//定义变量
          var ee = obj.getElementsByTagName("em")//获取布局中的em标签用于存取数据
          d = Math.floor((a - b) / 1000 / 60 / 60 / 24);//获取剩余天数
          h = Math.floor((a - b) / 1000 / 60 / 60 % 24);//获取剩余小时
          m = Math.floor((a - b) / 1000 / 60 % 60);//获取剩余分钟
          s = Math.floor((a - b) / 1000 % 60);//获取剩余秒数
          //中间这块区域是用来判断，当前时间数值小于10的时候给他前面加个0，这里可以根据具体情况可加可不加，以下同理
          if (d < 10) {
            d = "0" + d
          } else if (d < 0) {
            d = 0
          }
          if (h < 10) {
            h = "0" + h
          } else if (h < 0) {
            h = 0
          }
          if (m < 10) {
            m = "0" + m;
          } else if (m < 0) {
            m = 0;
          }
          if (s < 10) {
            s = "0" + s;
          } else if (s < 0) {
            s = 0;
          }
          ee[0].innerHTML = d;
          ee[1].innerHTML = h;
          ee[2].innerHTML = m;
          ee[3].innerHTML = s;
          if (a <= b) {//当我们的时间到期的时候，清除计时器，然后把当前标签的内容设置为0；
            clearInterval(timer);
            obj.innerHTML = "";
            //    ee[0].innerHTML = 00;
            //    ee[0].innerHTML = 00;
            //   ee[1].innerHTML = 00;
            //    ee[2].innerHTML = 00;
          }
        }, 1000)
      }
    },
    mounted() {
      this.brinobjindex('reverse'); //今日好蛋倒计时
      //今日好蛋倒计时
      this.goindex();
     
      // setTimeout(()=>{
      // this.brinobj('reverse1');
      // this.brinobj('reverse2'); //今日好蛋倒计时
      //  this.brinobj('reverse3'); //今日好蛋倒计时
      //  this.brinobj('reverse4'); //今日好蛋倒计时 
      //   },2000)

      // this.brinobj('reverse2'); //今日好蛋倒计时
      //   this.brinobj('reverse3'); //今日好蛋倒计时
      // this.brinobj('reverse4'); //今日好蛋倒计时 
    },
    beforeUpdate() {
      // var obj=this.$refs;
      // console.log(obj);
      // var obj=document.getElementById('reverse2');
      // console.log(obj);
    },
    created: function () {
      //   // console.log(this.getindex_item1());
      //    window.addEventListener("touchmove",function(){console.log(1);});
    },
    //注册轮播子组件
    components: {
      "index_head": index_head,
      "carousel": Carousel,   //没用
      "index_cars": index_car,   //轮播组件
    }
  }


</script>

<style scoped lang="scss">
  @import "./index.scss";
  /*引用外部的scss文件  使用@import 就算样式写在后面也会被覆盖样式*/
</style>