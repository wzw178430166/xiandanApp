<template>
      <div>
                  <div class="title_msright title_two"><!--2019/8/14 23:59 -->
                        <!-- <span>距结束</span><span class="jieshuee" id="reverse" :data-time="new Date(products.shelf_time).toLocaleString()"> -->
                           <span class="nav_group">今日特价</span>
                        <span class="title_router"><a href="#">更多></a></span>
                    </div>
            <div class="rm-lesson-wrap">
                  <!-- 在子元素的touchxx事件加入修饰符.stop阻止事件冒泡 -->
                  <div
                    class="rm-lessons"
                    data-notice="for this"
                    @touchstart.stop="start"
                    @touchmove.stop="move"
                    @touchend.stop="end"
                    :style="'transform:translateX('+changeX+'px);transition:.5s all'"
                  >
                    <!-- 活动1 -->
                    <div class="rm-lesson-item">
                        <router-link to="/details?lid=11">
                      <img :src="`${host}img/details/lunbotu/17.1.jpg`" alt>
                      <div class="lesson-info">
                        <span class="lesson-name">{{"Goldlion 金利来 男士皮带"}}</span>
                        <span class="lesson-msg">{{"经典时尚牛皮自动扣"}}</span>
                        <span class="lesson-date">499.00</span>
                      </div>
                     </router-link>
                    </div>
    
                    <!-- 活动2 -->
                    <div class="rm-lesson-item">
                        <router-link to="/details?lid=12">
                      <img :src="`${host}img/details/lunbotu/18.1.jpg`" alt>
                      <div class="lesson-info">
                        <span class="lesson-name">{{"EDIFIER 漫步者 B3 高素质的电视音响"}}</span>
                        <span class="lesson-msg">{{"千元内杀手级全功能SOUNDBA"}}</span>
                        <span class="lesson-date">{{"699.00"}}</span>
                      </div>
                    </router-link>
                    </div>
    
                    <!-- 活动3 -->
                    <div class="rm-lesson-item">
                        <router-link to="/details?lid=13">
                      <img :src="`${host}img/details/lunbotu/19.1.jpg`" alt>
                      <div class="lesson-info">
                        <span class="lesson-name">{{"GUESS美国盖尔斯 新款时尚欧美字"}}</span>
                        <span class="lesson-msg">{{"新款时尚欧美字母印"}}</span>
                        <span class="lesson-date">{{"99.00"}}</span>
                      </div>
                    </router-link>
                    </div>

                         <!-- 活动2 -->
                         <div class="rm-lesson-item">
                            <router-link to="/details?lid=14">
                              <img :src="`${host}img/details/lunbotu/11.1.jpg`" alt>
                              <div class="lesson-info">
                                <span class="lesson-name">{{"WD 西部数据 红盘 2TB NAS专用硬盘"}}</span>
                                <span class="lesson-msg">{{"输入蛋券sj07,满1000-30元"}}</span>
                                <span class="lesson-date">{{"129.00"}}</span>
                              </div>
                            </router-link>
                            </div>
                            <div class="rm-lesson-item">
                              <router-link to="/details?lid=14">
                                <img :src="`${host}img/details/lunbotu/16.1.jpg`" alt>
                                <div class="lesson-info">
                                  <span class="lesson-name">{{"WD 西部数据 红盘 2TB NAS专用硬盘"}}</span>
                                  <span class="lesson-msg">{{"输入蛋券sj07,满1000-30元"}}</span>
                                  <span class="lesson-date">{{"129.00"}}</span>
                                </div>
                              </router-link>
                              </div>
                              <div class="rm-lesson-item">
                                <router-link to="/details?lid=13">
                              <img :src="`${host}img/details/lunbotu/13.1.jpg`" alt>
                              <div class="lesson-info">
                                <span class="lesson-name">{{"GUESS美国盖尔斯 新款时尚欧美字"}}</span>
                                <span class="lesson-msg">{{"新款时尚欧美字母印"}}</span>
                                <span class="lesson-date">{{"99.00"}}</span>
                              </div>
                            </router-link>
                            </div>
                            <div class="rm-lesson-item">
                              <router-link to="/details?lid=13">
                            <img :src="`${host}img/details/lunbotu/11.1.jpg`" alt>
                            <div class="lesson-info">
                              <span class="lesson-name">{{"GUESS美国盖尔斯 新款时尚欧美字"}}</span>
                              <span class="lesson-msg">{{"新款时尚欧美字母印"}}</span>
                              <span class="lesson-date">{{"99.00"}}</span>
                            </div>
                          </router-link>
                          </div>
                  </div>
                </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
          host:this.host,
        //selected: "start",
      // 触摸拖动状态值
      startX: 0,
      endX: 0,
      // 盒子在页面上的偏移量
      finallymove: 0,
      changeX:0,
      prepX:0
    };
  },
  computed: {
    moveX() {
      let moveX = this.endX - this.startX + this.finallymove;
      return moveX;
    }
  },
  watch: {
    moveX(val) {
      if (val <= -50) {
        val = -50;
      } else if (val > 0) {
        val = 0;
      }
      this.finallymove = val;
     // console.log(this.finallymove);
    }
  },
  methods: {
    start(e) {
      let touch = e.targetTouches[0];
      let start = touch.pageX;
      this.startX = start;
      this.prepX = start
      //console.log('手指放下的位置'+this.startX);
    },
    move(e) {
      let touch = e.targetTouches[0];
      let end = touch.pageX;
      if (end > 350) end = 350;
      if (end < 30) end = 0;
      //  console.log('手指移动的距离'+end);
      this.endX = end;
      this.changeX+=this.endX-this.prepX;
      this.prepX=touch.pageX;
    },
    end(e) {
       console.log(this.changeX);
       if(this.changeX>0){
        this.changeX=0;
       }
       if(this.changeX<-944){
        this.changeX=-944;
       }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./sport.scss"
</style>