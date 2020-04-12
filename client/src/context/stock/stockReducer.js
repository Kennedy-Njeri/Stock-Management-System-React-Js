import { ADD_STOCK, DELETE_STOCK, SET_CURRENT, CLEAR_CURRENT, UPDATE_STOCK, FILTER_STOCKS, CLEAR_FILTER } from '../types'


export default (state, action) => {
    switch (action.type) {
        case ADD_STOCK:
            return {
                ...state,
                stocks: [...state.stocks, action.payload]
            }
        case DELETE_STOCK:
            return {
                ...state,
                // return all contacts that are not the current id in the payload
                stocks: state.stocks.filter(stock => stock.id !== action.payload)
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        default:
            return state
    }
}