import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext({});

const CartContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

    const [total, setTotal] = useState (0)

    const [price, setPrice] = useState (0)

    useEffect(() => {
        setTotal(handleTotal())
        setPrice(handleTotalPrice())
    }, [cartItems])

    const addItem = (item, count) => {
        let cartElement = { item, count }
        console.log(`cartElement`, cartElement)
        let cartAux = []

        if (isInCart(item)) {
            console.log('Esta en el carrito')

            cartElement = cartItems.find(element => element.item.id === item.id)

            cartElement.count = cartElement.count + count

            cartAux = [...cartItems]
        } else {
            console.log('Esta en el carrito')

            cartAux = [cartElement, ...cartItems]
        }
        setCartItems(cartAux)
    }

    const removeItem = (item) => {
        if (isInCart(item)) {
            const cartElements = cartItems.filter(element => element.item.id !== item.id) || []
            setCartItems([...cartElements])
        }
    }

    const clear = () => {
        return setCartItems([])
    }

    const isInCart = (item) => {
        return cartItems && cartItems.some(element => element.item.id === item.id)
    }

    return (
       <></>
    )
}

export { CartContextProvider }
export default CartContext;