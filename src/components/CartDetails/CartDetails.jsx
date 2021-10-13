import React from 'react'

const CartDetails = ({ item, count }) => {

    return (
        <div>
            <p>{item.title} | {count}u. x ${item.price}</p>
        </div>
    )
}

export default CartDetails;