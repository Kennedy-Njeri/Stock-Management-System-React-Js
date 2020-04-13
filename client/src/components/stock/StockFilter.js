import React, {useContext, useRef, useEffect} from 'react'
import StockContext from '../../context/stock/stockContext'


const StockFilter = () => {

    const stockContext = useContext(StockContext)

    const {filterStocks, clearFilter, filtered } = stockContext

    const text = useRef('')

    // if filtered == null, the value is empty
    useEffect(() => {
        if (filtered === null) {
            text.current.value = ''
        }
    })

    const onChange = e => {
        if (text.current.value !== '') {
            filterStocks(e.target.value)
        } else {
            clearFilter()
        }
    }

    return (
        <form>
            <input ref={text} type="text" placeholder="Filter Stocks....." onChange={onChange}/>
        </form>
    )
}




export default StockFilter