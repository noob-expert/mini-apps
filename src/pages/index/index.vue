<template>
  <div class="index-container">
    <swiper
      :indicator-dots="!isShow"
      autoplay
      indicator-color="pink"
      indicator-active-color="green"
      @change="itemChange"
    >
      <swiper-item>
        <img src="/static/images/index/book1.jpg" alt="" />
      </swiper-item>
      <swiper-item>
        <img src="/static/images/index/book2.jpg" alt="" />
      </swiper-item>
      <swiper-item>
        <img src="/static/images/index/book3.jpg" alt="" />
      </swiper-item>
      <swiper-item>
        <img src="/static/images/index/book4.jpg" alt="" />
      </swiper-item>
    </swiper>
    <button 
    v-show="isShow"
    class="btn" @click="btnClick">开始体验</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        isShow:false
    };
  },
  methods:{
      itemChange(e){
          if(e.mp.detail.current==3){
              this.isShow=true;
            //   this.$refs.swiper.indicatordots="false"  --去掉小圆点，该方式不生效
          }else{
              this.isShow=false
          }
      },
      // 点击跳转事件
      btnClick(){
        // navigateTo无法跳转tab界面，需要修改为switchtab
        wx.switchTab({
          // 跳转时的路径要选择到根路径下，与在app.json中不同
          url: '/pages/detail/main',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
      }
  }
};
</script>

<style>
/* 在子页面中，如果这里设置<style scoped>会找不到page，
因为只在当前页面生效，而page是全局的，
所以要不去掉scoped，要不放在全局App.vue中 */
.index-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.index-container swiper {
  width: 100%;
  height: 100%;
}
.index-container img {
  width: 100%;
  height: 100%;
}
.btn {
  width: 280rpx;
  line-height: 80rpx;
  text-align: center;
  position: absolute;
  bottom: 20rpx;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.3);
}
</style>