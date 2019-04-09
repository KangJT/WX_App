import request from '@/utils/request'

//swiper轮播
export let getBanner = () => {
    return request.post('https://39916353.share1diantong.com/v1/home/index')
}

//首页tab
export let getDefaultList = params => {
    return request.post('https://jbiz.share1diantong.com/as/index/cate/v1',params)
}

//搜索页
export let getSearchKeyList = params => {
    return request.post('https://jbiz.share1diantong.com/fa053/search/associateKw',params)
}

//搜索列表
export let getSearchList = params => {
    return request.post('https://jbiz.share1diantong.com/fa053/topic/search/v1',params)
}

//热门搜索
export let getHotList = () => {
    return request.post('https://jbiz.share1diantong.com/fa053/search/recommendKw')
}