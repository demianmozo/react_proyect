import './CartIcon.css'

import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartIcon() {
    return (
        <div className='cart-buttonNav'>
            <Button variant='contained'>
                <FontAwesomeIcon icon={faShoppingCart} />
                <p>2</p>
            </Button>
        </div>
    )
}

export default CartIcon;