# xiandanapp
## Project setup
```
npm install    下载模块
npm run serve   启动脚手架
npm run build   打包脚手架
```
#/*全局变量*/
this.host="http://127.0.0.1:5050/"   使用this.host域名 方便以后上线   html和js
$host:"http://127.0.0.1:5050/";       使用$host  样式使用scss变量
改配置文件，部署上新浪云

#引入脚部scss样式文件    
 @import "../footers";   components/footer/footert

 #需要引入头部组件的，当前组件需要  头部margin-top：2.7rem    搜索index_head 3.4rem

    #-64px -138px;}    -64宽w -138高h