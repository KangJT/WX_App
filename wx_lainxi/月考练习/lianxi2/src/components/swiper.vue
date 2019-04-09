<template>
  <div class="swiper">
    <swiper
    autoplay="autoplay"
    >
    <block>
        <swiper-item>
        <image :src="bannerlist[0].img" class="slide-image" width="355" height="150" />
        </swiper-item>
        <swiper-item>
        <image :src="bannerlist[1].img" class="slide-image" width="355" height="150" />
        </swiper-item>
        <swiper-item>
        <image :src="bannerlist[2].img" class="slide-image" width="355" height="150" />
        </swiper-item>
    </block>
    </swiper>
  </div>
</template>

<script>
export default {
  data(){
    return {
      autoplay: true
    }
  },
  methods:{
    
  },
  props: {
    bannerlist:'Array'
  }
}
</script>

<style lang="scss" scoped>
  .swiper{
    width: 100%;
  }
  .swiper image{
    width: 100%;
    height: 350rpx;
  }
</style>
