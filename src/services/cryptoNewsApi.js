import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '8887a86e3cmshdf8099d89e8cd58p1fcf9ejsn8c4fc4b8bbe7'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'


const createRequest = (url) => ({
    url,
    headers:cryptoNewsHeaders
})

export const cryptoNewsApi = createApi({
    reducerPath:"cryptoNewsApi",
    baseQuery:fetchBaseQuery({baseUrl:baseUrl}),
    endpoints:(builder) => ({
        getCryptoNews:builder.query({
            query : ({newsCategory , count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })


})

export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi