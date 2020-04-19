import { ADD_STOCK, DELETE_STOCK, SET_CURRENT, CLEAR_CURRENT, UPDATE_STOCK, FILTER_STOCKS, CLEAR_FILTER, STOCK_ERROR, GET_STOCKS, CLEAR_STOCKS } from '../types'


export default (state, action) => {
    switch (action.type) {
        case GET_STOCKS:
            return {
                ...state,
                stocks: action.payload,
                loading: false
            }
        case ADD_STOCK:
            return {
                ...state,
                stocks: [...state.stocks, action.payload],
                loading: false
            }
        case UPDATE_STOCK:
            return {
                ...state,
                stocks: state.stocks.map(stock => stock.id === action.payload.id ? action.payload : stock),
                loading: false
            }
        case DELETE_STOCK:
            return {
                ...state,
                // return all contacts that are not the current id in the payload
                stocks: state.stocks.filter(stock => stock.id !== action.payload),
                loading: false
            }
        case CLEAR_STOCKS:
            return {
                ...state,
                stocks: null,
                filtered: null,
                error: null,
                current: null
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