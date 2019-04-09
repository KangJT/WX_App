const state = {
    list: [],
    current:{//默认值
      address:"北京八维研究学院",
      phone:"18811300938",
      address:"",
      description:"" //备注信息
    }
  };
  

  
  // 同步改变
  const mutations = {
    updateState(state, payload){
      state.current={...state.current,...payload}
      console.log('state...', state, payload);
    }
  };
  
  const actions = {
    submit(state, payload){
      console.log('payload...', payload);
      return new Promise((resolve, reject)=>{
        setTimeout(function(){
          resolve();
        }, 5000);
      })
    }
  }
  
  export default {
    // 命名空间
    namespaced: true,
    state,
    actions,
    mutations,

  }
  