import React, {Fragment, useContext, useEffect} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import StockContext from '../../context/stock/stockContext'
import StockItem from './StockItem'
import Spinner from '../layout/Spinner'





const Stocks = () => {
    
    const stockContext = useContext(StockContext)

    const { stocks, filtered, getStocks, loading } = stockContext
    
    useEffect(() => {
        getStocks()
        // eslint-disable-next-line
    }, [])

    if (stocks !== null && stocks.length === 0 && !loading) {
        return <h4>Please add a Stock</h4>
    }

    return (

        <Fragment>
            {stocks !== null && !loading ? (
                <TransitionGroup>
                {filtered !== null ? filtered.map(stock => (
                    <CSSTransition key={stock._id} timeout={500} classNames="item">
                        <StockItem  stock={stock} key={stock._id}/>
                    </CSSTransition>
                )) : stocks.map(stock => (
                    <CSSTransition key={stock._id} timeout={500} classNames="item">
                        <StockItem stock={stock} key={stock._id}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>) : <Spinner/>}

        </Fragment>

    )
}





export default Stocks