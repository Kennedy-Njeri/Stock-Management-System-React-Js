import React, {useReducer} from 'react'
import AuthContext from './authContext'
import authReducer from './authReducer'
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
    const loadUser = () => {
        console.log("loadUser")
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
        } catch (error) {
            dispatch({
                type: REGISTER_FAIL,
                payload: error
            })
        }
        
    }

    // login user
    const login = () => {
        console.log("login")
    }

    // logout
    const logout = () => {
        console.log("logout")
    }


    // clear errors
    const clearErrors = () => {
        console.log("clear errors")
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