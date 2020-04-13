import React, {Fragment, useContext} from 'react'
import StockContext from '../../context/stock/stockContext'
import StockItem from './StockItem'




const Stocks = () => {
    
    const stockContext = useContext(StockContext)

    const { stocks, filtered } = stockContext

    if (stocks.length === 0) {
        return <h4>Please add a Stock</h4>
    }

    return (
        <Fragment>

            {filtered !== null ? filtered.map(stock => (<StockItem key={stock.id} stock={stock}/>)) : stocks.map(stock => {
                return <StockItem stock={stock} key={stock.id}/>
            })}

        </Fragment>
    )
}





export default Stocks