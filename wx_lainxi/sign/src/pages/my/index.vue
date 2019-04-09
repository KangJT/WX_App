<template>
  <div class="wrap">
    <header>
      <image src="/static/images/wode.png" class="img"></image>
      <p>188******38</p>
    </header>
    
      <ul class="main">
        <li>
          <p>
            <icon type="waiting" size="48rpx">图片</icon>
            <span>我的面试</span>
          </p>
          <span>></span>
        </li>
        <li>
          <p>
            <icon type="warn" size="48rpx">图片</icon>
            <span>我的备忘录</span>
          </p>
          <span>></span>
        </li>
        <li>
          <p>
            <icon type="success" size="48rpx">图片</icon>
            <span>我的日程</span>
          </p>
          <span>></span>
        </li>
      </ul>
  
    <div v-if="showPhoneDialog" class="phone">
      <div>
          <p>获取手机权限</p>
          <button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">确定</button>
      </div>
    </div>
    
  </div>
</template>

<script>

import {getLocation, getAuth} from '@/utils/index.js'
import {mapState, mapMutations} from 'vuex'

export default {
  data () {
    return{
      showPhoneDialog:true
    }
  },

  computed: {
    ...mapState({
      info: state=>state.info,
    })
  },

  methods: {
    ...mapMutations({
     
    }),
    getPhoneNumber(e) {
      console.log(e.detail.errMsg)
      console.log(e.detail.iv)
      console.log(e.detail.encryptedData)
    }
  },
  onShow(){
    console.log('info',this.info);
    if(!this.info.phone){
       this.showPhoneDialog=false
    }
  }
}
</script>

<style lang="scss" scoped>
.phone{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0,0.3);
  position: fixed;
  top:0;
  left: 0; 
}
.phone div{
  width:80%;
  height: 50%;
  margin: 30% auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.phone div p{
   height:120rpx;
   line-height:120rpx;
   text-align: center;
}
.phone div button{
   height:120rpx;
   width: 80%;
   line-height:120rpx;
   margin-bottom: 30rpx;
   background: skyblue;
  
}
header{
  width: 100%;
  height:360rpx;
  background: #E0FFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img{
  width: 120rpx;
  height: 120rpx;
  display: flex;
  background: #eeeeee;
  border-radius: 50%;
  margin: 50rpx 0;

}
.main{
  display: flex;
  flex-direction: column;
  li{
    width: 100%;
    height: 100rpx;
    line-height: 100rpx;
    padding: 0 50rpx;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
   p{
    width: 300rpx;
    display: flex;
    height: 100%;
    icon{
      margin-right: 30rpx;
      margin-top: 25rpx;
    }
   }
  }
}
</style>
