import './ItemDetail.css'
//components
import React, { useContext, useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
//external components
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

//context 
import CartContext from '../../context/CartContext'


function ItemDetail({ id, item, title, price, stock, img, desc }) {

  const [count, setCount] = useState(0)

  const onAdd = () => {
    if (count >= stock) {
      setCount(count)
    } else {
      setCount(count + 1)
    }
  }
  const onLess = () => {
    if (count <= 0) {
      setCount(count)
    } else {
      setCount(count - 1)
    }
  }

  const { cart, setCart } = useContext(CartContext)

  const isInCart = () => {
    return cart && cart.some(element => element.id === id)
  }

  const addItem = () => {
    let cartElement = { cart, count }
    if (isInCart(id)) {
      console.log('Esta en el carrito')

      cartElement = cart.find(element => element.id === id)

      cartElement.count = cartElement.count + count

    } else {
      console.log('No esta en el carrito')
      setCart([...cart, { id: id, name: title, units: count, price: price, img: img }])
    }
  }


  return (
    <div>
      <div className="item-detail">
        <div className="item-detail-header">
          <div className="item-detail-carousel">
            <img src={`../assets/products/${img}`} alt={desc} />
            <img src={`../assets/products/${img}`} alt={desc} />
            <img src={`../assets/products/${img}`} alt={desc} />
            <img src={`../assets/products/${img}`} alt={desc} />
          </div>
          <div className='item-detail-header-img'>
            <img src={`../assets/products/${img}`} alt={desc} />
          </div>
        </div>
        <div className='item-detail-container'>
          <h3>{title}</h3>
          <p>{desc}</p>
          <p><b>${price}</b></p>
          <p>Quedan {stock} unidades</p>
          <ItemCount onAdd={onAdd} onLess={onLess} onAddToCart={addItem} item={item} count={count} title={title} />
          {/* <Button onClick={() => removeItem(item)}>Quitar del carrito</Button>
          <Button onClick={() => removeOneItem(item)}>Quitar 1</Button> */}
          <Link to='/'><Button color='inherit' variant="outlined">Volver</Button></Link>
        </div>
      </div>
      <div className="item-comment-section">
        <h3>Comentarios y reseñas</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rerum.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rerum.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rerum.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rerum.</p>
      </div>
    </div>
  );
}


export default ItemDetail;