import request from '@/utils/request'

export const List = () => {
    return request({
        url: '/news/list',
        method: 'post',


    })
}
export const News = (data: any) => {
    return request({
        url: '/news/detail',
        method: 'post',
        data

    })
}