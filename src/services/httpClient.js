import axios from 'axios'

const url = 'https://api.tvmaze.com/'

export const http_get = (endpoint) => { 
    const request = `${url}${endpoint}`
    return axios.get(request)
}
