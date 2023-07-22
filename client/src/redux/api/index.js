import axios from 'axios'
import { baseURL } from '../../constant.js'
import Cookie from 'js-cookie'

const API = axios.create({ baseURL, withCredentials: true })

API.interceptors.request.use((req) => {
    const profile = Cookie.get('profile')
    if (profile) {
        const user = JSON.parse(profile)
        req.headers.authtoken = user.token
    }
    return req
})



export const register = (userData) => API.post('/auth/register', userData)
export const login = (userData) => API.put('/auth/login', userData)
export const logout = () => API.post('/auth/logout')