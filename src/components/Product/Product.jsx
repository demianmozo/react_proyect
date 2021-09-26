import './Product.css';
//components
import React from "react";
import ItemCount from '../ItemCount/ItemCount';

//functional component

function Producto({ title, price, stock, img, alt }) {
  return (
    <div className="container-producto">
      <div>
        <img src={`./assets/products/${img}`} alt={alt}/>
      </div>
      <h3>{title}</h3>
      <p className='container-producto-text'><b>${price}</b></p>
      <ItemCount initial={0} stock={stock} title={title} />
    </div>
  );
}


export default Producto;