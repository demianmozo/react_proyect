import './CartWidgetContainer.css';
import { useContext, useEffect, useState } from 'react';

//components
import CartWidget from '../CartWidget/CartWidget';

//external components
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../context/CartContext';

function CartWidgetContainer() {

    const { cart, totalCount, setTotalCount } = useContext(CartContext)

    useEffect(() => {
        setTotalCount(handleTotalCount())
    }, [cart])

    const handleTotalCount = () => {
        const initialValue = 0
        return (
            cart &&
            cart.reduce(
                (accumulator, currentValue) => {
                    return accumulator + currentValue.count
                },
                initialValue
            )
        )
    }

    const [showCart, setShowCart] = useState(false);

    const handleCart = () => {
        !showCart ? setShowCart(true) : setShowCart(false);
    }

    return (
        <div className='cart-buttonNav'>
            <Button variant='contained' onClick={handleCart}>
                <FontAwesomeIcon icon={faShoppingCart} />
                {totalCount > 0 && <span className='cart-count'>{totalCount}</span>}
            </Button>
            <CartWidget show={showCart} close={handleCart}/>
        </div>
    )
}

export default CartWidgetContainer;