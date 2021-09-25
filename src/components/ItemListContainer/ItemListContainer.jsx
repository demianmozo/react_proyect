import React, { useState, useEffect } from "react";
//components
import Producto from "../Product/Product";

function ItemListContainer() {
    const [products, setProduct] = useState([])

    const getProducts = new Promise((resolve) => {
        setTimeout(() => {
            const mockProducts = [
                {
                    id: '1',
                    title: 'Tarta frutilla',
                    price: 800,
                    description: 'deliciosa tarta de frutilla, con crema batida y dulce de leche',
                    stock: 10
                },
                {
                    id: '2',
                    title: 'Brownie',
                    price: 600,
                    description: 'brownie denso y humedo',
                    stock: 8
                },
                {
                    id: '3',
                    title: 'Lemon pie',
                    price: 800,
                    description: 'Hecho con limones organicos',
                    stock: 5
                },
                {
                    id: '4',
                    title: 'Tarta valeria',
                    price: 800,
                    description: 'deliciosa tarta de dulce de leche cubierta con chocolate',
                    stock: 13
                },
                {
                    id: '5',
                    title: 'Muffins de limon y amapola',
                    price: 1100,
                    description: 'docena de muffins livianos con textura esponjosa y baño de limon',
                    stock: 5
                },
                {
                    id: '6',
                    title: 'Budín de mandarina',
                    price: 400,
                    description: 'Sabroso budin de mandarina con un dulce glaseado',
                    stock: 10
                },
                {
                    id: '7',
                    title: 'Budín de banana y dulce de leche',
                    price: 800,
                    description: 'Budin de textura humeda y relleno de dulce de leche',
                    stock: 4
                },
                {
                    id: '8',
                    title: 'Tarta de coco',
                    price: 1000,
                    description: 'Tarta de masa suave, rellena de dulce de leche y cubierta de coco rallado',
                    stock: 10
                }
            ]
            resolve(mockProducts)
        }, 2000)
    })

    useEffect(() => {
        getProducts.then((res) => {
            setProduct(res)
        })
    },[])
    
    return (
        <div>
            {products.map((product) => {
                return (<Producto key={product.id} title={product.title} price={product.price} stock={product.stock} />)
                })
            }
        </div>
        )
}

export default ItemListContainer;
