<template>
  <div class="wrap">
    <div class="activeBox">
      <div class="box">
        <button>上传图片</button>
        <p>(头图高度建议小于600px)</p>
      </div>
      <input type="text" placeholder="请输入标题">
      <textarea name="" id="" placeholder="请输入详细信息">
      </textarea>
    </div>
    <div class="descr">
      <div class="time">
        <p><label for="">报名开始时间</label><b>2019-04-01   00:00</b>></p>
        <p><label for="">报名开始时间</label><b>2019-04-06   23:59</b>></p>
      </div>
      <p><label for="">报名人数</label><b>100</b></p>
      <p><label for="">报名收费(最高50万元)</label>
        <b class="body-view">
          <switch checked @change="switch1Change" />
        </b>
      </p>
      <div class="showPrice">
        <p v-if="isShow"><label for="">报名费用(元)</label><b>1</b></p>
        <span v-if="isShow" style="color:red;font-size:30rpx;margin-left:30rpx;line-height:80rpx">会收取1%的费用,用于微信支付服务</span>
      </div>
      <p><label for="">活动开始/截止时间</label>
        <b class="body1-view">
          <switch @change="switch2Change" />
        </b>
      </p>
      <div class="time" v-if="isTShow">
        <p><label for="">报名开始时间</label><b>
          <picker
            mode="date"
            :value="date"
            start="2015-09-01"
            end="2050-09-01"
            @change="bindDateChange"
          >
            <view class="picker">
              {{date}} 00:00
            </view>
         </picker>
          </b>></p>
        <p><label for="">报名结束时间</label><b>
          <picker
            mode="date"
            :value="date"
            start="2015-09-01"
            end="2050-09-01"
            @change="bindDate1Change"
          >
            <view class="picker">
              {{date1}} 23:59
            </view>
         </picker>
          </b>></p>
      </div>
      <p><label for="">活动地址</label><b style="font-size:32rpx;color:blue;">添加活动地址</b></p>
      <div class="message">
        <h4>已选项目(*代表必选)</h4>
        <div class="require">
          <span v-for="(v,i) in requireData" :key="i"> {{v.mess}}</span>
        </div>
      <choose :message="message"></choose>
      </div>
      <div class="time">
        <p><label for="">报名列表显示</label><b>人数，头像和昵称</b>></p>
        <p><label for="">报名数据权限</label><b>管理员可见(保护隐私)</b>></p>
      </div>
      <p><label for="">参与报名需审核</label>
        <b class="body2-view">
          <switch @change="switch3Change" />
        </b>
      </p>
      <p><label for="">允许一人多次报名</label>
        <b class="body3-view">
          <switch @change="switch4Change" />
        </b>
      </p>
      <p><label for="">报名后不允许取消报名</label>
        <b class="body4-view">
          <switch @change="switch5Change" />
        </b>
      </p>
    </div>
     <div class="personAge">
        <p><label for="">发起人信息</label><b>个人信息></b></p>
        <p><label for="">发起人署名</label><b>马好好</b></p>
        <p><label for="">手机号(必填)</label><b>15210040433  x</b></p>
        <p><label for="">发起人微信号</label><input type="text" placeholder="请输入微信号"></p>
     </div>
     <button style="background:blue;color:#FFF;margin-top:30rpx" @click="getConfirm">确定</button>
  </div>
</template>

