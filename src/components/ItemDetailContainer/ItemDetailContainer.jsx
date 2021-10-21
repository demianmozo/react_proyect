import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './ItemDetailContainer.css'
//components
import ItemDetail from "../ItemDetail/ItemDetail";
//external components
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
//firebase
import db from '../../firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

function ItemDetailContainer() {
    const { itemTitle } = useParams()

    const [result, setResult] = useState([])

    async function getResult(db) {
        const productsCol = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCol);
        const productsList = productsSnapshot.docs.map(doc => doc.data())
        setResult(productsList)
        return productsList;
    }

    useEffect(() => {
        getResult(db).then(result =>
            setResult(
                result.find(element => element.title === itemTitle)
            ))
    }, [])

    return (
        <>
            {result.length !== 0 ? (
                <div className='detail-container'>
                    <div>
                    <p><Link to='/'>Home</Link> {">"} <Link to='/'>Productos</Link> {">"} {itemTitle}</p>
                    < ItemDetail item={result} id={result.id} title={result.title} price={result.price} img={result.img} stock={result.stock} desc={result.description} />
                    </div>
                </div>
            ) : (
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            )
                }
        </>
        )
}

export default ItemDetailContainer;
