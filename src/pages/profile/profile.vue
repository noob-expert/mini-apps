<template>
  <div class="profile-container">
    <div class="profile">
      <img :src="user.avatarUrl?user.avatarUrl:'/static/images/user.png'" alt="" />
      <button
        class="nickname"
        open-type="getUserInfo"
        @getuserinfo="getuserinfo"
      >
        {{user.nickName?user.nickName:"未登录"}}
      </button>
    </div>
    <div class="scancode" @click="scancode">
      <div>扫码看书</div>
      <div>more ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      user:{}
    }
  },
  mounted(){
    // 已登录状态，重新进入页面时初始化信息
    wx.getUserInfo({
      success: function(res){
        this.user=res.userInfo
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  methods: {
    getuserinfo(res) {
      this.user=res.mp.detail.userInfo;
    },
    // 扫码功能
    scancode(){
      wx.scanCode({
        onlyFromCamera:true,
        success: function(res){
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    }
  },
};
</script>

<style>
.profile-container {
  width: 100%;
  height: 100%;
}
.profile-container .profile {
  width: 100%;
  box-sizing: border-box;
  height: 200rpx;
  background-color: #009475;
  display: flex;
  padding: 60rpx 0 40rpx 30rpx;
  align-items: center;
}
.profile-container .profile img {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
}
.profile-container .profile .nickname {
  width: 200rpx;
  height: 80rpx;
  margin-left: 30rpx;
  background: #00765f;
  color: #92ddd0;
  text-align: center;
  font-size: 30rpx;
}
.profile-container .scancode {
  box-sizing: border-box;
  width: 100%;
  height: 80rpx;
  margin-top: 15rpx;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  align-items: center;
  padding: 10rpx;
  font-size: 30rpx;
}
</style>