
import request from '@/utils/request'

export let getData=params=>{
    return request.post('http://baojia.chelun.com/v2-car-getMasterBrandList.html',params)
}

