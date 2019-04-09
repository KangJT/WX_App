import {getData} from '@/api/index'
const state = {
    
}
const mutations = {

}
const actions = {
    async getdata () {
        return new Promise(async (resolve, reject) => {
            let date = await getData()
            console.log(1)
            resolve(date)
        })
    }
} 
export default {
    namespaced: true,
    state,
    actions,
    mutations
}