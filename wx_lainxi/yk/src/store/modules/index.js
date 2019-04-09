
const state = {
    personNum:1,
    requireData:[
        {
            mess:'*姓名'
        },
        {
            mess:'*性别'
        }
    ],
    person:[
        {
            img:'/static/images/user.png',
            name:'马好好',
            date:'2019-04-01',
            time:'13:45'
        }
    ]
}

const mutations = {
   requireList(state,payload){
    
    state.requireData = [...state.requireData,payload]
   },
   personList(state,payload){
    state.person = [...state.person,payload]
   }
}

const actions = {

}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}