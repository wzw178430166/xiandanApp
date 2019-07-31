<template>
 <div>

   <h1>测试</h1>   


 </div>
</template>
<script>
import {dictionaries1,dictionaries2,bubbling} from '../../../public/statis/toole'
export default {
    data(){
        return {
           
        }
    },
    methods:{
      
    },
    created(){
     //  var aae=dictionaries1('hellow World');
      // var arr=[1,3,1,5,1,5]
      // dictionaries2(arr); 
      console.log( bubbling([1,3,1,5,1,5]));
    }

}


</script>

<style scoped>
     .aa{background:#f00!important;}
</style>