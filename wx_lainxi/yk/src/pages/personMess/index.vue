<template>
  <div class="personPage">
    <h4>姓名</h4>
    <input type="text" placeholder="请输入姓名" @input="getNameValue">
    <h4>性别</h4>
    <ul>
        <radio-group class="radio-group" @change="radioChange">
        <label class="radio" v-for="(v,i) in items" :key="i">
            <radio :value="v.value" checked="v.checked" />
            {{v.value}}
        </label>
        </radio-group>
    </ul>
    <h4>手机号</h4>
    <input type="text" placeholder="请输入手机号" @input="getPhoneValue">
    <h4>微信号</h4>
    <input type="text" placeholder="请输入微信号" @input="getWxValue">
    <h4>备注</h4>
    <input type="text" placeholder="请输入备注" @input="getTextValue">
    <button @click="submit">提交</button>
  </div>
</template>

<script>

import {mapState,mapMutations} from 'vuex'
export default {

  data () {
    return {
      sex:'',
      nameValue:'',
      phoneValue:'',
      wxValue:'',
      textValue:'',
      items: [
      {name: 'USA', value: '保密', checked: 'true'},
      {name: 'CHN', value: '男'},
      {name: 'BRA', value: '女'}
    ]
    }
  },
  onLoad(){
    
  },
  created () {
    
  },
  watch:{
     
  },
  methods:{
      ...mapMutations({
           personList:'index/personList'
       }),
    radioChange(e) {
        this.sex = e.mp.detail.value
    },
    getNameValue(e){
       this.nameValue = e.target.value;
     },
     getPhoneValue(e){
       this.phoneValue = e.target.value;
     },
     getWxValue(e){
      this.wxValue = e.target.value;
     },
     getTextValue(e){
      this.textValue = e.target.value;
     },
     submit(){
        this.personList({
            img:'/static/images/user.png',
            name:this.nameValue,
            phone:this.phoneValue,
            sex:this.sex,
            wx:this.wxValue,
            date:'2019-04-01',
            time:'13:45'
        })
        wx.navigateBack({
          delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
        });
     }
  },
  computed:{
      
  }
}
</script>

<style lang="scss" scoped> 

</style>
