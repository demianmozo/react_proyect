import './CartWidgetContainer.css';
import { useContext, useState } from 'react';

//components
import CartWidget from '../CartWidget/CartWidget';

//external components
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../context/CartContext';

function CartWidgetContainer() {

    const { cart } = useContext(CartContext)

    const [showCart, setShowCart] = useState(false);

    const handleCart = () => {
        !showCart ? setShowCart(true) : setShowCart(false);
    }

    return (
        <div className='cart-buttonNav'>
            <Button variant='contained' onClick={handleCart}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <p>{cart.count}</p>
            </Button>
            <CartWidget show={showCart} close={handleCart}/>
        </div>
    )
}

export default CartWidgetContainer;