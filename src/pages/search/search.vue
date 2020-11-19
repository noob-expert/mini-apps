<template>
  <div class="search-container">
      <div class="search">
        <input type="text" name="" id="" placeholder="书中自有黄金屋"
        focus placeholder-class="searchbox" confirm-type="send"
        @input="inputvalue" :value="value" @confirm="inputconfirm">
        <div class="clear" v-if="value" @click="clearcontent">x</div>
      </div>
      <book-detail :bookslist="booksArray"></book-detail>
  </div>
</template>


<script>
import bookDetail from "../listdetail/listdetail"
import {request} from "../../utils/request"
export default {
  data(){
    return{
      value:'',
      booksArray:[]
    }
  },
  components:{
    bookDetail
  },
  methods:{
    // 键盘输入时触发，这里利用原生小程序的事件是错误的；需要再补充v-bind:value="value"；
    // 事实上，即v-model的原理：v-on绑定事件，然后v-bind绑定属性
    inputvalue(e){
      this.value=e.mp.detail.value;
      if(!this.value){
        this.booksArray=[]
      }
    },
    inputconfirm(e){
      let data={req:this.value};
      request("/searchBooks",data)
      .then((res)=>{
        if(typeof res.data == "object"){
        this.booksArray=res.data
        }
      })
    },
    clearcontent(){
      this.value='';
      this.booksArray=[]
    }
  }
}
</script>

<style>
.search{
  width: 80%;
  height: 80rpx;
  margin:auto;
  border-bottom:2rpx solid #009475;
  position: relative;
}
.search input{
  width: 100%;
  height: 100%;
  font-size:30rpx
}
.search .searchbox{
  text-align: center;
  font-size:30rpx;
  color:#009475
}
.search .clear{
  position: absolute;
  right: 10rpx;
  bottom: 15rpx;
  z-index: 999;
}

</style>