<script>
import choose from '@/components/choose.vue'
import {mapState,mapMutations} from 'vuex'
export default {
  data () {
    return {
      isShow:true,
      isTShow:false,
      isT1Show:false,
      isT2Show:false,
      isT3Show:false,
      title:'',
      date: '2019-04-01',
      date1: '2019-04-01',
      message:[
        {
          mess:'姓名',
          active:false
        },
        {
          mess:'性别',
          active:false
        },
        {
          mess:'年龄',
          active:false
        },
        {
          mess:'婚姻状况',
          active:false
        },
        {
          mess:'地址',
          active:false
        },
        {
          mess:'手机号',
          active:false
        },
        {
          mess:'QQ号',
          active:false
        },
        {
          mess:'微信号',
          active:false
        },{
          mess:'身份证号',
          active:false
        },{
          mess:'邮箱',
          active:false
        },{
          mess:'学校',
          active:false
        },{
          mess:'年级',
          active:false
        },{
          mess:'班级',
          active:false
        },{
          mess:'学号',
          active:false
        },{
          mess:'工作单位',
          active:false
        },{
          mess:'部门',
          active:false
        },{
          mess:'职位',
          active:false
        },{
          mess:'工号',
          active:false
        },{
          mess:'备注',
          active:false
        }
      ]
    }
  },
  onShow(){
    //  this.message.forEach(v=>{
    //    if(v.mess = ){

    //    }
    //  })
  },
  components: {
    choose
  },
  computed:{
    ...mapState({
      requireData:state=>state.index.requireData
    })
  },
  methods: {
    getConfirm(){
      wx.showLoading({
        title: '正在创建报名表',
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 2000)
      wx.showToast({
        title: '创建成功',
        icon: 'success',
        duration: 2000,
        success(){
          wx.navigateTo({ url: '/pages/detail/main' });
        }
      })
    },
    bindDateChange(e) {
      this.date = e.mp.detail.value
    },
    bindDate1Change(e) {
      this.date1 = e.mp.detail.value
    },
    switch1Change(e) {
    this.isShow = e.mp.detail.value
    },
    switch2Change(e) {
      this.isTShow = e.mp.detail.value
    },
    switch3Change(e) {
      this.isT1Show = e.mp.detail.value
    },
    switch4Change(e) {
      this.isT2Show = e.mp.detail.value
    },
    switch5Change(e) {
      this.isT3Show = e.mp.detail.value
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style lang="scss" >
  .wrap{
    width: 100%;
  }
  .personAge{
    margin-top: 20rpx;
    p{
       width: 100%;
       height: 90rpx;
       border-bottom: 1rpx solid #CCC;
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding: 0 30rpx;
       box-sizing: border-box;
       background: #FFF;
     }
  }
  .message{
    width: 100%;
    h4{
      width: 100%;
      height: 80rpx;
      line-height:80rpx;
      padding-left: 20rpx;
      box-sizing: border-box;
      color: #666;
      background: #EEE;
    }
    .require{
      width: 100%;
      height: 100rpx;
      background: #FFF;
      display: flex;
      align-items: center;
      padding-left:20rpx;
      box-sizing: border-box;
    }
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
  }
  .showPrice{
    display: flex;
    flex-direction:column;
    p{
       width: 100%;
       height: 90rpx;
       border-bottom: 1rpx solid #CCC;
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding: 0 30rpx;
       box-sizing: border-box;
       margin-top: 20rpx;
       background: #FFF;
     }
  }
  .descr{
    width: 100%;
    >p{
       width: 100%;
       height: 90rpx;
       border-bottom: 1rpx solid #CCC;
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding: 0 30rpx;
       box-sizing: border-box;
       margin-top: 20rpx;
       background: #FFF;
     }
    
    
  }
  .time{
      margin-top: 20rpx;
      background: #FFF;
     p{
       width: 100%;
       height: 90rpx;
       border-bottom: 1rpx solid #CCC;
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding: 0 30rpx;
       box-sizing: border-box;
    }
    }
  .activeBox{
    width: 100%;
    background: #FFF;
    input{
      height: 80rpx;
      border-bottom: 1rpx solid #CCC;
      padding-left: 20rpx;
      box-sizing: border-box;
    }
    textarea{
      height: 230rpx;
      padding-top: 20rpx;
      padding-left: 30rpx;
      box-sizing: border-box;
    }
  }
  .box{
    width: 100%;
    height: 400rpx;
    background: #EEE;
    position: relative;
    padding-top: 200rpx;
    box-sizing: border-box;
    p{
      color: #666;

      margin-left: 120rpx;
    }
  }
  .box button{
    width: 200rpx;
    height: 80rpx;
    position: absolute;
    right:10px;
    top:10px;
    font-size: 32rpx;
  }
</style>
