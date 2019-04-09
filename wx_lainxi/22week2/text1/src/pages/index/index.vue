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
    })
  },
  mounted(){
    let data = this.getdata()
    console.log(data)
  },
  onShow(){
    
  }
}
</script>

<style scoped>

</style>
