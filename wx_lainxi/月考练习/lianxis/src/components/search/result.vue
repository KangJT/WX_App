<template>
    <div>
        <!-- <dl v-for="(item,index) in reultsList" :key="index">
            <dt></dt>
            <dd></dd>
         </dl> -->
       reslu结果页
       {{reultsList}}
    </div>
</template>
<script>
export default {
    props:['reultsList'],
    data(){
        return {

        }
    }
}
</script>
<style scoped lang="">

</style>