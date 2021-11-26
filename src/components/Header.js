import React from 'react'
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom"
import './Header.css'

const Header = ({cartItems}) => {

    return (
        <header>
            <Link to="/" className="links">
                <FaHome className="header-icons" />
            </Link>
            
            <Link to="/cart" className="links">
                <FaShoppingCart className="header-icons" />
                <span  className={`${cartItems.length ? 'shoping-card-num' : 'shoping-card-num-none' }`}>{cartItems.length}</span>
            </Link>
        </header>
    )
}

export default Header
