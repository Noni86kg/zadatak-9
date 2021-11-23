import React from 'react'
import './Carts.css'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom"

const Carts = ({data, handleAddProduct, handleDetails}) => {
    return (
        <>
        {data.map((cart, id) => (
            <div key={id} className="cart">
                <Link to={`/details/:${cart.id}`} className="image" onClick={handleDetails}>
                    <img src={cart.image} alt={cart.title} />
                </Link>
                <div>
                    <h3>{cart.title}</h3>
                    <p>${cart.price}</p>
                    <button onClick={() => handleAddProduct(cart)}>ADD TO CART <span className="cart-icon"> <FaShoppingCart /> </span></button>
                </div>
            </div>
        ))}
    </>
    )
}

export default Carts
