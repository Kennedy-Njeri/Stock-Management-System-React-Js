import React, {useReducer} from 'react'
import AuthContext from './authContext'
import authReducer from './authReducer'
import setAuthToken from '../../utils/setAuthToken'
import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from '../types'


const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null,
        user: null
    }

    // state allows us to access anything on our state, dispatch, dispatches objects to our reducer
    const [state, dispatch] = useReducer(authReducer, initialState)

    // load user
    const loadUser = async () => {
        // load token into global headers
        if (localStorage.token) {
            setAuthToken(localStorage.token)
        }

        try {
            const res = await axios.get('/users/me')
            dispatch({ type: USER_LOADED, payload: res.data })
        } catch (e) {
            dispatch({ type: AUTH_ERROR })
        }

    }


    // register user
    const register = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        try {
            const res = await axios.post('/users', formData, config)
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })

            await loadUser()

        } catch (error) {
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data.msg
            })
        }
        
    }

    // login user
    const login = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/users/login', formData, config)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })

            await loadUser()

        } catch (error) {
            dispatch({
                type: LOGIN_FAIL,
                payload: error.response.data.msg
            })
        }

    }

    // logout
    const logout = () => {
        dispatch({ type: LOGOUT })
    }


    // clear errors
    const clearErrors = () => {
        dispatch({
            type: CLEAR_ERRORS
        })
    }


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                error: state.error,
                user: state.user,
                register, loadUser, login, logout, clearErrors
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )

}


export default AuthState