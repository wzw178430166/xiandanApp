<template>
 <div>
    <headstd :msg="products.title"></headstd>
    <carousel :list='pics' class="carouset"></carousel>
    <p class="markingts"></p>
    <div class="announcement">
        <div class="announcement_div"><img :src="`${host}img/details/announcement.gif`" alt="" class="announcement_img"/></div>
        <p class="announcement_msg" v-text="products.announcement">GUESS美国盖尔斯 新款时尚欧美字母印花女士手包小号手拿包手抓包晚宴包化妆包多功能包 白色</p>
    </div>
     <div class="information">
       <div class="int-top">
           <div class="ht-int" v-text="`￥${parseInt(products.price).toFixed(2)}`"></div>
           <div class="ht-nte">
               <span><router-link to="#"><img :src="`${host}img/details/collection.jpg`" alt=""/></router-link></span>
               <span><router-link to="#"><img :src="`${host}img/details/share.jpg`" alt=""/></router-link></span>
           </div>
       </div>
       <div class="int-bottom">
           <h2 v-text="products.subtitle"></h2>
           <p><img :src="`${host}img/details/noSevenDay.png`" alt=""></p>
       </div>
     </div>     
       <p class="markingts"></p>
       <div class="particulars">
          <p><router-link to="#">商品详情<span>></span></router-link></p>
         <p><router-link to="#">商品评论<span>></span></router-link></p>
      </div>
        <p class="markingts"></p>
        <div class="specification">
          <div class="port" v-if="sizes[0]!==null">
              <span v-text="products.model">端口：</span>
              <div class="port_item">
                  <span v-for="(elem,i) of sizes" :key="i" v-if="elem!=null" :class="action==i?'port_active':''" @click="changestyle(i,elem)">
                      {{elem}}
                  </span>
              </div>
          </div>
            <div class="port" v-if="velocity[0]!==null">
              <span v-text="products.model2">速度</span>
              <div class="port_item speed">
                  <span v-for="(elem,i) of velocity" :key="i" v-if="elem!=null" @click="changVe(i,elem)" :class="avite==i?'speed_active':''">
                      {{elem}}
                  </span>
              </div>
          </div> 
           <div class="port">
              <span>数量：</span>
              <div class="act_wrap" @click="zengjia">
                    <span ref="span1">-</span><input class="num" value="1" id="buyQty" readonly="" v-model="nums"><span>+</span>
                </div>
          </div> 
            <div class="port">
              <span>库存：</span>
              <div class="port_item inventory">
                  <span v-text="products.inventory_msg">接受预定(备货时间依据当前货源情况而定)</span>
              </div>
          </div> 
        </div>
         <p class="markingts"></p>
          <p class="merchant">归属商家：中国咸蛋网</p>
           <p class="markingts"></p>
         <div class="tabarr">
              <span class="tabarint"><router-link to="/Index">首页</router-link></span>
              <span><router-link to="/cart">购物车 <mt-badge size="small" class="item_ee" color="red">{{$store.getters.getCartCount}}</mt-badge></router-link></span>
              <span @click="adds">加入购物车</span>
          </div>
 </div>
</template>
<script>
 import Headstd from "../../components/header/Headstd";  //引入头部组件
 import Carousel from './Carousel' 
