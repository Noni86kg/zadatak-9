import React from 'react'
import './Details.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useParams } from 'react-router-dom'

const Details = ({filteredData, details, handleAddProduct, cartItems}) => {
    let styleBtn
    let styleText
    const { id } = useParams()
    if (details) {

        let idFixed = id.slice(1, id.length)
        if (cartItems) {
            if (cartItems.find((item) => item.id === +idFixed)) {
                styleBtn = 'display-none'
                styleText='details-text'
            } else {
                styleBtn='details-btn'
                styleText='display-none'
            }
        } else {
            styleBtn='details-btn'
            styleText='display-none'
        }
        const singleItem = filteredData.find((item) => item.id === +idFixed)
        const {title, image, description, price, rating} = singleItem

        return (
            <section className="details-page">
                <div className="details-image">
                    <img src={image} alt={title} />
                </div>
                <div className="name">
                    <h2>{title}</h2>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="price-rating">
                    <div>
                        <p><strong>${price}</strong></p>
                    </div>
                    <div>
                        <p>Rating: {rating.rate} </p>
                    </div>
                </div>
                
                <button className={styleBtn} onClick={()=> handleAddProduct(singleItem)}>ADD TO CART <span className="cart-icon"> <FaShoppingCart /> </span></button>
                <div className={styleText}> <h3>{title} is already in your cart</h3> </div>
            </section>
        )
            
    } else {
        return (
            <div> </div>
        )
    }
}

export default Details
