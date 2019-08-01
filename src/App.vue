<template>
 <div class="app-container">
    <router-view></router-view>
 </div>
</template>

<script>
export default {
    data(){
       return {
          foots:document.body.clientHeight
       }
    },
    mounted:function(){
      console.log(document.body.clientHeight);
    } 
}
</script>

<style>
.marking{width:100%;height: 1rem;background-color: #DFDFDF;}
.mint-swipe-indicators{left: 90%!important;}
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
