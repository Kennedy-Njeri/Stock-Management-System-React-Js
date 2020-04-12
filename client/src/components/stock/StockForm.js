import React, {useState, useContext} from 'react'
import StockContext from '../../context/stock/stockContext'

const StockForm = () => {

    const stockContext = useContext(StockContext)

    const [stock, setStock] = useState({
        item: '',
        unit: 'Set',
        quantity: 0,
        rate: 0,
        distributor: '',
    })

    const {item, unit, quantity, rate, distributor} = stock

    const onChange = (e) => {
        setStock({...stock, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        stockContext.addStock(stock)
        setStock({
            item: '',
            unit: 'Set',
            quantity: 0,
            rate: 0,
            distributor: '',
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="">Add Stock</h2>
            <input type='text' placeholder='Item' name='item' value={item} onChange={onChange}/>
            <input type='text' placeholder='Quantity' name='quantity' value={quantity} onChange={onChange}/>
            <input type='text' placeholder='Rate' name='rate' value={rate} onChange={onChange}/>
            <input type='text' placeholder='Distributor' name='distributor' value={distributor} onChange={onChange}/>
            <h5>Unit type</h5>
            <input type="radio" name="unit" value="Set" checked={unit === 'Set'} onChange={onChange}/> Set{' '}
            <input type="radio" name="unit" value="Other" checked={unit === 'Other'} onChange={onChange}/> Other{' '}
            <div>
                <input type="submit" value="Add stock" className="btn btn-primary btn-block"/>
            </div>

        </form>
    )
}


export default StockForm