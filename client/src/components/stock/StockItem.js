import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import StockContext from '../../context/stock/stockContext'



const StockItem = (props) => {
    
    const stockContext = useContext(StockContext)

    const { _id, item, unit, quantity, rate, distributor, total} = props.stock

    const { deleteStock,  setCurrent, clearCurrent } = stockContext

    const onDelete = () => {
        deleteStock(_id)
       clearCurrent()
   }
    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {item} {' '} <span style={{ float: 'right'}} className={'badge ' + (unit === 'Set' ? 'badge-success' : 'badge-primary')}>
                {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </span>
            </h3>
            <ul className='list'>
               {quantity && (
                    <li>
                        <strong> Quantity </strong>: {quantity}
                    </li>
                )}
                {rate && (
                    <li>
                    <strong>Rate: </strong> {rate}
                    </li>
                )}

                {total && (
                    <li>
                        <strong>Total Cost: </strong> {total}
                    </li>
                )}

                {distributor && (
                    <li>
                      <strong>Distributor:</strong> {distributor}
                    </li>
                )}

            </ul>
            <p>
                <button className='btn btn-dark btn-sm' onClick={() => setCurrent(props.stock)}>Edit</button>
                <button className='btn btn-danger btn-sm' onClick={onDelete}>Delete</button>

            </p>
            
            
            
        </div>
    )
}

StockItem.propTypes = {
    stock: PropTypes.object.isRequired
}



export default StockItem