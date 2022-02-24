import { CartContext } from './CartContext';
import { useContext } from 'react';

const Cart = () => {

    const test = useContext (CartContext);

    return(
        <>
            <h2>Hola! Estos son los productos que estará llevando el dia del hoy</h2>
            <button onClick={test.clear}>Borrar carrito</button>
            {test.cartList.map(item => (
                <div>
                    <img src={item.imagen}></img>
                    <p>Nombre: {item.nombre} </p>
                    <p>Precio: {item.precio} c/uno</p>
                    <p>Cantidad: {item.qty}</p>
                    <button onClick={() => test.removeItem(item.id)}>Eliminar producto</button>
                </div>
            ))}
        </>
    );
};

export default Cart;