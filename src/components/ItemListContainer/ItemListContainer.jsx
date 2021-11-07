import React, { useState, useEffect } from "react";
//components
import Producto from "../Product/Product";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import './ItemListContainer.css'
//external components
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
//firebase
import db from '../../firebase'
import {getFirestore, collection, getDocs} from 'firebase/firestore'


function ItemListContainer() {

    const [products, setProducts] = useState([])
    
    async function getProducts(db) {
        const productsCol = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCol);
        const productsList = productsSnapshot.docs.map(doc => doc.data())
        setProducts(productsList)
        return productsList;
    }

    useEffect(() => {
        getProducts(db)
    }, [])
    
    
    return (
        <>
            {products.length !== 0 ? (
                <div className="container">
                    {products.map((product) => {
                        return (<Producto item={ product } key={product.id} title={product.title} price={product.price} stock={product.stock} img={product.img} alt={product.description} />)
                    })}
                </div>
            ) : (
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
        )}
        </>
        )
}

export default ItemListContainer;

