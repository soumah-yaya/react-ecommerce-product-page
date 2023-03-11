import React, { useState } from 'react'
import { BsCart } from 'react-icons/bs';

import { useProductDetail } from '../../../hooks/useProductDetail';

// style
import './product-description.css'

export default function ProductDescription() {
    const {product} = useProductDetail();

    return (
        <div className="details">
            <div className="product-brand"><p>{product.brand}</p></div>
            <div className="product-title">
                <h1>{product.title}</h1>
            </div>
            <div className="description">
                <p>{product?.description}</p>
            </div>
            <div className="product-price">
                <p className="current-price">${product.price} <span>{product.promo}%</span></p>
                <p className="previous-price">${product.previous_price} </p>
            </div>
            <DescriptionButtons />
        </div>
    )
}

// description buttons
const DescriptionButtons = () => {
    const [orderQuantity, setOrderQuantity] = useState(0);
    return (
        <div className="buttons">
            <IncDecButton orderQuantity={orderQuantity} setOrderQuantity={setOrderQuantity} />
            <AddToCartButton orderQuantity={orderQuantity} setOrderQuantity={setOrderQuantity} />
        </div>
    )
}

// inc dec buttons

const IncDecButton = ({ orderQuantity, setOrderQuantity }: { orderQuantity: number, setOrderQuantity: React.Dispatch<React.SetStateAction<number>> }) => {
    
    const {product}=useProductDetail()
    const handleIncrement = () => {
        if (orderQuantity >= product.stock_quantity) {
            return
        }
        setOrderQuantity(v => v + 1);

    }
    const handleDecrement = () => {
        if (orderQuantity === 0){
            return
        }
        setOrderQuantity(v => v - 1);

    }

    return (
        <div className="inc-button">
            <button onClick={handleDecrement} className='sign minus'></button>
            <span className='quantity'>{orderQuantity}</span>
            <button onClick={handleIncrement} className='sign plus'></button>
        </div>
    )
}

// inc dec buttons
const AddToCartButton = ({ orderQuantity, setOrderQuantity }: { orderQuantity: number, setOrderQuantity: React.Dispatch<React.SetStateAction<number>> }) => {
    const {product,setProduct} = useProductDetail()
    const handleAddToCart =()=>{
        setProduct({ ...product, cart_quantity: orderQuantity })
    }
    return (
        <div className="add-to-cart-button">
            <button onClick={handleAddToCart}> <BsCart className='add-to-cart-button-icon' /><span>Add to cart</span></button>
        </div>
    )
}