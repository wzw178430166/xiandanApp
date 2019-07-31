<template>
    <div class="myhead">
         <div class="head_logo"></div>  
         <div>
         <mt-search v-model="searchs" cancel-text="取消" placeholder="搜索">
           </mt-search>
           </div>
         <div class="nav-itmes">
          <div class="nav_lists"></div>
         </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            searchs:'',
        }
    }
}
</script>

<style scoped lang="scss">
@import "./title_head.scss"; //引用外部的scss文件
   
</style>
     
