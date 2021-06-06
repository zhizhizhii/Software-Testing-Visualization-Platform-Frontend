import request from "../utils/request"

export const testsales = data =>{
    return request({
        method:'POST',
        url:'/api/sales/test',
        data
    })
}