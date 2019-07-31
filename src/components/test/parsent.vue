<template>
 <div>
   <h1>我是父组件可以接收子组件的数据</h1>
    <div id="counter-event-example"></div>
    <p>{{total}}</p>
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <div class="aaww0">住附近
      <span>woj而非</span>
    </div>
 </div>
</template>
<script>
 import ButtonCounter from "./children";  //引入轮播子组件
export default {
    name:'index',
    data(){
        return {
           total:0
        }
    },
    methods:{
        add(){
          console.log(1111);
        },
        incrementTotal(){
              //this.total+=2;
              this.total++;
        }
      
    },
 //注册轮播子组件
  components:{
    'button-counter':ButtonCounter
  }
}


</script>

<style >
   /* .aaww0{background:red;
    span{background:blue;}
   }
lang="scss" scoped */
</style>
