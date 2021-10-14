import React, { useContext } from 'react'
import CartContext from "../../context/CartContext";

const CartDetails = ({ item, count }) => {
    const { cart } = useContext(CartContext)
    return (
        <div>
            <p>{item.title} | {count}u. x ${item.price}</p>
        </div>
    )
}

export default CartDetails;