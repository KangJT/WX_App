import request from '@/utils/request'

export let getData = () => {
    return request.get('http://baojia.chelun.com/v2-car-getMasterBrandList.html')
}