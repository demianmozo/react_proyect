import './Product.css';
import {Link} from 'react-router-dom'
//components
import React, { useContext, useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
//external components
import Button from '@material-ui/core/Button';

//context 
import CartContext from '../../context/CartContext'

//functional component

function Producto({item, title, price, stock, img, alt }) {
  const [count, setCount] = useState(0)

  const onAdd = () => {
    if (count >= stock) {
      setCount(count)
    } else {
      setCount(count + 1)
    }
  }
  const onLess = () => {
    if (count <= 1) {
      setCount(count)
    } else {
      setCount(count - 1)
    }
  }

  const { cart, setCart } = useContext(CartContext)

  const isInCart = (item) => {
    return cart && cart.some(element => element.item.id === item.id)
  }

  const addItem = (item, count) => {
    let cartElement = { item, count }
    console.log('cartelement', cartElement)

    let cartAux = []

    if (isInCart(item)) {
      console.log('Esta en el carrito')

      cartElement = cart.find(element => element.item.id === item.id)
      console.log('cartelement2', cartElement)
      cartElement.count = cartElement.count + count

      cartAux = [...cart]
    } else {
      console.log('No esta en el carrito')
      cartAux = [cartElement, ...cart]
    }
    setCart(cartAux)
  }



  return (
      <div className="card">
        <div className="card-header">
        <img src={`./assets/products/${img}`} alt={alt} />
        <Link to={`/item/${title}`}><Button>Ver más</Button></Link>
        </div>
        <div className="card-data scroll">
        <h3>{title}</h3>
          <p className='card-data scroll'><b>${price}</b></p>
        <ItemCount onAdd={onAdd} onLess={onLess} onAddToCart={() => addItem(item, count)} count={count} title={title} />
        </div>
      </div>
  );
}


export default Producto;