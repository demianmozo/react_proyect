import './Product.css';
//components
import React from "react";
import ProductImg from '../../assets/TartaFrutilla.jpeg';
import ItemCount from '../ItemCount/ItemCount'
//external components
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//functional component

function Producto({title, price}) {
  return (
    <div className="container-producto">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="brownie"
        image={ProductImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h3>{title}</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p className='container-producto-text'><b>${price}</b></p>
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount stock='5' initial='0' />
      </CardActions>
    </Card>
    </div>
  );
}


export default Producto;