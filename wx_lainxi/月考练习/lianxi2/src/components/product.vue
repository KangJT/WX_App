<template>
<div>
  <div class="productlist">
            <div class="productCon" v-for="(item,index) in list" :key="index">
                <image
                :src="item.topicPic"
                mode="scaleToFill"
                lazy-load="false" />
                <h4>{{item.topicTitle}}</h4>
                <div class="descr">
                    <span>{{item.priceTypeName}}</span>
                </div>
                <div class="bom">
                    <span>{{item.price}}</span>
                    <span>{{item.homeCity}}</span>
                </div>
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
    list:'Array'
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
            
            span{
              padding:8rpx;
              box-sizing: border-box;
              font-size: 28rpx;
              margin-right: 10rpx;
              color: green;
              border: 1rpx solid green;
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
