<template>
  <div class="books-detail">
    <div class="booksinfo">
      <h1>{{dataItem.title}}</h1>
      <img :src="dataItem.image" alt="" />
      <div class="info">
        <p>作者:{{dataItem.author}}</p>
        <p>出版社:{{dataItem.publisher}}</p>
        <p>出版日期:{{dataItem.pubdate}}</p>
        <p>定价:{{dataItem.price}}</p>
      </div>
    </div>
    <button class="share"
    type="primary"
    open-type="share"
    >分享给好友</button>
    <div class="brief">
      <article>
        <h2>作者简介</h2>
        <section>{{dataItem.author_intro}}</section>
      </article>
      <article>
        <h2>内容简介</h2>
        <section>{{dataItem.summary}}</section>
      </article>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            dataItem:{}
        }
    },
    mounted(){
        this.dataItem=JSON.parse(this.$mp.query.dataItem)
        wx.setNavigationBarTitle({
            title: this.dataItem.title,
            success: function(res) {
                // success
            }
        })
    },
    onShareAppMessage(){
        return{
        title:"煲仔饭商城",
        path:"/pages/index/main"
        }
    }
};
</script>

<style>
.books-detail{
    width: 100%;
}
.booksinfo{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
}
.booksinfo h1{
    font-size: 40rpx;
    font-weight: bold;
    margin:20rpx 0;
    text-align: center;
}
.books-detail img{
    width: 70%;
    height: 700rpx;
    /* 设置弹性盒布局后，子元素都被视为块元素，可设置盒模型 */
    margin-left: 15%;
}
.booksinfo .info{
    font-size:30rpx;
    margin-left: 15%;
}
.booksinfo .info p{
    margin:15rpx 0;
    line-height: 40rpx;
}
.share{
    width:300rpx;
    line-height: 60rpx;
    margin:10rpx auto
}
.brief{
    font-size: 30rpx; 
    margin:30rpx
}
 .brief h2{
    font-weight: bold;
    color: #009475;
    text-align: center;
}
.brief article{
    margin:15rpx 0;
}
.brief section{
    text-indent:30rpx;
    /* white-space: normal; */
}

</style>