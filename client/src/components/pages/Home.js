import React, {useContext, useEffect} from 'react'
import Stocks from '../stock/Stocks'
import StockForm from '../stock/StockForm'
import StockFilter from '../stock/StockFilter'
import AuthContext from '../../context/auth/authContext'



const Home = () => {

    const authContext = useContext(AuthContext)

    useEffect(() => {
        authContext.loadUser()
        // eslint-disable-next-line 
    }, [])

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