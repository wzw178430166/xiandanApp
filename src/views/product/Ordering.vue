<template>
  <div>
    <headstd msg="小米"></headstd>
    <ul class="arrange">
      <li>
        <router-link to="#">价格<i id="arrange_up"></i></router-link>
      </li>
      <li>
        <router-link to="#">价格<i class="arrange_down"></i></router-link>
      </li>
      <li>
        <router-link to="#">评论<i class="arrange_discuss"></i></router-link>
      </li>
      <li>
        <router-link to="#">销量<i class="arrange_sales"></i></router-link>
      </li>
    </ul>
    <!-- @touchstart.stop="start"
        @touchmove.stop="move"
        @touchend.stop="end" -->
    <!--  :style="'transform:translateY('+top+'px);transition:.5s all'"-->
    <div class="content_div" ref="content_div">
      <div class="pro_box" v-for="(elem,i) of list" :key="i">
        <div class="clearfix">
          <router-link :to="elem.details">
            <img class="fl" v-lazy.container="elem.details_img" alt="Breo 倍轻松 颈椎按摩披肩">
          </router-link>
        </div>
        <div class="pro_brief">
          <router-link :to="elem.details">
            <p v-text="elem.subtitle" class="p1"></p>
            <p><span v-text="`¥${elem.price}`"></span></p>
            <p v-text="`库存：${elem.inventory_msg}`" class="p3"></p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Headstd from "../../components/header/Headstd";  //引入头部组件
  export default {
    data() {
      return {
        host: this.host,
        list: [],  //请求回来的商品
        pno: 0,  //页码
        // pno1: 2,
        ps: 8,   //页大小
        startY: 0,          // 保存 y轴点的位置
        touching: false,   // 代表当前是否处于 下拉刷新行为的开关，也就是当属于滚动行为时，就要退出该事件机制
        top: 0,
        endY: 0,
        startYy: 0,
        aa: 0,
        startPos: {},
        endPos: {}
      }
    },
    components: {
      "headstd": Headstd,
    },
    methods: {
      //获取商品列表数据
      /*
      getproduct(){
    var url='product/add';
   this.axios.get(url).then(res=>{  
   })
  },
  */
      start(e) {
        // e代表该事件对象，e.targetTouches[0].pageY可以拿到手指按下的 y轴点
        // console.log(e);
        let touch = e.targetTouches[0];
        this.startPos = { x: touch.pageX, y: touch.pageY, time: +new Date };    //取第一个touch的坐标值

        let start = touch.pageY;
        this.startYy = touch.pageY
        // console.log(start);
        //　　this.startY = e.targetTouches[0].pageY;
        // 开启下拉刷新状态
        this.touching = true;

      },

      move(e) {
        //这个 touchMove，只要页面在动都会发生的，所以 touching就起作用了
        // 如果 touching为false，说明这个正在移动的页面不是我们想要的下拉刷新，有可能是用户随意拉了一下页面而已，或者其他
        // if (!this.touching) return
        // 获取移动的距离
        // let diff = e.targetTouches[0].pageY - this.endY
        // console.log(this.aa)
        //判断是向上拉还是向下拉 
        // this.loaddibu()
        // 　　　　　　if(diff >600) { 
        // 　　　　　　　　e.preventDefault()
        //            this.loadMore().then(()=>{
        //        // this.loadMore2();
        //       })
        // 　　　　　　} else {
        // 　　　　　　　　return 　　
        // 　　　　　　}
        //这个this.top要对应绑定到该元素的transform: translateY(+top+ 'px')上，不然是无法拉动的
        // 因此这里还要对偏移高度做一下处理，直接设置diff +(this.state === 2 ? 40 : 0) 太快了，因为拉取幅度太大
        // 让diff*0.25这样子就差不多了
        // this.top = Math.floor(diff * 0.25) + (this.state === 2 ? 40 : 0)
        // if (this.top >= 50) {
        //   this.state = 1;   //代表正在拉取
        //   // this.top=20;
        // } else {
        //   this.state = 0  // 代表初始转态
        // }
      },

      end(e) {

        this.touching = false
        var touch = e.targetTouches[0];
        // this.endY=e.targetTouches[0].pageY;

        this.aa = this.endY - this.startYy;
        console.log(e.targetTouches[0])
        // console.log(touch.pageY)
        if (this.state === 2) {
          this.top = 40
          return
        }
        // 判断抬起时的高度，是大于40 就开启刷新
        if (this.top >= 50) {
          //　this.refresh()

        } else {
          this.state = 0
          this.top = 0
        }
      },
      /*
      move:function(event){
                  //当屏幕有多个touch或者页面被缩放过，就不执行move操作
                  if(event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;
                  var touch = event.targetTouches[0];
                  this.endPos = {x:touch.pageX - this.startPos.x,y:touch.pageY - this.startPos.y};
                var  isScrolling = Math.abs(this.endPos.x) < Math.abs(this.endPos.y) ? 1:0;    //isScrolling为1时，表示纵向滑动，0为横向滑动
                  if(isScrolling === 1){
                      event.preventDefault(); 
                      console.log(this.endPos.y-this.startPos.y);
      
                  }
              },
              */
      loadMore() {  //加载更多的数据
        //this.pno;
         return new Promise((open, err) => {
        this.pno++;
      //  console.log(this.pno);
        var obj = { pno: this.pno, pageSize: this.ps };
        //5.发送ajax 请求
        var url = "product/paging";   //传参
        // var obj={uname:u,upwd:p};//uname跟数据库一样
        this.axios.get(url, { params: obj }).then(result => {  //get(url,{params:obj}) 发送请求，请求带参数（params.对象）
          //双向绑定  数据覆盖
          // console.log(result.data.data);
          // this.list=result.data.data;
          var rows = this.list.concat(result.data.data); //当前第一页跟第一页合拼数组，再次点击加1，第一页跟第二页合并。。。。。然后添加到页面
          this.list = rows;
           open();
          //  console.log(1);       
         // console.log(result.data.data);
        })
         });
      },
      /*
      loadMore2(){  //加载更多的数据
       return new Promise((open,err)=>{ 
      //this.pno++;
      //this.pno1;
      var obj={pno:this.pno1,pageSize:this.ps};
            //5.发送ajax 请求
     var url ="product/paging";   //传参
    // var obj={uname:u,upwd:p};//uname跟数据库一样
     this.axios.get(url,{params:obj}).then(result=>{  //get(url,{params:obj}) 发送请求，请求带参数（params.对象）
     //双向绑定  数据覆盖
      // console.log(result.data.data);
     // this.list=result.data.data;
       var rows=this.list.concat(result.data.data); //当前第一页跟第一页合拼数组，再次点击加1，第一页跟第二页合并。。。。。然后添加到页面
         this.list=rows;
         open();
         console.log(result);
       //  console.log(2);
      }) 
   }) 
      }
      */
      loaddibu() {
        var loadBottom = document.documentElement.scrollTop + document.documentElement.clientHeight == document.documentElement.scrollHeight;
        //console.log(loadBottom)
        if (loadBottom) {
          this.loadMore()
        }
      }
    },
    created: function () {
      //  this.getproduct()   //获取商品列表数据
      this.loadMore().then(() => {
        // this.loadMore2();
      })
    },
    mounted() {
      window.addEventListener('touchstart', this.start, { passive: false });
      window.addEventListener('touchmove', this.move);
      window.addEventListener('touchend', this.end);
      // console.log(document.documentElement)
      window.addEventListener("scroll", this.loaddibu)
      //   window.addEventListener('scroll', () => {
      //       console.log(window.scrollTop);
      // })
    },
    watch: {
      // console.log();
    },
  }
</script>

<style lang="scss" scoped>
  @import './Ordering.scss'
</style>