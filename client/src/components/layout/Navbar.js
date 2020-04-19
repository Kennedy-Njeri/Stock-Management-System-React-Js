import React, {Fragment, useContext} from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import AuthContext from '../../context/auth/authContext'
import StockContext from '../../context/stock/stockContext'


const Navbar = ({icon, title}) => {

    const authContext = useContext(AuthContext)

    const stockContext = useContext(StockContext)


    const { isAuthenticated, logout, user } = authContext

    const { clearStocks } = stockContext

    const onLogout = () => {
        logout()
        clearStocks()
    }

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.name }</li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    )

    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon} /> {title}
            </h1>

            <ul>
                {isAuthenticated ? authLinks: guestLinks}
            </ul>

        </nav>
    )
}


Navbar.defaultProps = {
    title: 'Stock Management',
    icon: 'fas fa-truck-loading'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default Navbar