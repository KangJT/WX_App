<template>
    <div>
        
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';

export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
       ...mapState({
           state:state=>state.index.list
       })
    },
    methods:{
      ...mapMutations({
          idDetail:'index/idDetail'
      })
    },
    onLoad(options){
        this.idDetail(options.id)    
    },
    onShow(){
       

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>