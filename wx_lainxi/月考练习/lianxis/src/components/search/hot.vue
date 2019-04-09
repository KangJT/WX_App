<template>
    <div>
        <h2>热搜</h2>
        <ul>
          <li v-for="(item,index) in hotList" :key="index">{{item.recommendText}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['hotList'],
    data(){
        return {

        }
    }
}
</script>
<style scoped lang="scss">

</style>