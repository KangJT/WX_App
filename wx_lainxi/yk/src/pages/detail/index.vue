<template>
  <div class="detailPage">
      <h2>五一欢乐假期</h2>
      <span style="color:blue;margin-left:20rpx;font-size:30rpx">[进行中]</span>
      <div class="times">
        <p>报名时间：04/01 00:00-04/06 23:59</p>
        <p>报名人数：1/100</p>
      </div>
      <p style="color:#666;margin-left:30rpx;font-size:32rpx;line-height:80rpx">发起人:马xx</p>
      <ul class="nav">
         <li class="act">已报名({{personNum}})</li>
         <li>详细数据<b style="color:red;font-size:30rpx">管理员可见</b></li>
      </ul>
      <div class="navContent">
         <div class="navCon" v-for="(v,i) in person" :key="i">
            <image :src="v.img"/>
            <div class="navDescr">
               <h3>{{v.name}}</h3>
               <p>{{v.date}} {{v.time}}</p>
            </div>
            <span>报名成功</span>
         </div>
      </div>
      <button @click="getMine">我要报名</button>
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {

  data () {
    return {
      
    }
  },
  onLoad(){
    wx.showLoading({
        title: '加载中',
      })
    setTimeout(function () {
        wx.hideLoading()
    }, 2000)
  },
  created () {
    
  },
  methods:{
   getMine(){
       wx.navigateTo({ url: '/pages/personMess/main' });
   }
  },
  computed:{
      ...mapState({
          person:state=>state.index.person,
          personNum:state=>state.index.personNum
      })
  }
}
</script>

<style lang="scss" scoped> 
.detailPage{
    width: 100%;
    background: #FFF;
    h2{
        height: 100rpx;
        line-height: 100rpx;
        padding-left: 20rpx;
        box-sizing: border-box;
        font-weight: 700;
    }
    .times{
        width: 100%;
        border-bottom: 1rpx solid #CCC;
        padding-bottom: 20rpx;
        box-sizing: border-box;
        p{
            color: #666;
            font-size: 30rpx;
            margin-left: 20rpx;
            margin-top: 15rpx;
        }
    }
}
.nav{
    display: flex;
    align-items: center;
    margin-top: 50rpx;
    li{
        display: flex;
        flex: 1;
        line-height: 80rpx;
    }
    li.act{
        border-bottom: 1rpx solid blue;
        color: blue;
    }
}
.navContent{
    width: 100%;
    margin-top: 50rpx;
    display: flex;
    flex-direction: column;
   .navCon{
       widows: 100%;
       height: 100rpx;
       display: flex;
       align-items: center;
       justify-content: space-between;
       image{
           width: 100rpx;
           height: 100rpx;
       }
   }
}
button{
    position: fixed;
    bottom:0;
    right: 0;
    background: blue;
    color: #FFF;
}
</style>
