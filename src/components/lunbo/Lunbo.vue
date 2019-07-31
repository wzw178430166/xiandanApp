<template>
 <div>
   <h1>轮播子组件</h1>
   <h3>{{msg}}</h3>                         <!--从父组件传过来的-->
   <img :src="img_url" />                   <!--从父组件传过来的-->
   <button @click="add3">点击事件</button>  <!--从父组件传过来的-->
 </div>
</template>
<script>
export default {
    props:{
        msg:{default:""},  //声明接收父组件数据
        img_url:{default:""},   //信息
        add3:{type:Function}   //函数
    },  
    //要在data上写
    data(){
        return {
           
        }
    },
    methods:{
  
    }
}
</script>

<style scoped>
     .aa{background:#f00!important;}
</style>