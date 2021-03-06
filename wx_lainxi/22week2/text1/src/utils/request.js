import Fly from 'flyio/dist/npm/wx'

export let fly = new Fly()

fly.interceptors.request.use(
    (request) => {
        return request
    }
)

fly.interceptors.response.use(
    (response) => {
        if (response.request.url.indexOf(HOST) == 0) {
            let hcks = response.headers['set-cookie'] || response.headers['Set-Cookie']
            if (hcks != null) {
                hcks.forEach(v => {
                    let ck = v.split(';')[0].split('=')
                    cookies[ck[0]] = ck[1]
                })
            }
        }
        // 只将请求结果的data字段返回
        return response.data
    }
)

export default fly