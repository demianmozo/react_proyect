import './Cart.css';
import React, { useContext, useState } from "react";

//components
import ItemCount from '../ItemCount/ItemCount';
import CartDetails from '../CartDetails/CartDetails';

//external components
import Button from '@material-ui/core/Button';

//context 
import CartContext from '../../context/CartContext'

const Cart = () => {
    const { cartItems, total, price, clear, handleTotalPriceByItem } = useContext(CartContext)
    return (
        <div className='cart'>
            <div className='cart-container'>
                <h2>🛒Carrito</h2>
                <b>Productos: {total}</b>
                <b>Total: ${price}</b>
            </div>
            <div>
                <Button onClick={clear}>Limpiar Carrito</Button>
                <Button onClick={handleTotalPriceByItem}>Total Carrito</Button>
            </div>
            <div>
                {cartItems.map(element => <CartDetails {...element} />)}
            </div>
        </div>
    )
}

export default Cart;