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
  const { addItem } = useContext(CartContext)

  const handleOnAdd = count => addItem(item, count)

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


  return (
      <div className="card">
        <div className="card-header">
        <img src={`./assets/products/${img}`} alt={alt} />
        <Link to={`/item/${title}`}><Button>Ver más</Button></Link>
        </div>
        <div className="card-data scroll">
        <h3>{title}</h3>
          <p className='card-data scroll'><b>${price}</b></p>
        <ItemCount onAdd={onAdd} onLess={onLess} onAddToCart={handleOnAdd} count={count} title={title} />
        </div>
      </div>
  );
}


export default Producto;