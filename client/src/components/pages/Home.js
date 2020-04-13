import React from 'react'
import Stocks from '../stock/Stocks'
import StockForm from '../stock/StockForm'
import StockFilter from '../stock/StockFilter'



const Home = () => {
    return (
        <div className="grid-2">
            <div>
                <StockForm/>
            </div>
            <div>
                <StockFilter/>
                <Stocks/>
            </div>
        </div>
    )
}



export default Home