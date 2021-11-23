import React from 'react'
import './ShoppingCart.css'

const ShoppingCart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance, handleSingleCartClearance}) => {
    const totalPrice = cartItems.reduce (
        (price, item) => price + item.quantity * item.price , 0
    )
    const totalPriceFixed = totalPrice.toFixed(2)

    return (
        <section className="shopping-cart">

                {cartItems.map((cart, id) => {
                    return (
                        <div className="cart-item" key={id}>
                            <div className="cart-item-left">
                                <div className="shopping-image">
                                    <img src={cart.image} alt={cart.title} />
                                </div>
                                <h2>{cart.title}</h2>
                            </div>
                            <div className="cart-item-right">
                                <div className="plus-minus-price">
                                    <div className="plus-minus-btn">
                                        <button className="plus-btn" onClick={() => handleAddProduct(cart)}>+</button>
                                        <button className="minus-btn" onClick={() => handleRemoveProduct(cart)}>-</button>
                                    </div>
                                    <div className="shopping-cart-price">{cart.quantity} x ${cart.price} =<strong> ${cart.quantity*cart.price}</strong></div>
                                </div>
                                <button className="single-clear-btn" onClick={() => handleSingleCartClearance(cart)}>Clear Item</button>
                            </div>
                        </div>
                    )
                })}
            
            <div className={`${cartItems.length ? 'total' : 'total-none' }`}>
                <button className="clear-btn" onClick={handleCartClearance}>Clear Cart</button>
                <p>Total:<strong> ${totalPriceFixed}</strong></p>
            </div>

            <div className={`${cartItems.length ? 'total-none' : 'total empty-card' }`}>
                <h2>Shopping Cart is Empty</h2>
            </div>
        </section>
    )
}

export default ShoppingCart


