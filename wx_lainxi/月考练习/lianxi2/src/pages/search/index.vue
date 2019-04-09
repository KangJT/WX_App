<template>
  <div>
    <div class="form">
      <form>
        <b class="iconfont icon-search"></b>
        <input @input="getValue" type="text" placeholder="请输入关键词" v-model="txt">
      </form>
      <span @click="cancle">取消</span>
    </div>
    <div class="list" v-if="isShow">
      <span @click="clickSearchKeyList(item,index)" v-for="(item,index) in searchlist" :key="index">{{item}}</span>
    </div>
    <div class="hotSearch" v-if="show">
      <h3 >热门搜索</h3>
      <ul class="hotlist">
          <li v-for="(v,i) in hotlist" :key="i" @click="getHotList">{{v.recommendText}}</li>
      </ul>
    </div>
     <scroll-view scroll-y>
       <product :list="list"></product>
    </scroll-view>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import product from '@/components/product.vue'
export default {
  data(){
    return {
      kw:'',
      isShow:true,
      show:true,
      txt:'',
      pageNum:1,
      pageSize:10,
      userId:0
    }
  },
  components:{
    product
  },
  computed: {
    ...mapState({
      searchlist:state=>state.index.searchlist,
      list:state=>state.index.list,
      hotlist:state=>state.index.hotlist
    })
    
  },
  created(){
    this.getCurHotList()
  },
  methods: {
    ...mapActions({
      getCurSearchKeyList:'index/getCurSearchKeyList',
      getCurSearchList:'index/getCurSearchList',
      getCurHotList:'index/getCurHotList'
    }),
    freshData(){
      this.getCurSearchList({
        "pageNum": this.pageNum,
        "kw": this.txt,
        "pageSize":this.pageSize,
        "userId":this.userId
      })
    },
    //点击热门搜索
    getHotList(e){
       this.txt = e.mp._relatedInfo.anchorTargetText
       this.show = false;
       this.freshData()
    },
    //获取input值
    getValue(e){
        this.kw=e.target.value
        this.getCurSearchKeyList({
          kw:this.kw
        })    
    },
    //点击取消
    cancle(){
      this.txt = ''
      this.getCurSearchKeyList({
          kw:this.txt
      }) 
      this.show = true;
    },
    //点击关键词列表
    clickSearchKeyList(text,ind){
      this.isShow = false
      this.txt = text
      this.userId = ind
      this.freshData()
    }
  },
  //下拉刷新
  onPullDownRefresh(){
    wx.stopPullDownRefresh()
    this.freshData()
    
  },
  // 上拉加载
  onReachBottom() {
    this.pageNum++;
    this.freshData()
  },
}
</script>

<style lang="scss" scoped>
.hotSearch{
  width:100%;
  padding:0 20rpx;
  box-sizing: border-box;
  h3{
    font-weight: 600;
    margin-top: 30rpx;
  }
  .hotlist{
    width: 100%;
    margin-top: 20rpx;
    display: flex;
    flex-wrap: wrap;
    li{
      padding: 20rpx;
      background: #EEE;
      margin-top: 20rpx;
      color: #666;
      font-size: 32rpx;
      margin-right: 25rpx;
    }
  }
}
.list{
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10rpx;
  box-sizing: border-box;
  position: fixed;
  top: 40px;
  left:0;
  background: #FFF;
  span{
    width: 100%;
    height: 90rpx;
    border-bottom: 1rpx solid #CCC;
    line-height: 90rpx;
    font-size: 32rpx;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;

  }
}
.form{
  width: 100%;
  padding:0 30rpx;
  box-sizing:border-box;
  display: flex;
  align-items: center;
  >span{
      margin-left: 30rpx;
      font-size: 30rpx;
  }
  form{
    width: 85%;
    height: 70rpx;
    background: #FFF;
    display: flex;
    border: 1rpx solid #CCC;
    border-radius:40rpx;
    b{
      width: 70rpx;
      height: 70rpx;
      line-height: 70rpx;
      text-align: center;
      float: left;
    }
    input{
      display: inline-block;
      width: 500rpx;
      height: 70rpx;
      font-size: 30rpx;
    }
  }
}
</style>
