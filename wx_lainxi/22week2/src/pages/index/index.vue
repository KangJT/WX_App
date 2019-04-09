<template>
  <div>
    <p v-for="(item, index) in list" :key="index">{{item}}</p>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  methods: {
    ...mapActions({
      getdata: 'index/getdata'
    }),
     async getdatar(){
      let data=await this.getdata() 
      console.log('data..', data);
  },
  mounted(){
    // async  let data =await this.getdata()
    // console.log(data)
  },
  onShow(){
    
  }
}}
</script>

<style scoped>

</style>
