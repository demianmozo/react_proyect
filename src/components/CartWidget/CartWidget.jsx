import './CartWidget.css';
import React, { useContext, useState } from "react";

//components
import ItemCount from '../ItemCount/ItemCount';
import CartDetails from '../CartDetails/CartDetails';

//external components
import Button from '@material-ui/core/Button';

//context 
import CartContext from "../../context/CartContext";
import CartTotal from '../CartTotal/CartTotal';

const CartWidget = ({show, close}) => {
console.log(show)
  const { cart } = useContext(CartContext)
  return (
    <div className={`cart-widget ${show ? 'active' : ''}`}>
      <div className='cart-container'>
        <h2>🛒Carrito</h2>
        <b>Productos</b>
        {/* <b>Productos: {cart && cart.map(element => element.item.title)}</b> */}
        <div>
          {cart && cart.map(element => <CartDetails {...element} />)}
          {console.log(cart)}
        </div>
        <div>
          <CartTotal />
        </div>
        {/* <b>Total: ${cart && cart.map(element => element.item.price)}</b>
        {console.log('count es ', cart.map(element => element.item.count))} */}
      </div>
      <Button onClick={close}>Cerrar</Button>
    </div>
  )
}

export default CartWidget;