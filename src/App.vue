<template>
 <div class="app-container">
    <div class="conterst" id="conterst" ref="conterst" v-show="btnFlag" @click="backTop"></div>
    <router-view></router-view>
 </div>
</template>

<script>
export default {
    data(){
       return {
         btnFlag:false,
          foots:document.body.clientHeight
       }
    },
    methods:{
      tiao(){console.log(1)
         var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
         console.log(scrollTop);
         scrollTop=0;
      }
      ,
      // 点击图片回到顶部方法，加计时器是为了过渡顺滑
  backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
  },
 
  // 回到顶部显示隐藏
  scrollToTop () {
    const that = this
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    that.scrollTop = scrollTop
    if (that.scrollTop > 160) {
      that.btnFlag = true
    } else {
      that.btnFlag = false
    }
  }

    },
    mounted:function(){
      window.addEventListener('scroll',this.scrollToTop) 
    //  console.log(document.body.clientHeight);
    } 
    ,
    destroyed () {
  window.removeEventListener('scroll', this.scrollToTop)
},
    watch:{
   
    }
}
</script>

 <style>
  .specificationtt{
    width:100px !important;height:100px !important;
    font-size:15px!important;
    border:1px solid #333!important;
}
   .conterst{width:40px;height:40px;background:url('img/back_top.png') center center;position: fixed;bottom:130px;border-radius: 50%;right: 1.5rem;}
.mint-field-core{border:1px solid #999797!important;border-radius: 5px!important;padding: 5px!important;}
.mint-cell-title{text-align: center!important;}
.mint-swipe-indicators{left: 80%!important;}
.marking{width:100%;height: 1rem;background-color: #DFDFDF;}
.mint-swipe-indicator.is-active{background-color:#FF4600!important;}
.mint-swipe-indicator{background: #CCCCCC!important;opacity: 1!important;}
   .mint-searchbar{background-color:#FF9C26!important;}
   .app-container{
     padding-top:0px;
     padding-bottom:0px;
     overflow-x:hidden;
   }
 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;
}
</style>
