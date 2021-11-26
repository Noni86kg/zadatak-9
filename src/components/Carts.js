import React from 'react'
import './Carts.css'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom"

const Carts = ({data, handleAddProduct, handleDetails, cartItems}) => {
    let styleBtn;
    let styleText;
    return (
        <>
        {data.map((cart, id) => {
            if(cartItems.find((item) => item.id === cart.id)) {
                styleBtn = 'display-none'
                styleText= 'details-text'
            } else {
                styleBtn = 'cart-btn'
                styleText = 'display-none'
            }

            return (
            <div key={id} className="cart">
                <Link to={`/details/:${cart.id}`} className="image" onClick={handleDetails}>
                    <img src={cart.image} alt={cart.title} />
                </Link>
                <div>
                    <h3>{cart.title}</h3>
                    <p>${cart.price}</p>
                    <button className={styleBtn} onClick={() => handleAddProduct(cart)}>ADD TO CART <span className="cart-icon"> <FaShoppingCart /> </span></button>

                    <div className={styleText}> <h3>{cart.title} is already in your cart</h3> </div>
                </div>
            </div>
            )
        })}
    </>
    )
}

export default Carts
