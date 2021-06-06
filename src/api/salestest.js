import request from "../utils/request"

export const testsale = data =>{
    return request({
        method:'POST',
        url:'/api/sales/test',
        data
    })
}