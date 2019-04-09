<template>
  <div>
    <ul v-for="(item,index) in motto" :key="index">
      <li>{{item}}</li>
    </ul>
  </div>
</template>

<script>
// import card from '@/components/card'
// import index from '../../store/moduls/.js';
export default {
  data () {
    return {
      motto: ['aa', 'aaa']
    }
  },

  // components: {
  //   card
  // },

  methods: {
    bindViewTap () {
    },
    clickHandle () {
    }
  },
  created () {
  }
}
</script>

<style scoped>

</style>
