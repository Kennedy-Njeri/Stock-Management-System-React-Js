import React, {useReducer} from 'react'
//import {v4 as uuid} from 'uuid'
import StockContext from './stockContext'
import stockReducer from './stockReducer'
import axios from 'axios'
import { ADD_STOCK, DELETE_STOCK, SET_CURRENT, CLEAR_CURRENT, UPDATE_STOCK, FILTER_STOCKS, CLEAR_FILTER, STOCK_ERROR, GET_STOCKS, CLEAR_STOCKS } from '../types'


const StockState = props => {
    const initialState = {
        stocks: null,
        current: null,
        filtered: null,
        error: null,
    }

    // state allows us to access anything on our state, dispatch, dispatches objects to our reducer
    const [state, dispatch] = useReducer(stockReducer, initialState)

    // get stocks
    const getStocks = async () => {

        try {

            const res = await axios.get('/stocks')

            dispatch({ type: GET_STOCKS, payload: res.data })

        } catch (e) {

            dispatch({ type: STOCK_ERROR, payload: e.response.msg })

        }

        //stock.id = uuid.v4

    }

    // Add Stock
    const addStock = async stock => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        try {

            const res = await axios.post('/stocks', stock, config)

            dispatch({ type: ADD_STOCK, payload: res.data })

        } catch (e) {

            dispatch({ type: STOCK_ERROR, payload: e.response.msg })

        }
        
        //stock.id = uuid.v4

    }

    // Delete Stock
    const deleteStock = async id => {

        try {

            await axios.delete(`/stocks/${id}`)

            dispatch({ type: DELETE_STOCK, payload: id})

        } catch (e) {

            dispatch({ type: STOCK_ERROR, payload: e.response.msg })

        }

    }

 

    const updateStock =  async stock => {

        const config = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                '_method': 'PATCH',
              
            }
        }

        try {

            const res = await axios.patch(`/stocks/${stock._id}`, stock, config)
            console.log(stock._id)

            dispatch({ type: UPDATE_STOCK, payload: res.data })

        } catch (e) {

            dispatch({ type: STOCK_ERROR, payload: e })

        }

    }


    // clear stocks
    const clearStocks = () => {
        dispatch({ type: CLEAR_STOCKS })
    }


    // Set current Stock
    const setCurrent = (stock) => {
        dispatch({ type: SET_CURRENT, payload: stock })
    }

    // Clear current Stock
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }


    // Filter Stocks
    const filterStocks = (text) => {
        dispatch({ type: FILTER_STOCKS, payload: text })
    }

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }

    return (
        <StockContext.Provider
        value={{
            stocks: state.stocks,
            current: state.current,
            filtered: state.filtered,
            error: state.error,

            addStock, deleteStock, setCurrent, clearCurrent, updateStock, filterStocks, clearFilter, getStocks, clearStocks
        }}
        >
            {props.children}
        </StockContext.Provider>
    )

}


export default StockState