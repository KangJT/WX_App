<template>
    <ul>
       <li v-for="(item,index) in keywordList" :key="index" @click="goReaults(item)">{{item}}</li>
    </ul>
</template>
<script>
export default {
    props:['keywordList'],
    data(){
        return {

        }
    },
    methods:{
     goReaults(item){
        //  console.log()
         wx.navigateTo({
             url:"../../pages/detail/main?key="+item
         })
     }
  }
}
</script>
<style scoped lang="">

</style>