import './CartWidget.css';
import React, { useContext, useState } from "react";

//components
import CartDetails from '../CartDetails/CartDetails';
import CartTotal from '../CartTotal/CartTotal';

//external components
import Button from '@material-ui/core/Button';

//context 
import CartContext from "../../context/CartContext";
import { Link } from 'react-router-dom';

//firebase
import db from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

const CartWidget = ({show, close}) => {
  console.log(show)
  const { cart, setCart, totalPrice } = useContext(CartContext)

  const clear = () => {
    return setCart([])
  }

  const addOrder = () => {
    console.log('orden: ', newOrder)
    pushOrderFirebase(newOrder)
  }

  const pushOrderFirebase = async (newOrder) => {
    const orderFirebase = collection(db, 'orders');
    const order = await addDoc(orderFirebase, newOrder);
    console.log('order: ', order.id)
  }

  const newOrder = {
    buyer: {
      name: 'John',
      email: 'john@example.com',
      phone: '123-456-'
    },
    items: cart,
    total: totalPrice
  }

  return (
    <div className={`cart-widget ${show ? 'active' : ''}`}>
      <div className='cart-container'>
        <h2>🛒Carrito</h2>
        <b>Productos</b>
        <div>
          {cart && cart.map(element => <CartDetails {...element} />)}
          {console.log(cart)}
        </div>
        <div>
          <b>Total</b>
          <CartTotal />
        </div>
      </div>
      <div className='cart-btns'>
        <ul>
          <li><Button onClick={clear}>Vaciar</Button></li>
          <li><Link to='/cart'><Button onClick={addOrder}>Finalizar compra</Button></Link></li>
        </ul>
        <Button onClick={close}>Cerrar</Button>
      </div>
    </div>
  )
}

export default CartWidget;