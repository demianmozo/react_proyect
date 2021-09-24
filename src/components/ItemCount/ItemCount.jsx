import React, { useState } from "react";
//external components
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function ItemCount({ stock, initial }) {
    const [count, setCount] = useState(0)
    
    const add = () => {
        if (count >= stock) {
        setCount(count)
        } else {
        setCount(count + 1)
        }
    }
    const substract = () => {
        if (count <= initial) {
        setCount(count)
        } else {
        setCount(count - 1)
        }
    }
    
    return (
        <div>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={substract}>-</Button>
            <Typography variant="body2" color="text.secondary">
             <p><b>{count}</b></p>
            </Typography>
            <Button onClick={add}>+</Button>
            </ButtonGroup>
            <Button variant="outlined">Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount;