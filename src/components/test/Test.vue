<template>
 <div>

   <h1>测试</h1>   


 </div>
</template>
<script>
import {dictionaries1,dictionaries2,bubbling,ajax} from '../../../public/statis/toole'
export default {
    data(){
        return {
           
        }
    },
    methods:{
          getdetailsOne:function(){
            return new Promise(function(open,err){         
              ajax({url:'http://127.0.0.1:5050/details',type:'get',dataType:'json',data:'lid=1'})
          })
     .then(res=>{
         setTimeout(function(){console.log(res)},3000) 
    })
          },
    },
    created(){
     //  var aae=dictionaries1('hellow World');
      // var arr=[1,3,1,5,1,5]
      // dictionaries2(arr); 
   
     // console.log( bubbling([1,3,1,5,1,5]));
       // ajax({url:'http://127.0.0.1:5050/details',type:'get',data:'lid=1',dataType:'json'}).then(res=>{console.log(res)})
   
    ajax({url:'http://127.0.0.1:5050/details/add',type:'get'}).then(res=>{alert(res)})

    ajax({url:'http://127.0.0.1:5050/details',type:'get'}).then(res=>{console.log(res)})
    }

}


</script>

<style scoped>
     .aa{background:#f00!important;}
</style>