<template>
  <div class="counter-warp">
     <header>
         <label for="" @click="handleSearch">
            <icon type="search" size="17"></icon>
            <input type="text" placeholder="请输入关键字" v-model="inputval" @input="handleEnter">
         </label>
         <span  @click="handleCancel">取消</span>
     </header>
     <div class="content">
        <!-- <Hot :hotList="hotList"/> -->
        <Goods :keywordList="keywordList" /> 
        <!-- <Result :reultsList="reultsList"/> -->
     </div>
  </div>
</template>

<script>
// Use Vuex
import { mapState , mapMutations , mapActions} from 'vuex'
import Hot from '@/components/search/hot'
import Goods from '@/components/search/goods'
import Result from '@/components/search/result'

// {
//自定义导航
//   "navigationStyle":"custom"
// }

export default {
  data(){
    return{
      inputval:''
    }
  },
  onLoad(){
    //初始获取热门索索
    this.getHotData();
    // this.updateState({
    //   isShow:{
    //     isHot:true,
    //     isResult:false,
    //     isGoods:false
    //   }
    // })
  },
  computed: {
    //写数据获取时候
   ...mapState({
      isShow:state=>state.search.isShow,
      hotList:state=>state.search.hotList,
      keywordList:state=>state.search.keywordList
    }),
  },
  methods: {
    // ？
    ...mapMutations({
       updateState:'search/updateState'
    }),
    //写方法
    ...mapActions({
       getHotData:'search/getHotData',
       getSearchData:"search/getSearchData",
    }),
    //点击事件
    handleEnter(e){
      this.inputval=e.target.value
      this.getSearchData({kw:this.inputval});
    },
    //点击取消
    handleCancel(){
      this.inputval=' '
    },
    //点击？
    handleSearch(){
      console.log('handleSearch')
    }
  },
  components:{
    Hot,
    Goods,
    Result
  },
  onShow(){
     
  },
  //通过login获取 放到请求头放到openid
  // watch:{
  //   inputval(val){
  //     let inputval=val.toLowerCase();
  //     this.getSearchData({kw:inputval});
  //     if(val.trim()){
  //       this.updateState({
  //         isShow: {
  //           isHot:false,
  //           isResult:true,
  //           isGoods:false
  //         }
  //       })
  //     } else {
  //         this.updateState({
  //           isShow: {
  //             isHot:true,
  //             isResult:false,
  //             isGoods:false  
  //         }
  //       })
  //     }
  //   }
  // }
   
}
</script>

<style lang="scss" scoped>
.counter-warp {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
 header{
   width: 100%;
   height:90rpx;
   margin-top: 50rpx;
   display: flex;
   justify-content: space-between;
   padding: 0 30rpx;
   box-sizing: border-box;
   align-items: center;
   label{
      display: flex;
      align-items: center;
      border:1rpx solid #cecece;
      border-radius:60rpx; 
      padding: 10rpx 0; 
       box-sizing: border-box;
      icon{
        padding: 0 20rpx;
        box-sizing: border-box;
      }
    }
   }
   .content {
    width: 100%;
    display: flex;
    flex: 1;
    background: pink;
  }
}
</style>

