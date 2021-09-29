import React, { useState, useEffect } from "react";
import './ItemDetailContainer.css'
//components
import ItemDetail from "../ItemDetail/ItemDetail";
//external components
import Button from '@mui/material/Button';

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
                },
                {
                    id: '2',
                    title: 'Brownie',
                    price: 600,
                    description: 'brownie denso y humedo',
                    img: 'Brownie.jpeg',
                    stock: 8
                },
                {
                    id: '3',
                    title: 'Lemon pie',
                    price: 800,
                    description: 'Hecho con limones organicos',
                    img: 'lemonPie.jpeg',
                    stock: 5
                },
                {
                    id: '4',
                    title: 'Tarta de Frutos Rojos',
                    price: 800,
                    description: 'Una deliciosa tarta con base de masa sableé de chocolate, dulce de leche y frutos rojos',
                    img: 'TartadeFR.jpeg',
                    stock: 13
                },
                {
                    id: '5',
                    title: 'Cake Pops',
                    price: 1100,
                    description: 'Con relleno de bizcochuelo y DDL, no podes perdertelos',
                    img: 'cakepops.jpeg',
                    stock: 5
                },
                {
                    id: '6',
                    title: 'Budín de mandarina',
                    price: 400,
                    description: 'Sabroso budin de mandarina con un dulce glaseado',
                    img: 'budin.jpeg',
                    stock: 10
                },
                {
                    id: '7',
                    title: 'Corazones de chocolate rellenos',
                    price: 800,
                    description: 'Caja de 3 corazones de chocolate marmolados, rellenos con DDL o Nuttela',
                    img: 'corazones.jpeg',
                    stock: 4
                },
                {
                    id: '8',
                    title: 'Box Fairy',
                    price: 1000,
                    description: 'Contiene 2 cakepops, 1 torta oreo mediana, 1 shot de oreotorta, jugo de naranja, corazones rellenos y una porcion grande de brownie',
                    img: 'Boxfairy.jpeg',
                    stock: 10
                },
                {
                    id: '9',
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
    
    const Details = () => {
        Items.map((Items) => {
                return (<ItemDetail key={Items.id} title={Items.title} price={Items.price} stock={Items.stock} img={Items.img} description={Items.description} />)
            })
    }
    
    return (
        <div className="container">
            <Button onClick={Details} variant="outlined">Ver mas</Button>
        </div>
        )
}

export default ItemDetailContainer;

