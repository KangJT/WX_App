import {getBanner,getDefaultList,getSearchKeyList,getSearchList,getHotList} from '@/api/index'
const state = {
    bannerlist:{},
    defaultlist:[],
    searchlist:[],
    list:[],
    hotlist:[]
}

const mutations = {
  //swiper
   curBanner(state,payload){
      state.bannerlist = {...state.bannerlist,...payload}
   },
   //首页渲染
   curDefaultList(state,payload){
    state.defaultlist = [];
    state.defaultlist = [...state.defaultlist,...payload]
  },
  //关键词渲染
   curSearchKeylist(state,payload){
     console.log(payload,'key')
     state.searchlist = payload || []
   },
   //点击渲染列表
   curSearchlist(state,payload){
    state.list = payload
  },
  //热门列表
  curHotlist(state,payload){
   state.hotlist = payload
 }
}

const actions = {
    async getCurBanner({commit},payload){
      return new Promise(async (resolve,reject)=>{
        let result = await getBanner()
        commit('curBanner',result.data.data.legaowei.template1.model3)
        
        resolve(result)
      })
    },
    async getCurDefaultList({commit},payload){
      return new Promise(async (resolve,reject)=>{
        let result = await getDefaultList(payload)
        commit('curDefaultList',result.data.data.recommends)
        resolve(result)
      })
    },
    async getCurSearchKeyList({commit},payload){
      return new Promise(async (resolve,reject)=>{
        if(payload.kw){
          let result = await getSearchKeyList(payload)
          commit('curSearchKeylist',result.data.data.output.kwRes)
        }else{
          commit('curSearchKeylist',[])
          commit('curSearchlist',[])
        }
      })
    },
    async getCurSearchList({commit},payload){
      return new Promise(async (resolve,reject)=>{
        let result = await getSearchList(payload)
        commit('curSearchlist',result.data.data.list)
      })
    },
    async getCurHotList({commit},payload){
      return new Promise(async (resolve,reject)=>{
        let result = await getHotList(payload)
        commit('curHotlist',result.data.data)
      })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}