<template>
  <div class="conternt">
   <headstd msg="商品详情"></headstd>
    <div class="nav_list">
      <ul>
          <li v-for="(elem,i) of list" :key="i" @click="fun(i,elem)" :class='i==active?"list_active":""'>{{elem}}</li>
      </ul>
    </div>
    <div class="content_msg">
       <mt-tab-container v-model="content">
          <mt-tab-container-item id="商品介绍">    
         <p class="con_title" v-text="products.subtitle"></p>
         <p class="msgimg" v-for="(elem,i) of pics" :key="i"><img :src="elem.sm" alt=""></p>
        
          </mt-tab-container-item>
          <mt-tab-container-item id="参数">
           <div class="canshu">
             <table class="cantab" cellspacing="1" cellpadding="0">
               <tr>
                 <th colspan="2" class="titeletab">主体</th>
               </tr>
               <tr>
                 <th>品牌</th>
                 <td v-text="specs.vamp"></td>
               </tr>
               <tr>
                 <th>型号</th>
                 <td v-text="specs.product_ID"></td>
               </tr>
               <tr>
                 <th colspan="2" class="titeletab">规格</th>
               </tr>
               <tr>
                 <th>类别</th>
                 <td v-text="specs.closed"></td>
               </tr>
               <tr>
                 <th>适用人群</th>
                 <td>{{sex|sexFilter}}</td>
               </tr>
               <tr>
                 <th>色系</th>
                 <td v-text="specs.actions"></td>
               </tr>
               <tr>
                 <th>具体尺寸</th>
                 <td>30*15*46cm</td>
               </tr>
             </table>
           </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="售后服务">
            <div class="pro_ser" style="display: block;">
              <table class="pro_table_t1 mb40" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tbody>                                  
                        <tr><th class="title bxtk_cnt_title" colspan="2">品牌保修信息：</th></tr>     
                        <tr><th colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;</th></tr>   
                        <tr><th class="th_all bxtk_cnt" colspan="2"><ul><li>该商品保修期为软箱1年、硬箱3年。</li><li>本产品全国联保，享受三包服务，质保期为：7天。如因质量问题或故障，凭厂商维修中心或特约维修点的质量检测证明，享受7日内退货，15日内换货，15日以上在质保期内享受免费保修等三包服务！</li><li> 售后服务电话：（4008206065）</li><li> 品牌官方网站：<a href="http://www.diplomat.com.cn/" target="blank" title="Microsoft" style="color: #f60;">http://www.diplomat.com.cn/</a></li><p></p><li> 注：因产品批次不同，如客户收到的货物与网站图片、包装信息不一致，请以产品包装信息为主。新蛋只能确保为原厂正品！若产品信息未能及时更新，请谅解！</li></ul></th></tr>  
                        <tr><th colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;</th></tr>                    
                        <tr><th class="title" colspan="2">新蛋标准售后政策</th></tr>      
                        <tr><th colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;</th></tr>   
                        <tr>
                            <th class="th_all" colspan="2">
                                <p></p><ul>
            <li>退货期限：自收到商品起7日内可退货</li>
            <li>换货期限：自收到商品起15日内可换货</li>
            </ul><p></p>
                                <p>1. 如商品出现国家《三包》法规中所规定的非人为质量问题，符合以下条件，可申请退货或换货：<br>
            A.在7日内（退货）或15日内（换货）至生产厂商的售后服务中心开具证明商品有质量问题的检测报告（如售后服务中心无法提供检测报告，则需提供商品检测或故障单）<br>
            B.商品外包装完整未损坏，商品及其标配配件、赠品（如购买时有赠品）、说明书、保修凭证和发票均齐全（如申请退换货的商品为成套商品中的一个商品如礼盒、礼包，则需退回此整套商品）<br>
            2. 如商品无质量问题并符合以下条件，自客户收到商品起7日内可申请退货：<br>
            A. 商品未拆封使用，依旧保持新蛋网出售时的原质原样，不影响新蛋网第二次销售；<br>
            B. 商品外包装完整未损坏，商品及其标配配件、赠品（如购买时有赠品）、说明书、保修凭证和发票均齐全（如申请退货的商品为成套商品中的一个商品如礼盒、礼包等，则需退回此整套商品）<br>
            3.苹果商品除外</p>
                            </th>
                        </tr>             
                        <tr><th colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;</th></tr>         
                        <tr><th class="title" colspan="2">品牌信息</th></tr>
                        <tr><th colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;</th></tr>   
                        <tr>
                            <th class="th_all" colspan="2">
                                <a class="minorFunc" href="https://www.newegg.cn/Search.aspx?keyword=%e5%a4%96%e4%ba%a4%e5%ae%98" title="外交官(Diplomat)">
                                    [查看外交官(Diplomat)的其他商品]
                                </a>
                            </th>
                        </tr>
                    
                </tbody>
              </table>
            </div>

          </mt-tab-container-item>
       </mt-tab-container>
       </div>
       <div class="tabarr">
        <span class="tabarint"><router-link to="/Index">首页</router-link></span>
        <span><router-link to="/cart">购物车 <mt-badge size="small" class="item_ee" color="red">{{$store.getters.getCartCount}}</mt-badge></router-link></span>
        <span @click="adds">加入购物车</span>
    </div>
  </div>
</template>

<script>

 import Headstd from "../../components/header/Headstd";  //引入头部组件
export default {
      data(){
            return {
                  host:this.host,
                  active:0,
             list:['商品介绍','参数','售后服务'],
                  content:"商品介绍",
                  products:'',
                  specs:'',
                  pics:'',
                  sex:0 ,   //过滤性别
            }
      },
       components:{
     "headstd":Headstd
    },
    methods:{
            fun(n,c){
        this.active=n;
        this.content=c;
      }
      ,
      adds(){
        this.$toast({
                    message:"请先选择规格",//内容
                    position:"middle",   //位置
                    duration:3000,     //时间
                    className:"specificationtt",//添加样式
                    iconClass:"iconfont icon-guige"
                    });
                    this.$router.go(-1)
      },
      getlunbo(){   //图片
        this.axios.get('details/lunbo',{params:{lid:this.$route.query.lid}}).then(res=>{
         this.pics=res.data;
         });
       },

      getdetails(type){
            //发送请求商品的详情信息
    this.axios.get('details/',{params:{lid:this.$route.query.lid}}).then(res=>{
        console.log(res.data)
         this.products=res.data.products;
         var oldVal=res.data.specs[0].sex; //取出性别
         this.sex=oldVal; 
         this.specs=res.data.specs[0];
         });
       },
    },
    created() {
      this.getdetails();
      this.getlunbo();
    },
  
}
</script>

<style lang="scss" scoped>
  @import "./Mydelist.scss"

</style>