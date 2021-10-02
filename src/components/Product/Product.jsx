import './Product.css';
import {Link} from 'react-router-dom'
//components
import React from "react";
import ItemCount from '../ItemCount/ItemCount';
//external components
import Button from '@material-ui/core/Button';

//functional component

function Producto({ title, price, stock, img, alt }) {
  return (
      <div className="card">
        <div className="card-header">
        <img src={`./assets/products/${img}`} alt={alt} />
        <Link to={`/item/${title}`}><Button>Ver más</Button></Link>
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