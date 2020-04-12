import React, {useReducer} from 'react'
import {v4 as uuid} from 'uuid'
import StockContext from './stockContext'
import stockReducer from './stockReducer'
import { ADD_STOCK, DELETE_STOCK, SET_CURRENT, CLEAR_CURRENT, UPDATE_STOCK, FILTER_STOCKS, CLEAR_FILTER } from '../types'


const StockState = props => {
    const initialState = {
        stocks: [
            {
                id: 1,
                item:'Mac Book',
                unit: 'Set',
                quantity: 20,
                rate: 1000,
                total: 20000,
                distributor: 'Roy Ltd'
            },
            {
                id: 2,
                item:'Mac Book Air',
                unit: 'Other',
                quantity: 30,
                rate: 1000,
                total: 30000,
                distributor: 'Empire Ltd'
            },
            {
                id: 3,
                item:'Mac Destktop',
                unit: 'Set',
                quantity: 5,
                rate: 10000,
                total: 50000,
                distributor: 'Trans Ltd'
            },

        ]
    }

    // state allows us to access anything on our state, dispatch, dispatches objects to our reducer
    const [state, dispatch] = useReducer(stockReducer, initialState)

    // Add Stock
    const addStock = stock => {
        stock.id = uuid.v4
        dispatch({ type: ADD_STOCK, payload: stock})
    }

    // Delete Stock

    // Set current Stock

    // Clear current Stock

    // Update Stocks

    // Filter Stocks

    // Clear Stocks

    return (
        <StockContext.Provider
        value={{
            stocks: state.stocks,
            addStock
        }}
        >
            {props.children}
        </StockContext.Provider>
    )

}


export default StockState