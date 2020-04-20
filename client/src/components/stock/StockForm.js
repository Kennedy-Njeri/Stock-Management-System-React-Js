import React, {useState, useContext, useEffect} from 'react'
import StockContext from '../../context/stock/stockContext'

const StockForm = () => {

    const stockContext = useContext(StockContext)
    
    const { addStock, current, clearCurrent, updateStock} = stockContext
    
    useEffect(() => {
        if (current !== null) {
            setStock(current)
        } else {
            setStock({
                item: '',
                unit: 'Set',
                quantity: '',
                rate: '',
                distributor: '',
            })
        }
    }, [stockContext, current])

    const [stock, setStock] = useState({
        item: '',
        unit: 'Set',
        quantity: '',
        rate: '',
        distributor: '',
    })

    const {item, unit, quantity, rate, distributor} = stock

    const onChange = (e) => {
        setStock({...stock, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (current === null) {
            addStock(stock)
        } else {
            updateStock(stock)
        }
        clearAll()

    }

    const clearAll = () => {
        clearCurrent()
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="">{current ? 'Update Stock': 'Add Stock'}</h2>
            <input type='text' placeholder='Item' name='item' value={item} onChange={onChange}/>
            <input type='text' placeholder='Quantity' name='quantity' value={quantity} onChange={onChange}/>
            <input type='text' placeholder='Rate' name='rate' value={rate} onChange={onChange}/>
            <input type='text' placeholder='Distributor' name='distributor' value={distributor} onChange={onChange}/>
            <h5>Unit type</h5>
            <input type="radio" name="unit" value="Set" checked={unit === 'Set'} onChange={onChange}/> Set {' '}
            <input type="radio" name="unit" value="Other" checked={unit === 'Other'} onChange={onChange}/>{'   '}  Other{' '}
            <div>
                <input type="submit" value={current ? 'Update Stock': 'Add Stock'} className="btn btn-primary btn-block"/>
            </div>
            {current && (
                <div>
                    <button className='btn btn-light btn-block' onClick={clearAll}>Clear</button>
                </div>
            )}

        </form>
    )
}


export default StockForm