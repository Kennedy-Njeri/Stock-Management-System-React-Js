import { ADD_STOCK, DELETE_STOCK, SET_CURRENT, CLEAR_CURRENT, UPDATE_STOCK, FILTER_STOCKS, CLEAR_FILTER } from '../types'


export default (state, action) => {
    switch (action.type) {
        case ADD_STOCK:
            return {
                ...state,
                stocks: [...state.stocks, action.payload]
            }
        default:
            return state
    }
}