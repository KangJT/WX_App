<template>
  <div class="mess">
    <h4>点击选择需要填写的信息</h4>
    <div>
      <span :class="v.active?'active':''" v-for="(v,i) in message" :key="i" @click="getMess(v.mess,i)">{{v.mess}}</span>
    </div>
    <button style="background:blue;color:#FFF">添加自定义</button>
   </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data(){
    return {
      
    }
  },
  props: {
      message:Array
  },
  methods:{
       ...mapMutations({
      requireList:'index/requireList'
    }),
    getMess(mess,ind){
     let that = this
     wx.showActionSheet({
      itemList: ['作为必填项', '作为选填项', '编辑'],
      success(res) {
        console.log(that)
        if(that.message[ind].active){
          that.message[ind].active = false
        }else{
          that.message[ind].active = true
        }
        if(res.tapIndex==0){
           that.requireList({
             mess:'*'+ mess
           })
        }else if(res.tapIndex==1){
            console.log(mess,'mess')
          that.requireList({
             mess:mess
           })
        }else if(res.tapIndex==2){
         
        }
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
    }
  }
}
</script>

<style lang="scss">
.mess{
      background: #FFF;
      >div{
        padding:20rpx 30rpx;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        background: #FFF;
        span{
          padding:20rpx;
          box-sizing: border-box;
          border: 1rpx solid #666;
          color: #666;
          margin-right: 15rpx;
          margin-bottom: 15rpx;
        }
        span.active{
          border:1rpx solid blue;
          color: blue;
        }
      }
      button{
        width: 230rpx;
        height: 70rpx;
        font-size: 30rpx;
        margin-left: 30rpx;
        margin-bottom: 30rpx;
      }
    }
</style>
