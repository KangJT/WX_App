const state={
  list:['sss']
}
const getters={

}

const action={

}
const mutations={
  getData(){
    wx.request({
      url: 'http://baojia.chelun.com/v2-car-getMasterBrandList.html', // 仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        list=res.data.data;
      }
    })
  }
}
const actions={

}
export default {
    namespace:true,
    state,
    getters,
    mutations,
    actions
}