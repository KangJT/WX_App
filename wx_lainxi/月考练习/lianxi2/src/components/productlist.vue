<template>
  <div class="productlist">
   <div class="productCon" v-for="(item,index) in defaultlist" :key="index">
     <image
       :src="item.topicPic"
       mode="scaleToFill"
       lazy-load="false" />
       <h4>{{item.topicTitle}}</h4>
       <div class="descr">
         <span>一口华</span>
         <span>可能认识的人</span>
       </div>
       <div class="bom">
         <span>{{item.price}}</span>
         <span>{{item.homeCity}}</span>
       </div>
   </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  methods:{
    
  },
  props: {
    defaultlist:'Array'
  }
}
</script>

<style lang="scss" scoped>
    .productlist{
        width: 100%;
        display:flex;
        flex-wrap: wrap;
    }
    .productCon{
        width: 47%;
        margin-left: 15rpx;
        display: flex;
        flex-direction: column;
        margin-top: 20rpx;
        image{
            width: 100%;
            border-radius: 20rpx;
        }
        h4{
            font-size: 34rpx;
            margin-top: 10rpx;
        }
        .descr{
            height:60rpx;
            display: flex;
            align-items: center;
            margin-top: 15rpx;
            font-size: 30rpx;
            span{
              padding:8rpx;
              box-sizing: border-box;
              margin-right: 10rpx;
            }
            span:nth-child(1){
                border: 1rpx solid green;
            }
            span:nth-child(2){
              border: 1rpx solid #CCC;
            }
        }
        .bom{
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 10rpx;
            span:nth-child(1){
               color: #F0324E;
            }
            span:nth-child(2){
                font-size: 28rpx;
            }
        }
    }
</style>
