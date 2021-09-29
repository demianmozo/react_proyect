import './Product.css';
//components
import React from "react";
import ItemCount from '../ItemCount/ItemCount';
import Button from '@mui/material/Button';

//functional component

function Producto({ title, price, stock, img, alt }) {
  return (
      <div className="card">
        <div className="card-header">
        <img src={`./assets/products/${img}`} alt={alt} />
        <Button variant="outlined">Ver más</Button>
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