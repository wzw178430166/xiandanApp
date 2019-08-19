<template>
 <div>

   <h1>测试</h1>   


 </div>
</template>
<!-- <script src="http://127.0.0.1:5050/user/test?callback=show"></script> -->
<script>
import {dictionaries1,dictionaries2,bubbling,ajax} from '../../../public/statis/toole'
export default {
    data(){
        return {
           
        }
    },
    methods:{
        show(res){
          console.log(res);
        }
      /*
          getdetailsOne:function(){
            return new Promise(function(open,err){         
              ajax({url:'http://wwwhui.applinzi.com/details',type:'get',dataType:'json',data:'lid=1'})
          })
     .then(res=>{
         setTimeout(function(){console.log(res)},3000) 
    })
          },
     fun:function(){
      return new Promise(function(res,err){
         setTimeout(()=>{
           console.log('第一个定时器');
           res();
         })
       },1000);
     },
     fun1:function(){
       return new Promise(function(res,err){
           setTimeout(()=>{
             console.log('第二个定时器');
             res();
           },3000)
       })
     },
     fun2:function(){
       return new Promise(function(res,err){
         setTimeout(()=>{
           console.log('第三个定时器');
           res()
         },4000)
       })
     },
     goin:function(){
       this.fun().then(this.fun1().then(this.fun2()))
     }

      */
        
    },
    created(){
      //this.goin();  //链式调用异步请求，排队执行
     //  var aae=dictionaries1('hellow World');
      // var arr=[1,3,1,5,1,5]
      // dictionaries2(arr); 
   
     // console.log( bubbling([1,3,1,5,1,5]));
       // ajax({url:'http://wwwhui.applinzi.com/details',type:'get',data:'lid=1',dataType:'json'}).then(res=>{console.log(res)})
   
   // ajax({url:'http://wwwhui.applinzi.com/details/add',type:'get'}).then(res=>{alert(res)})

   // ajax({url:'http://wwwhui.applinzi.com/details',type:'get'}).then(res=>{console.log(res)})
    }

}


</script>

<style scoped>
     .aa{background:#f00!important;}
</style>