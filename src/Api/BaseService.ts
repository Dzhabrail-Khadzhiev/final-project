import axios from "axios";
import Cookies from "js-cookie";
import { baseURL } from "./api";


export const baseService = axios.create({
    baseURL,
})


export const fillToken = (authorization:string) => {
    baseService.defaults.headers.common.Authorization = `Bearer ${authorization}`
    Cookies.set('token', authorization)
}

export const attachToken = (authorization:string) => {
    baseService.defaults.headers.common.Authorization = `Bearer ${authorization}`
}


export const logout = (): void => {
    Cookies.remove('user')
}

export const token = Cookies.get('user')

baseService.interceptors.response.use(
    (res) => { return res },
    (err) => {
        if (err.response.status === 401) {
           logout()
        } Promise.reject(err)
    }
)
