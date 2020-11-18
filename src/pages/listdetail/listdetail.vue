<template>
  <div class="listdetail">
    <div
      class="listdetail-container"
      v-for="(item, index) in bookslist"
      :key="index"
      @click="TodetailClick(item)"
    >
      <img :src="item.image" alt="" />
      <div class="books-info">
        <h4>{{item.title}}</h4>
        <p>作者：{{item.author}}</p>
        <p>出版社：{{item.publisher}}</p>
      </div>
      <div class="price">{{item.price}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookslist: [],
    };
  },
  props:{
    bookslist:{
      type:Array,
      default(){
        return []
      }
    }
  },
  mounted() {
    // this.$mp只针对页面跳转时才会传递该参数
    // 因为组件被search也复用，返回的this值不同，所以this.$mp不一定存在，此处要做判断
    if(this.$mp){
    this.bookslist = JSON.parse(this.$mp.query.bookslist);
    }
    console.log(this.bookslist);
  },
  methods:{
    TodetailClick(dataItem){
        wx.navigateTo({
          url: '/pages/detail/main?dataItem='+ JSON.stringify(dataItem)
        })
    }
  }
};
</script>

<style scoped>
.listdetail-container {
  display: flex;
  /* justify-content: space-between; */
  padding: 10rpx;
  border-bottom: 1px solid #eee;
}
.listdetail-container img {
  width: 140rpx;
  height: 140rpx;
}
.listdetail-container .books-info {
  width: 80%;
  font-size: 34rpx;
}
.listdetail-container .books-info h4 {
  font-weight: bold;
}
.listdetail-container .price {
  color: red;
}
</style>