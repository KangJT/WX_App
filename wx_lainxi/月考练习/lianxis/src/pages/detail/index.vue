<template>
    <div>
      <dl v-for="(item,index) in reultsList" :key="index">
        <dt>
          <image :src='item.topicPic'></image>
        </dt>
        <dd>
          <h2>{{item.priceTypeName}}</h2>
          <h2>{{item.homeCity}}</h2>
        </dd>
      </dl>
       
    </div>
</template>
<script>
import { mapState , mapMutations , mapActions} from 'vuex'
export default {
    props:{

    },
    data(){
        return {

        }
    },
    onLoad(options){
      console.log(options,'option')
      let keyId=options.key;
      console.log(keyId,'ississdd');
      this.getListData({
        pageNum: 1,
        kw: "衣服女",
        pageSize: 10,
        userId: 0
      });
    },
    computed:{
      ...mapState({
        reultsList:state=>state.search.reultsList
      })
    },
    methods:{
       ...mapMutations({
         updateState:'search/updateState'
       }),
      ...mapActions({
        getListData:'search/getListData'
      })
    },
    onShow(){
      console.log(this.getListData(),console.log(this.state,'state'))
    }
}
</script>
<style scoped lang="">

</style>