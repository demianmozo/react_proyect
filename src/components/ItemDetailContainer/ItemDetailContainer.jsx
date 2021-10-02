import React, { useState, useEffect } from "react";
import './ItemDetailContainer.css'
//components
import ItemDetail from "../ItemDetail/ItemDetail";
//external components

function ItemDetailContainer() {
    const [Items, setItems] = useState([])

    const getItems = new Promise((resolve) => {
        setTimeout(() => {
            const mockItems = [
                {
                    id: '1',
                    title: 'Tarta frutilla',
                    price: 800,
                    description: 'deliciosa tarta de frutilla, con crema batida y dulce de leche',
                    img: 'TartaFrutilla.jpeg',
                    stock: 10
                }
            ]
            resolve(mockItems)
        }, 2000)
    })

    useEffect(() => {
        getItems.then((res) => {
            setItems(res)
        })
    }, [])
    
    return (
        <div>
            {Items.map((Items) => {
                return (<ItemDetail key={Items.id} title={Items.title} price={Items.price} stock={Items.stock} img={Items.img} description={Items.description} />)
            })
            }
        </div>
        )
}

export default ItemDetailContainer;

