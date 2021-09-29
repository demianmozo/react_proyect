import './ItemDetail.css'
//components
import React from "react";

//functional component

function ItemDetail({ title, price, stock, img, desc }) {
  return (
      <div className="container">
        <div className="container-header">
        <img src={`./assets/products/${img}`} alt={desc} />
        </div>
        <div className="container-data">
        <h3>{title}</h3>
        <p>{desc}</p>
        <p><b>${price}</b></p>
        </div>
      </div>
  );
}


export default ItemDetail;