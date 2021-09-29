import './Product.css';
//components
import React from "react";
import ItemCount from '../ItemCount/ItemCount';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

//functional component

function Producto({ title, price, stock, img, alt }) {
  return (
      <div className="card">
        <div className="card-header">
        <img src={`./assets/products/${img}`} alt={alt} />
        <ItemDetailContainer />
        </div>
        <div className="card-data scroll">
        <h3>{title}</h3>
          <p className='card-data scroll'><b>${price}</b></p>
          <ItemCount initial={0} stock={stock} title={title} />
        </div>
      </div>
  );
}


export default Producto;