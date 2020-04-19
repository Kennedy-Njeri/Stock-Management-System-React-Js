import React, {Fragment, useContext} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import StockContext from '../../context/stock/stockContext'
import StockItem from './StockItem'





const Stocks = () => {
    
    const stockContext = useContext(StockContext)

    const { stocks, filtered } = stockContext

    if (stocks.length === 0) {
        return <h4>Please add a Stock</h4>
    }

    return (
        <TransitionGroup>
        <Fragment>

            {filtered !== null ? filtered.map(stock => (
                <CSSTransition key={stock.id} timeout={500} classNames="item">
                    <StockItem  stock={stock}/>
                </CSSTransition>
                    )) : stocks.map(stock => (
                <CSSTransition key={stock.id} timeout={500} classNames="item">
                <StockItem stock={stock}/>
                </CSSTransition>
                ))}

        </Fragment>
        </TransitionGroup>
    )
}





export default Stocks