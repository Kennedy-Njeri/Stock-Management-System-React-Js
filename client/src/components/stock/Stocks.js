import React, {Fragment, useContext} from 'react'
import StockContext from '../../context/stock/stockContext'
import StockItem from './StockItem'




const Stocks = () => {
    
    const stockContext = useContext(StockContext)

    const { stocks } = stockContext


    return (
        <Fragment>
            {stocks.map(stock => {
                return <StockItem stock={stock} key={stock.id}/>
            })}

        </Fragment>
    )
}





export default Stocks