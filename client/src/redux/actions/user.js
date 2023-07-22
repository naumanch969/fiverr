import { start, error, end, registerReducer, loginReducer, logoutReducer } from "../reducers/user";
import * as api from '../api/index'
import Cookie from "js-cookie";
export const register = (userData, navigate) => async (dispatch) => {
    try {
        dispatch(start())

        await api.register(userData)
        dispatch(registerReducer())
        navigate('/auth/login')

        dispatch(end())
    } catch (err) {
        dispatch(error(err.response.data))
    }
}

export const login = (userData, navigate) => async (dispatch) => {
    try {
        dispatch(start())

        const { data } = await api.login(userData)
        Cookie.set('profile', JSON.stringify(data.result))
        dispatch(loginReducer(data.result))
        navigate('/')

        dispatch(end())
    } catch (err) {
        dispatch(error(err))
    }
}

export const logout = (navigate) => async (dispatch) => {
    try {
        dispatch(start())

        await api.logout()
        Cookie.remove('profile')
        dispatch(logoutReducer())
        navigate('/')

        dispatch(end())
    } catch (err) {
        dispatch(error(err))
    }
}