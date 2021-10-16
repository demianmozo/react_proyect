import './CartTotal.css'
import React, { useContext, useEffect, useState } from 'react'
import CartContext from "../../context/CartContext";

const CartTotal = () => {
    const { cart } = useContext(CartContext)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(handleTotalPrice())
    }, [cart])

    const handleTotalPriceByItem = () => {
        let newCartItems = cart

        return newCartItems.map(element => {
            return {
                ...element,
                price: element.item.price * element.count
            }
        })
    }

    const handleTotalPrice = () => {        
        const cartAux = handleTotalPriceByItem()

        const initialValue = 0
        return (
            cartAux &&
            cartAux.reduce(
                (accumulator, currentValue) => {
                    return accumulator + currentValue.price
                },
                initialValue
            )
        )
    }

    return (
        <div>
            <p>${totalPrice}</p>
            {console.log('total ', totalPrice)}
        </div>
    )
}

export default CartTotal;