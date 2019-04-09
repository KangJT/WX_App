<template>
  <div class="wrap">
    <header>
      面试信息
    </header>
    
      <ul class="main">
        <li>
          <p>公司名称</p>
          <input type="text" v-model="current.company" placeholder="请输入公司名称">
        </li>
        <li>
           <p>公司电话</p>
           <input type="text" v-model="current.phone" placeholder="请输入公司电话" maxlength="11">
        </li>
        <li>
           <p>面试时间</p>
           <input type="text"  placeholder="请输入面试时间">
        </li>
        <li>
           <p>面试地点</p>
           <input  @click="search" type="text" v-model="current.address.address" placeholder="请输入面试地点">
        </li>
      </ul>
   
    <p class="p">备注信息</p>
    <textarea type="text" v-model="current.description" placeholder="备注信息(可选，100个字以内)"/>
    <button :class="btnEnable?'':'disable'">确认</button>
    
  </div>
</template>

<script>

// import {getLocation, getAuth} from '@/utils/index.js'
import {mapState, mapMutations} from 'vuex'
// const moment=require('moment');
// console.log(moment)
export default {
  data() {
      return {
       
      };
    },
  computed: {
    ...mapState({
      current: state=>state.interview.current
    }),
    btnEnable(){
     // console.log(this.current.company)获取公司名字
      // if(!this.current.company){
      //   return false;
      // }
      // if(!/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(this.current.phone)||/0\d{2}-\d{7,8}/.test(this.current.phone)){
      //   return false;
      // }
      // if(!this.current.address){
      //   return false;
      // }
      // return true;
    }
  },

  methods: {
    ...mapMutations({
     
    }),
    search(){
      wx.navigateTo({
        url:"/pages/search/main"
      })
    }
  }
}
</script>

<script>
// import {mapState, mapActions} from 'vuex';
// const moment = require('moment');

// const range = [
//   [0,1,2,3,4,5,6,7,8,9],
//   [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
//   ['00分','10分','20分','30分','40分','50分']
// ];
// export default {
//   data () {
//     return {
//       info: {
//         date: [0,0,0],
//       }
//     }
//   },
//   created(){
//      // 如果当前时间是十一点之后，过滤掉今天
//     if (moment().hour() == 23){
//       this.info.date = [1,0,0];
//     }
//   },
//   computed: {
//     ...mapState({
//       current: state=>state.interview.current
//     }),
//     // 按钮是否可点击
//     btnEnable(){
//       // 判断公司名称是否为空
//       if (!this.current.company){
//         return false;
//       }
//       // 判断手机号是否符合规范
//       if (!/^1(3|4|5|7|8)\d{9}$/.test(this.current.phone) || !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.current.phone)){
//         return false;
//       }
//       // 判断公司地址
//       if (!this.current.address.address){
//         return false;
//       }
//       return true;
//     },
//     // 处理面试日期
//     dateRange(){
//       let dateRange = [...range];
//       // 如果时间是今天，过滤掉现在之前的小时
//       if (!this.info.date[0]){
//         dateRange[1] = dateRange[1].filter(item=>{
//           return item>moment().hour();
//         })
//       }else{
//         dateRange[1] = range[1]
//       }
//       // 格式化小时
//       dateRange[1] = dateRange[1].map(item=>{
//         return item+'点'
//       })
//       // 计算当前日期之后的十天
//       dateRange[0] = dateRange[0].map(item=>{
//         return moment().add(item, 'days').date()+'号'
//       })
//       return dateRange;
//     },
//     // 显示的日期
//     dateShow(){
//       return moment()
//       .add(this.info.date[0], 'd')
//       .add(this.info.date[1]+1, 'h')
//       .minute(this.info.date[2]*10)
//       .format('YYYY-MM-DD HH:mm');
//     }
//   },
//   methods: {
//     ...mapActions({
//       submitInterview: 'interview/submit'
//     }),
//     // 监听多列选择器每列变化
//     columnChange(e){
//       let {column, value} = e.target;
//       let date = [...this.info.date];
//       date[column] = value;
//       this.info.date = date;
//     },
//     // 去选择地址
//     goSearch(){
//       wx.navigateTo({ url: '/pages/search/main' });
//     },
//     // 提交添加面试
//     async submit(){
//       // 判断公司名称是否为空
//       if (!this.current.company){
//         wx.showToast({
//           title: '请输入公司名称', //提示的内容,
//           icon: 'none', //图标,
//         });
//         return false;
//       }
//       // 判断手机号是否符合规范
//       if (!/^1(3|4|5|7|8)\d{9}$/.test(this.current.phone) || !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.current.phone)){
//         wx.showToast({
//           title: '请输入面试联系人的手机或座机', //提示的内容,
//           icon: 'none', //图标,
//         });
//         return false;
//       }
//       // 判断公司地址
//       if (!this.current.address.address){
//         wx.showToast({
//           title: '请选择公司地址', //提示的内容,
//           icon: 'none', //图标,
//         });
//         return false;
//       }
//       // 添加时间戳到表单
//       this.current.start_time = moment(this.dateShow).unix();
//       let data = await this.submitInterview(this.current);
//       console.log('data...', data);
//       // 处理添加结果
//       if (data.code == 0){
//         wx.showModal({
//           title: '系统提示', //提示的标题,
//           content: data.msg, //提示的内容,
//           showCancel: false,
//           confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
//           confirmColor: '#197DBF', //确定按钮的文字颜色,
//           success: res => {
//             if (res.confirm) {
//              wx.navigateTo({ url: '/pages/index/main' });
//             }
//           }
//         });
//       }else{
//         wx.showToast({
//           title: data.msg, //提示的内容,
//           icon: 'fail'//图标,
//         });
//       }
//     }
//   }
// }
</script>




<style lang="scss" scoped>
p{
    width:180rpx;
    text-align: center;
    display: flex;
    height: 100%;
    margin-right: 10rpx;
   }
 button{
   height:120rpx;
   width:96%;
   line-height:120rpx;
   margin-bottom: 30rpx;
   background: skyblue;
   position: absolute;
   bottom: 50rpx;
   left: 0;
   margin: 0 15rpx;
}
.wrap{
   width: 100%;
   height:100%;
    background: #eeeeee;
}
header{
  width: 100%;
  height:120rpx;
  background: #fff;
  line-height: 120rpx;
  font-weight: bold;
  padding: 0 20rpx;
  box-sizing: border-box;
   border-top:2rpx solid #dddddd; 
}

.main{
  display: flex;
  background: #cccccc;
  flex-direction: column;
  li{
    width: 100%;
    height: 100rpx;
    line-height: 100rpx;
    padding: 0 20rpx;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-top:2rpx dashed #dddddd; 
    background: #ffffff;
  p{
      width:180rpx;
      text-align: center;
      display: flex;
      height: 100%;
      margin-right: 10rpx;
    }
   input{
     flex: 1;
     height: 100%;
     overflow: hidden;
     white-space: nowrap;
     text-overflow: ellipsis;
   }
  }
  
  
}
textarea{
    font-size: 30rpx;
  background: #eee;
  color: #333;
  width: 690rpx;
  height: 200rpx;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10rpx;
  border: 3rpx solid #c0c0c0;
  border-radius: 5rpx;
  }
.p{
  width:180rpx;
  text-align: center;
  display: flex;
  height:100rpx;
  line-height: 100rpx;
  padding: 0 10rpx;
  box-sizing: border-box;
  }

.btnEnable{
  background: #333;
}
</style>
