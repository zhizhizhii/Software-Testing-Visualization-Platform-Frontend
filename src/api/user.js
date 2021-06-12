import request from "../utils/request"

export const login = data => {
    return request({
        method: 'POST',
        url: '/api/cash/test',
        data
    })
}