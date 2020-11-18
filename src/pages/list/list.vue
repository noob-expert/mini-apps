<template>
  <div class="detail-container">
    <swiper
      :indicator-dots="!isShow"
      autoplay
      circular
      indicator-color="pink"
      indicator-active-color="green"
    >
      <swiper-item v-for="(item,index) in dataTitle" :key="index">
        <img :src="item.image" alt="" />
      </swiper-item>
    </swiper>
    <div class="detail-content">
      <div class="nav">
        <span class="nav-text">全部商品</span>
        <span class="nav-array" @click="arrayClick(dataArray)">></span>
      </div>
      <div class="list">
        <div class="list-content" v-for="(item,index) in dataArray"
        :key="index" @click="toDetail(item)">
          <img :src="item.image" alt="" />
          <p>{{item.title}}</p>
          <p>{{item.author}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datas from "./datas/data.json"
export default {
    data(){
          return{
            dataArray:datas,
            dataTitle:[]
        }
    },
    // 取前4个图像方法1
    beforeMount(){
        for(let i=0;i<4;i++){
            this.dataTitle.push(datas[i])
        }
    },
    // 取前4个图像方法2
    computed:{
        dataTitle2(){
            return this.dataArray.slice(0,4)
        }
    },
    methods:{
      toDetail(dataItem){
        wx.navigateTo({
          url: '/pages/detail/main?dataItem='+ JSON.stringify(dataItem)
        })
      },
      arrayClick(bookslist){
        wx.navigateTo({
          url: '/pages/listdetail/main?bookslist='+JSON.stringify(bookslist)
        })
      }
    }

};
</script>

<style>
.detail-container {
  width: 100%;
  height: 500rpx;
}
.detail-container swiper {
  width: 100%;
  height: 100%;
}
.detail-container img {
  width: 100%;
  height: 100%;
}
.detail-content{
    width:100%
}
.nav {
  line-height: 50rpx;
  display: flex;
  justify-content: space-between;
  padding: 5rpx;
}
.nav .nav-array {
  color: green;
}
.list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.list .list-content{
    box-sizing: border-box;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-bottom:1px solid #eee;
    /* border-ri:1px solid #eee; */
    font-size: 30rpx;
    padding: 20rpx;
}
.list .list-content:nth-child(2n+1){
    border-right:1px solid #eee ;
}
.list .list-content image{
    width: 200rpx;
    height: 200rpx;
}
</style>