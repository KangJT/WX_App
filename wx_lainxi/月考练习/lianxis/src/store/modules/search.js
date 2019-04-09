
import { hotSearch , keywordSearch ,listSearch} from '@/api/index';

const state = {
  hotList:[],//热搜数据
  keywordList:[],
  reultsList:[],
  isShow:{
    isHot:false,
    isResult:false,
    isGoods:false
  }
}
const getters = {

}

const mutations = {
  updateState(state,payload){
      for(let key in payload){
          state[key] = payload[key]
      }
  }
}

const actions = {
  // 获取热搜数据
 async getHotData ({ commit }, payload ) {
    return new Promise( async (resolve,reject)=>{
      let data=await hotSearch (payload);
      commit('updateState',{
          hotList : data.data
      });
      resolve(data.data)
    })
  },
  // 获取关键字数据
  async getSearchData ({ commit }, payload ) {
    return new Promise( async (resolve,reject)=>{
      let data= await keywordSearch (payload);
      commit('updateState',{
        keywordList: data.data.output.kwRes
      });
      // ?
      resolve(data.data.output.kwRes)
    })
  },
  //结果列表
 async getListData({commit},payload){
      return new Promise( async (resolve,reject) => {
        let data = await listSearch (payload);
        console.log('get',data)
      commit('updateState',{
          reultsList: data.data.list
      });
      resolve(data.data.list)
    })
  }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}