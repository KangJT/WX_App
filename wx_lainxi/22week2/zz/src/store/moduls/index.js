import {getData} from '@/api/index'

const state = {
    list: [
                {
                    name:"name1",
                    text:"ssss",
                    id:'0'
                },
                {
                     name:"name2",
                     text:"ssss2",
                     id:'1'
                 },
                 {
                     name:"name3",
                     text:"ssss3",
                     id:'2'
                 },
                 {
                     name:"name4",
                     text:"ssss4",
                     id:'3'
                 }
         ],
         getlist:[]
}

const getters = {

}
const mutations = {
  idDetail:(state,payload)=>{ 
     console.log(state,payload,'pay')
  }
}
const actions = {
   async getDatalist(state,payload){
       console.log(state,payload,'545')
       return new Promise(async (resolve,reject)=>{
        let result = await getData(params);
        console.log(result);
        resolve()
       })
   }
}
export default {
    // 命名空间
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}