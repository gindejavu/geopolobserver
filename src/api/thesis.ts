import request from '@/utils/request'

export const ThesisApi = () => {
    return request({
        url: '/paper/list',
        method: 'post',


    })
}
