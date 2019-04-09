// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'
import search from './modules/search'
import createrLogger from 'vuex/dist/logger'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
     index,
     search
   },
  plugins: [ createrLogger () ]
})

export default store
