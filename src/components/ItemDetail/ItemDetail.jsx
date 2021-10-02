import './ItemDetail.css'
//components
import React from "react";
import ItemCount from '../ItemCount/ItemCount';
//external components
import Button from '@material-ui/core/Button';

//functional component

function ItemDetail({ title, price, stock, img, desc }) {
  return (
      <div>
        <div>
          <img src={`../assets/products/${img}`} alt={desc} />
        </div>
        <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <p><b>${price}</b></p>
        <p>Quedan {stock} unidades</p>
        <ItemCount initial={1} stock={stock} title={title} />
        </div>
      </div>
  );
}


export default ItemDetail;