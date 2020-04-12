import React from 'react'
import Stocks from '../stock/Stocks'
import StockForm from '../stock/StockForm'



const Home = () => {
    return (
        <div className="grid-2">
            <div>
                <StockForm/>
            </div>
            <div>
                <Stocks/>
            </div>
        </div>
    )
}



export default Home