import request from '../utils/request.js'

// banner接口
export let banner = () => {
    return request.post('https://39916353.share1diantong.com/v1/home/index')
}

//首页接口
export let totalList = params => {
    return request.post('https://jbiz.share1diantong.com/as/index/cate/v1', {
        cateTag: '全部',
        fixedFlower: 1,
        isNew: 1,
        isLocal: 1,
        status: 1,
        bid: 0,
        orderBy: 0,
        pageSize: 20,
        pageNum: 1
    });
};

// 热门 搜索 接口
export let hotSearch = params => {
  return request.post('https://jbiz.share1diantong.com/fa053/search/recommendKw',params)
}

// 关键字 搜索 接口
export let keywordSearch = params =>{
    return request.post('https://jbiz.share1diantong.com/fa053/search/associateKw',params)
}

//搜索列表结果
export let listSearch = params => {
    return request.post('https://jbiz.share1diantong.com/fa053/topic/search/v1',params)
}
// host: https://jbiz.share1diantong.com 
    
// 1.首页接口（商品列表如果是全部的话）
// 接口地址：/as/index/cate/v1
// 接口类型：post
// 接口传递参数：
// { 
// 	"cateTag": "全部",   // 全部  || 品牌  || …
// 	"fixedFlower": 1,   //一口花  1 或者 0
// 	"isNew": 1,  //是否全新  1 或者 0
// 	"isLocal": 1,  // 是否同城   1或者0
// 	"status": 1,  
// 	"bid": 0,
// 	"orderBy": 0,
// 	"pageSize": 20,   // 页数
// 	"pageNum": 1   // 分页值
// }

//    2.banner接口
// 接口地址: https://39916353.share1diantong.com/v1/home/index
// 接口类型：post
// 3.热门搜索接口
// 接口地址： https://jbiz.share1diantong.com/fa053/search/recommendKw
// 类型：post
// 	4.搜索关键字接口
// 		接口地址：https://jbiz.share1diantong.com/fa053/search/associateKw
// 		类型；post
// 		参数：
// 		{
// 	"kw": "衣服"
// }
// 	5.搜索列表接口
// 		接口地址：https://jbiz.share1diantong.com/fa053/topic/search/v1
// 		类型：post
// 		参数：
// 		{
// 	"pageNum": 1,
// 	"kw": "衣服女",
// 	"pageSize": 10,
// 	"userId": 0
// }
// （二）题目要求：
// 1.根据图片完成页面开发
// 2.使用wepy作为开发框架
// 3.封装轮播组件，商品组件
// 4.新建首页，搜索页，搜索结果页
// 5.根据接口完成首页轮播的渲染，首页列表的渲染（不需要做导航切换数据）
// 6.完成首页上啦加载更多功能
// 7.点击搜索按钮跳转到搜索页面（根据接口渲染热门搜索）
// 8.在搜索输入框输入内容，出现下啦的匹配提示，根据接口进行请求
// 9.点击匹配关键子进入搜索结果页面，复用商品组件进行渲染
// （三）评分要求：
// 1.代码格式规范  10分
// 2.根据图片完成页面开发  10分
// 3.使用wepy作为开发框架  10分
// 4.封装轮播组件，商品组件  10分
// 5.新建首页，搜索页，搜索结果页  10分
// 6.根据接口完成首页轮播的渲染，首页列表的渲染（不需要做导航切换数据）  10分
// 7.完成首页上啦加载更多功能  10分
// 8.点击搜索按钮跳转到搜索页面（根据接口渲染热门搜索）  10分
// 9.在搜索输入框输入内容，出现下啦的匹配提示，根据接口进行请求  10分
// 10.点击匹配关键子进入搜索结果页面，复用商品组件进行渲染  10分