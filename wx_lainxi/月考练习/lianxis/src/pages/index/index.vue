<template>
  <div class="wrap">
    <header>
      <label for="" @click="handleSearch">
        <icon type="search" size="16"></icon>
        <input type="text" placeholder="请输入你感兴趣的人或物">
      </label>
    </header>
    <main>
        <!-- <Banner :bannerlist="bannerList"/> -->
      <swiper indicator-dots autoplay circular class="banner">
        <block v-for="(item,index) in bannerList" :key="index">
            <swiper-item>
                <image mode="aspectFill" :src="item"></image>
            </swiper-item>
        </block>
    </swiper> 
    <div class="content">
      <h2>热门热搜</h2>
    <scroll-view scroll-x scroll-with-animation> 
        <ul class="hotlist">
          <li 
          v-for='(v,i) in iconlist' 
          :key='i' 
          :class="v.title==cateTag ?'Bg':''"
          @click="getCount(v.title)"
          >{{v.title}}</li>
      </ul>
    </scroll-view>
      <!-- <scroll-view scroll-y> -->
       <div class="flex">
         <dl v-for="(item,index) in list" :key="index" class="condl">
          <dt>
            <image 
            :src="item.topicPic" alt=""
            mode="widthFix"
            lazy-load='false'>
            </image>
          </dt>
          <dd>
            <h4>{{item.topicTitle}}</h4>
            <p>
              <span>{{item.optInfo.priceTypeDesc}}</span>
            </p>
            <p>￥{{item.price}}</p>
          </dd>
         </dl>
       </div>
      <!-- </scroll-view> -->
       
    </div>
    </main>
    
  
    
  </div>
</template>
<script>
import {mapMutations,mapActions,mapState} from 'vuex'
import Banner from '@/components/banner'

export default {
  data(){
   return{
     fixTop:false,//区域距离顶部的高度
     scrollTop:0,//花动态丽顶部的高度
    cateTag:"全部",
    iconlist:[
      {
        title:"全部"
      },
      {
        title:"时尚"
      },
      {
        title:"品牌"
      },
      {
        title:"美妆"
      }
    ]
   }
  },
  computed:{
   ...mapState({
     bannerList:state=>state.index.bannerList,
     hotList:state=>state.search.hotList,
     list:state=>state.index.list
   })
  },
  commponents:{
    Banner
  },
  methods:{
    ...mapActions({
      getBannerList:'index/getBannerList',
      getTotalList:'index/getTotalList',
      getHotData:'search/getHotData',
    }),
    handleSearch(){
      wx.navigateTo({url:'/pages/counter/main'})
    },
   async getRefashTotalList(){
      let data= await this.getTotalList({
        cateTag:this.cateTag
      })
    },
    getCount(title){
      this.cateTag=title;
      console.log(this.cateTag,'cateTag')
      // this.getRefashTotalList();
      // console.log('sss')
    },
    scrollTop(e){
      console.log(e,e.target,'eee')
    }
  },
  created(){
    this.getBannerList();
    this.getTotalList();
    // wx.setNavigationBarTitle({ title: "享物说" });
  },
  onReachBottom(){
    console.log('上拉加载')
  },
  onPullDownRefresh(){
    console.log('下拉刷新')
  }
}
</script>
<style scoped lang="scss">
.Bg{
  color: red; 
}
.hotlist{
  width:1800rpx;
  margin-top: 20rpx;
  display: flex;
  overflow-x: auto;
  background: #34C25E;
  height: 90rpx;
  line-height: 90rpx;
  overflow: hidden;
  li{
    padding:0 20rpx;
    box-sizing: border-box;
    background: yellow;
    color: #34C25E;
    width: 14%;
    display: inline-block;
  }
}
 .banner{
      width: 100%;
      height: 300rpx;
     image{
         height: 100%;
         width: 100%;
     }
  }
  .flex{
    display: flex;
    flex-wrap: wrap;
  }
.wrap{
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
}
header{
  width:100%;
  display:flex;
  height:90rpx;
 
  background: #34C25E;
  align-items: center;
  // flex-shrink: 0;
  label{
    display:flex;
    width:80%;
    margin:0 auto;
    height:60rpx;
    align-items: center;
    background: #fff;
    text-align:center;
    icon{
      margin:0 20rpx;
    }
    input{
      width:100%;
      font-size:26rpx;
    }
  }
}
.content{
  width:100%;
  display: flex;
  flex:1;
  flex-wrap:wrap;
}
.condl{
  display: flex;
  width:50%;
  height:450rpx;
  flex-direction: column;
  padding: 20rpx;
  box-sizing: border-box;
  dt{
    width:100%;
    height:300rpx;
    image{
      width:300rpx!important;
      height:300rpx!important;
    }
  }
  dd{
    width:300rpx;
    height:350rpx;
    font-size:26rpx;
    h4{
      width:100%;
      overflow-x: hidden;
    }

  }
  
  
}
</style>
