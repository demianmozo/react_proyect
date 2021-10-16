import './CartWidget.css';
import React, { useContext, useState } from "react";

//components
import ItemCount from '../ItemCount/ItemCount';
import CartDetails from '../CartDetails/CartDetails';

//external components
import Button from '@material-ui/core/Button';

//context 
import CartContext from "../../context/CartContext";

const CartWidget = ({show, close, count}) => {
console.log(show)
  const { cart } = useContext(CartContext)
  return (
    <div className={`cart-widget ${show ? 'active' : ''}`}>
      <div className='cart-container'>
        <h2>🛒Carrito</h2>
        <b>Productos: {cart && cart.map(element => element.item.title)}</b>
        <b>Total: ${Number(cart && cart.map(element => element.item.price)) * count}</b>
        {console.log('count es ', count)}
      </div>
      <div>
        {/* <Button onClick={clear}>Limpiar Carrito</Button>
        <Button onClick={handleTotalPriceByItem}>Total Carrito</Button> */}
      </div>
      <div>
        {cart && cart.map(element => <CartDetails {...element } />)}
        {console.log(cart)}
      </div>
      <Button onClick={close}>Cerrar</Button>
    </div>
  )
}

export default CartWidget;