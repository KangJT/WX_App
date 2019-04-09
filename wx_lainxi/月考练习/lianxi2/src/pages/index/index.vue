<template>
  <div class="wrap">
    <scroll-view scroll-y style="height:600px;" @scroll="scrollTo">
    <div class="form">
      <form>
        <b class="iconfont icon-search"></b>
        <input @focus="goToSearch" type="text" placeholder="搜索你感兴趣的人和物">
      </form>
    </div>
    <div class="list">
      <dl v-for="(v,i) in iconlist" :key="i">
        <dt :class="v.icon"></dt>
        <dd>{{v.descr}}</dd>
      </dl>
    </div>
    <swiperN :bannerlist="bannerlist"></swiperN>
    <div class="section">
      <scroll-view scroll-x scroll-with-animation>
         <ul id="navlist" :class="fixTop?'fix-news':''">
           <li :class="v.title==cateTag?'gB':''" v-for="(v,i) in navlist" :key="i" @click="getContent(v.title)">{{v.title}}</li>
         </ul>
      </scroll-view>
      <div class="navDescr">
        <span @click="getCurFlo('一口花')">一口花</span>
        <span @click="getCurFlo('全新')">全新</span>
        <span @click="getCurFlo('同城')">同城</span>
      </div>
       <product :defaultlist="defaultlist"></product>
    </div>
    <foot></foot>
    </scroll-view>
  </div>
</template>
<script>
import foot from '@/components/foot.vue'
import swiperN from '@/components/swiper.vue'
import product from '@/components/productlist.vue'
import { request } from '@/utils/requests.js'
import { mapState , mapMutations , mapActions} from 'vuex'
export default {
  data () {
    return {
      fixTop:false,//区域离顶部的高度
      scrollTop:0,//滑动条离顶部的距离
      tit:'全部',
      cateTag:'全部',
      fixedFlower:1,
      isNew: 1,
      isLocal: 1,
      pageSize: 20,   // 页数
      pageNum: 1, // 分页值
      navlist:[
        {
          title:'全部'
        },
        {
          title:'品牌'
        },
        {
          title:'时尚'
        },
        {
          title:'美妆'
        },
        {
          title:'母婴'
        },
        {
          title:'书籍'
        },
        {
          title:'鞋袜'
        }
      ],
      iconlist:[
        {
          icon:'iconfont icon-service_fill pC',
          descr:'拼团'
        },
        {
          icon:'iconfont icon-setup_fill gC',
          descr:'送书'
        },
        {
          icon:'iconfont icon-stealth_fill oC',
          descr:'享GO'
        },
        {
          icon:'iconfont icon-shielding_fill pC',
          descr:'故事'
        },
        {
          icon:'iconfont icon-task_fill bC',
          descr:'签到'
        }
      ]
    }
  },
  components: {
    foot,
    swiperN,
    product
  },
  computed:{
    ...mapState({
      bannerlist:state=>state.index.bannerlist,
      defaultlist:state=>state.index.defaultlist
    }),
    
  },
  methods: {
    ...mapMutations({
      curBanner:'index/curBanner',
      curDefaultList:'index/curDefaultList'
    }),
    ...mapActions({
      getCurBanner:'index/getCurBanner',
      getCurDefaultList:'index/getCurDefaultList'
    }),
    scrollTo(e){
     if(e.target.scrollTop >= 321){
        this.fixTop = true;
     }else{
        this.fixTop = false;
     }
    },
    async freshData(){
       let data = await this.getCurDefaultList({ 
          "cateTag": this.cateTag, 
          "fixedFlower": this.fixedFlower,   //一口花  1 或者 0
          "isNew": this.isNew,  //是否全新  1 或者 0
          "isLocal": this.isLocal,  // 是否同城   1或者0
          "pageSize": this.pageSize,   // 页数
          "pageNum": this.pageNum // 分页值
       })
    },
    goToSearch(){
      wx.navigateTo({ url: '/pages/search/main' });
    },
    getCurFlo(title){
      if(title=='一口花'){
        this.fixedFlower = 1;
        this.isNew = 0
        this.isLocal = 0
        this.freshData()
      }else if(title=='全新'){
        this.fixedFlower = 0
        this.isNew = 1
        this.isLocal = 0
        this.freshData()
      }else if(title=='同城'){
        this.fixedFlower = 0
        this.isNew = 0
        this.isLocal = 1
        this.freshData()
      }
    },
     getContent(title){
      this.cateTag = title
      this.freshData()
    }
  },
  async created () {
      let data = await this.getCurBanner()
      console.log(data)
      await this.freshData()
      
  },
  onPullDownRefresh(){
    wx.stopPullDownRefresh();
  },
  onReachBottom(){
    this.pageNum++
    this.freshData()
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: 100%;

}
.fix-news{
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    background: #FFF;
}
.navDescr{
  height: 80rpx;
  span{
    padding: 8rpx 20rpx;
    box-sizing: border-box;
    line-height: 80rpx;
    text-align: center;
    border: 1rpx solid #CCC;
    margin-left: 30rpx;
    font-size: 32rpx;
  }
}
#navlist{
  height: 100rpx;
  border-bottom: 1rpx solid #CCC;
  display: flex;
  align-items: center;
  li{
    padding: 0 30rpx;
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 36rpx;
    line-height: 80rpx;
  }
  .gB{
    border-bottom: 2rpx solid green;
  }
}
.form{
  width: 100%;
  height: 200rpx;
  background: #34C25E;
  padding:0 30rpx;
  box-sizing:border-box;
  form{
    width: 100%;
    height: 80rpx;
    background: #FFF;
    display: flex;
    b{
      width: 80rpx;
      height: 80rpx;
      line-height: 80rpx;
      text-align: center;
      float: left;
    }
    input{
      display: inline-block;
      width: 550rpx;
      height: 80rpx;
      font-size: 30rpx;
     // float: left;
    }
  }
}
.list{
  width: 100%;
  height: 200rpx;
  display: flex;
  align-items: center;
  dl{
    flex: 1;
    text-align: center;
    font-size: 34rpx;
  }
  .iconfont{
    font-size: 120rpx;
    
    }
    .pC{
    color: #9368FE;
    }
    .gC{
      color: #0CC5BD;
    }
    .oC{
      color: #F97B53;
    }
    .pC{
      color: #FD6D77;
    }
    .bC{
      color: #4E97FE;
    }
}
</style>
