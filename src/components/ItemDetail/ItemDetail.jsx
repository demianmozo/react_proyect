import './ItemDetail.css'
//components
import React from "react";
import ItemCount from '../ItemCount/ItemCount';
//external components
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

//functional component

function ItemDetail({ title, price, stock, img, desc }) {
  return (
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
          <ItemCount initial={1} stock={stock} title={title} />
          <Link to={'/'}><Button color='inherit' variant="outlined">Volver</Button></Link>
        </div>
      </div>
  );
}


export default ItemDetail;