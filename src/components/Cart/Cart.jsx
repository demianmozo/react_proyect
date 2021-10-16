import './Cart.css';
import { useState } from 'react';

//components
import CartWidget from '../CartWidget/CartWidget';

//external components
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Cart() {
    const [showCart, setShowCart] = useState(false);

    const handleCart = () => {
        !showCart ? setShowCart(true) : setShowCart(false);
    }

    return (
        <div className='cart-buttonNav'>
            <Button variant='contained' onClick={handleCart}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <p>2</p>
            </Button>
            <CartWidget show={showCart} close={handleCart}/>
        </div>
    )
}

export default Cart;