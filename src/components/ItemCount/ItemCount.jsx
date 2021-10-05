import React, { useState } from "react";
//external components
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";


function ItemCount({ onAdd, onLess, count, title}) {
    
    const addToCart = () => {
        if (count > 0) {
        console.log('Agregaste ', title, 'al carrito')
    }
}
    
    return (
        <div>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={onLess}>-</Button>
            <Typography variant="body2" color="text.secondary">
             <p><b>{count}</b></p>
            </Typography>
            <Button onClick={onAdd}>+</Button>
            </ButtonGroup>
            <Link to={'/cart'}><Button onClick={addToCart} variant="outlined">Agregar al carrito</Button></Link>
        </div>
    )
}

export default ItemCount;