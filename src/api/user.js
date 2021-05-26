import request from "../utils/request"

export const testcash = data =>{
    return request({
        method:'POST',
        url:'/api/cash/test',
        data
    })
}