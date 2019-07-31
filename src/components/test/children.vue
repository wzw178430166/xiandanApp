<template>
 <div>
 
   <h1>我是子组件</h1>
    <button @click="incrementCounter">{{counter}}</button>
     <div class="content">主键
       <span>啥</span>
     </div>

 </div>
</template>
<script>
export default {
    name:'button-counter',
    data(){
        return {
           counter:0
        }
    },
    methods:{
      incrementCounter(){
          this.$emit('increment');
          this.counter++;
      }
    },
 //注册轮播子组件
  components:{
  
  }
}


</script>

<style scoped>
     .aa{background:#f00!important;}
</style>