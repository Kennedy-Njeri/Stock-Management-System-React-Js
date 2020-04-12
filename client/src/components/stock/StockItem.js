import React from 'react'
import PropTypes from 'prop-types'





const StockItem = (props) => {
    
   const {item, unit, quantity, rate, total, distributor} = props.stock
    
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
                
                {distributor && (
                    <li>
                      <strong>Distributor:</strong> {distributor}
                    </li>
                )}

            </ul>
            <p>
                <button className='btn btn-dark btn-sm'>Edit</button>
                <button className='btn btn-danger btn-sm'>Delete</button>

            </p>
            
            
            
        </div>
    )
}

StockItem.propTypes = {
    stock: PropTypes.object.isRequired
}



export default StockItem