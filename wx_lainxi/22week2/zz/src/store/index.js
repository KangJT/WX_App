import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

// 挂载modules
import index from './moduls/index';

const store = new Vuex.Store({
  modules: {
    index
  },
  plugins:[createLogger()]
})

export default store