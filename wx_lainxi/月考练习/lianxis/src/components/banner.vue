<template>
    <swiper indicator-dots autoplay circular class="banner">
        <block v-for="(item,index) in bannerlist" :key="index">
            <swiper-item>
                <image mode="aspectFill" :src="item"></image>
            </swiper-item>
        </block>
    </swiper> 
</template>
<script>
export default {
    props:['bannerlist'],
    components:{
     
    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){
    //   console.log(bannerlist)
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
  .banner{
      width: 100%;
      height: 300rpx;
     image{
         height: 100%;
         width: 100%;
     }
  }
</style>