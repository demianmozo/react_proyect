import './CartDetails.css'
import { Button } from '@material-ui/core';
import React, { useContext } from 'react'
import CartContext from "../../context/CartContext";

const CartDetails = ({ item, count }) => {
    const { cart, setCart} = useContext(CartContext)
    
    const isInCart = (item) => {
        return cart && cart.some(element => element.item.id === item.id)
    }

    const removeItem = (item) => {
        if (isInCart(item)) {
            const cartElements = cart.filter(element => element.item.id !== item.id) || []
            setCart([...cartElements])
        }
    }

    return (
        <div className='cart-details-container' key={item.id}>
            <div className='cart-details-img'>
                <img src={`../assets/products/${item.img}`}/>
            </div>
            <div className='cart-details-data'>
                <p>{item.title} | {count}u. x ${item.price}</p>
            </div>
            <div className='cart-details-btns'>
                <Button onClick={() => removeItem(item)}>X</Button>
            </div>
        </div>
    )
}

export default CartDetails;