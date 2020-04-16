import React, {useReducer} from 'react'
import AlertContext from './alertContext'
import {v4 as uuid} from 'uuid'
import alertReducer from './alertReducer'
import { SET_ALERT, REMOVE_ALERT } from '../types'


const AlertState = props => {
    const initialState = []

    // state allows us to access anything on our state, dispatch, dispatches objects to our reducer
    const [state, dispatch] = useReducer(alertReducer, initialState)

    // Set Alert

    const setAlert = (msg, type, timeout= 5000) => {
        const id = uuid.v4
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id}
        })

        // alert disappears after 5 seconds
        setTimeout(() => {
            dispatch({ type: REMOVE_ALERT, payload: id})
        }, timeout)

    }




    return (
        <AlertContext.Provider
            value={{
                alerts: state, setAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )

}


export default AlertState