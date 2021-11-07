import React, { useState, useEffect } from "react";
//components
import { useParams } from "react-router";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import Producto from "../components/Product/Product";
//external components
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
//firebase
import db from '../../firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore'



function CategoryPage() {
    const { catId } = useParams()

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
                result.find(element => element.category === catId)
            ))
    }, [])

    return (
        <>
            <CategoryFilter />
                {result.length !== 0 ? (
                    <div className="container">
                        {result.map((result) => {
                            return (<Producto item={result} key={result.id} title={result.title} price={result.price} stock={result.stock} img={result.img} alt={result.description} />)
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

export default CategoryPage;