export default {
    data(){
        return {
            host:this.host,
          pics:[                  //轮播图片   
             /*  {sm:'http://127.0.0.1:5050/img/lunbotu/01.jpg'},
                {sm:'http://127.0.0.1:5050/img/lunbotu/02.jpg'}*/
            ], 
            sizes:[],            //端口类型 
            action:"aa",    // 端口样式
            velocity:[],   //速度
            avite:'bb',       //速度样式
            nums:1,        //商品数量
            products:[],   //商品信息
            flag:true,        //加入购物车开关
            lid:0,          //当前商品的ID
            details_img:'',   //当前商品的图片
            price:'',            //当前的价格
            uid:this.$store.getters.getuid,  //当前登录的用户
            subtitle:'',          //商品标题
            model_title1:'',    //商品型号1
            model_title2:'',    //商品型号2
            details:''
        }
    },
    methods:{
        zengjia(e){ //点击增加减少数量
          var tar=e.target;
          var zheng=-1;
          var jia=1;
              if(tar.nodeName==="SPAN"){
                if(this.nums<=1){
                   // this.$toast('最少一件商品')
                    //this.$refs.span1.style.background="#0000";  
                  //  console.log(this.$refs.span1);
                    zheng=0;
                  }else{
                      zheng=-1;
                     // this.$refs.span1.style.background='#ededed';
                  }  
                  this.nums+=tar.innerHTML=="-"?zheng:jia;
              }
              //if(this.nums<1){  this.$toast('最少一件商品')}
      },
        changVe(n,item){   //改变速度类型样式    //可以发请求同一件商品的另外一个颜色的商品
           // console.log(item);
            sessionStorage.setItem("model2",item);
            for(var i=0;i<this.velocity.length;i++){
                if(n==i){
                    this.avite=n;
                }
            }
        },
        changestyle(n,item){  //改变端口类型样式
          //  console.log(item);
            sessionStorage.setItem("model",item);
                for(var i=0;i<this.sizes.length;i++){
                    if(n==i){
                        this.action=n;
                    }
                }
        },
        getdetails(type){
            //发送请求商品的详情信息
    this.axios.get('details/',{params:{lid:this.$route.query.lid}}).then(res=>{
        console.log(res.data)
         this.products=res.data.products;
         this.specs=res.data.specs;
         var sizes=res.data.size; //把对象转为数组
         var velocitys=res.data.velocity;
         this.lid=res.data.products.lid;
         this.price=res.data.products.price;
         this.details_img=res.data.products.details_img;
         this.subtitle=res.data.products.subtitle;
         this.model_title1=res.data.products.model;
         this.model_title2=res.data.products.model2;
         this.details=res.data.products.details;
        var arr=[];
        var arr1=[];
        //端口
        for(var i in sizes[0]){
            arr.push(sizes[0][i]);
        }
        this.sizes=arr;
        //速度
        for(var i in velocitys[0]){
            arr1.push(velocitys[0][i]);
        }
        this.velocity=arr1;
         });
       },
       //请求商品详情轮播
       getlunbo(){
        this.axios.get('details/lunbo',{params:{lid:this.$route.query.lid}}).then(res=>{
       // console.log(res.data)
         this.pics=res.data;
         });
       },
       //发送请求加入购物车
       adds(){    //保存尺寸在客户端方便取出来     //加入购物车
           if(this.flag){
               this.flag=false;
                 setTimeout(()=>{  this.flag=true; },2000)   //防止频繁加入购物车
          var  model=sessionStorage.getItem("model");
          var  model2=sessionStorage.getItem("model2");
          var  id=this.uid;
          var  lid=this.lid;
          var  price=this.price;
          var details_img=this.details_img;
          var subtitle=this.subtitle;
          var model_title1=this.model_title1;
          var model_title2=this.model_title2;
          //console.log(details_img);
         // console.log(model2);
         if(model!=undefined||model2!=undefined||this.velocity[0]===null||this.sizes[0]===null){
             //加入购物车
       this.axios.get('shopping/add',{params:{'id':id,'lid':lid,'model':model,'model2':model2,'price':price,'details_img':details_img,'title':subtitle,'numcart':this.nums,'model_title1':model_title1,'model_title2':model_title2,'details':this.details}}).then(res=>{
          // console.log(res)
             if(res.data.code>0&&this.$store.getters.logging){  //res.data.code>0&&
                this.$toast({
                    message:"加入购物车成功",//内容
                    position:"middle",   //位置
                    duration:3000,     //时间
                   // className:"mytoast",//添加样式
                    iconClass:"iconfont icon-jiaruchenggong"
                    });
                this.$store.commit("increment");
            }else{
                this.$toast({
                    message:"请先登录",//内容
                    position:"middle",   //位置
                    duration:3000,     //时间
                    className:"mydenglu",//添加样式
                    iconClass:"iconfont icon-denglu"
                    }); 
            }
       }).catch(err=>{console.log(err);
       });
               }else{
               //请选择码数  做一个弹框用mint-ui
              this.$toast({
                    message:"请先选择规格",//内容
                    position:"middle",   //位置
                    duration:3000,     //时间
                    className:"specificationtt",//添加样式
                    iconClass:"iconfont icon-guige"
                    });
       
               }
                
              }
              
         },
         //结束加入购物车
    },
    created:function(){
        this.getdetails();      
    },
    components:{
     "headstd":Headstd,
      "carousel":Carousel
    },
    mounted:function(){
        this.getlunbo();
        //console.log(this.$route.path);
    }
}


</script>

 <style lang="scss" scoped>
  @import "./details.scss"
 </style>
 