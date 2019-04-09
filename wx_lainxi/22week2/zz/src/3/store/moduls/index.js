// // https://vuex.vuejs.org/zh-cn/intro.html
// // make sure to call Vue.use(Vuex) if using a module system
// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//     list: [
//         {
//             name:"name1",
//             text:"ssss",
//             id:'0'
//         },
//         {
//              name:"name2",
//              text:"ssss2",
//              id:'1'
//          },
//          {
//              name:"name3",
//              text:"ssss3",
//              id:'2'
//          },
//          {
//              name:"name4",
//              text:"ssss4",
//              id:'3'
//          }
//      ],
//   mutations: {
//     increment: (state) => {
//       const obj = state
//       obj.count += 1
//     },
//     decrement: (state) => {
//       const obj = state
//       obj.count -= 1
//     }
//   }
// })

// export default store
import Vue from 'vue'
import Vuex from 'vuex'
const state = {

}
const getters = {

}
const mutations = {

}
const actions = {

}
export default {
    // 命名空间
    namespace: true,
    state,
    getters,
    mutations,
    actions
}