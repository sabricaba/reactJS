import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Badge from '@mui/material/Badge';

const CarWidget = () => {
    return (
        <div className="carrito">
            <Badge badgeContent={3} color='secondary' variant='dot'>
                <ShoppingBagIcon />
            </Badge>
        </div>
    )
}

export default CarWidget;