import request from "../utils/request"

export const testtriangle = data =>{
    return request({
        method:'POST',
        url:'/api/triangle/test',
        data
    })
}