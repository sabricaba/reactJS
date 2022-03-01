import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CarWidget = () => {

    const test = useContext(CartContext);

    return (
        <div className="carrito">
            <Badge badgeContent={test.cartList.length} color='secondary' variant='standard'>
                <ShoppingBagIcon />
            </Badge>
        </div>
    )
}

export default CarWidget;