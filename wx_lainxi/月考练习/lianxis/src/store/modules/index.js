import {banner,totalList} from '@/api/index';

const state={
   bannerList:[],
   list:[]
}
const getters={

}
const mutations={
  updateState(state,payload){
     for(let key in payload){
        state[key]=payload[key]
     }
  }
}
const actions={
  getBannerList({commit},payload){
     return new Promise(async(resolve,reject)=>{
        let data =await banner(payload);
        commit('updateState',{
         bannerList:data.data.legaowei.template1.model2.avatarList
        })
     })
  },
  getTotalList({ commit,state }, payload ){
     return new Promise(async(resolve,reject)=>{
        let data= await totalList();
        console.log('total',data)
        commit('updateState',{
           list:data.data.recommends
        })
     })
  }
}
export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}

// import {banner} from '@/api/index.js';

// const state={
//    inpuVal:'',
//    list:[],
//    swiperlist:[]
// }
// const getters={

// }
// const mutations={
//    getData(state,payload){
//       //  console.log(payload,'paylo')
//        state.inpuVal=payload.data.searchContent;
//        state.list=payload.data.legaowei.template1.model3;
//        state.swiperlist=payload.data.legaowei.template1.model2.avatarList
//       //  console.log( state.swiperlist[1],state.swiperlist,'232ss')
//    }
// }
// const actions={
//  async bannses({commit},payload){
//      let bannerlist=await banner();
//     commit('getData',bannerlist)
// }

// //   banner({commit},payload){
// //     return new Prromise(async(resolve,reject)=>{
// //         let lis=await banner()
// //         resolve(lis.data.data.legaowei.template1)
// //     })
// //   }
// }
// export default {
//     namespaced:true,
//     state,
//     getters,
//     mutations,
//     actions
// }