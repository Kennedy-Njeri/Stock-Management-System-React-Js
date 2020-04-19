import { ADD_STOCK, DELETE_STOCK, SET_CURRENT, CLEAR_CURRENT, UPDATE_STOCK, FILTER_STOCKS, CLEAR_FILTER, STOCK_ERROR } from '../types'


export default (state, action) => {
    switch (action.type) {
        case ADD_STOCK:
            return {
                ...state,
                stocks: [...state.stocks, action.payload]
            }
        case UPDATE_STOCK:
            return {
                ...state,
                stocks: state.stocks.map(stock => stock.id === action.payload.id ? action.payload : stock)
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
        case FILTER_STOCKS:
            return {
                ...state,
                filtered: state.stocks.filter(stock => {
                    const regex = new RegExp(`${action.payload}`, 'gi')
                    return stock.item.match(regex || stock.distributor.match(regex))
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
        case STOCK_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}