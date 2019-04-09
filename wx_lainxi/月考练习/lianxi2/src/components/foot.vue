<template>
  <div class="foot">
    <dl v-for="(v,i) in footnav" :key="i" @click="getCon(v.title)">
      <dt>
        <icon
          :type="v.icon"
          size="20">
        </icon>
      </dt>
      <dd>{{v.title}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  data(){
    return {
      footnav:[
        {
          icon:'waiting',
          title:'首页'
        },
        {
          icon:'warn',
          title:'我的'
        }
      ]
    }
  },
  methods:{
    getCon(title){
      if(title=='首页'){
        // wx.navigateTo({ url: '/pages/index/main' });
      }else if(title=='我的'){
        wx.navigateTo({ url: '/pages/logs/main' });
      }
    }
  },
  props: ['text']
}
</script>

<style lang="scss" scoped>
.foot {
  width: 100%;
  height: 100rpx;
  border-top: 1rpx solid #CCC;
  display: flex;
  position: fixed;
  bottom:0;
  left:0;
  font-size: 28rpx;
  align-items: center;
  background: #FFF;
  dl{
    flex: 1;
    text-align: center;
  }
}
</style>
