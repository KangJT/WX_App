<template>
  <div>
    <header>
      <input type="text" placeholder="请输入你要搜索的内容">
    </header>
    <main>
      <div>
        <div>
          图片
        </div>
        <div>
          <span>是</span> 
          <span>方法</span> 
          <span>等的</span> 
          <span>等的</span> 
          <span>等的</span> 
          <span>等的</span>
        </div>
      </div>
      <ul v-for="(item,index) in state" :key="index">
        <li>
          {{item.Name}}
          <!-- <span>
            <img src="" alt="">图片
          </span>
          <p>啊啊啊啊</p> -->
        </li>
      </ul>
    </main>
    <ul class="ul">
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
  </div>
</template>

<script>
// import card from '@/components/card'
import {mapState,mapMutations} from 'vuex';
export default {
  data () {
    return {
     
    }
  },
  // components: {
  //   card
  // },
  onShow(){
    this.getData()
  },
  computed:{
     ...mapState({
       state:state=>console.log(state,'212')
     })
  },
  methods: {
    ...mapMutations({
        getData:"index/getData"
      }) 
  },
  created () {
   
  }
}
</script>

<style lang="scss" scoped>
.ul {
  position: absolute;
  right: 0;
  top: 0;
  width: 50rpx;
  height: 100%;
  background: rgba(0, 0,0,0.2);
  li{
    margin:20rpx 0;
  }
}
</style>

