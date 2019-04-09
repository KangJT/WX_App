<template>
  <div>
    <ul v-for="(item,index) in state" :key="index">
      <li @click="bindTap(item.id)">{{item.name}}</li>
    </ul>
   
  </div>
</template>

<script>
// import card from '@/components/card'

import {mapState,mapActions} from 'vuex'

// console.log(state.state,'state');
export default {
  data () {
    return {
     
    }
  },

  // components: {
  //   card
  // },
  
  methods: {
    ...mapActions({
       getDatalist:"index/getDatalist"
    }),
    async getDatalist(){
      let data=await this. getDatalist({

      })
    },
    bindTap(id){
      wx.navigateTo({ url: '/pages/detail/main?id='+id });
    }
  },
  created () {
    
  },
  computed:{
  ...mapState({
       state:state=>state.index.list
    }) 
  }
  
}
</script>

<style scoped>

</style>
